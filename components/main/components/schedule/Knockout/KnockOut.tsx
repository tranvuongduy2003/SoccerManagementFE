//chakra-ui
import {
  Avatar,
  Box,
  Center,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure
} from '@chakra-ui/react';

//image
import stadium from '@/public/images/schedule/position.png';
import Image from 'next/image';

//icons
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

//store
import { useRoundStore } from '@/stores';

//interface
import { IMatch, IRound } from '@/interfaces';

//moment
import NotData from '@/components/common/notData';
import moment from 'moment';

interface MatchProps {
  index: number;
  match: IMatch;
}

export const Match = (props: MatchProps) => {
  const { match, index } = props;
  const eventsTeamOne = [...match?.cardsTeamOne, ...match?.goalsTeamOne].sort(
    (a, b) => a.time! - b.time!
  );
  const eventsTeamTwo = [...match?.cardsTeamTwo, ...match?.goalsTeamTwo].sort(
    (a, b) => a.time! - b.time!
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        alignItems="center"
        position="relative"
        borderX="1px solid #75C2F6"
        px="2px"
        _hover={{ cursor: 'pointer', bgColor: 'gray.200' }}
        onClick={onOpen}
        bgColor="gray.100"
      >
        <Flex alignItems="center" position="absolute" left="10px" gap="10px">
          <Center bgColor="gray.200" height="30px" width="30px" rounded="full">
            {index + 1}
          </Center>
        </Flex>

        <Flex
          position="relative"
          w="full"
          alignItems="center"
          justifyContent="center"
          py="4"
          gap="6"
          flexGrow="1"
        >
          <Flex alignItems="center" justifyContent="flex-end" gap="2" w="40%">
            <Text>{match.teamOne.name}</Text>
            <Image src={match.teamOne.flag} alt="" width={40} height={40} />
          </Flex>
          <Box px="6" py="1" bgColor="green.200" rounded="6px">
            <Text color="#0079FF">
              {match.scoreTeamOne} - {match.scoreTeamTwo}
            </Text>
            {match.penaltyTeamOne !== undefined &&
              match.penaltyTeamTwo !== undefined && (
                <Text color="#0079FF" fontSize="small">
                  ({match.penaltyTeamOne} - {match.penaltyTeamTwo})
                </Text>
              )}
          </Box>
          <Flex alignItems="center" justifyContent="flex-start" gap="2" w="40%">
            <Image src={match.teamTwo.flag} alt="" width={40} height={40} />
            <Text>{match.teamTwo.name}</Text>
          </Flex>
        </Flex>
        <Center color="gray.400" position="absolute" right="10px">
          {moment(match.time).format('DD/MM/YYYY h:mm:ss A')}
        </Center>
      </Flex>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Match summary</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Text fontWeight="bold" mb="1rem">
                You can scroll the content behind the modal
              </Text> */}
            <Box bg="#B6BBC4" rounded={2}>
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
                  <Flex justifyContent="space-between" w="full" gap="60px">
                    <Box w="210px">
                      {eventsTeamOne.map((event, index) => (
                        <Flex
                          key={index}
                          flexDirection="row"
                          gap="1"
                          alignItems="center"
                          justifyContent="flex-end"
                          minW="250px"
                        >
                          <Flex alignItems="center" justifyContent="center">
                            <Text fontSize="12px">{event.player}</Text>
                            <Text fontSize="12px">({event.number})</Text>
                          </Flex>
                          {event.type ? (
                            <Box
                              py="3"
                              px="2"
                              bgColor={
                                event.type === 'YELLOW'
                                  ? 'yellow.400'
                                  : 'red.400'
                              }
                            />
                          ) : (
                            <Center minW="30px">
                              <Avatar
                                size="xs"
                                src="https://cdn-icons-png.flaticon.com/512/53/53283.png"
                              />
                            </Center>
                          )}
                          <Center
                            bgColor="gray.200"
                            height="30px"
                            width="30px"
                            rounded="full"
                            left="10px"
                          >
                            {event.time}
                          </Center>
                        </Flex>
                      ))}
                    </Box>
                    <Box w="220px">
                      {eventsTeamTwo.map((event, index) => (
                        <Flex
                          key={index}
                          flexDirection="row-reverse"
                          gap="1"
                          alignItems="center"
                          justifyContent="flex-end"
                          minW="250px"
                        >
                          <Flex alignItems="center" justifyContent="center">
                            <Text fontSize="12px">{event.player}</Text>
                            <Text fontSize="12px">({event.number})</Text>
                          </Flex>
                          {event.type ? (
                            <Box
                              py="3"
                              px="2"
                              bgColor={
                                event.type === 'YELLOW'
                                  ? 'yellow.400'
                                  : 'red.400'
                              }
                            />
                          ) : (
                            <Center minW="30px">
                              <Avatar
                                size="xs"
                                src="https://cdn-icons-png.flaticon.com/512/53/53283.png"
                              />
                            </Center>
                          )}
                          <Center
                            bgColor="gray.200"
                            height="30px"
                            width="30px"
                            rounded="full"
                            left="10px"
                          >
                            {event.time}
                          </Center>
                        </Flex>
                      ))}
                    </Box>
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
      </Modal>
    </>
  );
};

interface RoundProps {
  round: IRound;
}
export const Round = (props: RoundProps) => {
  const { round } = props;

  const matches = round.matches?.sort((a, b) => {
    const dateA = new Date(a.time);
    const dateB = new Date(b.time);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <Flex width="100%" flexDirection="column" mb="20px">
      <Box bgColor="blue.300">
        <Text
          fontSize="2xl"
          textAlign="center"
          fontWeight="bold"
          textColor="white"
          py="4"
        >
          {round.name.toUpperCase()}
        </Text>
      </Box>
      {matches && matches.length ? (
        matches.map((match, index) => (
          <Match key={index} match={match} index={index} />
        ))
      ) : (
        <Text>Updating</Text>
      )}
    </Flex>
  );
};

const KnockOut = () => {
  const rounds = useRoundStore(state => state.rounds);

  return (
    <>
      {rounds.length ? (
        rounds.map((round, index) => <Round key={index} round={round} />)
      ) : (
        <Center mt="500px">
          <NotData text="data round" />
        </Center>
      )}
    </>
  );
};

export default KnockOut;
