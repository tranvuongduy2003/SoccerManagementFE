'use client';

import { IStadium } from '@/interfaces';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

export interface StadiumItemProps {
  stadium: IStadium;
}

export function StadiumItem({ stadium }: StadiumItemProps) {
  return (
    <div>
      <Box>
        <Flex flexDirection="column" alignItems="center" gap={2}>
          <Box position="relative" height={24} width={36} overflow="hidden">
            <Image
              src={stadium.avatar}
              alt="Referee image"
              fill
              objectFit="cover"
              style={{
                borderRadius: '4px'
              }}
            />
          </Box>
          <Text align={'center'}>{stadium.name}</Text>
        </Flex>
      </Box>
    </div>
  );
}
