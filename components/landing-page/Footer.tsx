import { Instagram, Logo, Twitter, Youtube } from '@/public/images/landing';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="container mx-auto">
        <div className="py-16">
          <div className="flex justify-center py-10">
            <div className=" w-2/4">
              <Image src={Logo} alt="" className="w-full" />
            </div>
          </div>
          <ul className="flex justify-center gap-10">
            <Link href={'/'}>
              <Image src={Instagram} alt="" className="w-16" />
            </Link>
            <Link href={'/'}>
              <Image src={Twitter} alt="" className="w-16" />
            </Link>
            <Link href={'/'}>
              <Image src={Youtube} alt="" className="w-16" />
            </Link>
          </ul>
          <p className="text-center p-10">Copyright © 2023 Football</p>
        </div>
      </div>
    </section>
  );
};
