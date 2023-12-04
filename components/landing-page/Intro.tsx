//images
import { Banner, Login } from '@/public/images/landing';
import Image from 'next/image';

export const Intro = () => {
  return (
    <section className="mx-5" id="home">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="lg:py-44 py-30">
            <h1 className="text-3xl lg:text-6xl font-bold text-center lg:text-start text-white">
              Tournament bracket generator
              <br />
              Manage sports teams simply!
            </h1>
            <p className="py-6 text-white text-center lg:text-start">
              They give pleasure by desire.and by
              <br />
              its very nature it flees, to such an extent that it is assumed
              that
              <br />
              it will be fulfilled as before.
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="btn bg-btn-color border-0 w-44">
                <p className="text-white font-bold">Watch Live</p>
                <Image src={Login} alt="" className="w-5" />
              </div>
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <Image src={Banner} alt="" className="lg:max-w-2xl lg:mt-[160px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
