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
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  FormErrorMessage
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

interface MembersFormProps {
  handleDeleteForm: () => void;
  membersForm: any;
  index: number;
}

const MembersForm = (props: MembersFormProps) => {
  const { membersForm, index, handleDeleteForm } = props;

  const memberForm = useForm({
    defaultValues: membersForm.watch().members[index],
    mode: 'onChange'
  });

  // useEffect(() => {
  //   if (index === 0) {
  //     memberForm.setValue(`members.${index}.name`, memberForm.watch().name);
  //   }
  // }, []);

  useEffect(() => {
    // ticketsForm.setValue(
    //   `tickets.${index}.fullname`,
    //   ticketForm.watch().fullname
    // );
    // ticketsForm.setValue(`tickets.${index}.email`, ticketForm.watch().email);
    // ticketsForm.setValue(`tickets.${index}.phone`, ticketForm.watch().phone);
    membersForm.setValue(`members.${index}.name`, memberForm.watch().name);
    membersForm.setValue(`members.${index}.weight`, memberForm.watch().weight);

    console.log('haha');
  }, [membersForm.watch().members.length]);

  const [file, setImageUrl] = useState('');

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
  const membersForm = useForm<any>({
    defaultValues: {
      members: []
    },
    mode: 'onChange'
  });

  const handleIncreaseQuantity = () => {
    const members = membersForm.watch().members;
    members.push(InitPlayer);
    membersForm.setValue('members', members);
  };

  const handleDecreaseQuantity = () => {
    const members = membersForm.watch().members;
    members.pop();
    membersForm.setValue('members', members);
  };

  const handleSave = () => {
    console.log(membersForm.getValues());
  };

  const handleFileUpload = (e: any) => {
    const reader = new FileReader();

    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = e => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parseData = XLSX.utils.sheet_to_json(sheet);
      console.log(parseData);
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
          
          <Input
            type="file"
            accept=".xlsx, .xls"
            display="flex"
            w={150}
            gap={2}
            bgColor="#C499F3"
            _hover={{ bgColor: '#7360DF' }}
            textColor="#FFF"
            onClick={handleFileUpload}
            aria-label='import file'
          >
            {/* <Box>
              <FaFileImport />
              Import file
            </Box> */}
          </Input>
          
        </Flex>
        <Divider my={4} />
        <Flex flexDirection="column" gap={4}>
          {membersForm.watch().members.map((member: any, index: number) => (
            <MembersForm
              membersForm={membersForm}
              handleDeleteForm={handleDecreaseQuantity}
              key={index}
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
    </Box>
  );
};

export default MemberTeam;
