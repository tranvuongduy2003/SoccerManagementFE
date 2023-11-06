import { NextPageWithLayout } from '@/types';

import {
  Footer,
  GoodPlayer,
  HighLightMatch,
  Highlights,
  Intro,
  PlayerOfTeam
} from '@/components/landing-page';
import { MainLayout } from '@/components/layout';

const Home: NextPageWithLayout = () => {
  return (
    <div className="font-fontLanding bg-body-color">
      {/* header */}
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

Home.Layout = MainLayout;

export default Home;
