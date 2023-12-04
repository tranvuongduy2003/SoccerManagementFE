/* eslint-disable */

// chakra imports
import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { IRoute, Title } from '@/interfaces/navigation';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

interface SidebarLinksProps {
  routes: (IRoute | Title)[] | any;
}

export function SidebarLinks(props: SidebarLinksProps) {
  const router = useRouter();
  const { routes } = props;

  //   Chakra color mode
  const pathname = usePathname();

  // let activeColor = useColorModeValue('gray.700', '#0079FF');
  let activeColor = '#39A7FF';
  let inactiveColor = useColorModeValue(
    'secondaryGray.600',
    'secondaryGray.600'
  );
  let activeIcon = useColorModeValue('brand.500', 'white');
  let textColor = useColorModeValue('secondaryGray.500', 'white');
  let brandColor = useColorModeValue('brand.500', 'brand.400');

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName.slice(0,6));
    },
    [pathname]
  );

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, index: number) =>
      route.icon ? (
        <Button
          position="relative"
          textAlign="left"
          w="full"
          bgColor="transparent"
          key={index}
          onClick={() => router.push(route.layout + route.path)}
        >
          <Box position="absolute" left="0">
            <HStack
              spacing={activeRoute(route?.path.toLowerCase()) ? '22px' : '26px'}
              py="5px"
              ps="10px"
              rounded="10px"
            >
              <Flex w="100%" alignItems="center" justifyContent="center">
                <Box
                  color={
                    activeRoute(route.path.toLowerCase()) 
                      ? '#0079FF'
                      : textColor
                  }
                  me="20px"
                >
                  {route.icon}
                </Box>
                <Text
                  me="auto"
                  color={
                    activeRoute(route.path.toLowerCase())
                      ? activeColor
                      : textColor
                  }
                  fontWeight={
                    activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'
                  }
                >
                  {route.name}
                </Text>
              </Flex>
              <Box
                h="36px"
                w="4px"
                bg={
                  activeRoute(route.path.toLowerCase())
                    ? brandColor
                    : 'transparent'
                }
                borderRadius="5px"
              />
            </HStack>
          </Box>
        </Button>
      ) : (
        <Box>
          <HStack py="5px" ps="5px">
            <Text me="auto" color="#0079FF" fontWeight="bold">
              {route.name}
            </Text>
            <Box h="36px" w="4px" bg="brand.400" borderRadius="5px" />
          </HStack>
        </Box>
      )
    );
  };
  //  BRAND
  return <>{createLinks(routes)}</>;
}

export default SidebarLinks;
