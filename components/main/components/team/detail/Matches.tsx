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
  TabPanel
} from '@chakra-ui/react';

//icons
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

//image
import Image from 'next/image';
import stadium from '@/public/images/schedule/position.png';
import { IMatch } from '@/interfaces';

//moment
import moment from 'moment';

interface MatchProps {
  index: number;
  match: IMatch;
}
const Match = (props: MatchProps) => {
  const { match, index } = props;
  // console.log(match);

  // console.log(match.cards, match.goals);

  // const events = [...match.cards, ...match.goals].sort(
  //   (a, b) => a.time! - b.time!
  // );

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
        // justifyContent="center"
        position="relative"
        borderX="1px solid #75C2F6"
        px="2px"
        // bg={props.number % 2 === 0 ? 'gray.100' : 'white'}
        _hover={{ cursor: 'pointer', bgColor: 'gray.200' }}
        onClick={onOpen}
        bgColor="gray.100"
      >
        <Flex alignItems="center" position="absolute" left="10px" gap="10px">
          <Center bgColor="gray.200" height="30px" width="30px" rounded="full">
            {index + 1}
          </Center>
          <Text color="gray.400">{match.round}</Text>
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

interface MatchesProps {
  matches: IMatch[];
}
const Matches = (props: MatchesProps) => {
  const { matches } = props;
  return (
    <>
      {matches.length ? (
        matches.map((match, index) => (
          <Match key={index} match={match} index={index} />
        ))
      ) : (
        <Text>Updating</Text>
      )}
    </>
  );
};

export default Matches;
