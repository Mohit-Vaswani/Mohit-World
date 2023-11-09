import React from 'react';
import Header from './Header';
import Link from 'next/link';
import ScrollButton from './subcomponents/Scroll';
import ThreeJSComponent from './subcomponents/ThreeD';

const Hero = () => {
  return (
    <main className='flex flex-col w-full h-screen px-10 md:px-32 lg:px-32 z-30 relative overflow-hidden'>
      <Header />
      <div className='flex flex-col'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl'>
          hello I'm <span className='Croissant'>mohit</span> <br /> - a developer{' '}
          <br /> w/ a focus on frontend <br />{' '}
          <span className='Playfair'>&</span> scaling products.
        </h1>
        <p className='text-xl lg:text-3xl mt-12 flex flex-col gap-3 sm:flex-row'>
          ~ open for roles{' '}
          <Link href='mailto:mohitvaswani010@email.com'>
            <span className='circularText p-2 sm:px-6 rounded-full'>
              Frontend developer <span className='Playfair'>&</span> UI/UX developer
            </span>
          </Link>
        </p>
      </div>
      <div className='relative flex-grow'>
        {/* Place ThreeJSComponent here */}
        <ThreeJSComponent />
      </div>
      <ScrollButton />
    </main>
  );
};

export default Hero;
