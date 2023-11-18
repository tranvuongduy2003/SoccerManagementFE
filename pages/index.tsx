import {
  Navbar,
  Footer,
  GoodPlayer,
  HighLightMatch,
  Highlights,
  Intro,
  PlayerOfTeam
} from '@/components/landing-page';

const Home = () => {
  return (
    <div className="font-fontLanding bg-body-color">
      {/* header */}
      <Navbar />
      <Intro />

      {/* main */}
      <main className="bg-body-color">
        {/* Good Player section */}
        <GoodPlayer />

        {/* All Highlights section */}
        <Highlights />

        {/* winner team section */}
        <PlayerOfTeam />

        {/* highlight matches */}
        <HighLightMatch />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
