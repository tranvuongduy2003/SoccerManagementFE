import { useEffect, useState } from 'react';

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Flex,
  Image,
  Button
} from '@chakra-ui/react';

import { CldUploadWidget } from 'next-cloudinary';
import { useForm } from 'react-hook-form';
import { IPlayer } from '@/interfaces';

interface ModalUpdateProps {
  isOpen: any;
  onOpen: any;
  onClose: any;
  player: IPlayer;
  handleUpdatePlayer: (data: IPlayer) => void;
}

export const ModalUpdate = (props: ModalUpdateProps) => {
  const { isOpen, onClose, player, handleUpdatePlayer } = props;

  const [avatar, setAvatar] = useState();


  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue
  } = useForm<any>({
    defaultValues: { ...player, dob: player.dob.toString().split('T')[0] }
  });

  const onSubmit = async (data: any) => {
    handleUpdatePlayer(data);
  };

  useEffect(() => {
    if (avatar) {
      setValue('avatar', avatar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);

  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Update Player</ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex alignItems="center" gap={10}>
              <Flex flexGrow={2}>
                <CldUploadWidget
                  uploadPreset="soccer_upload"
                  options={{
                    folder: 'samples',
                    sources: ['local', 'url', 'google_drive'],
                    multiple: false,
                    styles: {}
                  }}
                  onSuccess={(result: any) => {
                    setAvatar(result.info.secure_url);
                  }}
                  onError={error => {
                    console.log(error);
                  }}
                >
                  {({ open }) => {
                    return (
                      <div className="h-80 w-full md:h-3/5 flex flex-col items-center">
                        <h2 className="font-semibold text-black">Avatar</h2>
                        <div className="relative mt-2 h-[90%] rounded bg-gray-200">
                          <button
                            className="relative h-full w-full"
                            onClick={e => {
                              e.preventDefault();
                              open();
                            }}
                          >
                            <Image
                              src={
                                avatar
                                  ? avatar
                                  : player.avatar ||
                                    '/images/team/playerDefault.png'
                              }
                              objectFit="cover"
                              alt="Default Cover Image"
                              className="rounded h-[100px] w-[100px]"
                            />
                          </button>
                        </div>
                      </div>
                    );
                  }}
                </CldUploadWidget>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Flex alignItems="center" gap={2}>
                  <FormControl mb="3" isInvalid={!!errors?.title}>
                    <FormLabel>Number</FormLabel>
                    <Input
                      id="number"
                      placeholder="Enter number"
                      type="text"
                      {...register('number', {
                        required: 'Number is required'
                      })}
                    />
                    <FormErrorMessage>
                      {`${errors.title?.message}`}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl mb="3" isInvalid={!!errors?.title}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      id="name"
                      placeholder="Enter name"
                      type="text"
                      {...register('name', {
                        required: 'name is required'
                      })}
                    />
                    <FormErrorMessage>
                      {`${errors.title?.message}`}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex alignItems="center" gap={2} w={'full'}>
                  <FormControl mb="3" isInvalid={!!errors?.status}>
                    <FormLabel>Position</FormLabel>
                    <Select
                      id="position"
                      placeholder="Select Position"
                      {...register('position', {
                        required: 'Position is required'
                      })}
                    >
                      <option value="Goalkeeper">Goalkeeper</option>
                      <option value="Defender">Defender</option>
                      <option value="Midfielder">Midfielder</option>
                      <option value="Striker">Striker</option>
                    </Select>
                    <FormErrorMessage>{`${errors.status?.message}`}</FormErrorMessage>
                  </FormControl>
                  <FormControl mb="3" isInvalid={!!errors?.status}>
                    <FormLabel>No Captain</FormLabel>
                    <Select
                      id="captain"
                      placeholder="Select Captain"
                      {...register('captain', {
                        required: 'Captain is required'
                      })}
                    >
                      <option value="Captain">Captain</option>
                      <option value="No Captain">No Captain</option>
                    </Select>
                    <FormErrorMessage>{`${errors.status?.message}`}</FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex alignItems="center" gap={2} w={'full'}>
                  <FormControl mb="3" isInvalid={!!errors?.title}>
                    <FormLabel>Height</FormLabel>
                    <Input
                      id="height"
                      placeholder="Enter height"
                      type="text"
                      {...register('height', {
                        required: 'Height is required'
                      })}
                    />
                    <FormErrorMessage>
                      {`${errors.title?.message}`}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl mb="3" isInvalid={!!errors?.title}>
                    <FormLabel>Dob</FormLabel>
                    <Input
                      id="dob"
                      type="date"
                      {...register('dob', {
                        required: 'Day is required'
                      })}
                    />
                    <FormErrorMessage>
                      {`${errors.title?.message}`}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <FormControl mb="3" isInvalid={!!errors?.title}>
                    <FormLabel>Weight</FormLabel>
                    <Input
                      id="weight"
                      placeholder="Enter weight"
                      type="text"
                      {...register('weight', {
                        required: 'Weight is required'
                      })}
                    />
                    <FormErrorMessage>
                      {`${errors.title?.message}`}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl mb="3" isInvalid={!!errors?.title}>
                    <FormLabel>National</FormLabel>
                    <Input
                      id="national"
                      placeholder="Enter national"
                      type="text"
                      {...register('national', {
                        required: 'National is required'
                      })}
                    />
                    <FormErrorMessage>
                      {`${errors.title?.message}`}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex justifyContent="flex-end" w={'full'}>
                  <Button
                    type="submit"
                    textAlign="right"
                    bgColor={'#A1EEBD'}
                    color="white"
                    _hover={{ bgColor: '#65B741' }}
                  >
                    Save
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
