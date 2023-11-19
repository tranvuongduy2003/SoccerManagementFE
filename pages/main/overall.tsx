'use client';

import MainLayout from '@/components/layout/main';
import { NextPageWithLayout } from '@/types';
import { Box } from '@chakra-ui/react';

//component
import Groups from '@/components/main/components/Group';
import BracketTour from '@/components/main/components/Bracket';
import Referees from '@/components/main/components/Referee';
import Stadiums from '@/components/main/components/Stadium';
import Prize from '@/components/main/components/Prize';
const Overall: NextPageWithLayout = () => {
  return (
    <Box mt="100px">
      <Groups />
      <BracketTour />
      <Referees />
      <Stadiums />
      <Prize/>
    </Box>
  );
};

Overall.Layout = MainLayout;

export default Overall;
