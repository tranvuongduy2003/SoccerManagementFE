import React, { useState } from 'react';

//chakra-ui
import {
  Grid,
  Box,
  chakra,
  Flex,
  Image,
  Text,
  ModalContent,
  Button,
  Modal,
  ModalFooter,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  ListIcon,
  ListItem,
  List,
  useDisclosure
} from '@chakra-ui/react';

//api


//type
import { ITable, ITeam } from '@/interfaces';

//icon
import { FcBusinessman } from 'react-icons/fc';
import { LuUsers } from 'react-icons/lu';
import { FaRankingStar } from 'react-icons/fa6';

interface GroupProps {
  groups: ITable[];
}

const Group = (props: GroupProps) => {
  const GroupCard = chakra(Box, {
    baseStyle: {
      bg: '#75C2F6',
      borderRadius: '6px',
      padding: '24px',
      display: 'flex',
      textAlign: 'center'
    }
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [team, setTeam] = useState<ITeam>();

  const openModal = (team: ITeam) => {
    setTeam(team);
    onOpen();
  };

  const { groups } = props;

  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(15rem, 1fr))"
      gap="5"
      justifyContent="center"
    >
      {groups.map((group: ITable, index: number) => {
        return (
          <GroupCard key={index} border="2px" borderColor="#1077C3">
            <Flex flexDirection="column">
              <Text color="#FFFFFF" fontSize="2xl">
                Group {group.name}
              </Text>
              {group.teams.map((team: ITeam, index: any) => {
                return (
                  <>
                    <Flex
                      onClick={() => openModal(team)}
                      alignItems="center"
                      gap="10px"
                      key={index}
                      _hover={{
                        bg: 'gray.300',
                        cursor: 'pointer',
                        rounded: 'xl'
                      }}
                    >
                      <Image
                        borderRadius="50%"
                        boxSize="50px"
                        objectFit="contain"
                        src={team.flag}
                        alt={team.name}
                      />
                      <Text color="#FEC310">{team.name}</Text>
                    </Flex>
                  </>
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
                    Referee: {team?.coach.name}
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
  );
};

const Groups = () => {
  return (
    <Box mb="20px">
      <Text fontSize="4xl" textAlign="center">
        World Cup Qatar 2022: Groups
      </Text>
      {/* {data ? (
        <Flex direction="column" pt={{ base: '120px', md: '40px' }}>
          <Group groups={data} />
        </Flex>
      ) : (
        <Text>Loading</Text>
      )} */}
    </Box>
  );
};

export default Groups;
