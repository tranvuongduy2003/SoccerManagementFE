import { useEffect, useState } from 'react';
import { LayoutProps } from '@/interfaces';

// Chakra
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
import Footer from '../main/footer/FooterMain';
import Navbar from '../main/navbar/NavbarMain';
import Sidebar from '../main/sidebar/Sidebar';
import { SidebarContext } from '@/contexts/SidebarContext';

//routes
import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute
} from '@/utils/navigation';
import Router, { useRouter } from 'next/router';

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
import { IRoute, Title } from '@/interfaces/navigation';

interface DashboardLayoutProps extends LayoutProps {
  [x: string]: any;
}

// useRouter().query.tags !== undefined
//           ? useRouter().query.tags
//           : useRouter().query?.teamId[1]

// Custom Chakra theme
export default function MainLayout(props: DashboardLayoutProps) {
  const routes: (IRoute | Title)[] = [
    {
      name: 'LEAGUES'
    },
    {
      name: 'Find League',
      layout: '/league',
      path: '/no',
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
      name: 'Find Team',
      layout: '/competitor',
      path: '/no',
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
      name: 'CHAMPION'
    },
    {
      name: 'Overall',
      layout: `/league/${useRouter().query.id}`,
      path: `/overall/${useRouter().query.tags}`,
      icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />
    },
    {
      name: 'Schedule',
      layout: `/league/${useRouter().query.id}`,
      path: `/schedule/${useRouter().query.tags}`,
      icon: <Icon as={MdSchedule} width="20px" height="20px" color="inherit" />,
      secondary: true
    },
    {
      name: 'LeaderBoard',
      layout: `/league/${useRouter().query.id}`,
      path: `/leaderboard/${useRouter().query.tags}`,
      icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />
    },
    {
      name: 'Competition Team',
      layout: `/league/${useRouter().query.id}`,
      path: `/team/${useRouter().query.tags}`,
      icon: <Icon as={MdGroup} width="20px" height="20px" color="inherit" />
    },
    {
      name: 'Statistic',
      layout: `/league/${useRouter().query.id}`,
      path: `/statistic/${useRouter().query.tags}`,
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
      layout: `/league/${useRouter().query.id}`,
      path: `/vote/${useRouter().query.tags}`,
      icon: <Icon as={MdHowToVote} width="20px" height="20px" color="inherit" />
    }
  ];

  const { children, ...rest } = props;
  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components
  const { onOpen } = useDisclosure();

  useEffect(() => {
    window.document.documentElement.dir = 'ltr';
  });

  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar
        }}
      >
        <Sidebar routes={routes} display="none" {...rest} />
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={'Horizon UI Dashboard PRO'}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          <Box
            mx="auto"
            p={{ base: '20px', md: '30px' }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
            {children}
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}
