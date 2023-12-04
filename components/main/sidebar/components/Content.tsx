// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';
//   Custom components
import Brand from './Brand';
import Links from './Links';
import SidebarCard from './SidebarCard';
import { IRoute, Title } from '@/interfaces/navigation';

// FUNCTIONS

interface SidebarContentProps {
	routes: (IRoute|Title)[];
}

function SidebarContent(props: SidebarContentProps) {
	const { routes } = props;
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
			<Brand />
			<Stack direction='column' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={routes} />
				</Box>
			</Stack>

			<Box ps='20px' pe={{ lg: '16px', '2xl': '20px' }} mb='20px' borderRadius='30px'>
				<SidebarCard />
			</Box>
		</Flex>
	);
}

export default SidebarContent;
