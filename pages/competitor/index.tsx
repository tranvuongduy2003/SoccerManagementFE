//layout
import { HomeLayout } from '@/components/layout';
import { ITeam, NextPageWithLayout } from '@/interfaces';

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
  Select,
  Box,
  Input,
  Icon,
  Center
} from '@chakra-ui/react';

//icons
import { SearchIcon } from '@chakra-ui/icons';
import { RiTeamLine } from 'react-icons/ri';
import { FaRegEye } from 'react-icons/fa';

//react-query
import { useQuery } from '@tanstack/react-query';
import { getTeams } from '@/apis';
import Link from 'next/link';

interface CompetitorProps {
  team: ITeam;
}

const Competitor = (props: CompetitorProps) => {
  const { team } = props;

  return (
    <Card
      as={Link}
      maxW="sm"
      position="relative"
      paddingBottom="20px"
      _hover={{ bgColor: 'gray.300', cursor: 'pointer' }}
      href={`/competitor/${team._id}/profile`}
    >
      <CardBody>
        <Center position="relative" height="40%">
          <Image
            position="relative"
            src={team.flag}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Center>
        <Stack mt="12" spacing="3">
          <Heading size="md" textAlign="center">
            {team.name}
          </Heading>
          <Text textAlign="center">
            {team.name} join in {team.tags}
          </Text>
        </Stack>
        <Flex justifyContent="center" alignItems="center" gap="30px" mt="20px">
          <Flex alignItems="center" gap="10px">
            <Icon as={RiTeamLine} color="black" />
            <Text>{team.players.length}</Text>
          </Flex>
          <Flex alignItems="center" gap="10px">
            <Icon as={FaRegEye} color="black" />
            <Text>{team.matches.length}</Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

const Competitors: NextPageWithLayout = () => {
  const {
    isLoading,
    data: teams,
    isError,
    error
  } = useQuery<ITeam[]>({
    queryKey: ['teams'],
    queryFn: getTeams,
    select: data => data
  });

  // const handleSearch = (e: React.ChangeEvent<any>) => {
  //   const contains = ({ name }: { name: string }, query: string) => {
  //     if (name.toLowerCase().includes(query)) {
  //       return true;
  //     }
  //     return false;
  //   };

  //   const value = e.target.value;
  //   const formatQuery = value.toLowerCase();
  //   const filterData = filter(teams, category => {
  //     return contains(category, formatQuery);
  //   });
  //   setLeagues(filterData);
  // };

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.log(error);
  }

  return (
    <Flex
      direction="column"
      paddingTop="150px"
      justifyContent="space-between"
      gap="50px"
      paddingLeft="30px"
      paddingRight="30px"
    >
      <Flex direction="row" justifyContent="space-between" gap="200px">
        <Flex width="20%" direction="row" alignItems="center">
          <Input placeholder="Search team" color="white" />
          <Center bgColor="blue.600" height="100%" px="4" rounded="6">
            <Icon as={SearchIcon} color="white" />
          </Center>
        </Flex>
      </Flex>
      <Grid
        templateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
        gap="5"
        justifyContent="center"
        alignItems="center"
      >
        {teams!.length !== 0 ? (
          teams?.map((team, index) => <Competitor key={index} team={team} />)
        ) : (
          <Text>Loading</Text>
        )}
      </Grid>
    </Flex>
  );
};

Competitors.Layout = HomeLayout;
export default Competitors;
