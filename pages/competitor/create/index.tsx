import { useState } from 'react';

//layout
import { HomeLayout } from '@/components/layout';
import { ITeam, InitTeam, NextPageWithLayout } from '@/interfaces';

//chark-ra ui
import { Box, Center, Divider, Flex, Text, Image } from '@chakra-ui/react';

//form
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// import * as Yup from "yup";
import { InputControl, SelectControl, SubmitButton } from '@/components/form';

//route
import { useRouter } from 'next/navigation';

//image
import { CldUploadWidget } from 'next-cloudinary';

const Create: NextPageWithLayout = () => {
  const methods = useForm({ defaultValues: InitTeam, mode: 'onBlur' });
  const router = useRouter();
  const [logo, setLogo] = useState<string>('');
  const [uniformOne, setUniformOne] = useState<string>('');
  const [uniformTwo, setUniformTwo] = useState<string>('');
  const [uniformThree, setUniformThree] = useState<string>('');

  const onSubmit: SubmitHandler<ITeam> = async (data: ITeam) => {
    const uniforms = [uniformOne, uniformTwo, uniformThree];
    const formData = {
      ...data,
      flag: logo,
      uniform: uniforms,
      representative: '12345'
    };
    console.log(formData);
    router.push('/competitor/2/profile');
  };
  return (
    <div className="w-full h-screen text-white relative flex items-center justify-center">
      <Box bgColor="white" rounded={3} w="auto" py={2} px={5} mt="100px">
        <Flex flexDirection="column">
          <Text color="black" fontWeight={700} fontSize="2xl">
            Create team
          </Text>
          <Text color="yellow.600">
            Please enter valid information for the required fields
          </Text>
        </Flex>
        <Divider py="2" />
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
                      <div className="h-80 w-full md:h-3/5">
                        <h2 className="font-semibold">Logo</h2>
                        <div className="relative mt-2 h-[90%] w-full rounded bg-gray-200">
                          <button
                            className="relative h-full w-full"
                            onClick={() => {
                              open();
                            }}
                          >
                            <Image
                              src={logo ? logo : '/images/common/team.png'}
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
                  // placeholder="Enter Representative"
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
                    <option value="PUBLIC">Public</option>
                    <option value="PRIVATE">Private</option>
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
                          onClick={() => {
                            open();
                          }}
                        >
                          <Image
                            src={
                              uniformOne
                                ? uniformOne
                                : '/images/common/shirt.svg'
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
                      <h2 className="font-semibold text-black">Uniform 2</h2>
                      <div className="relative mt-2 h-[90%]  rounded bg-gray-200">
                        <button
                          className="relative h-full w-full"
                          onClick={() => {
                            open();
                          }}
                        >
                          <Image
                            src={
                              uniformTwo
                                ? uniformTwo
                                : '/images/common/shirt.svg'
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
                      <h2 className="font-semibold text-black">Uniform 3</h2>
                      <div className="relative mt-2 h-[90%] rounded bg-gray-200">
                        <button
                          className="relative h-full w-full"
                          onClick={() => {
                            open();
                          }}
                        >
                          <Image
                            src={
                              uniformThree
                                ? uniformThree
                                : '/images/common/shirt.svg'
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
            <Center>
              <SubmitButton type="submit">Save</SubmitButton>
            </Center>
          </form>
        </FormProvider>
      </Box>
    </div>
  );
};

Create.Layout = HomeLayout;

export default Create;
