// Chakra imports
import { Flex } from '@chakra-ui/react';

// Custom components
import Image from 'next/image';
import { Logo } from '@/public/images/landing';

export function SidebarBrand() {

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Image src={Logo} alt="" className='w-[200px] object-cover'/>
		</Flex>
	);
}

export default SidebarBrand;
