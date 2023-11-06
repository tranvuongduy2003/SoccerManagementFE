import { AuthLayout } from '@/components/layout';
import { PASSWORD_REGEX, PHONE_REGEX } from '@/constants';
import { NextPageWithLayout } from '@/types';
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
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .max(100, { message: 'Email must be less than 100 characters' })
      .email('Invalid email'),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(32, { message: 'Password must be less than 32 characters' })
      .regex(
        PASSWORD_REGEX.lowerCase,
        'Password must be at least 1 lowercase character'
      )
      .regex(
        PASSWORD_REGEX.upperCase,
        'Password must be at least 1 uppercase character'
      )
      .regex(PASSWORD_REGEX.number, 'Password must be at least 1 number')
      .regex(
        PASSWORD_REGEX.specialCharacter,
        'Password must be at least 1 special character'
      ),
    username: z
      .string()
      .min(1, 'Username is required')
      .max(100, { message: 'Username must be less than 100 characters' }),
    phone: z
      .string()
      .min(1, 'Phone number is required')
      .regex(PHONE_REGEX, 'Invalid phone number')
      .max(100, { message: 'Phone number must be less than 100 characters' }),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Password does not match',
    path: ['confirmPassword']
  });

const SignUp: NextPageWithLayout = () => {
  const router = useRouter();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 1. Define your form.
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { email, username, phone, password } = values;

      // TODO: call signup api

      setIsLoading(false);
      toast({
        title: 'Create new account successfully!',
        description: 'You will be redirected to login page',
        status: 'success',
        duration: 500,
        onCloseComplete: () => router.push('/auth/login'),
        position: 'top-right'
      });
    } catch (error: any) {
      setIsLoading(false);
      toast({
        title: 'Create new account failed!',
        description: error,
        status: 'error',
        duration: 1500,
        position: 'top-right'
      });
    }
  }

  return (
    <Center width="full" position="relative" height="full" paddingBlock={12}>
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

      {/* SignUp FORM */}
      <Box
        bg="white"
        shadow="xs"
        rounded="md"
        padding={[9, 16]}
        width={'550px'}
        zIndex={20}
      >
        {/* TITLE */}
        <Heading
          as="h2"
          fontSize="5xl"
          textAlign="center"
          fontWeight="bold"
          lineHeight="68px"
        >
          Welcome
        </Heading>
        <Text
          lineHeight={7}
          fontWeight="semibold"
          textColor="gray.500"
          fontSize="lg"
          textAlign="center"
          marginBottom={8}
        >
          Create new account
        </Text>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormControl isInvalid={Boolean(errors.username)}>
            <FormLabel htmlFor="username">User name</FormLabel>
            <Input
              id="username"
              placeholder="Enter your user name"
              {...register('username')}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
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
          <FormControl isInvalid={Boolean(errors.phone)}>
            <FormLabel htmlFor="phone">Phone number</FormLabel>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              {...register('phone')}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
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
          <FormControl isInvalid={Boolean(errors.confirmPassword)}>
            <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              {...register('confirmPassword')}
            />
            <FormErrorMessage>
              {errors.confirmPassword && errors.confirmPassword.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            textColor="white"
            width="full"
            bgColor="btn-color"
            isLoading={isLoading}
          >
            Sign up
          </Button>
        </form>

        {/* LOGIN CHOICE */}
        <Center marginTop={5}>
          <Text>
            Have you already had an account?{' '}
            <Link href={'/auth/login'}>
              <Box as="span" fontWeight="bold">
                Login
              </Box>
            </Link>
          </Text>
        </Center>
      </Box>
    </Center>
  );
};

SignUp.Layout = AuthLayout;

export default SignUp;
