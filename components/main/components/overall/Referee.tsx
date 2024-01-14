//chakra-ui
import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
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
import { FcDribbble, FcLike, FcMindMap } from 'react-icons/fc';

//interface
import { IReferee } from '@/interfaces';

//routes
import moment from 'moment';
import Link from 'next/link';

//component
import SkeletonComponent from '@/components/common/skeleton';

interface RefereeProps {
  referee: IReferee;
}

const Referee = (props: RefereeProps) => {
  const { referee } = props;
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={
            referee.avatar
              ? referee.avatar
              : 'https://www.vff.org.vn/wp-content/uploads/2023/06/var1-768x512.jpg'
          }
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="w-full h-[200px] object-cover"
        />
        <Stack mt="3" spacing="3">
          <Heading size="md">{referee.name}</Heading>
          <List spacing={4}>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={FcLike} />
              Age: {referee.age}
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={FcDribbble} color="teal.400" />
              {moment(referee.dob).format('DD/MM/YYYY')}
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={FcMindMap} color="teal.400" />
              nation: {referee.nation}
            </ListItem>
          </List>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link
            href="/"
            className="bg-blue-500 px-4 py-2 text-white font-semibold rounded-lg"
          >
            View
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

interface RefereesProps {
  referees: IReferee[];
}

const Referees = (props: RefereesProps) => {
  const { referees } = props;
  return (
    <Box>
      <Heading size="xl" mb="20px">
        Referees
      </Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(15rem, 1fr))"
        gap="5"
        justifyContent="center"
      >
        {referees.length ? (
          referees.map((referee, index) => (
            <Referee key={index} referee={referee} />
          ))
        ) : (
          <SkeletonComponent />
        )}
      </Grid>
    </Box>
  );
};

export default Referees;
