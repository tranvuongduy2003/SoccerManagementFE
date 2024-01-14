import { useState } from 'react';

//chakra-ui
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalContent,
  ModalFooter,
  Stack,
  Text,
  chakra,
  useDisclosure
} from '@chakra-ui/react';

//api

//type
import { ITable, ITeam } from '@/interfaces';

//icon
import NotData from '@/components/common/notData';
import { useRoundStore } from '@/stores';
import { FaRankingStar } from 'react-icons/fa6';
import { FcBusinessman } from 'react-icons/fc';
import { LuUsers } from 'react-icons/lu';
import { Round } from '../schedule/Knockout/KnockOut';

interface GroupProps {
  groups: ITable[];
}

const Groups = (props: GroupProps) => {
  const GroupCard = chakra(Box, {
    baseStyle: {
      bg: '#75C2F6',
      borderRadius: '6px',
      padding: '10px',
      display: 'flex',
      textAlign: 'center'
    }
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [team, setTeam] = useState<ITeam>();
  const rounds = useRoundStore(state => state.rounds);
  const roundsStage = rounds.filter(round => round.type === 'Stage');

  const openModal = (team: ITeam) => {
    setTeam(team);
    onOpen();
  };

  const { groups } = props;

  return (
    <>
      <Grid
        templateColumns="repeat(auto-fit, minmax(20rem, 0fr))"
        gap="5"
        justifyContent="center"
        marginBottom="20px"
      >
        {groups.map((group: ITable, index: number) => {
          return (
            <GroupCard key={index} border="2px" borderColor="#1077C3">
              <Flex flexDirection="column" gap="10px">
                <Text color="#FFFFFF" fontSize="2xl">
                  Group {group.name}
                </Text>
                {group.teams.map((team: ITeam, index: any) => {
                  return (
                    <Flex
                      position="relative"
                      key={index}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Flex
                        w="100%"
                        p="1"
                        onClick={() => openModal(team)}
                        alignItems="center"
                        gap="20px"
                        _hover={{
                          bg: 'gray.300',
                          cursor: 'pointer',
                          rounded: 'xl'
                        }}
                      >
                        <Image
                          borderRadius="50%"
                          boxSize="50px"
                          objectFit="cover"
                          src={team.flag}
                          alt={team.name}
                        />
                        <Text color="#FEC310">{team.name}</Text>
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </GroupCard>
          );
        })}
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalContent mt="100px">
            <Card
              rounded="xl"
              direction={{ base: 'column', sm: 'row' }}
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '300px' }}
                src={team?.flag}
                alt=""
                roundedTopLeft="xl"
              />

              <Stack>
                <CardBody>
                  <Heading mb="20px" size="md">
                    {team?.name}
                  </Heading>
                  <List spacing={4}>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon as={FaRankingStar} color="teal.400" />
                      Rank: {team?.rank}
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon as={LuUsers} color="teal.400" />
                      NumberOfPlayer: {team?.players.length}
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon as={FcBusinessman} />
                      Referee: {team?.coach?.name}
                    </ListItem>
                  </List>
                </CardBody>
              </Stack>
            </Card>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Grid>
      {roundsStage.length ? (
        roundsStage.map((round, index) => <Round key={index} round={round} />)
      ) : (
        <Center mt="500px">
          <NotData text="data round" />
        </Center>
      )}
    </>
  );
};

export default Groups;
