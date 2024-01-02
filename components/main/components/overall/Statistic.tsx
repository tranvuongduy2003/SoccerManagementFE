//chakra-ui
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Flex,
  Icon,
  Text,
  Avatar
} from '@chakra-ui/react';

//component
import SkeletonComponent from '@/components/common/skeleton';

//image
import Image from 'next/image';
import goal from '@/public/images/overall/goal.png';
import own from '@/public/images/overall/owner.png';
import match from '@/public/images/overall/match.png';
import card from '@/public/images/overall/card.svg';
import soccer from '@/public/images/overall/soccer_match.svg';
import silbar from '@/public/images/overall/silbar.svg';
import two from '@/public/images/overall/cudup.svg';
import one from '@/public/images/overall/one_goal.svg';
import yellowCard from '@/public/images/overall/yellowCard.png';
import redCard from '@/public/images/overall/redCard.png';

//icon
import { FaUserFriends } from 'react-icons/fa';

//interface
import { IStatisticalTournament } from '@/interfaces';

//api
import { useQuery } from '@tanstack/react-query';
import { getStatisticalTournamentById } from '@/apis';

interface StatisticalProps {
  id: string;
}

const Statistic = (props: StatisticalProps) => {
  const { id } = props;

  const { isLoading, data: statisticalTournament } =
    useQuery<IStatisticalTournament>({
      queryKey: ['statisticalTournament', id],
      queryFn: () => getStatisticalTournamentById(id!),
      select: data => data
    });

  if (isLoading) {
    return <SkeletonComponent />;
  }

  return (
    <Box mb="100px">
      <Heading size="xl" my="20px">
        Statistic
      </Heading>
      <Flex justifyContent="center">
        <Grid
          w="80%"
          h="640px"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          textAlign="center"
        >
          <GridItem rowSpan={2} colSpan={1} bg="#67809f">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Icon
                as={FaUserFriends}
                color="white"
                height="100px"
                width="100px"
              />
              <Flex
                color="white"
                alignItems="center"
                justifyContent="space-around"
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  The number of player join the league
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalPlayer}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#f4d03f">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={goal}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <Flex
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-around"
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  The number of goals scored
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalGoal}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#8e44ad">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={own}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <Flex
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  The number of own goals
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalOwN}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#e26a6a">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={match}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <Flex
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  Total matches
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalMatches}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#578ebe">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={card}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <Flex
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  Total Penalty cards
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalCard}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2} bg="#1bbc9b">
            <Flex
              height="full"
              flexDirection="column"
              justifyContent="space-between"
              p="10px"
            >
              <Text
                fontSize="x-small"
                maxW="50%"
                textAlign="left"
                color="white"
              >
                Match with the most goals scored
              </Text>
              {statisticalTournament?.matchMostCard &&
              statisticalTournament?.matchMostGoal[0] ? (
                <>
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    py="10px"
                  >
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      gap="10px"
                    >
                      <Avatar
                        size="xs"
                        src={
                          statisticalTournament?.matchMostGoal[0].teamOne.flag
                        }
                      />
                      <Text color="white">
                        {statisticalTournament?.matchMostGoal[0].teamOne.name}
                      </Text>
                    </Flex>
                    <Text fontSize="x-large" color="white">
                      {statisticalTournament?.matchMostGoal[0].scoreTeamOne} -{' '}
                      {statisticalTournament?.matchMostGoal[0].scoreTeamTwo}
                    </Text>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      gap="10px"
                    >
                      <Avatar
                        size="xs"
                        src={
                          statisticalTournament?.matchMostGoal[0].teamTwo.flag
                        }
                      />
                      <Text color="white">
                        {statisticalTournament?.matchMostGoal[0].teamTwo.name}
                      </Text>
                    </Flex>
                  </Flex>
                  <Text fontSize="md" fontWeight="bold" color="white">
                    {statisticalTournament?.matchMostGoal[0].time
                      .toString()
                      .slice(0, 10)}{' '}
                    - {statisticalTournament?.matchMostGoal[0].round}
                  </Text>
                </>
              ) : (
                <Text>No data ...</Text>
              )}
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2} bg="#95a5a6">
            <Flex
              height="full"
              flexDirection="column"
              justifyContent="space-between"
              p="10px"
            >
              <Text
                fontSize="x-small"
                maxW="50%"
                textAlign="left"
                color="white"
              >
                Match with the most penalty card
              </Text>
              {statisticalTournament?.matchMostCard &&
              statisticalTournament?.matchMostCard[0] ? (
                <>
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p="10px"
                  >
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      gap="10px"
                    >
                      <Avatar
                        size="xs"
                        src={
                          statisticalTournament?.matchMostCard[0].teamOne.flag
                        }
                      />
                      <Text color="white">
                        {statisticalTournament?.matchMostCard[0].teamOne.name}
                      </Text>
                    </Flex>
                    <Text fontSize="x-large" color="white">
                      {statisticalTournament?.matchMostCard[0].scoreTeamOne} -{' '}
                      {statisticalTournament?.matchMostCard[0].scoreTeamTwo}
                    </Text>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      gap="10px"
                    >
                      <Avatar
                        size="xs"
                        src={
                          statisticalTournament?.matchMostCard[0].teamTwo.flag
                        }
                      />
                      <Text color="white">
                        {statisticalTournament?.matchMostCard[0].teamTwo.name}
                      </Text>
                    </Flex>
                  </Flex>
                  <Text fontSize="md" fontWeight="bold" color="white">
                    {statisticalTournament?.matchMostCard[0].time
                      .toString()
                      .slice(0, 10)}{' '}
                    - {statisticalTournament?.matchMostCard[0].round}
                  </Text>
                </>
              ) : (
                <Text>No data...</Text>
              )}
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#f4d03f">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={soccer}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <Flex
                direction="row-reverse"
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  goal/match
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.goalPerMatch}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#e26a6a">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={silbar}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <Flex
                direction="row-reverse"
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  cards/match
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.cardPerMatch}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#67809f">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={two}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <Flex
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  Total double kicks
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalDoubleKick}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#32c5d2">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={two}
                alt=""
                className="h-[50px] w-[100px] object-cover"
              />
              <Image
                src={one}
                alt=""
                className="h-[50px] w-[50px] object-cover"
              />
              <Flex
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  Total Hattrick
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalHattrick}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#8e44ad">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={two}
                alt=""
                className="h-[50px] w-[50px] object-cover"
              />
              <Image
                src={two}
                alt=""
                className="h-[50px] w-[50px] object-cover"
              />
              <Flex
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  Total Poker
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalPocker}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#1bbc9b">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              {statisticalTournament?.teamMostGoal &&
              statisticalTournament?.teamMostGoal[0] ? (
                <>
                  <Avatar
                    src={
                      statisticalTournament?.teamMostGoal &&
                      statisticalTournament?.teamMostGoal[0].flag
                    }
                  />
                  <Text color="white">
                    {statisticalTournament?.teamMostGoal &&
                      statisticalTournament?.teamMostGoal[0].name}
                  </Text>
                  <Flex
                    w="full"
                    px="20px"
                    color="white"
                    alignItems="center"
                    justifyContent="space-between"
                    pt="10px"
                    _hover={{ cursor: 'pointer' }}
                  >
                    <Text fontSize="x-small" maxW="50%" textAlign="left">
                      Team with the most goals scored
                    </Text>
                    <Text fontSize="x-large" fontWeight="bold">
                      {statisticalTournament?.teamMostGoal &&
                        statisticalTournament?.teamMostGoal[0].statistical
                          .goals}
                    </Text>
                  </Flex>
                </>
              ) : (
                <Box color="white">
                  <Text>No data...</Text>
                  <Text fontSize="x-small" maxW="50%" textAlign="left">
                    Team with the most goals scored
                  </Text>
                </Box>
              )}
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#8e44ad">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              {statisticalTournament?.teamMostCard &&
              statisticalTournament?.teamMostCard[0] ? (
                <>
                  <Avatar
                    src={
                      statisticalTournament?.teamMostCard &&
                      statisticalTournament?.teamMostCard[0].flag
                    }
                  />
                  <Text color="white">
                    {statisticalTournament?.teamMostCard &&
                      statisticalTournament?.teamMostCard[0].name}
                  </Text>
                  <Flex
                    w="full"
                    px="20px"
                    color="white"
                    alignItems="center"
                    justifyContent="space-between"
                    pt="10px"
                    _hover={{ cursor: 'pointer' }}
                  >
                    <Text fontSize="x-small" maxW="50%" textAlign="left">
                      Team with the most penalty card
                    </Text>
                    <Text fontSize="x-large" fontWeight="bold">
                      {statisticalTournament?.teamMostCard &&
                        statisticalTournament?.teamMostCard[0].statistical
                          .yellowCards}
                    </Text>
                  </Flex>
                </>
              ) : (
                <Box color="white">
                  <Text>No data...</Text>
                  <Text fontSize="x-small" maxW="50%" textAlign="left">
                    Team with the most penalty card
                  </Text>
                </Box>
              )}
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#f4d03f">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              {statisticalTournament?.playerMostCard &&
              statisticalTournament?.playerMostCard[0] ? (
                <>
                  <Avatar
                    src={
                      statisticalTournament?.playerMostCard &&
                      statisticalTournament?.playerMostCard[0].avatar
                    }
                  />
                  {statisticalTournament?.playerMostCard &&
                  statisticalTournament?.playerMostCard[0] ? (
                    <Text color="white">
                      {statisticalTournament?.playerMostCard[0] &&
                        statisticalTournament?.playerMostCard[0].name}
                    </Text>
                  ) : (
                    <Text>No data ...</Text>
                  )}
                  <Flex
                    w="full"
                    px="20px"
                    color="white"
                    alignItems="center"
                    justifyContent="space-between"
                    pt="10px"
                    _hover={{ cursor: 'pointer' }}
                  >
                    <Text fontSize="x-small" maxW="50%" textAlign="left">
                      Player with the most penalty card
                    </Text>
                    <Text fontSize="x-large" fontWeight="bold">
                      {statisticalTournament?.playerMostCard &&
                        statisticalTournament?.playerMostCard[0].statistical
                          .redCards +
                          statisticalTournament?.playerMostCard[0].statistical
                            .yellowCards}
                    </Text>
                  </Flex>
                </>
              ) : (
                <Box color="white">
                  <Text>No data...</Text>
                  <Text fontSize="x-small" maxW="50%" textAlign="left">
                    Player with the most penalty card
                  </Text>
                </Box>
              )}
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#578ebe">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={yellowCard}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <Flex
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  Total yellow cards
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalYellowCard}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} bg="#1bbc9b">
            <Flex
              height="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image
                src={redCard}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <Flex
                w="full"
                px="20px"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                pt="10px"
                _hover={{ cursor: 'pointer' }}
              >
                <Text fontSize="x-small" maxW="50%" textAlign="left">
                  Total red cards
                </Text>
                <Text fontSize="x-large" fontWeight="bold">
                  {statisticalTournament?.totalRedCard}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Statistic;
