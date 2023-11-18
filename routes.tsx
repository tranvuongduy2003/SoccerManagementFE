import { Icon } from '@chakra-ui/react';
import {
  MdOutlineAdminPanelSettings,
  MdOutlineManageAccounts,
  MdHome,
  MdSchedule,
  MdBarChart,
  MdGroup,
  MdOutlineStackedLineChart,
  MdHowToVote
} from 'react-icons/md';
import { IRoute, Title } from '@/types/navigation';

const routes: (IRoute | Title)[] = [
  {
    name: 'MANAGE',
  },
  {
    name: 'Admin',
    layout: '/admin',
    path: '/dashboard',
    icon: (
      <Icon
        as={MdOutlineAdminPanelSettings}
        width="20px"
        height="20px"
        color="inherit"
      />
    )
  },
  {
    name: 'OwnerTeam',
    layout: '/owner',
    path: '/dashboard',
    icon: (
      <Icon
        as={MdOutlineManageAccounts}
        width="20px"
        height="20px"
        color="inherit"
      />
    )
  },
  {
    name: 'CHAMPION',
  },
  {
    name: 'Overall',
    layout: '/main',
    path: '/overall',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />
  },
  {
    name: 'Schedule',
    layout: '/main',
    path: '/schedule',
    icon: <Icon as={MdSchedule} width="20px" height="20px" color="inherit" />,
    secondary: true
  },
  {
    name: 'LeaderBoard',
    layout: '/main',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/leaderboard'
  },
  {
    name: 'Competition Team',
    layout: '/main',
    path: '/team',
    icon: <Icon as={MdGroup} width="20px" height="20px" color="inherit" />
  },
  {
    name: 'Statistic',
    layout: '/main',
    path: '/statistic',
    icon: (
      <Icon
        as={MdOutlineStackedLineChart}
        width="20px"
        height="20px"
        color="inherit"
      />
    )
  },
  {
    name: 'Vote',
    layout: '/main',
    path: '/vote',
    icon: <Icon as={MdHowToVote} width="20px" height="20px" color="inherit" />
  }
];

export default routes;
