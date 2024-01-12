/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';

//routes
import { signIn } from '@/apis';
import { LoginPayload } from '@/interfaces';
import authService from '@/services/authService';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

function SignIn() {
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
    try {
      setIsLoading(true);
      const { email, password } = values;
      const { accessToken, refreshToken, user } = await signIn({
        email,
        password
      });

      authService.login({
        accessToken: accessToken,
        refreshToken: refreshToken,
        username: user.username,
        _id: user._id,
        role: user.role,
        email: user.email,
        phone: user.phone
      });
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
        description: error.message ? error.message : 'Some thing wrong',
        status: 'error',
        duration: 1500,
        position: 'top-right'
      });
    }
  }

  // Chakra color mode
  // const titleColor = useColorModeValue('teal.300', 'teal.200');
  const textColor = useColorModeValue('gray.400', 'white');
  return (
    <Flex position="relative">
      <Flex
        h="100vh"
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="center"
        pt={{ sm: '100px', md: '0px' }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: 'none' }}
          w={{ base: '100%', md: '50%', lg: '42%' }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: '150px', lg: '80px' }}
          >
            <Heading color="#0079FF" fontSize="32px" mb="10px">
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your email and password to sign in
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={Boolean(errors.email)}>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  htmlFor="email"
                >
                  Email
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  placeholder="Your email adress"
                  size="lg"
                  type="email"
                  id="email"
                  {...register('email')}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.password)}>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  htmlFor="password"
                >
                  Password
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="36px"
                  fontSize="sm"
                  placeholder="Your password"
                  size="lg"
                  id="password"
                  type="password"
                  {...register('password')}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <Switch id="remember-login" colorScheme="blue" me="10px" />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                >
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize="10px"
                type="submit"
                bg="#0079FF"
                w="100%"
                h="45"
                mb="20px"
                color="white"
                mt="20px"
                _hover={{
                  bg: '#75C2F6'
                }}
                _active={{
                  bg: 'teal.400'
                }}
              >
                SIGN IN
              </Button>
            </form>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link
                  href="/auth/signup"
                  className="bold text-primary hover:underline"
                >
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignIn;
