import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';

// interface ImageProps extends ComponentProps<ChakraComponent<'div', {}>>: {}
interface ImageProps {}

export const Image = (props: any) => {
  const { src, alt, ...rest }: any = props;
  return (
    <Box overflow={'hidden'} position="relative" {...rest}>
      <NextImage objectFit="cover" layout="fill" src={src} alt={alt} />
    </Box>
  );
};
