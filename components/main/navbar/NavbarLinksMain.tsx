'use client';
// Chakra Imports
import {
  Avatar,
  Button,
  Center,
  Flex,
  Icon,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
// Custom Components
import { SearchBar } from './searchBar/SearchBar';
// Assets
import { useRouter } from 'next/router';
import { LuLogIn, LuLogOut } from 'react-icons/lu';
import { AuthContext } from '@/contexts/AuthProvider';
import { useContext } from 'react';
export default function HeaderLinks(props: {
  secondary: boolean;
  onOpen: any;
  fixed: any;
}) {
  const router = useRouter();

  const authContext = useContext(AuthContext);
  const { getUser, loggedIn, logOut } = authContext!;
  const user = getUser();

  const { secondary } = props;

  let menuBg = useColorModeValue('white', 'navy.800');
  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
  );

  return (
    <Flex
      w={{ sm: '100%', md: 'auto' }}
      alignItems="center"
      flexDirection="row"
      bg={menuBg}
      flexWrap={secondary ? { base: 'wrap', md: 'nowrap' } : 'unset'}
      p="10px"
      borderRadius="30px"
      boxShadow={shadow}
    >
      <SearchBar
        mb={() => {
          if (secondary) {
            return { base: '10px', md: 'unset' };
          }
          return 'unset';
        }}
        me="10px"
        borderRadius="30px"
      />
      {loggedIn && user ? (
        <Flex alignItems="center" gap={4}>
          <Avatar src={user?.avatar} name={user?.username || 'AV'} />
          <Button
            w="80px"
            p="10px"
            bgColor="#39A7FF"
            style={{ position: 'relative' }}
            _hover={{ cursor: 'pointer', bg: '#0079FF' }}
            onClick={e => {
              e.preventDefault();
              logOut();
            }}
            gap={2}
          >
            <Icon as={LuLogOut} color="white" />
            <Text fontSize={'xs'} fontWeight="bold" color={'white'}>
              Logout
            </Text>
          </Button>
        </Flex>
      ) : (
        <Flex alignItems="center" gap={2}>
          <Button
            w="80px"
            p="10px"
            bgColor="#39A7FF"
            style={{ position: 'relative' }}
            _hover={{ cursor: 'pointer', bg: '#0079FF' }}
            onClick={() => {
              router.push('/auth/signin');
            }}
          >
            <Center
              top={0}
              left={0}
              position={'absolute'}
              w={'100%'}
              h={'100%'}
            >
              <Link
                href="/auth/signin"
                className="flex items-center gap-2"
                textDecoration={'none'}
                _hover={{
                  textDecoration: 'none'
                }}
              >
                <Icon as={LuLogIn} color="white" />
                <Text fontSize={'xs'} fontWeight="bold" color={'white'}>
                  Sign In
                </Text>
              </Link>
            </Center>
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
