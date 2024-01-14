import { IReferee } from '@/interfaces';
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
import { RefereeItem } from '.';

export interface RefereeModalProps {
  isOpen: any;
  onClose: any;
  referees: IReferee[];
  register: any;
}

export function RefereeModal({
  isOpen,
  onClose,
  referees,
  register
}: RefereeModalProps) {
  function onAcceptSelection() {
    onClose();
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Referees</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {referees.map(item => (
                <GridItem key={item._id}>
                  <Center id="referees">
                    <Checkbox
                      id="referees"
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
                      <RefereeItem key={item._id} referee={item} />
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
