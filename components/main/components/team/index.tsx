'use client';

//chakra-ui
import {
  Grid,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  Flex,
  Box,
  Center,
  Divider,
  CardFooter,
  Avatar
} from '@chakra-ui/react';

//route
import { useRouter } from 'next/router';
import Link from 'next/link';

//interface
import { ITeam } from '@/interfaces';

//store
import { useTeamStore } from '@/stores/useTeamStore';
import NotData from '@/components/common/notData';

interface TeamProps {
  team: ITeam;
}
const Team = (props: TeamProps) => {
  const { team } = props;
  const router = useRouter();

  const setTeam = useTeamStore(state => state.setTeam);

  return (
    <Card maxW="sm" boxShadow="xl">
      <CardBody
        as={Link}
        _hover={{ bgColor: 'gray.100', cursor: 'pointer' }}
        href={{
          pathname: `/league/${router.query.id}/team/detail/${team._id}`,
          query: { tags: router.query.tags }
        }}
        onClick={() => {
          console.log(team);
          setTeam(team);
        }}
      >
        <Image
          src={team.flag}
          w="full"
          h="200px"
          objectFit="contain"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          // bgColor="#75C2F6"
        />
        <Text fontSize="xl" textAlign="center" color="#0079FF" pt="10px">
          {/* Manchester City */}
          {team.name}
        </Text>
        <Stack mt="6" spacing="3">
          <Divider />
          <Heading size="xs" textAlign="center">
            {team?.statistical?.matches} games player
          </Heading>
          <Flex alignItems="center" justifyContent="center" gap="4">
            <Box bgColor="green.400" p="2" rounded="10px">
              <Text color="white">{team?.statistical?.wins} wins</Text>
            </Box>
            <Box bgColor="purple.400" p="2" rounded="10px">
              <Text color="white">{team?.statistical?.draws} draws</Text>
            </Box>
            <Box bgColor="red.400" p="2" rounded="10px">
              <Text color="white">{team?.statistical?.losses} losses</Text>
            </Box>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter
        as={Link}
        href={{
          pathname: `/league/${router.query.id}/team/profile/1`,
          query: { tags: router.query.tags }
        }}
        _hover={{ bg: 'gray.100' }}
        onClick={() => setTeam(team)}
      >
        <Flex flexDirection="column" alignItems="center" gap="3" width="100%">
          <Heading
            size="xs"
            textAlign="center"
            _hover={{ cursor: 'pointer', color: 'green.300' }}
          >
            Player
          </Heading>
          <Flex gap="3">
            {team.players.slice(0, 3).map((player, index) => (
              <Avatar key={index} src={player.avatar || undefined} size="md" />
            ))}
            <Center
              bgColor="gray.200"
              height="50px"
              width="50px"
              rounded="full"
            >
              +{team.players.length - 3}
            </Center>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
};

interface TeamComponentProps {
  teams: ITeam[];
}

const TeamComponent = (props: TeamComponentProps) => {
  const { teams } = props;

  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
      gap="5"
      justifyContent="center"
      alignItems="center"
      mt="100px"
    >
      {teams.length !== 0 ? (
        teams.map((team, index) => <Team key={index} team={team} />)
      ) : (
        <Center>
          <NotData text="data team" />
        </Center>
      )}
    </Grid>
  );
};

export default TeamComponent;
