//images
import { Login, match } from '@/public/images/landing';
import Image from 'next/image';

export const Highlights = () => {
  return (
    <section className="background">
      <div className="mx-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row my-32 lg:mt-44 py-24">
            <div className="text-white flex-1 flex flex-col justify-center text-center lg:text-start">
              <h2 className="text-5xl font-bold my-8 text-center lg:text-start">
                All Highlights <br />
                Fifa Club World Cup 2022
              </h2>
              <p>
                The World Cup is the most attractive football tournament on the
                planet, attracting more than 2 billion followers and sponsors.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://www.youtube.com/watch?v=b7X1YkrkUHA&list=PLtmNAhKNyKpjpLiS-Bg2RDIvbtHN1qzZc"
                  className="btn bg-btn-color border-0 my-10 w-44"
                >
                  <p className="text-white font-bold">Watch Now</p>
                  <Image src={Login} alt="" className="w-5" />
                </a>
              </div>
            </div>
            <div className="flex-1">
              <Image src={match} alt="" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
