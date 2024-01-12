'use client'

import { useState, useEffect } from 'react';

//image
import { Login, Logo } from '@/public/images/landing';
import Image from 'next/image';

//route
import Link from 'next/link';


import authService from '@/services/authService';

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // const user = authService.getUser();
  // console.log(user)
  // console.log(user);
  const user = true;

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
                <Link href={'#home'}>
                  <li>Home</li>
                </Link>
                <li>
                  <details className="dropdown">
                    <summary className="btn bg-transparent border-none">
                      Leagues
                    </summary>
                    <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <Link href="/league">Find leagues</Link>
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
                        <Link href="/competitor">Find teams</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/">Blogs</Link>
                </li>
                <li>
                  <Link href="/">Shop</Link>
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
          <Link href={'/'} className="btn btn-ghost normal-case text-xl">
            <Image src={Logo} alt="" className="w-36" />
          </Link>
        </div>

        <div className="flex">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold flex justify-center items-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <details className="dropdown h-[30px]">
                  <summary className="btn bg-transparent border-none font-bold">
                    Leagues
                  </summary>
                  <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <Link href="/league">Find leagues</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="dropdown h-[30px]">
                  <summary className="btn bg-transparent border-none font-bold">
                    Teams
                  </summary>
                  <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <Link href="/competitor">Find teams</Link>
                    </li>
                    <li>
                      <Link href="/competitor">My team</Link>
                    </li>
                    <li>
                      <Link href={`/competitor/${user ? 'create' : 'signin'}`}>
                        Create team
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/">Blogs</Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
            </ul>
          </div>

          <div className="lg:mx-5 hidden lg:block">
            <Link
              href="/auth/signin"
              className="btn flex justify-center bg-body-color border-0 w-38 p-4"
            >
              <Image src={Login} alt="" className="w-5" />
              <p className="text-white font-bold bg-">Login</p>
            </Link>
          </div>
          <div className="lg:mx-5 hidden lg:block">
            <Link
              href="/auth/signup"
              className="btn flex justify-center bg-body-color border-0 w-38 p-4"
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
