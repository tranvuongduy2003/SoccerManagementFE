'use client';

import { ITeam } from '@/interfaces';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

export interface TeamItemProps {
  team: ITeam;
}

export function TeamItem({ team }: TeamItemProps) {
  return (
    <div>
      <Box>
        <Flex flexDirection="column" alignItems="center" gap={2}>
          <Box position="relative" height={10} width={10}>
            <Image src={team.flag} alt="team image" fill objectFit="contain" />
          </Box>
          <Text align={'center'}>{team.name}</Text>
        </Flex>
      </Box>
    </div>
  );
}
