//chakra-ui
import { Box } from '@chakra-ui/react';

//components
import Statistic from '@/components/main/components/overall/Statistic';
import Referees from '@/components/main/components/overall/Referee';
import Stadiums from '@/components/main/components/overall/Stadium';
import Prize from '@/components/main/components/overall/Prize';

//store
import { useTournamentStore } from '@/stores';

const OverallComponent = () => {
  const tournament = useTournamentStore(state => state.tournament);

  return (
    <Box mt="100px">
      <Statistic
        id={tournament.statistical}
      />
      <Referees referees={tournament.referees} />
      <Stadiums stadiums={tournament.stadiums} />
      <Prize prizes={tournament.prizes} />
    </Box>
  );
};

export default OverallComponent;
