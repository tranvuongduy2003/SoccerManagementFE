import { Login, Logo } from '@/public/images/landing';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const Navbar = () => {
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;

    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth'
    });
  };

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
                <Link href={'#home'} onClick={handleScroll}>
                  <li>Home</li>
                </Link>
                <Link href={'#player'} onClick={handleScroll}>
                  <li>Player</li>
                </Link>
                <Link href={'#world'} onClick={handleScroll}>
                  <li>World Cup</li>
                </Link>
                <Link href={'#match'} onClick={handleScroll}>
                  <li>Upcoming Matches</li>
                </Link>
                <Link href={'#contact'} onClick={handleScroll}>
                  <li>Contact</li>
                </Link>
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

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <Link href={'#home'} onClick={handleScroll}>
                Home
              </Link>
            </li>
            <li>
              <Link href={'#player'} onClick={handleScroll}>
                Player
              </Link>
            </li>
            <li>
              <Link href={'#world'} onClick={handleScroll}>
                World Cup
              </Link>
            </li>
            <li>
              <Link href={'#match'} onClick={handleScroll}>
                Upcoming Matches
              </Link>
            </li>
            <li>
              <Link href={'#contact'} onClick={handleScroll}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:mx-5 hidden lg:block">
          <Link
            href={'/auth/login'}
            className="btn flex justify-center bg-body-color border-0 w-28 p-4"
          >
            <Image src={Login} alt="" className="w-5" />
            <p className="text-white font-bold bg-">Login</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
