import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="relative inset-0 min-h-[92vh] md:min-h-[90vh] w-full bg-gradient-to-br from-[#211415] via-[#1a0406] to-[#6c3237] flex items-center justify-center">
        {/* Text Content */}
        <div className="text-center max-w-7xl mx-auto px-2 flex flex-col justify-center h-full relative">
          <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white whitespace-normal">
            PORTFOLIO DEKHO
          </div>

          <p className='mt-8 md:mt-12 text-lg lg:text-xl text-gray-200 md:px-10 max-w-5xl mx-auto'>
            This page contains the case study of &apos;Portfolio Dekho&apos; Open-Source Project which includes the Project Overview, Tools Used, and Live Links to the official product.
          </p>

          <Link href="https://github.com/webd-rupam/Webd-s-Portfolio" target="_blank">
            <button
              type="button"
              className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 mt-14 text-white bg-gradient-to-r from-[#b33951] via-[#e63946] to-[#ff4b5c] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#e63946] dark:focus:ring-[#ff4b5c] font-bold rounded-md text-base md:text-xl px-12 py-3 text-center">
              PROJECT LINK
            </button>
          </Link>
        </div>

        {/* Down Arrow Animation */}
        <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-5 h-5 md:w-7 md:h-7 border-b-4 border-r-4 border-white rotate-45"></div>
          </div>
        </div>
      </div>

      <div className='min-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center gap-8 md:gap-16 lg:gap-32 pb-16'> 

        {/* Project Section 1 */}
        <div className='flex flex-col w-full md:gap-16 mx-auto px-4 md:px-20 lg:px-14 mt-20'>
          <div className='flex flex-col items-center gap-8 md:gap-16 w-full'>
            <img src="portfolio.jpg" alt="Screenshot of the portfolio website" className='w-full max-w-[800px] h-auto object-cover' />
            <div className='flex flex-col justify-center w-full lg:w-1/2 text-left lg:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold mt-6 md:mt-0'>Project Overview</h4>
              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'>
                The portfolio website is designed to effectively showcase a developer&apos;s professional work in a modern and visually appealing manner. It is built using Next.js and Tailwind CSS, showcasing a modern, dynamic, and visually appealing design. Next.js enhances the website&apos;s performance by offering features like server-side rendering and static site generation, which contribute to faster load times and improved SEO. Tailwind CSS is utilized for styling, allowing for a clean, responsive layout that adapts seamlessly to various devices, ensuring an optimal user experience across smartphones, tablets, and desktops.
              </p>
              
              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'>
                One of the standout features of this portfolio is its responsive design. Thanks to Tailwind CSS, the website maintains its visual integrity and functionality on all screen sizes. The utility-first approach of Tailwind CSS simplifies the process of creating layouts that adapt to different devices, making it easy to ensure that the website looks and works perfectly whether it&apos;s viewed on a smartphone, tablet, or desktop.
              </p>
              
              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'>
                Additionally, the website includes dynamic project previews, providing an interactive and engaging way for visitors to explore the showcased work. These previews are powered by Next.js, which allows for efficient loading and smooth transitions, enhancing the overall user experience. The combination of Next.js and Tailwind CSS results in a portfolio that is not only aesthetically pleasing but also highly functional, making it a perfect platform for presenting professional work.
              </p>

              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'>
                Please feel free to checkout the project from the Project Link.
              </p>
            </div>
          </div>
        </div>

        {/* Techs Used */}
        <div className='flex flex-col w-full md:gap-16 mx-auto px-4 md:px-6 lg:px-20 mt-8 md:-mt-6'>
          <div className='flex flex-col items-center lg:items-center gap-8 md:gap-16 w-full'>
            <div className='flex flex-col justify-center w-full lg:w-1/2 text-left md:text-center'>
              <h4 className='text-xl md:text-2xl font-bold mb-6 md:mb-8'>Technology Used</h4>
              <div className='md:flex flex-wrap justify-start mt-2 md:mt-0'>
                {['Next.js', 'Tailwind'].map((tech) => (
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
    title: "Portfolio Dekho - My project 2",
  }
}
