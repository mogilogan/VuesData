import React, { Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';





const CoverVideo = React.lazy(() => import('../components/Home/CoverVideo'));

const Logo = React.lazy(() => import('../components/Home/Logo'));



const Home = () => {
  return (
    <section className='relative min-h-screen overflow-hidden'  id="home">
 
      <Suspense fallback={<></>}>
        <Navbar/>
        <Logo />
        {/* <Navbar /> */}
        <CoverVideo />
      </Suspense>
    </section>
  );
};

export default Home;
