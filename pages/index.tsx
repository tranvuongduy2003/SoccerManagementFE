import { NextPageWithLayout } from '@/types';

import Footer from '@/components/landing-page/Footer';
import GoodPlayer from '@/components/landing-page/GoodPlayer';
import HighLightMatch from '@/components/landing-page/HighLightMatch';
import Highlights from '@/components/landing-page/Highlights';
import Intro from '@/components/landing-page/Intro';
import Navbar from '@/components/landing-page/Navbar';
import PlayerOfTeam from '@/components/landing-page/PlayerOfTeam';
import { MainLayout } from '@/components/layout';

const Home: NextPageWithLayout = () => {
  return (
    <div className='font-fontLanding bg-body-color'>

        {/* header */}
        <Navbar/>
        <Intro/>

        {/* main */}
        <main className='bg-body-color'>
          {/* Good Player section */}
          <GoodPlayer/> 

          {/* All Highlights section */}
          <Highlights/>

          {/* winner team section */}
          <PlayerOfTeam/> 

          {/* highlight matches */}
          <HighLightMatch/>
        </main>

        {/* footer */}
        <Footer/>
    </div>
  );
};

Home.Layout = MainLayout;

export default Home;
