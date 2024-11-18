import React from 'react';
import heroimage from '../../public/bgforjob.png'
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="relative m-2 bg-blue-300 text-white h-[600px] md:h-[500px] lg:h-[700px] flex items-center justify-center rounded-lg overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={heroimage} 
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Text Overlay */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Connecting Talent with Opportunity
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your path to a brighter career starts here.
        </p>
        <button className="bg-white text-blue-600 py-2 px-6 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition duration-300">
          Get Started
        </button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 via-transparent to-blue-800 opacity-80"></div>
    </section>
  );
};

export default Hero;
