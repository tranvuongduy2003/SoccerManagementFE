'use client';

import { IReferee } from '@/interfaces';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

export interface RefereeItemProps {
  referee: IReferee;
}

export function RefereeItem({ referee }: RefereeItemProps) {
  return (
    <div>
      <Box>
        <Flex flexDirection="column" alignItems="center" gap={2}>
          <Box position="relative" height={24} width={36} overflow="hidden">
            <Image
              src={referee.avatar}
              alt="Referee image"
              fill
              objectFit="cover"
              style={{
                borderRadius: '4px'
              }}
            />
          </Box>
          <Text align={'center'}>{referee.name}</Text>
        </Flex>
      </Box>
    </div>
  );
}
