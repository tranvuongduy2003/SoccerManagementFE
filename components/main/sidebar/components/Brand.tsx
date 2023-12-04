// Chakra imports
import { Flex } from '@chakra-ui/react';

// Custom components
import Image from 'next/image';
import { Logo } from '@/public/images/landing';

//routes
import Link from 'next/link';

export function SidebarBrand() {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Link href="/">
        <Image src={Logo} alt="" className="w-[200px] object-cover" />
      </Link>
    </Flex>
  );
}

export default SidebarBrand;
