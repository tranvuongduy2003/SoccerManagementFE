import React from 'react';

// chakra imports
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { renderThumb, renderTrack, renderView } from '../scrollbar/Scrollbar';
import Content from './components/Content';

// Assets
import { IRoute, Title } from '@/interfaces/navigation';
import { isWindowAvailable } from '@/utils/navigation';
import { IoMenuOutline } from 'react-icons/io5';

import {
  MdBarChart,
  MdGroup,
  MdHome,
  MdHowToVote,
  MdOutlineAdminPanelSettings,
  MdOutlineManageAccounts,
  MdOutlineStackedLineChart,
  MdSchedule
} from 'react-icons/md';

interface SidebarResponsiveProps {
  routes: (IRoute | Title)[];
}

interface SidebarProps extends SidebarResponsiveProps {
  [x: string]: any;
}

function Sidebar(props: SidebarProps) {
  const { routes } = props;

  let variantChange = '0.2s linear';
  let shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset'
  );
  // Chakra Color Mode
  let sidebarBg = useColorModeValue('white', 'navy.800');
  let sidebarMargins = '0px';

  // SIDEBAR
  return (
    <Box display={{ sm: 'none', xl: 'block' }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="300px"
        h="100vh"
        m={sidebarMargins}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <Content routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  );
}

// FUNCTIONS

export function SidebarResponsive(props: SidebarResponsiveProps) {
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

  let sidebarBackgroundColor = useColorModeValue('white', 'navy.800');
  let menuColor = useColorModeValue('gray.400', 'white');
  // // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  return (
    <Flex display={{ sm: 'flex', xl: 'none' }} alignItems="center">
      <Flex ref={btnRef} w="max-content" h="max-content" onClick={onOpen}>
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          my="auto"
          w="20px"
          h="20px"
          me="10px"
          _hover={{ cursor: 'pointer' }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={
          isWindowAvailable() && window.document.documentElement.dir === 'rtl'
            ? 'right'
            : 'left'
        }
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w="285px" maxW="285px" bg={sidebarBackgroundColor}>
          <DrawerCloseButton
            zIndex="3"
            onClick={onClose}
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          />
          <DrawerBody maxW="285px" px="0rem" pb="0">
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <Content routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
// PROPS

export default Sidebar;
