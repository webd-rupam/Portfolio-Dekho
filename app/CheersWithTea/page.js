import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="relative inset-0 min-h-[92vh] md:min-h-[90vh] w-full flex items-center justify-center bg-gradient-to-r from-[#5c7db7] via-[#1b3778] to-[#334155]">

        {/* Text Content */}
        <div className="text-center max-w-7xl mx-auto px-2 flex flex-col justify-center h-full relative">
          <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white whitespace-normal">
            CHEERS WITH TEA
          </div>

          <p className='mt-8 md:mt-12 text-lg lg:text-xl text-gray-200 md:px-10 max-w-5xl mx-auto'>
            This page contains the case study of &apos;Cheers With Tea&apos; Open-Source Project which includes the Project Overview, Tools Used, and Live Links to the official product.
          </p>

          <Link href="https://github.com/webd-rupam/Cheers-With-Tea-Crowdfunding" target="_blank">
            <button
              type="button"
              className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 mt-14 text-white bg-gradient-to-r from-[#ff7eb9] via-[#ff65a3] to-[#7afcff] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#ff7eb9] font-bold rounded-md text-base md:text-xl px-12 py-3 text-center">
              PROJECT LINK
            </button>
          </Link>
        </div>

        {/* Down Arrow Animation */}
        <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-5 h-5 md:w-7 md:h-7 border-b-4 border-r-4 border-[#51b2a5] rotate-45"></div>
          </div>
        </div>
      </div>

      <div className='min-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center gap-8 md:gap-16 lg:gap-32 pb-16'> 

        {/* Project Section 1 */}
        <div className='flex flex-col w-full md:gap-16 mx-auto px-4 md:px-20 lg:px-14 mt-20'>
          <div className='flex flex-col items-center gap-8 md:gap-16 w-full'>
            <img src="cheerswithtea.jpg" alt="Project 1 description" className='w-full max-w-[800px] h-auto object-cover' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-left lg:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold mt-6 md:mt-0'>Project Overview</h4>
              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'>
                Cheers with Tea, a crowdfunding platform that aims to bring dreams to life! Our platform offers a space for creators to share their projects and connect with supporters.
              </p>
              
              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'>
                Our platform offers a comprehensive suite of features designed to enhance user experience and security. With advanced user authentication methods, you can securely log in and access your account with confidence. Each user benefits from a customizable profile, allowing them to showcase their projects and engage with the community. Integrated payment solution support, ensuring secure and smooth transactions for contributions.
              </p>

              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'>Moreover, our responsive design guarantees an optimized experience across all devices, whether you&apos;re using a desktop, tablet, or smartphone.</p>
              
              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto relative lg:right-[145px]'>
                Please feel free to checkout the project from the Project Link.
              </p>
              
            </div>
          </div>
        </div>

        {/* Techs Used */}
        <div className='flex flex-col w-full md:gap-16 mx-auto px-4 md:px-6 lg:px-20 mt-8 md:-mt-6'>
          <div className='flex flex-col items-center lg:items-center gap-8 md:gap-16 w-full'>
            <div className='flex flex-col justify-center w-full lg:w-1/2 text-left md:text-center'>
            <h4 className='text-xl md:text-2xl font-bold mb-6 md:mb-8 relative md:right-[240px]'>Technology Used</h4>
              <div className='md:flex flex-wrap justify-start mt-2 md:mt-0'>
                {['Next.js', 'Tailwind', 'MongoDB'].map((tech) => (
                  <span key={tech} className='text-gray-700 rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center md:justify-start mt-10 md:-mt-8'>
          <Link href="/#projects">
            <button
              type="button"
              className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-black bg-white focus:ring-4 focus:outline-none border-2 border-purple-600 focus:ring-purple-300 dark:focus:ring-purple-800 rounded-md text-base md:text-sm font-bold px-6 py-2 text-center">
              GO BACK
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;

export async function generateMetadata({ params }) {
  return {
    title: "Cheers With Tea - My Project 1",
  }
}
