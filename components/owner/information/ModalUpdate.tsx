import { useEffect, useState } from 'react';

//chark-ra ui
import {
  Box,
  Center,
  Divider,
  Flex,
  Text,
  Image,
  useToast,
  Heading
} from '@chakra-ui/react';
//form
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// import * as Yup from "yup";
import { InputControl, SelectControl, SubmitButton } from '@/components/form';

//route
import { useRouter } from 'next/navigation';

//image
import { CldUploadWidget } from 'next-cloudinary';
import { ITeam } from '@/interfaces';

//react-query
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTeam } from '@/apis';

interface UpdateTeamProps {
  team: ITeam;
}
const UpdateTeam = (props: UpdateTeamProps) => {
  const { team } = props;
  const toast = useToast();
  const methods = useForm({ defaultValues: team, mode: 'onBlur' });

  const [logo, setLogo] = useState<string>('');
  const [uniformOne, setUniformOne] = useState<string>('');
  const [uniformTwo, setUniformTwo] = useState<string>('');
  const [uniformThree, setUniformThree] = useState<string>('');

  useEffect(() => {
    setLogo(team.flag);
    setUniformOne(team.uniform[0]);
    setUniformTwo(team.uniform[1]);
    setUniformThree(team.uniform[2]);
  }, []);

  const queryClient = useQueryClient();
  const updateTeamByOwner = useMutation({
    mutationFn: updateTeam,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast({
        title: 'Update team successfully!',
        description: 'Your team is updated',
        status: 'success',
        duration: 1000,
        position: 'top-right'
      });
    },
    onError: () => {
      toast({
        title: 'Update team failure!',
        description: 'Something went wrong',
        status: 'error',
        duration: 1000,
        position: 'top-right'
      });
    }
  });

  const onSubmit = async (data: any) => {
    const uniforms = [uniformOne, uniformTwo, uniformThree];
    const formData: ITeam = {
      ...data,
      flag: logo,
      uniform: uniforms,
      isPublic: data.isPublic === 'Public' ? true : false,
      representative: data.representative._id
    };
    updateTeamByOwner.mutate(formData);
  };

  return (
    <Box bgColor="white" rounded={3} w="auto" py={2} px={5}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Flex gap={4}>
            <Flex flexDirection="column" color="black">
              <CldUploadWidget
                uploadPreset="soccer_upload"
                options={{
                  folder: 'samples',
                  sources: ['local', 'url', 'google_drive'],
                  multiple: false,
                  styles: {}
                }}
                onSuccess={(result: any) => {
                  setLogo(result.info.secure_url);
                }}
                onError={error => {
                  console.log(error);
                }}
              >
                {({ open }) => {
                  return (
                    <div className="h-80 w-full md:h-3/5">
                      <h2 className="font-semibold">Logo</h2>
                      <div className="relative mt-2 h-[90%] w-full rounded bg-gray-200">
                        <button
                          className="relative h-full w-full"
                          onClick={e => {
                            e.preventDefault();
                            open();
                          }}
                        >
                          <Image
                            src={
                              logo
                                ? logo
                                : methods.watch().flag ||
                                  '/images/common/team.png'
                            }
                            objectFit="cover"
                            alt="Default Cover Image"
                            className="rounded h-[250px] w-[250px]"
                          />
                        </button>
                      </div>
                    </div>
                  );
                }}
              </CldUploadWidget>
            </Flex>
            <Flex flexDirection="column" w="400px" gap={1}>
              <InputControl
                type="text"
                name="name"
                label="Name"
                placeholder="Name"
                color="black"
              />
              <InputControl
                readonly={true}
                type="text"
                name="representative"
                label="Representative"
                color="black"
                value="Anh Quoc"
              />
              <Flex gap={4}>
                <SelectControl
                  w={3 / 5}
                  color="black"
                  name="level"
                  label="Level"
                  selectProps={{ placeholder: 'Select option' }}
                >
                  <option value="PROFESSIONAL">Professional</option>
                  <option value="SEMIPROFESSIONAL">Semiprofessional</option>
                  <option value="FUN">Fun</option>
                </SelectControl>
                <SelectControl
                  w={2 / 5}
                  color="black"
                  name="isPublic"
                  label="Status"
                  selectProps={{ placeholder: 'Select option' }}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </SelectControl>
              </Flex>
              <InputControl
                type="text"
                placeholder="Enter Activity area"
                name="area"
                label="Activity area"
                color="black"
              />
            </Flex>
          </Flex>
          <Divider py="2" />
          <Flex alignItems="center" justifyContent="center">
            <CldUploadWidget
              uploadPreset="soccer_upload"
              options={{
                folder: 'samples',
                sources: ['local', 'url', 'google_drive'],
                multiple: false,
                styles: {}
              }}
              onSuccess={(result: any) => {
                setUniformOne(result.info.secure_url);
                console.log(
                  'modalData backgroundImage:: ' + result.info.secure_url
                );
              }}
              onError={error => {
                console.log(error);
              }}
            >
              {({ open }) => {
                return (
                  <div className="h-80 w-full md:h-3/5 flex flex-col items-center">
                    <h2 className="font-semibold text-black">Uniform 1</h2>
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
                            uniformOne
                              ? uniformOne
                              : methods.watch().uniform[0] ||
                                '/images/common/shirt.png'
                          }
                          objectFit="cover"
                          alt="Default Cover Image"
                          className="rounded h-[100px] w-[100px] object-cover"
                        />
                      </button>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
            <CldUploadWidget
              uploadPreset="soccer_upload"
              options={{
                folder: 'samples',
                sources: ['local', 'url', 'google_drive'],
                multiple: false,
                styles: {}
              }}
              onSuccess={(result: any) => {
                setUniformTwo(result.info.secure_url);
              }}
              onError={error => {
                console.log(error);
              }}
            >
              {({ open }) => {
                return (
                  <div className="h-80 w-full md:h-3/5 flex flex-col items-center">
                    <h2 className="font-semibold text-black">Uniform 2</h2>
                    <div className="relative mt-2 h-[90%]  rounded bg-gray-200">
                      <button
                        className="relative h-full w-full"
                        onClick={e => {
                          e.preventDefault();
                          open();
                        }}
                      >
                        <Image
                          src={
                            uniformTwo
                              ? uniformTwo
                              : methods.watch().uniform[1] ||
                                '/images/common/shirt.png'
                          }
                          objectFit="cover"
                          alt="Default Cover Image"
                          className="rounded h-[100px] w-[100px] object-contain"
                        />
                      </button>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
            <CldUploadWidget
              uploadPreset="soccer_upload"
              options={{
                folder: 'samples',
                sources: ['local', 'url', 'google_drive'],
                multiple: false,
                styles: {}
              }}
              onSuccess={(result: any) => {
                setUniformThree(result.info.secure_url);
              }}
              onError={error => {
                console.log(error);
              }}
            >
              {({ open }) => {
                return (
                  <div className="h-80 w-full md:h-3/5 flex flex-col items-center">
                    <h2 className="font-semibold text-black">Uniform 3</h2>
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
                            uniformThree
                              ? uniformThree
                              : methods.watch().uniform[2] ||
                                '/images/common/shirt.png'
                          }
                          objectFit="cover"
                          alt="Default Cover Image"
                          className="rounded h-[100px] w-[100px] object-contain"
                        />
                      </button>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
          </Flex>
          <Center>
            <SubmitButton
              color="#FFFFFF"
              bgColor="#A1EEBD"
              _hover={{ bgColor: '#65B741' }}
              type="submit"
            >
              Save
            </SubmitButton>
          </Center>
        </form>
      </FormProvider>
    </Box>
  );
};

export default UpdateTeam;
