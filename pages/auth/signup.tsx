// Chakra imports
import { signUp } from '@/apis';
import { PASSWORD_REGEX, PHONE_REGEX } from '@/constants';
import authService from '@/services/authService';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  Switch,
  Text,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';

// Assets
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
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

function SignUp() {
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

      //TODO: call signup api
      const {user,accessToken,refreshToken} = await signUp({
        email,
        password,
        username,
        phone
      });
      // authService.login({
      //   accessToken: accessToken,
      //   refreshToken: refreshToken,
      //   name: user.fullname,
      //   id: user.id,
      //   role: user.role,
      //   email: user.email
      // });

      // setIsLoading(false);
      // toast({
      //   title: 'Create new account successfully!',
      //   description: 'You will be redirected to Home page',
      //   status: 'success',
      //   duration: 500,
      //   onCloseComplete: () => router.push('/'),
      //   position: 'top-right'
      // });
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

  const titleColor = useColorModeValue('teal.300', 'teal.200');
  const textColor = useColorModeValue('gray.700', 'white');
  const bgColor = useColorModeValue('white', 'gray.700');
  const bgIcons = useColorModeValue('teal.200', 'rgba(255, 255, 255, 0.5)');
  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: '100px' }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text
            fontSize="xl"
            color="#0079FF"
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Register With
          </Text>
          <HStack spacing="15px" justify="center" mb="22px">
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
            >
              <Link href="#">
                <Icon
                  as={FaFacebook}
                  w="30px"
                  h="30px"
                  _hover={{ filter: 'brightness(120%)' }}
                />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
            >
              <Link href="#">
                <Icon
                  as={FaApple}
                  w="30px"
                  h="30px"
                  _hover={{ filter: 'brightness(120%)' }}
                />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
            >
              <Link href="#">
                <Icon
                  as={FaGoogle}
                  w="30px"
                  h="30px"
                  _hover={{ filter: 'brightness(120%)' }}
                />
              </Link>
            </Flex>
          </HStack>
          <Text
            fontSize="lg"
            color="gray.400"
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            or
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={Boolean(errors.username)}>
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="normal"
                htmlFor="username"
              >
                User name
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Your full name"
                mb="24px"
                size="lg"
                id="username"
                {...register('username')}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
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
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="email"
                placeholder="Your email address"
                mb="24px"
                size="lg"
                id="email"
                {...register('email')}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.phone)}>
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="normal"
                htmlFor="phone"
              >
                Phone number
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                placeholder="Your email address"
                mb="24px"
                size="lg"
                id="phone"
                {...register('phone')}
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
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
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                placeholder="Your password"
                mb="24px"
                size="lg"
                id="password"
                type="password"
                {...register('password')}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.confirmPassword)}>
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="normal"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="password"
                placeholder="Your password"
                mb="24px"
                size="lg"
                id="confirmPassword"
                {...register('confirmPassword')}
              />
              <FormErrorMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl display="flex" alignItems="center" mb="24px">
              <Switch id="remember-login" colorScheme="blue" me="10px" />
              <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              type="submit"
              bg="#0079FF"
              fontSize="10px"
              color="white"
              fontWeight="bold"
              w="100%"
              h="45"
              mb="24px"
              _hover={{
                bg: '#75C2F6'
              }}
              _active={{
                bg: 'teal.400'
              }}
            >
              SIGN UP
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
              Already have an account?
              <Link
                href="/auth/signin"
                className="bold text-primary hover:underline"
              >
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
