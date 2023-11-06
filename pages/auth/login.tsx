'use client';

import { AuthLayout } from '@/components/layout';
import { LoginPayload, NextPageWithLayout } from '@/types';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login: NextPageWithLayout = () => {
  const router = useRouter();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 1. Define your form.
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  // 2. Define a submit handler.
  async function onSubmit(values: LoginPayload) {
    setIsLoading(true);
    try {
      const { email, password } = values;

      // TODO: call login api

      setIsLoading(false);
      toast({
        title: 'Login successfully!',
        description: 'You will be redirected to Home page',
        status: 'success',
        duration: 500,
        onCloseComplete: () => router.push('/'),
        position: 'top-right'
      });
    } catch (error: any) {
      setIsLoading(false);
      toast({
        title: 'Login failed!',
        description: error,
        status: 'error',
        duration: 1500,
        position: 'top-right'
      });
    }
  }

  return (
    <Center w="full" position="relative" height={'100vh'}>
      {/* BACKGROUND */}
      <Box
        bgColor="body-color"
        opacity={30}
        position="absolute"
        zIndex={10}
        width="full"
        height="full"
        top={0}
        left={0}
      />

      {/* LOGIN FORM */}
      <Box
        bg="white"
        shadow="xs"
        rounded="md"
        padding={[20, 16]}
        width={'550px'}
        zIndex={20}
      >
        {/* TITLE */}
        <Heading
          as="h2"
          fontSize="40px"
          textAlign="center"
          fontWeight="bold"
          mb={10}
        >
          Login
        </Heading>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="example.email@gmail.com"
              {...register('email')}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            textColor="white"
            width="full"
            bgColor="btn-color"
            isLoading={isLoading}
          >
            Login
          </Button>
        </form>

        {/* SIGNUP CHOICE */}
        <Center marginTop={10}>
          <Text>
            {`Haven't you had an account yet? `}
            <Link href={'/auth/sign-up'}>
              <Box as="span" fontWeight="bold">
                Register
              </Box>
            </Link>
          </Text>
        </Center>
      </Box>
    </Center>
  );
};

Login.Layout = AuthLayout;

export default Login;
