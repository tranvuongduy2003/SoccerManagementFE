//chakra-ui
import { Avatar, Center, Flex, Text } from '@chakra-ui/react';

//bracket
import { Bracket, Seed, SeedItem, SeedTeam } from 'react-brackets';

//store
import { useRoundStore } from '@/stores';

//moment
import NotData from '@/components/common/notData';

const CustomSeed = ({ seed, breakpoint }: any) => {
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div
          className="flex bg-[#75C2F6] flex-col gap-[2px]"
          onClick={() => console.log('CCC')}
        >
          <SeedTeam
            className="bg-[#0079FF] hover:bg-[#FAEED1] hover:font-bold hover:text-black hover:cursor-pointer"
            position="relative"
          >
            <Flex alignItems="center" gap="10px" height="100%" minW="300px">
              <Avatar size="sm" src={seed.teams[0].flag} />
              {seed.teams[0]?.name || 'NO TEAM '}
              <Center
                h="40px"
                w="40px"
                position="absolute"
                right="0"
                bgColor="white"
                color="black"
                rounded="3px"
              >
                <Flex alignItems="center" gap="1">
                  <Text size="xl">{seed.teams[0]?.score}</Text>
                  {seed.teams[0]?.penalty !== undefined && (
                    <Text size="xl">({seed.teams[0]?.penalty})</Text>
                  )}
                </Flex>
              </Center>
            </Flex>
          </SeedTeam>
          <SeedTeam className="bg-[#0079FF] hover:bg-[#FAEED1] hover:font-bold hover:text-black hover:cursor-pointer">
            <Flex
              alignItems="center"
              gap="10px"
              // onClick={seed.useDisclosure.onOpen}
            >
              <Avatar size="sm" src={seed.teams[1].flag} />
              {seed.teams[1]?.name || 'NO TEAM '}
              <Center
                h="40px"
                w="40px"
                position="absolute"
                right="0"
                bgColor="white"
                color="black"
                rounded="3px"
              >
                <Flex alignItems="center" gap="1">
                  <Text size="xl">{seed.teams[1]?.score}</Text>
                  {seed.teams[1]?.penalty !== undefined && (
                    <Text size="xl">({seed.teams[1]?.penalty})</Text>
                  )}
                </Flex>
              </Center>
            </Flex>
          </SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};

const BracketComponent = () => {
  const rounds = useRoundStore(state => state.rounds);

  const roundCharView = rounds.filter(a => a.type === 'Knock');

  const bracket: any[] = roundCharView.map(round => {
    return {
      title: round.name,
      seeds: round.matches?.map((match, index) => {
        return {
          id: index + 1,
          date: match.time,
          teams: [
            {
              flag: match.teamOne.flag,
              name: match.teamOne.name,
              score: match.scoreTeamOne,
              penalty: match.penaltyTeamOne,
              match: match
            },
            {
              flag: match.teamTwo.flag,
              name: match.teamTwo.name,
              score: match.scoreTeamTwo,
              penalty: match.penaltyTeamTwo,
              match: match
            }
          ]
        };
      })
    };
  });

  return rounds.length ? (
    <Bracket
      rounds={bracket}
      roundTitleComponent={(title: React.ReactNode) => {
        return (
          <div style={{ textAlign: 'center', color: 'white' }}>{title}</div>
        );
      }}
      bracketClassName="bg-[#75C2F6] rounded-md py-4"
      renderSeedComponent={CustomSeed}
    />
  ) : (
    <Center mt="500px">
      <NotData text="data round" />
    </Center>
  );
};

export default BracketComponent;
