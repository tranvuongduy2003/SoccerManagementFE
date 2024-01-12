import { useRef } from 'react';
//chakra-ui
import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogCloseButton
} from '@chakra-ui/react';

interface ModalDeleteProps {
  isOpen: any;
  onOpen: any;
  onClose: any;
  cancelRef: any;
  handleRemovePlayer: () => void;
}

const ModalDelete = (props: ModalDeleteProps) => {
  const { isOpen, onClose, cancelRef, handleRemovePlayer } = props;

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Confirmation?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Do you really want to remove this member from the team?
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            No
          </Button>
          <Button colorScheme="red" ml={3} onClick={handleRemovePlayer}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalDelete;
