import { useState } from 'react';

//layout
import { HomeLayout } from '@/components/layout';
import { ITeam, InitTeam, NextPageWithLayout } from '@/interfaces';

//chark-ra ui
import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react';

//image
import team from '@/public/images/common/team.png';
import uniform from '@/public/images/common/shirt.svg';

//form
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// import * as Yup from "yup";
import {
  InputControl,
  SelectControl,
  FileInput,
  SubmitButton
} from '@/components/form';

//route
import { useRouter } from 'next/navigation';

// const defaultValues = {
//   firstName: '',
//   lastName: '',
//   age: 0,
//   phoneNumber: '',
//   confirmationPin: '',
//   website: '',
//   willingToRelocate: true,
//   favoriteColor: '',
//   preferredShift: ['afternoons'],
//   additionalNotes: '',
//   previousExperience: false,
//   callbackTime: '',
//   excitementScale: 5,
//   password: ''
// };

// We're using yup validation for this demo but you can choose any other react hook form supported validation provider
// const validationSchema = Yup.object({
//     name: Yup.string().required("First Name is required"),
// });

const Create: NextPageWithLayout = () => {
  const methods = useForm({ defaultValues: InitTeam, mode: 'onBlur' });
  const router = useRouter();
  const [image, setImageUrl] = useState<string>('');

  const { control } = methods;

  const onSubmit: SubmitHandler<ITeam> = async (data: ITeam) => {
    // console.log(data);
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
                <FileInput
                  // control={control}
                  round="2px"
                  width={300}
                  label="Avatar"
                  color="black"
                  name="flag"
                  setImageUrl={setImageUrl}
                  localImageUrl={team}
                  setError={() => {}}
                  onChange={e => {}}
                  setLocalImageUrl={uniform}
                />
              </Flex>
              <Flex flexDirection="column" w="400px" gap={1}>
                <InputControl
                  // control={control}
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Name"
                  color="black"
                />
                <InputControl
                  // control={control}
                  type="text"
                  placeholder="Enter Representative"
                  name="representative"
                  label="Representative"
                  color="black"
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
                  // control={control}
                  type="text"
                  placeholder="Enter Activity area"
                  name="area"
                  label="Activity area"
                  color="black"
                />
              </Flex>
            </Flex>
            <Divider py="2" />
            <Center>
              <FileInput
                // control={control}
                round="2px"
                width={90}
                label="Uniform 1"
                color="black"
                name="uniform"
                setImageUrl={setImageUrl}
                localImageUrl={uniform}
                setError={() => {}}
                onChange={e => {}}
                setLocalImageUrl={uniform}
              />
              <FileInput
                // control={control}
                round="2px"
                width={90}
                label="Uniform 2"
                color="black"
                name="uniform"
                setImageUrl={setImageUrl}
                localImageUrl={uniform}
                setError={() => {}}
                onChange={e => {}}
                setLocalImageUrl={uniform}
              />
              <FileInput
                // control={control}
                round="2px"
                width={90}
                label="Uniform 3"
                color="black"
                name="uniform"
                setImageUrl={setImageUrl}
                localImageUrl={uniform}
                setError={() => {}}
                onChange={e => {}}
                setLocalImageUrl={uniform}
              />
            </Center>
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
