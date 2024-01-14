//chakra-ui
import {
  Box,
  Card,
  CardBody,
  Divider,
  Grid,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack
} from '@chakra-ui/react';

//icon
import { CheckCircleIcon } from '@chakra-ui/icons';
import { GrCapacity } from 'react-icons/gr';
import { IoLocation } from 'react-icons/io5';

//interface
import { IStadium } from '@/interfaces';

//component
import SkeletonComponent from '@/components/common/skeleton';

interface StadiumProps {
  stadium: IStadium;
}

const Stadium = (props: StadiumProps) => {
  const { stadium } = props;

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={
            stadium.avatar
              ? stadium.avatar
              : 'https://lh3.googleusercontent.com/p/AF1QipPqciAfuhr0AdYyLbSoqQUcgsFDu2ja3S7evGrb=s1360-w1360-h1020'
          }
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="w-full h-[200px] object-cover"
        />
        <Stack mt="3" spacing="3">
          <Heading size="md">{stadium.name}</Heading>
          <List spacing={4}>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              location: {stadium.location}
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={GrCapacity} color="teal.400" />
              capaciy: {stadium.capacity}
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={IoLocation} color="teal.400" />
              coordinate: {stadium.coordinate}
            </ListItem>
          </List>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

interface StadiumsProps {
  stadiums: IStadium[];
}

const Stadiums = (props: StadiumsProps) => {
  const { stadiums } = props;
  return (
    <Box>
      <Heading size="xl" my="20px">
        Stadiums
      </Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
        gap="5"
        justifyContent="center"
      >
        {stadiums.length ? (
          stadiums.map((stadium, index) => (
            <Stadium key={index} stadium={stadium} />
          ))
        ) : (
          <SkeletonComponent />
        )}
      </Grid>
    </Box>
  );
};

export default Stadiums;
