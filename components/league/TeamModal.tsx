import { ITeam } from '@/interfaces';
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
import { TeamItem } from '.';
import { useEffect, useState } from 'react';

export interface TeamModalProps {
  isOpen: any;
  onClose: any;
  teams: ITeam[];
  register: any;
  selectedTeamIds: string[];
  disabled: boolean;
}

export function TeamModal({
  isOpen,
  onClose,
  teams,
  register,
  selectedTeamIds,
  disabled = false
}: TeamModalProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  function onAcceptSelection() {
    onClose();
  }

  useEffect(() => {
    if (disabled) {
      setSelectedIds(selectedTeamIds);
    }
  }, [disabled]);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Teams</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {teams.map(item => (
                <GridItem key={item._id} id="teams">
                  <Center>
                    <Checkbox
                      disabled={
                        selectedIds.includes(item._id!) ? false : disabled
                      }
                      id="teams"
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
                      <TeamItem key={item._id} team={item} />
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
