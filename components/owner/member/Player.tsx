import { IPlayer } from '@/interfaces';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

//icons
import { GrUpdate } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';

//react-query
import { deletePlayerByOwner, updatePlayer } from '@/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

//component
import ModalDelete from './ModalDelete';
import { ModalUpdate } from './ModalUpdate';

//toast

interface PlayerProps {
  player: IPlayer;
  idTeam: string;
}
const Player = (props: PlayerProps) => {
  const toast = useToast();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete
  } = useDisclosure();
  const {
    isOpen: isOpenUpdate,
    onOpen: onOpenUpdate,
    onClose: onCloseUpdate
  } = useDisclosure();

  const cancelRef: any = useRef(true);

  const { player, idTeam } = props;
  const queryClient = useQueryClient();

  const removePlayer = useMutation({
    mutationFn: deletePlayerByOwner,
    onSuccess: () => {
      queryClient.invalidateQueries();

      toast({
        title: 'Delete successfully!',
        description: 'your player is deleted',
        status: 'success',
        duration: 1500,
        onCloseComplete: () => onCloseDelete(),
        position: 'top-right'
      });
    }
  });

  const handleRemovePlayer = () => {
    removePlayer.mutate({ id: player._id!, idTeam });
  };

  const updatePlayerByOwner = useMutation({
    mutationFn: updatePlayer,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast({
        title: 'Update successfully!',
        description: 'your player is updated',
        status: 'success',
        duration: 1000,
        onCloseComplete: () => onCloseUpdate(),
        position: 'top-right'
      });
    }
  });

  const handleUpdatePlayer = (data: IPlayer) => {
    updatePlayerByOwner.mutate(data);
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
          <Avatar
            size="xl"
            src={
              player.avatar ? player.avatar : '/images/team/playerDefault.png'
            }
          />
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
            onClick={onOpenUpdate}
            // onClick={() => showEditModal(player._id)}
          >
            <Icon as={GrUpdate} size="#75C2F6" />
          </Button>
          <Button
            width="50%"
            bottom="0"
            bgColor="#D24545"
            _hover={{ bgColor: '#FF004D' }}
            rounded="none"
            onClick={onOpenDelete}
          >
            <Icon as={MdDelete} size="#75C2F6" />
          </Button>
        </Flex>
      </Flex>
      <ModalDelete
        isOpen={isOpenDelete}
        onOpen={onOpenDelete}
        onClose={onCloseDelete}
        cancelRef={cancelRef}
        handleRemovePlayer={handleRemovePlayer}
      />
      <ModalUpdate
        isOpen={isOpenUpdate}
        onOpen={onOpenUpdate}
        onClose={onCloseUpdate}
        handleUpdatePlayer={(data: any) => handleUpdatePlayer(data)}
        player={{
          ...player,
          captain: player.captain ? 'Captain' : 'No Captain'
        }}
      />
    </>
  );
};

export default Player;
