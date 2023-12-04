//chakra-ui
import {
  Flex,
  Box,
  Text,
  Center,
  Avatar,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

//bracket
import { Bracket, Seed, SeedItem, SeedTeam } from 'react-brackets';

//image
import Image from 'next/image';
import stadium from '@/public/images/schedule/position.png';

//store
import { useRoundStore } from '@/stores';

//icons
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

//interface
import { IMatch } from '@/interfaces';

//moment
import moment from 'moment';

interface ModalMatchProps {
  match: IMatch;
}
const ModalMatch = (props: ModalMatchProps) => {
  const { match } = props;
  return (
    // <Modal
    //     blockScrollOnMount={false}
    //     isOpen={isOpen}
    //     onClose={onClose}
    //     size="xl"
    //   >
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Match summary</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Text fontWeight="bold" mb="1rem">
                You can scroll the content behind the modal
              </Text> */}
          <Box bg="gray.500">
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p="10"
              gap="20px"
            >
              <Flex
                width="full"
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex alignItems="center" gap="10px">
                  <Icon as={FaRegClock} color="white" />
                  <Text color="white">
                    {moment(match.time).format('DD/MM/YYYY h:mm:ss A')}
                  </Text>
                </Flex>
                <Flex alignItems="center" gap="10px">
                  <Icon as={FaLocationDot} color="white" />
                  <Text color="white">Stadium {match.stadium.name}</Text>
                </Flex>
              </Flex>
              <Flex
                width="full"
                height="full"
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  w="40%"
                  minH="200px"
                >
                  <Avatar size="xl" src={match.teamOne.flag} />
                  <Text fontSize="2xl" color="#75C2F6" textAlign="center">
                    {match.teamOne.name}
                  </Text>
                </Flex>
                <Text fontSize="3xl" color="white">
                  {match.scoreTeamOne} : {match.scoreTeamTwo}
                </Text>
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  w="40%"
                  minH="200px"
                >
                  <Avatar size="xl" src={match.teamTwo.flag} />
                  <Text fontSize="2xl" color="red.400" textAlign="center">
                    {match.teamTwo.name}
                  </Text>
                </Flex>
              </Flex>
              {match.penaltyTeamOne !== undefined &&
                match.penaltyTeamTwo !== undefined && (
                  <Flex flexDirection="column" alignItems="center" gap="10px">
                    <Text color="white">Penalty</Text>
                    <Text color="white">
                      (Penalty results to indicate the winner)
                    </Text>
                    <Text color="white">
                      {match.penaltyTeamOne} : {match.penaltyTeamTwo}
                    </Text>
                  </Flex>
                )}
            </Flex>
          </Box>
        </ModalBody>
        <Flex width="full" alignItems="center" justifyContent="center">
          <Tabs colorScheme="#75C2F6" variant="enclosed" textAlign="center">
            <TabList>
              <Tab
                _selected={{
                  color: '#75C2F6',
                  borderBottom: '1px solid #75C2F6'
                }}
              >
                Timeline
              </Tab>
              <Tab
                _selected={{
                  color: '#75C2F6',
                  borderBottom: '1px solid #75C2F6'
                }}
              >
                Lineup
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex flexDirection="column" gap="2">
                  <Flex flexDirection="row" gap="1" alignItems="center">
                    <Text>Võ Thị Trúc Ly (5)</Text>
                    <Box py="3" px="2" bgColor="yellow.400" />
                    <Center
                      bgColor="gray.200"
                      height="30px"
                      width="30px"
                      rounded="full"
                      left="10px"
                    >
                      15
                    </Center>
                  </Flex>
                  <Flex flexDirection="row" gap="1" alignItems="center">
                    <Text>Võ Thị Trúc Ly (5)</Text>
                    <Box py="3" px="2" bgColor="yellow.400" />
                    <Center
                      bgColor="gray.200"
                      height="30px"
                      width="30px"
                      rounded="full"
                      left="10px"
                    >
                      15
                    </Center>
                  </Flex>
                  <Flex flexDirection="row" gap="1" alignItems="center">
                    <Text>Võ Thị Trúc Ly (5)</Text>
                    <Box py="3" px="2" bgColor="yellow.400" />
                    <Center
                      bgColor="gray.200"
                      height="30px"
                      width="30px"
                      rounded="full"
                      left="10px"
                    >
                      15
                    </Center>
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex width="full" gap="10px">
                  <Image src={stadium} alt="" />
                  <Image src={stadium} alt="" />
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </ModalContent>
    </>
    // </Modal>
  );
};

const CustomSeed = ({ seed, breakpoint }: any) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Flex
              alignItems="center"
              gap="10px"
              height="100%"
              minW="300px"
              // onClick={seed.useDisclosure.onOpen}
            >
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
              {/* <Modal
                blockScrollOnMount={false}
                isOpen={seed.useDisclosure.isOpen}
                onClose={seed.useDisclosure.onClose}
                size="xl"
              >
                <ModalMatch match={seed.teams[0].match} />
              </Modal> */}
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
              {/* <Modal
                blockScrollOnMount={false}
                isOpen={seed.useDisclosure.isOpen}
                onClose={seed.useDisclosure.onClose}
                size="xl"
              >
                <ModalMatch match={seed.teams[0].match} />
              </Modal> */}
            </Flex>
          </SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};

const BracketComponent = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const discloser = useDisclosure();
  const rounds = useRoundStore(state => state.rounds);

  const bracket: any[] = rounds.map(round => {
    return {
      title: round.type,
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
          ],
        };
      })
    }
  });

  return (
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
  );
};

export default BracketComponent;
