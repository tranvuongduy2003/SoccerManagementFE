import Image from 'next/image';
import {
  player1,
  player2,
  player3,
  player4,
  player5,
  player6,
  player7,
  player8,
  player9
} from '@/public/images/landing';

const PlayerOfTeam = () => {
  return (
    <section className="mx-5">
      <div className="container mx-auto mb-28">
        <div className="text-white flex-1 flex flex-col my-16">
          <h2 className="text-5xl font-bold my-8 text-center">
            2022 Winner team Argentina
          </h2>
          <p className="text-center">
          Argentina won the match (4–3) penaties to clinch their first World Cup title, giving captain Lionel Messi
          <br/>
          his first senior international trophy seventeen years into his career and ending a 28-year trophy drought..
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* <!-- image-1 --> */}
          <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            {/* <figure><img class="w-full rounded-2xl" src="images/players/player-1.png" alt="" /></figure> */}
            <figure>
              <Image src={player1} alt="" className="w-full rounded-2xl" />
            </figure>
          </div>

          {/* <!-- image-2 --> */}
          <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <figure>
              <Image src={player2} alt="" className="w-full rounded-2xl" />
            </figure>
          </div>

          {/* <!-- image-3 --> */}
          <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <figure>
              <Image src={player3} alt="" className="w-full rounded-2xl" />
            </figure>
          </div>

          {/* <!-- image-4 --> */}
          <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <figure>
              <Image src={player4} alt="" className="w-full rounded-2xl" />
            </figure>
          </div>

          {/* <!-- image-5 --> */}
          <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <figure>
              <Image src={player5} alt="" className="w-full rounded-2xl" />
            </figure>
          </div>

          {/* <!-- image-6 --> */}
          <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <figure>
              <Image src={player6} alt="" className="w-full rounded-2xl" />
            </figure>
          </div>

          {/* <!-- image-7 --> */}
          <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <figure>
              <Image src={player7} alt="" className="w-full rounded-2xl" />
            </figure>
          </div>

          {/* <!-- image-8 --> */}
          <div className="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <figure>
              <Image src={player8} alt="" className="w-full rounded-2xl" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerOfTeam;
