import React, { Suspense } from 'react';




const CoverVideo = React.lazy(() => import('../components/Home/CoverVideo'));

const Logo = React.lazy(() => import('../components/Home/Logo'));



const Home = () => {
  return (
    <section className='relative min-h-screen overflow-hidden'  id="home">
      <Suspense fallback={<></>}>
        <Logo />
        
        <CoverVideo />
      </Suspense>
    </section>
  );
};

export default Home;
