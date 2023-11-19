import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
  Grid,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { GrCapacity } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";

import React from 'react';

const Stadium = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2022_FIFA_World_Cup_at_Al_Thumama_Stadium.jpg/300px-2022_FIFA_World_Cup_at_Al_Thumama_Stadium.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="w-full h-[200px]"
        />
        <Stack mt="3" spacing="3">
          <Heading size="md">Lusail Iconic</Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              location: Lusail, Qatar
            </ListItem>
            <ListItem>
              <ListIcon as={GrCapacity} color="teal.400" />
              capaciy: 88.966
            </ListItem>
            <ListItem>
              <ListIcon as={IoLocation} color="teal.400" />
              coordinate: 25°25′15,1″B 51°29′25,4″Đ
            </ListItem>
          </List>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            View
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

const Stadiums = () => {
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
        <Stadium />
        <Stadium />
        <Stadium />
        <Stadium />
        <Stadium />
        <Stadium />
      </Grid>
    </Box>
  );
};

export default Stadiums;
