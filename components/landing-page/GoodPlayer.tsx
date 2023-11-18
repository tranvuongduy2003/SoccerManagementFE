
//images
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
import Image from 'next/image';

export const GoodPlayer = () => {
  return (
    <section className="mx-5" id="player">
      <div className="container mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* <!-- card-1 --> */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            {/* <img className="p-5 hover:animate-pulse" src="images/players/player-1.png" alt="" /> */}
            <Image src={player1} alt="" className="p-5 hover:animate-pulse" />
          </figure>
          <div className="p-5 mb-6">
            <h2 className="text-3xl font-bold mb-5">Neymar Jr</h2>
            <p>
              A Brazilian superstar known for his dazzling dribbling skills and
              creativity, Neymar is a forward who has played for Paris
              Saint-Germain and Barcelona. He is renowned for his flair on the
              field and ability to score stunning goals
            </p>
          </div>
        </div>

        {/* <!-- card-2 --> */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={player3} alt="" className="p-5 hover:animate-pulse" />
          </figure>
          <div className="p-5 mb-6">
            <h2 className="text-3xl font-bold mb-5">Cristiano Ronaldo</h2>
            <p>
              A Portuguese forward, Ronaldo is another football legend. With
              incredible speed and goal-scoring prowess, he is played for clubs
              like Manchester United, Real Madrid, and Juventus, showcasing his
              determination and athleticism.
            </p>
          </div>
        </div>

        {/* <!-- card-3 --> */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={player2} alt="" className="p-5 hover:animate-pulse" />
          </figure>
          <div className="p-5 mb-6">
            <h2 className="text-3xl font-bold mb-5">Lionel Messi</h2>
            <p>
              Widely regarded as one of the greatest footballers of all time,
              Messi, an Argentine forward, has spent the majority of his career
              with Barcelona before moving to Paris Saint-Germain. His
              incredible dribbling, playmaking, and goal-scoring abilities have
              earned him numerous accolades.
            </p>
          </div>
        </div>

        {/* <!-- card-4 --> */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={player4} alt="" className="p-5 hover:animate-pulse" />
          </figure>
          <div className="p-5 mb-6">
            <h2 className="text-3xl font-bold mb-5">Paulo Dybala</h2>
            <p>
              An Argentine forward, Dybala is known for his technical skill and
              versatility. He has played for Juventus, demonstrating his ability
              to score goals and create opportunities for his team.
            </p>
          </div>
        </div>

        {/* <!-- card-5 --> */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={player5} alt="" className="p-5 hover:animate-pulse" />
          </figure>
          <div className="p-5 mb-6">
            <h2 className="text-3xl font-bold mb-5">Mesut Ozil</h2>
            <p>
              A German midfielder, Ozil is celebrated for his exceptional
              passing and vision on the pitch. He has played for clubs like Real
              Madrid and Arsenal, using his creativity to set up teammates with
              pinpoint assists.
            </p>
          </div>
        </div>

        {/* <!-- card-6 --> */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={player6} alt="" className="p-5 hover:animate-pulse" />
          </figure>
          <div className="p-5 mb-6">
            <h2 className="text-3xl font-bold mb-5">Mauro Icardi</h2>
            <p>
              An Argentine striker, Icardi is a clinical finisher who has played
              for Inter Milan and Paris Saint-Germain. He is known for his
              goal-scoring ability and poacher instincts.
            </p>
          </div>
        </div>

        {/* <!-- card-7 --> */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={player7} alt="" className="p-5 hover:animate-pulse" />
          </figure>
          <div className="p-5 mb-6">
            <h2 className="text-3xl font-bold mb-5">Di Maria</h2>
            <p>
              An Argentine winger, Di Maria possesses speed and skill, making
              him a valuable asset for both club and country. He is played for
              several top clubs, including Real Madrid and Paris Saint-Germain.
            </p>
          </div>
        </div>

        {/* <!-- card-8 --> */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={player8} alt="" className="p-5 hover:animate-pulse" />
          </figure>
          <div className="p-5 mb-6">
            <h2 className="text-3xl font-bold mb-5">Kylian Mbappé</h2>
            <p>
              A French forward, Mbappé is a rising star known for his incredible
              speed and goal-scoring ability. He plays for Paris Saint-Germain
              and has won numerous awards at a young age.
            </p>
          </div>
        </div>

        {/* <!-- card-9 --> */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={player9} alt="" className="p-5 hover:animate-pulse" />
          </figure>
          <div className="p-5 mb-6">
            <h2 className="text-3xl font-bold mb-5">Mohamed Salah</h2>
            <p>
              An Egyptian forward, Salah is a dynamic player known for his speed
              and goal-scoring prowess. He has been a key player for Liverpool,
              helping the team win multiple titles and awards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
