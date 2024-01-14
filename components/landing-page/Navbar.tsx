'use client';

import { useContext, useState } from 'react';

//image
import { Login, Logo } from '@/public/images/landing';
import Image from 'next/image';

//route
import { AuthContext } from '@/contexts/AuthProvider';
import { Link } from '@chakra-ui/next-js';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';

import authService from '@/services/authService';

export const Navbar = () => {
  const authContext = useContext(AuthContext);
  const user = authContext!.getUser();

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
                      href="/competitor"
                      textDecoration={'none'}
                      _hover={{
                        textDecoration: 'none'
                      }}
                    >
                      <MenuItem>My team</MenuItem>
                    </Link>
                    <Link
                      href={`/competitor/${user ? 'create' : 'signin'}`}
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

          <div className="lg:mx-5 hidden lg:block">
            <Link
              href="/auth/signin"
              className="btn flex justify-center bg-body-color border-0 w-38 p-4"
              textDecoration={'none'}
              _hover={{
                textDecoration: 'none'
              }}
            >
              <Image src={Login} alt="" className="w-5" />
              <p className="text-white font-bold bg-">Login</p>
            </Link>
          </div>
          <div className="lg:mx-5 hidden lg:block">
            <Link
              href="/auth/signup"
              className="btn flex justify-center bg-body-color border-0 w-38 p-4"
              textDecoration={'none'}
              _hover={{
                textDecoration: 'none'
              }}
            >
              <Image src={Login} alt="" className="w-5" />
              <p className="text-white font-bold bg-">Register</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
