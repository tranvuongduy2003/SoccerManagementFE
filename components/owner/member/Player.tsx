import { IPlayer } from '@/interfaces';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { useRef } from 'react';

//icons
import { GrUpdate } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';

//react-query
import { deletePlayerByOwner } from '@/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

//component
import ModalDelete from './ModalDelete';

interface PlayerProps {
  player: IPlayer;
  idTeam: string;
}
const Player = (props: PlayerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef(true);

  const { player, idTeam } = props;
  const queryClient = useQueryClient();

  const removePlayer = useMutation({
    mutationFn: deletePlayerByOwner,
    onSuccess: () => {
      queryClient.invalidateQueries();
    }
  });

  const handleRemovePlayer = () => {
    removePlayer.mutate({ id: player._id!, idTeam });
  };

  return (
    <>
      <Flex
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        border="1px solid #75C2F6"
        width={200}
        height={300}
        //   px="8"
        pt="14"
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
            borderLeft: `12px solid ${player.captain ? '#EC8F5E' : '#75C2F6'}`
          }}
        >
          {player.captain ? 'Captain' : 'Player'}
        </Box>
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="flex-start"
          height={150}
        >
          <Avatar size="xl" src={player.avatar} />
          <Text py="2" textAlign="center">
            {player.name}
          </Text>
        </Flex>
        <Text>Number: {player.number}</Text>
        <Flex width="full">
          <Button
            width="50%"
            _hover={{ bgColor: '#65B741' }}
            bottom="0"
            bgColor="#9ADE7B"
            rounded="none"
            // onClick={onOpen}
          >
            <Icon as={GrUpdate} size="#75C2F6" />
          </Button>
          <Button
            width="50%"
            bottom="0"
            bgColor="#D24545"
            _hover={{ bgColor: '#FF004D' }}
            rounded="none"
            // onClick={onOpen}
            onClick={onOpen}
          >
            <Icon as={MdDelete} size="#75C2F6" />
          </Button>
        </Flex>
      </Flex>
      <ModalDelete
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        handleRemovePlayer={handleRemovePlayer}
      />
    </>
  );
};

export default Player;
