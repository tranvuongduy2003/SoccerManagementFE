import { Button, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
// import { Image } from '../../image/Image';
import avatar from '@/public/images/landing/players/player-1.png'
import Image from 'next/image';
export default function SidebarDocs() {
  const bgColor = 'linear-gradient(135deg, #39A7FF 0%, #0079FF 100%)';
  const borderColor = useColorModeValue('white', 'navy.800');

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={bgColor}
      borderRadius="30px"
      me="20px"
      position="relative"
    >
      <Flex
        border="5px solid"
        borderColor={borderColor}
        bg="linear-gradient(135deg, #39A7FF 0%, #0079FF 100%)"
        borderRadius="50%"
        w="74px"
        h="74px"
        align="center"
        justify="center"
        mx="auto"
        position="absolute"
        left="50%"
        top="-47px"
        transform="translate(-50%, 0%)"
      >
        <Image alt="" src={avatar} className='w-full h-full rounded-full object-cover'/>
      </Flex>
      <Flex
        direction="column"
        mb="6px"
        align="center"
        justify="center"
        px="15px"
        pt="20px"
      >
        <Text
          fontSize={{ base: 'lg', xl: '18px' }}
          color="white"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          px="10px"
          mb="14px"
        >
          See more information
        </Text>
        <Text
          fontSize="14px"
          color={'white'}
          px="10px"
          mb="14px"
          textAlign="center"
        >
          Provide you with complete information with Wekipedia
        </Text>
      </Flex>
      <Link href="https://vi.wikipedia.org/wiki/Gi%E1%BA%A3i_v%C3%B4_%C4%91%E1%BB%8Bch_b%C3%B3ng_%C4%91%C3%A1_th%E1%BA%BF_gi%E1%BB%9Bi_2022">
        <Button
          bg="whiteAlpha.300"
          _hover={{ bg: 'whiteAlpha.200' }}
          _active={{ bg: 'whiteAlpha.100' }}
          mb={{ sm: '16px', xl: '24px' }}
          color={'white'}
          fontWeight="regular"
          fontSize="sm"
          minW="185px"
          mx="auto"
        >
          See more information
        </Button>
      </Link>
    </Flex>
  );
}
