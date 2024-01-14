'use client';

import { useContext, useState } from 'react';

//image
import { Login, Logo } from '@/public/images/landing';
import Image from 'next/image';

//route
import { AuthContext } from '@/contexts/AuthProvider';
import { Link } from '@chakra-ui/next-js';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { LuChevronDown, LuLogIn, LuLogOut } from 'react-icons/lu';

export const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { getUser, loggedIn, logOut } = authContext!;
  const user = getUser();

  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <nav className="z-[1] w-full px-5 fixed mt-10">
      <div className="navbar bg-white container mx-auto rounded-3xl shadow-2xl flex justify-between">
        <div>
          <div className="">
            <label
              className="btn btn-ghost lg:hidden"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {showDropdown && (
              <ul className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 lg:hidden">
                <Link
                  href={'#home'}
                  textDecoration={'none'}
                  _hover={{
                    textDecoration: 'none'
                  }}
                >
                  <li>Home</li>
                </Link>
                <li>
                  <details className="dropdown">
                    <summary className="btn bg-transparent border-none">
                      Leagues
                    </summary>
                    <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <Link
                          href="/league"
                          textDecoration={'none'}
                          _hover={{
                            textDecoration: 'none'
                          }}
                        >
                          Find leagues
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details className="dropdown">
                    <summary className="btn bg-transparent border-none">
                      Teams
                    </summary>
                    <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <Link
                          href="/competitor"
                          textDecoration={'none'}
                          _hover={{
                            textDecoration: 'none'
                          }}
                        >
                          Find teams
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link
                    href="/"
                    textDecoration={'none'}
                    _hover={{
                      textDecoration: 'none'
                    }}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    textDecoration={'none'}
                    _hover={{
                      textDecoration: 'none'
                    }}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <div className="btn flex bg-body-color border-0 w-28">
                    <Image src={Login} alt="" className="w-5" />
                    <p className="text-white font-bold bg-">Login</p>
                  </div>
                </li>
              </ul>
            )}
          </div>
          <Link
            href={'/'}
            className="btn btn-ghost normal-case text-xl"
            textDecoration={'none'}
            _hover={{
              textDecoration: 'none'
            }}
          >
            <Image src={Logo} alt="" className="w-36" />
          </Link>
        </div>

        <div className="flex">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold flex justify-center items-center">
              <li>
                <Link
                  href="/"
                  textDecoration={'none'}
                  _hover={{
                    textDecoration: 'none'
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Menu>
                  <MenuButton
                    bg={'none'}
                    as={Button}
                    rightIcon={<LuChevronDown />}
                  >
                    LEAGUES
                  </MenuButton>
                  <MenuList>
                    <Link
                      href="/league"
                      textDecoration={'none'}
                      _hover={{
                        textDecoration: 'none'
                      }}
                    >
                      <MenuItem>Find leagues</MenuItem>
                    </Link>
                    <Link
                      href="/league/create"
                      textDecoration={'none'}
                      _hover={{
                        textDecoration: 'none'
                      }}
                    >
                      <MenuItem>Create league</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Menu>
                  <MenuButton
                    bg={'none'}
                    as={Button}
                    rightIcon={<LuChevronDown />}
                  >
                    TEAMS
                  </MenuButton>
                  <MenuList>
                    <Link
                      href="/competitor"
                      textDecoration={'none'}
                      _hover={{
                        textDecoration: 'none'
                      }}
                    >
                      <MenuItem>Find teams</MenuItem>
                    </Link>
                    <Link
                      href={`/competitor/owner/${user?._id || ''}`}
                      textDecoration={'none'}
                      _hover={{
                        textDecoration: 'none'
                      }}
                    >
                      <MenuItem>My team</MenuItem>
                    </Link>
                    <Link
                      href={`/competitor/create`}
                      textDecoration={'none'}
                      _hover={{
                        textDecoration: 'none'
                      }}
                    >
                      <MenuItem>Create team</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Link
                  href="/"
                  textDecoration={'none'}
                  _hover={{
                    textDecoration: 'none'
                  }}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  textDecoration={'none'}
                  _hover={{
                    textDecoration: 'none'
                  }}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {loggedIn && user ? (
            <Flex alignItems="center" gap={4}>
              <Avatar src={user?.avatar} name={user?.username || 'AV'} />
              <Button
                bg="body-color"
                onClick={e => {
                  e.preventDefault();
                  logOut();
                }}
                gap={2}
              >
                <Icon as={LuLogOut} color="white" />
                <p className="text-white font-bold bg-">Logout</p>
              </Button>
            </Flex>
          ) : (
            <Flex alignItems="center" gap={2}>
              <Button bg="body-color">
                <Link
                  href="/auth/signin"
                  className="flex items-center gap-2"
                  textDecoration={'none'}
                  _hover={{
                    textDecoration: 'none'
                  }}
                >
                  <Icon as={LuLogIn} color="white" />
                  <p className="text-white font-bold">Login</p>
                </Link>
              </Button>
              <Button bg="body-color">
                <Link
                  href="/auth/signup"
                  className="flex items-center gap-2"
                  textDecoration={'none'}
                  _hover={{
                    textDecoration: 'none'
                  }}
                >
                  <Icon as={LuLogIn} color="white" />
                  <p className="text-white font-bold">Register</p>
                </Link>
              </Button>
            </Flex>
          )}
        </div>
      </div>
    </nav>
  );
};
