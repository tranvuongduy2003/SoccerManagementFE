import React from 'react';
import { useState } from 'react';
import { Grid, Box, chakra, Flex, Image, Text } from '@chakra-ui/react';
import quatar from '@/data/groups';

const Group = ({ groups }: any) => {
  const GroupCard = chakra(Box, {
    baseStyle: {
      bg: '#75C2F6',
      borderRadius: '6px',
      padding: '24px',
      display: 'flex',
      textAlign: 'center'
    }
  });
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(15rem, 1fr))"
      gap="5"
      justifyContent="center"
    >
      {Object.entries(groups).map((group: any, index: any) => {
        return (
          <GroupCard key={index} border="2px" borderColor="#1077C3">
            <Flex flexDirection="column">
              <Text color="#FFFFFF" fontSize="2xl">
                Group {group[0]}
              </Text>
              {group[1].teams.map((team: any, index: any) => {
                return (
                  <Flex alignItems="center" gap="10px" key={index}>
                    <Image
                      borderRadius="50%"
                      boxSize="50px"
                      objectFit="contain"
                      src={team.flag}
                      alt={team.name}
                    />
                    <Text color="#FEC310">{team.name}</Text>
                  </Flex>
                );
              })}
            </Flex>
          </GroupCard>
        );
      })}
    </Grid>
  );
};

const Groups = () => {
  const [groups] = useState(quatar);

  return (
    <Box>
      <Text fontSize="4xl" textAlign="center">
        World Cup Qatar 2022: Groups
      </Text>
      <Group groups={groups} />
    </Box>
  );
};

export default Groups;
