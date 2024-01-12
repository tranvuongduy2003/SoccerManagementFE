'use client';

//chakra
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  useDisclosure
} from '@chakra-ui/react';

//icons
import {
  BellIcon,
  ChatIcon,
  CloseIcon,
  EmailIcon,
  HamburgerIcon
} from '@chakra-ui/icons';

//image
import { Logo } from '@/public/images/landing';
import Image from 'next/image';

//routes
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

const Links = [
  { name: 'Overall', href: 'overall' },
  { name: 'Schedule', href: 'schedule' },
  { name: 'LeaderBoard', href: 'leaderboard' },
  {
    name: 'Competition Team',
    href: 'team'
  },
  {
    name: 'Statistic',
    href: 'statistic'
  },
  {
    name: 'Vote',
    href: 'vote'
  }
];

const NavLink = (props: Props) => {
  const { children, href } = props;

  return (
    <Tab
      color={'gray'}
      as={Link}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.100'
      }}
      _selected={{ bg: '#0079FF', color: 'white' }}
      href={href}
    >
      {children}
    </Tab>
  );
};

export default function Navbar(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <Image src={Logo} alt="" className="w-full h-[50px]" />
          </Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Tabs shadow="none">
              <TabList gap="20px">
                {Links.map(link => (
                  <NavLink key={link.name} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </TabList>
            </Tabs>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <div className="flex gap-5 mr-5">
              <BellIcon boxSize={6} color={'gray'} />
              <EmailIcon boxSize={6} color={'gray'} />
              <ChatIcon boxSize={6} color={'gray'} />
            </div>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Edit Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList>
            <div className="flex flex-col ml-5">
              <Text fontSize="lg">Alexander</Text>
              <Text fontSize="sm">Football Player</Text>
            </div>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Tabs>
              <TabList>
                {Links.map(link => (
                  <NavLink key={link.name} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </TabList>
            </Tabs>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
