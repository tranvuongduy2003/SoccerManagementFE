//layout
import { HomeLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/interfaces';

//component
import {
  Footer,
  GoodPlayer,
  HighLightMatch,
  Highlights,
  Intro,
  PlayerOfTeam
} from '@/components/landing-page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Intro />
      <main className="bg-body-color">
        <GoodPlayer />
        <Highlights />
        <PlayerOfTeam />
        <HighLightMatch />
      </main>
      <Footer />
    </>
  );
};

Home.Layout = HomeLayout;

export default Home;
