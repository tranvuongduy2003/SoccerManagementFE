import { IStadium } from '@/interfaces';
import {
  Button,
  Center,
  Checkbox,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { StadiumItem } from '.';

export interface StadiumModalProps {
  isOpen: any;
  onClose: any;
  stadiums: IStadium[];
  register: any;
}

export function StadiumModal({
  isOpen,
  onClose,
  stadiums,
  register
}: StadiumModalProps) {
  function onAcceptSelection() {
    onClose();
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Stadiums</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {stadiums &&
                stadiums.length > 0 &&
                stadiums.map(item => (
                  <GridItem key={item._id} id="Stadiums">
                    <Center>
                      <Checkbox
                        id="Stadiums"
                        {...register}
                        fontSize="sm"
                        value={item._id}
                        flexDirection="column-reverse"
                        gap={2}
                        borderColor={'gray.300'}
                        borderWidth={1}
                        p={2}
                        rounded="md"
                        _hover={{
                          bg: 'gray.50'
                        }}
                        maxWidth={40}
                        width={40}
                      >
                        <StadiumItem key={item._id} stadium={item} />
                      </Checkbox>
                    </Center>
                  </GridItem>
                ))}
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={onAcceptSelection}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
