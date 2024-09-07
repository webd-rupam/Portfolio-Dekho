import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <div id='about' className='bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 min-h-screen w-full flex flex-col justify-center gap-16 md:gap-32 pb-16'>
        
        {/* Section Title */}
        <div className='flex flex-col items-center gap-5 text-center px-4 mt-20'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900'>ABOUT ME</h2>
          <span className='bg-[#7843E9] w-8 h-1.5 rounded-full'></span>
          <p className='text-lg md:text-xl lg:text-xl text-gray-700 md:px-10 md:w-[65vw]'>
            Here you will find more information about me, including what I do and my current skills, in terms of programming and technology.
          </p>
        </div>

        {/* Main Content */}
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:text-left gap-16 md:gap-32 mx-auto px-4 md:px-20 lg:px-44'>

          {/* Get to Know Me Section */}
          <div className='w-full md:w-1/2 flex flex-col gap-8 md:gap-4'>
            <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-900 md:mb-7'>Get to know me!</h3>
            <p className='text-base lg:text-lg text-[#666]'>
              I'm a <span className='font-bold text-indigo-600'>Frontend-focused Full Stack Web Developer</span> building and managing the front-end of websites and web applications that contribute to the overall product&apos;s success. Check out some of my work in the <span className='font-bold text-indigo-600'>Projects</span> section.
            </p>
            <p className='text-base lg:text-lg text-[#666]'>
              I also enjoy sharing content related to what I've learned over the years in <span className='font-bold text-indigo-600'>Web Development</span> to help the Dev Community. Feel free to connect or follow me on <a href="https://www.linkedin.com/in/rupam-majee-0811a6288/" target="_blank" rel="noopener noreferrer" className='font-bold underline text-indigo-600'>LinkedIn</a> and <a href="https://x.com/webd_rupam" target="_blank" rel="noopener noreferrer" className='font-bold underline text-indigo-600'>X</a> where I post useful content related to Web Development and Programming.
            </p>
            <p className='text-base lg:text-lg text-[#666]'>
              I'm open to <span className='font-bold text-indigo-600'>Job</span> opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to <span className='font-bold text-indigo-600'>contact</span> me.
            </p>

            <div className='flex justify-center md:justify-start mt-1 md:mt-10'>
              <Link href="#contact">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-bold rounded-md text-base md:text-lg px-6 md:px-10 lg:px-12 py-2 md:py-3 text-center">
                  CONTACT
                </button>
              </Link>
            </div>

          </div>

          {/* My Skills Section */}
          <div className='w-full md:w-1/2 flex flex-col items-start gap-4'>
            <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-900 md:mb-6'>My Skills</h3>
            <div className='flex flex-wrap justify-start'>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>HTML</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>CSS</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>JavaScript</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>Next.js</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>React.js</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>Tailwind</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>Express.js</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>Node.js</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>MongoDB</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>GIT</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>Github</span>
              <span className='text-[#666] rounded-md font-medium p-3 text-sm bg-gray-200 m-2'>Postman</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
