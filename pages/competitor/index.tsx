//layout
import { HomeLayout } from '@/components/layout';
import { ITeam, NextPageWithLayout } from '@/interfaces';

//chakra-ui
import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Input,
  Stack,
  Text
} from '@chakra-ui/react';

//icons
import { SearchIcon } from '@chakra-ui/icons';
import { FaRegEye } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';

//react-query
import { getTeams } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import SkeletonComponent from '@/components/common/skeleton';
import { useEffect, useState } from 'react';

//filter
import filter from 'lodash.filter';
import NotData from '@/components/common/notData';

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
            src={team.flag ? team.flag : '/images/common/team.png'}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Center>
        <Stack mt="12" spacing="3">
          <Heading size="md" textAlign="center">
            {team.name}
          </Heading>
          <Text textAlign="center">
            {team.tags && `${team.name} join in ${team.tags}`}
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
  const { data,isLoading } = useQuery<ITeam[]>({
    queryKey: ['teams'],
    queryFn: getTeams
    // select: data => data
    
  });

  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    if (data) {
      setTeams(data);
    }
  }, [data]);

  const handleSearch = (e: React.ChangeEvent<any>) => {
    const contains = ({ name }: { name: string }, query: string) => {
      if (name.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    };

    const value = e.target.value;
    const formatQuery = value.toLowerCase();
    const filterData = filter(data, category => {
      return contains(category, formatQuery);
    });
    setTeams(filterData);
  };

  if (isLoading)
    return (
      <Box>
        <SkeletonComponent />
      </Box>
    );

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
          <Input
            placeholder="Search team"
            color="white"
            onChange={handleSearch}
          />
          <Center bgColor="blue.600" height="100%" px="4" rounded="6">
            <Icon as={SearchIcon} color="white" />
          </Center>
        </Flex>
      </Flex>
      {teams!.length !== 0 ? (
        <Grid
          templateColumns="repeat(4,1fr)"
          gap={5}
          justifyContent="flex-start"
          alignItems="center"
          mx="auto"
        >
          {teams?.map((team, index) => (
            <Competitor key={index} team={team} />
          ))}
        </Grid>
      ) : (
        <NotData color="white" text="team" />
      )}
    </Flex>
  );
};

Competitors.Layout = HomeLayout;

export default Competitors;
