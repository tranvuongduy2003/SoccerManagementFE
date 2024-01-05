import { useEffect, useState } from 'react';

//chakra-ui
import {
  Box,
  Text,
  Flex,
  Button,
  Divider,
  Center,
  Icon
} from '@chakra-ui/react';

//icons
import { MdAdd } from 'react-icons/md';
import { FaFileImport } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';

//interface
import { IPlayer, InitPlayer } from '@/interfaces';

//form
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm
} from 'react-hook-form';
import { FileInput, InputControl, SelectControl } from '@/components/form';

//image
import avatarDefault from '@/public/images/team/playerDefault.png';
import uniform from '@/public/images/common/shirt.svg';
import { v4 } from 'uuid';

// const Player = () => {};

interface MemberFormProps {
  member: any;
  handleDeleteForm: () => void;
  // handleSaveItem: () => void;
  updateMember: (member: IPlayer) => void;
}

const MemberForm = (props: MemberFormProps) => {
  const { updateMember, member, handleDeleteForm } = props;

  const methods = useForm({ defaultValues: member, mode: 'onBlur' });

  const { reset } = methods;

  const [file, setImageUrl] = useState('');

  console.log(member);

  const handleChange = () => {
    updateMember(methods.getValues());
    
  };

  useEffect(() => {
    reset()
  }, []);

  return (
    <FormProvider {...methods}>
      <form onChange={handleChange}>
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
            <FileInput
              round="2px"
              width={100}
              label="Avatar"
              color="black"
              name="avatar"
              setImageUrl={setImageUrl}
              localImageUrl={avatarDefault}
              setError={() => {}}
              onChange={e => {}}
              setLocalImageUrl={uniform}
            />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            flexGrow={2}
          >
            <InputControl
              type="text"
              name="number"
              label={null}
              placeholder="Number"
              color="black"
            />
            <SelectControl
              color="black"
              name="position"
              label={null}
              selectProps={{ placeholder: 'Position' }}
            >
              <option value="Goalkeeper">Goalkeeper</option>
              <option value="Midfielder">Midfielder</option>
              <option value="Striker">Striker</option>
            </SelectControl>
            <InputControl
              type="text"
              name="height"
              label={null}
              placeholder="Height"
              color="black"
            />
            <InputControl
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
              type="text"
              name="name"
              label={null}
              placeholder="Name"
              color="black"
            />
            <SelectControl
              color="black"
              name="captain"
              label={null}
              selectProps={{ placeholder: 'Captain' }}
            >
              <option value="Captain">Captain</option>
              <option value="No Captain">No Captain</option>
            </SelectControl>
            <InputControl
              type="datetime-local"
              name="dob"
              placeholder="Birthday"
              label={null}
              color="black"
            />
            <InputControl
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

const MemberTeam = () => {
  const [membersForm, setMembersForm] = useState<IPlayer[]>([]);
  const [players, setPlayers] = useState<IPlayer[]>([]);

  const addNewMember = () => {
    setMembersForm([{ ...InitPlayer, _id: v4() }, ...membersForm]);
  };

  const updateMember = (memberUpdate: IPlayer) => {
    const newUsers = membersForm.map(member => {
      return member._id === memberUpdate._id ? memberUpdate : member;
    });
    setMembersForm(newUsers);
  };

  const removeMember = (id: string) => {
    const newUsers = membersForm.filter(member => member._id !== id);
    console.log(newUsers);
    setMembersForm(newUsers);
  };

  const handleSave = () => {
    console.log(membersForm);
  };

  return (
    <Box>
      <Text>There are {players.length} players.</Text>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        bgColor="#f3f3f3"
        p={2}
      >
        <Button
          display="flex"
          gap={2}
          bgColor="#9ADE7B"
          _hover={{ bgColor: '#65B741' }}
          textColor="#FFF"
          onClick={addNewMember}
        >
          <Flex alignItems="center" gap={2}></Flex>
          <MdAdd />
          Add player
        </Button>

        <Button
          display="flex"
          gap={2}
          bgColor="#C499F3"
          _hover={{ bgColor: '#7360DF' }}
          textColor="#FFF"
        >
          <FaFileImport />
          Import file
        </Button>
      </Flex>
      <Divider my={4} />
      <Flex flexDirection="column" gap={4}>
        {membersForm.map((member, index) => (
          <MemberForm
            // handleSaveItem={() => {}}
            updateMember={updateMember}
            member={member}
            key={index}
            handleDeleteForm={() => removeMember(member._id!)}
          />
        ))}
      </Flex>
      {membersForm.length ? (
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
      {/* </form> */}
    </Box>
  );
};

export default MemberTeam;
