/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

//chakra-ui
import {
  Box,
  Text,
  Flex,
  Button,
  Divider,
  Center,
  Icon,
  Input,
  Image,
  Avatar
} from '@chakra-ui/react';

import Player from './Player';

//icons
import { MdAdd } from 'react-icons/md';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { FaFileImport } from 'react-icons/fa';
import { GrFormNextLink } from 'react-icons/gr';


//interface
import { IPlayer, InitPlayer, InitStatisticalPLayer } from '@/interfaces';

//form
import { FormProvider, useForm } from 'react-hook-form';
import { InputControl, SelectControl } from '@/components/form';

//image
import { CldUploadWidget } from 'next-cloudinary';

//react-query
import { useMutation } from '@tanstack/react-query';
import { createPlayer, createStatisticalPlayer } from '@/apis';
import { useQueryClient } from '@tanstack/react-query';
import Team from '@/pages/league/[id]/team/[tags]';

interface MembersFormProps {
  member: any;
  handleDeleteForm: (e: any) => void;
  membersForm: any;
  index: number;
}

const MembersForm = (props: MembersFormProps) => {
  const { membersForm, member, index, handleDeleteForm } = props;
  const [avatar, setAvatar] = useState<string>('');

  const memberForm = useForm({
    defaultValues: member,
    mode: 'onChange'
  });

  useEffect(() => {
    membersForm.setValue(`members.${index}.name`, memberForm.watch().name);
    membersForm.setValue(`members.${index}.number`, memberForm.watch().number);
    membersForm.setValue(
      `members.${index}.position`,
      memberForm.watch().position
    );
    membersForm.setValue(
      `members.${index}.captain`,
      memberForm.watch().captain
    );
    membersForm.setValue(`members.${index}.height`, memberForm.watch().height);
    membersForm.setValue(`members.${index}.dob`, memberForm.watch().dob);
    membersForm.setValue(`members.${index}.weight`, memberForm.watch().weight);
    membersForm.setValue(
      `members.${index}.national`,
      memberForm.watch().national
    );
  }, [
    memberForm.watch().name,
    memberForm.watch().number,
    memberForm.watch().position,
    memberForm.watch().captain,
    memberForm.watch().height,
    memberForm.watch().dob,
    memberForm.watch().weight,
    memberForm.watch().national
  ]);

  // useEffect(() => {
  //   console.log('vao day')
  //   memberForm.reset(member);
  // }, []);
  return (
    <FormProvider {...memberForm}>
      <form>
        <Flex
          position="relative"
          alignItems="center"
          justifyContent="space-around"
          border="2px #75C2F6 solid"
          p={4}
          gap={4}
          rounded={2}
        >
          <Center
            position="absolute"
            right={0}
            top={0}
            _hover={{ cursor: 'pointer' }}
            onClick={handleDeleteForm}
          >
            <Icon as={IoMdCloseCircleOutline} fontSize="xl" />
          </Center>

          <Flex flexGrow={2}>
            <CldUploadWidget
              uploadPreset="soccer_upload"
              options={{
                folder: 'samples',
                sources: ['local', 'url', 'google_drive'],
                multiple: false,
                styles: {}
              }}
              onSuccess={(result: any) => {
                setAvatar(result.info.secure_url);
              }}
              onError={error => {
                console.log(error);
              }}
            >
              {({ open }) => {
                return (
                  <div className="h-80 w-full md:h-3/5 flex flex-col items-center">
                    <h2 className="font-semibold text-black">Avatar</h2>
                    <div className="relative mt-2 h-[90%] rounded bg-gray-200">
                      <button
                        className="relative h-full w-full"
                        onClick={e => {
                          e.preventDefault();
                          open();
                        }}
                      >
                        <Image
                          src={
                            memberForm.getValues().avatar
                              ? memberForm.getValues().avatar
                              : '/images/team/playerDefault.png'
                          }
                          objectFit="cover"
                          alt="Default Cover Image"
                          className="rounded h-[100px] w-[100px]"
                        />
                      </button>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            flexGrow={2}
          >
            <InputControl
              // control={memberForm.control}
              type="text"
              name="number"
              label={null}
              placeholder="Number"
              color="black"
              defaultValue={member.number}
            />
            <SelectControl
              control={memberForm.control}
              color="black"
              name="position"
              label={null}
              selectProps={{ placeholder: 'Position' }}
            >
              <option value="Goalkeeper">Goalkeeper</option>
              <option value="Defender">Defender</option>
              <option value="Midfielder">Midfielder</option>
              <option value="Striker">Striker</option>
            </SelectControl>
            <InputControl
              control={memberForm.control}
              type="text"
              name="height"
              label={null}
              placeholder="Height"
              color="black"
            />
            <InputControl
              control={memberForm.control}
              type="text"
              name="weight"
              label={null}
              placeholder="Weight"
              color="black"
            />
          </Flex>
          <Flex
            flexGrow={2}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <InputControl
              control={memberForm.control}
              type="text"
              name="name"
              label={null}
              placeholder="Name"
              color="black"
            />
            <SelectControl
              control={memberForm.control}
              color="black"
              name="captain"
              label={null}
              selectProps={{ placeholder: 'Captain' }}
            >
              <option value="Captain">Captain</option>
              <option value="No Captain">No Captain</option>
            </SelectControl>
            <InputControl
              control={memberForm.control}
              type="date"
              name="dob"
              placeholder="Birthday"
              label={null}
              color="black"
            />
            <InputControl
              control={memberForm.control}
              type="text"
              name="national"
              label={null}
              placeholder="Nation"
              color="black"
            />
          </Flex>
        </Flex>
      </form>
    </FormProvider>
  );
};


interface MemberTeamProps {
  players: IPlayer[];
  idTeam: string;
}
const MemberTeam = (props: MemberTeamProps) => {
  const queryClient = useQueryClient();
  const { players, idTeam } = props;

  const membersForm: any = useForm<any>({
    defaultValues: {
      members: []
    },
    mode: 'onChange'
  });

  const handleCreateStatisticalPlayer = useMutation({
    mutationFn: createStatisticalPlayer,
    onSuccess: data => {
      queryClient.invalidateQueries();
      // console.log(data);
    },
    onError: e => {
      console.log(e);
    }
  });

  const handleCreatePlayer = useMutation({
    mutationFn: createPlayer,
    onSuccess: data => {

      queryClient.invalidateQueries();
      membersForm.setValue('members', []);
      const statisticalPlayers = data.map(player => {
        return { ...InitStatisticalPLayer, player: player._id, team: idTeam };
      });
      handleCreateStatisticalPlayer.mutate(statisticalPlayers)
    },
    onError: e => {
      console.log(e);
    }
  });

  const handleIncreaseQuantity = () => {
    const members = membersForm.watch().members;
    members.push(InitPlayer);
    membersForm.setValue('members', members);
  };

  const handleDecreaseQuantity = (index: number) => {
    const members = membersForm.watch().members;
    const newMembers = members.filter(
      (item: any, idx: number) => idx !== index
    );
    membersForm.setValue('members', newMembers);
  };

  const handleSave = () => {
    const formData: any = membersForm.watch().members;
    handleCreatePlayer.mutate({ players: formData, idTeam });
  };

  const handleFileUpload = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();

    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = e => {
      const data = e?.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parseData: any = XLSX.utils.sheet_to_json(sheet);

      const newData: any = parseData.map((data: any, index: number) => {
        const date = new Date((parseData[index].dob - 25569) * 86400 * 1000);
        const dateString = date.toISOString().split('T')[0];
        return {
          ...data,
          dob: dateString
        };
      });
      let members = membersForm.watch().members;
      members = newData;
      membersForm.setValue('members', members);
    };
  };

  return (
    <Box>
      <Text>There are {membersForm.watch().members.length} players.</Text>
      <FormProvider {...membersForm}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          bgColor="#f3f3f3"
          p={2}
          position="relative"
        >
          <Button
            display="flex"
            gap={2}
            bgColor="#9ADE7B"
            _hover={{ bgColor: '#65B741' }}
            textColor="#FFF"
            onClick={e => {
              e.preventDefault();
              handleIncreaseQuantity();
            }}
          >
            <Flex alignItems="center" gap={2}></Flex>
            <MdAdd />
            Add player
          </Button>

          <Box position="relative" right={0} top={-5}>
            <Input
              as={Input}
              type="file"
              accept=".xlsx, .xls"
              w="150px"
              h="40px"
              bgColor="red"
              // _hover={{ bgColor: '#7360DF', cursor: 'default', opacity: 1 }}
              textColor="#FFF"
              onChange={e => handleFileUpload(e)}
              aria-label="import file"
              position={'absolute'}
              right={0}
              rounded={'xl'}
              opacity={0}
              zIndex={1}
            />
            <label className="flex w-[150px] h-[40px] right-0 items-center justify-center gap-2 absolute top-0 bg-[#C499F3] hover:bg-[#7360DF] font-bold text-white hover:cursor-pointer rounded-xl">
              <FaFileImport />
              Import File
            </label>
          </Box>
        </Flex>
        <Divider my={4} />
        <Flex flexDirection="column" gap={4}>
          {membersForm.watch().members.map((member: any, index: number) => (
            <MembersForm
              membersForm={membersForm}
              handleDeleteForm={e => {
                e.preventDefault();
                handleDecreaseQuantity(index);
              }}
              member={member}
              key={member}
              index={index}
            />
          ))}
        </Flex>
        {membersForm.watch().members.length ? (
          <Flex justifyContent="flex-end">
            <Button
              bgColor="#C499F3"
              _hover={{ bgColor: '#7360DF' }}
              textColor="#FFF"
              mt={4}
              right={0}
              onClick={handleSave}
            >
              Save
            </Button>
          </Flex>
        ) : (
          <Box />
        )}
      </FormProvider>
      <Flex flexWrap="wrap" gap={20}>
        {players &&
          players.map((player, index) => (
            <Player player={player} key={index} idTeam={idTeam} />
          ))}
      </Flex>
    </Box>
  );
};

export default MemberTeam;
