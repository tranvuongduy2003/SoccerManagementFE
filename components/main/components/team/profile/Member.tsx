//chakra-ui
import {
  Flex,
  Icon,
  Heading,
  Button,
  Box,
  Text,
  Grid,
  Avatar,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader
} from '@chakra-ui/react';

//icons
import { GrFormNextLink } from 'react-icons/gr';
import { FcGlobe, FcContacts } from 'react-icons/fc';
import { FaBirthdayCake } from 'react-icons/fa';
import { IoShirt } from 'react-icons/io5';
import { LiaSitemapSolid } from 'react-icons/lia';
import { IPlayer } from '@/interfaces';

interface PlayerProps {
  player: IPlayer;
}
const Player = (props: PlayerProps) => {
  const { player } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      border='1px solid #75C2F6'
      px="8"
      py="14"
      position="relative"
    >
      <Box
        position="absolute"
        w="150px"
        pl="15px"
        lineHeight="40px"
        left="-10px"
        top="10px"
        color="white"
        bgColor={player.captain ? '#EC8F5E' : '#75C2F6'}
        _before={{
          content: '""',
          position: 'absolute',
          height: '0',
          width: '0',
          top: '-8.5px',
          left: '0.1px',
          borderBottom: `9px solid ${player.captain ? '#EC8F5E' : '#75C2F6'}`,
          borderLeft: '9px solid transparent'
        }}
        _after={{
          content: '""',
          position: 'absolute',
          height: '0',
          width: '0',
          right: ' -12px',
          borderTop: '21px solid transparent',
          borderBottom: '21px solid transparent',
          borderLeft: `12px solid ${player.captain?'#EC8F5E':'#75C2F6'}`
        }}
      >
        {player.captain ? 'Captain' : 'Player'}
      </Box>
      <Avatar size="xl" src={player.avatar} />
      <Text py="2" textAlign="center">
        {player.name}
      </Text>
      <Text>Number: {player.number}</Text>
      <Button
        width="full"
        position="absolute"
        bottom="0"
        bgColor="#75C2F6"
        rounded="none"
        onClick={onOpen}
      >
        <Icon as={GrFormNextLink} size="#75C2F6" />
      </Button>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalContent>
          <ModalHeader>Player summary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box bg="gray.500">
              <Flex
                alignItems="center"
                justifyContent="center"
                p="10"
                gap="30px"
                color="white"
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap="20px"
                >
                  <Avatar size="2xl" src={player.avatar} />
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="10px"
                  >
                    <Flex
                      width="200px"
                      alignItems="center"
                      justifyContent="space-around"
                    >
                      <Text>Age</Text>
                      <Text>Height</Text>
                      <Text>Weight</Text>
                    </Flex>
                    <Flex
                      width="200px"
                      alignItems="center"
                      justifyContent="space-around"
                    >
                      <Text>{player.age}</Text>
                      <Text>{player.height}</Text>
                      <Text>{player.weight}</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  minW="300px"
                  gap="10px"
                >
                  <Flex alignItems="center" justifyContent="center" gap="10px">
                    <Icon as={FcContacts} />
                    <Text>Name: {player.name}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center" gap="10px">
                    <Icon as={IoShirt} color="blue" />
                    <Text>Number: {player.number}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center" gap="10px">
                    <Icon as={LiaSitemapSolid} color="red" />
                    <Text>Postion: {player.position}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center" gap="10px">
                    <Icon as={FcGlobe} />
                    <Text>National: {player.national}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center" gap="10px">
                    <Icon as={FaBirthdayCake} color="pink" />
                    <Text>Birth: {player.dob.toString().slice(0, 10)}</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

interface MemberProps {
  players: IPlayer[];
}
const Members = (props: MemberProps) => {
  const { players } = props;
  return (
    <>
      <Text mb={6}>There are {players.length} players</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap="5" justifyContent="center">
        {players.map((player, index) => (
          <Player key={index} player={player} />
        ))}
      </Grid>
    </>
  );
};

export default Members;
