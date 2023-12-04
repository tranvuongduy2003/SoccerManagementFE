import { useState } from 'react';

//chakra-ui
import { Stack, Skeleton, Box, Button } from '@chakra-ui/react';

const SkeletonComponent = () => {
  //   const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Stack padding={4} spacing={1}>
      <Skeleton height="40px">
        <Box>Hello World!</Box>
      </Skeleton>
      <Skeleton
        height="40px"
        bg="green.500"
        color="white"
        fadeDuration={1}
      >
      </Skeleton>
      <Skeleton
        height="40px"
        fadeDuration={4}
        bg="blue.500"
        color="white"
      >
      </Skeleton>
    </Stack>
  );
};

export default SkeletonComponent;
