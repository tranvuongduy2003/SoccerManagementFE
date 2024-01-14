import { IPrize } from '@/interfaces';
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
import { PrizeItem } from '.';

export interface PrizeModalProps {
  isOpen: any;
  onClose: any;
  prizes: IPrize[];
  register: any;
}

export function PrizeModal({
  isOpen,
  onClose,
  prizes,
  register
}: PrizeModalProps) {
  function onAcceptSelection() {
    onClose();
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Prizes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {prizes &&
                prizes.length > 0 &&
                prizes.map(item => (
                  <GridItem key={item._id} id="prizes">
                    <Center>
                      <Checkbox
                        id="prizes"
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
                        <PrizeItem key={item._id} prize={item} />
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
