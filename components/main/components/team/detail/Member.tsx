//chakra-ui
import { IPlayer } from '@/interfaces';
import { Grid, Text, Flex, Avatar, Box, Center } from '@chakra-ui/react';

interface PlayerProps {
  player: IPlayer;
}
const Player = (props: PlayerProps) => {
  const { player } = props;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px="3"
      _hover={{ cursor: 'pointer' }}
    >
      <Flex alignItems="center" gap="10px">
        <Avatar src={player.avatar} size="xl" />
        <Flex flexDirection="column" textAlign="left">
          <Text color="#75C2F6">{player.name}</Text>
          <Text>Position: {player.position}</Text>
          <Text>Number: {player.number}</Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="10px">
        <Flex alignItems="center" justifyContent="space-between" minW="50px">
          <Text>{player.statistical.goals}</Text>
          <Center minW="30px">
            <Avatar
              size="xs"
              src="https://cdn-icons-png.flaticon.com/512/53/53283.png"
            />
          </Center>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" minW="50px">
          <Text>{player.statistical.yellowCards}</Text>
          <Center minW="30px">
            <Box px="2" py="3" bgColor="yellow.200"></Box>
          </Center>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" minW="50px">
          <Text>{player.statistical.redCards}</Text>
          <Center minW="30px">
            <Box px="2" py="3" bgColor="red"></Box>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
};

interface MemberProps {
  players: IPlayer[];
}
const Member = (props: MemberProps) => {
  const { players } = props;
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="5" justifyContent="center">
      {players.map((player, index) => (
        <Player key={index} player={player} />
      ))}
    </Grid>
  );
};

export default Member;
