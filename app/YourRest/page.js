import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="relative inset-0 min-h-[92vh] md:min-h-[90vh] w-full flex items-center justify-center bg-gradient-to-r from-[#bdb4b9] via-[#b54dbc] to-[#cfc0c0]">
        
        {/* Text Content */}
        <div className="text-center max-w-7xl mx-auto px-2 flex flex-col justify-center h-full relative">
          <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white whitespace-normal">
            YourRest
          </div>

          <p className='mt-8 md:mt-12 text-lg lg:text-xl text-[#eae6e6] md:px-10 max-w-5xl mx-auto'>
            This page contains the case study of &apos;YourRest&apos; Open-Source Project which includes the Project Overview, Tools Used, and Live Links to the official product.
          </p>

          <Link href="https://github.com/webd-rupam/YourRest-Local-Restaurant" target="_blank">
            <button
              type="button"
              className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 mt-14 text-white bg-gradient-to-r from-[#ff5e62] to-[#ff9966] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#ff5e62] font-bold rounded-md text-base md:text-xl px-12 py-3 text-center">
              PROJECT LINK
            </button>
          </Link>

          <Link href="https://yourrest.vercel.app" target="_blank">
            <button
              type="button"
              className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 mt-4 text-white bg-gradient-to-r from-[#c471ed] to-[#f64f59] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#c471ed] font-bold rounded-md text-base md:text-xl px-12 py-3 text-center">
              VISIT SITE
            </button>
          </Link>

        </div>

        {/* Down Arrow Animation */}
        <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-5 h-5 md:w-7 md:h-7 border-b-4 border-r-4 border-[#00e0ff] rotate-45"></div>
          </div>
        </div>
      </div>

      <div className='min-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center gap-8 md:gap-16 lg:gap-32 pb-16'> 

        {/* Project Section 1 */}
        <div className='flex flex-col w-full md:gap-16 mx-auto px-4 md:px-20 lg:px-14 mt-20'>
          <div className='flex flex-col items-center gap-8 md:gap-16 w-full'>
            <img src="yourrest.jpg" alt="Project 1 description" className='w-full max-w-[800px] h-auto object-cover' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-left lg:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold mt-6 md:mt-0'>Project Overview</h4>
              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'> YourRest is an innovative web application tailored to meet the needs of local restaurants by streamlining daily operations. It offers restaurant owners an intuitive admin panel to manage their menus, track customer orders, and monitor deliveries efficiently. With its seamless interface, YourRest empowers restaurants to enhance their service quality, providing customers with a smooth ordering experience while simplifying management for owners. </p>
              
              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'> The application features robust order management, enabling users to place orders for delivery or pickup while providing real-time updates to restaurant owners. Restricted access ensures that the admin panel is exclusively accessible to users with an admin role, providing secure and controlled management. A key highlight is the seamless payment integration through Razorpay, offering flexibility with both online payment options and Cash on Delivery. By combining these features, YourRest delivers convenience for customers and ensures efficient operations for restaurant businesses. </p>
              
              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto'> Built using Next.js, Tailwind CSS, and GSAP, YourRest delivers a modern and responsive design with smooth animations for an engaging user experience. Firebase Authentication ensures secure login access, while Firestore manages real-time updates across devices. Additionally, Cloudinary handles image storage, ensuring high-quality visuals and optimized delivery. YourRest reflects the developer&apos;s expertise in creating full-stack applications that combine scalable backend solutions, responsive design, and interactive features for a comprehensive restaurant management tool. </p>

              <p className='text-base md:text-lg mt-7 text-[#666] lg:mr-10 max-w-6xl mx-auto relative'>
                Please feel free to checkout the project from the Project Link, or use it by following the site link.
              </p>
              
            </div>
          </div>
        </div>

        {/* Techs Used */}
        <div className='flex flex-col w-full md:gap-16 mx-auto px-4 md:px-6 lg:px-20 mt-8 md:-mt-6'>
          <div className='flex flex-col items-center lg:items-center gap-8 md:gap-16 w-full'>
            <div className='flex flex-col justify-center w-full lg:w-1/2 text-left md:text-center'>
              <h4 className='text-xl md:text-2xl font-bold mb-6 md:mb-8 relative md:right-[240px]'>Technology Used</h4>
              <div className='flex flex-wrap justify-start mt-2 md:mt-0'>
                {['Next.js', 'Tailwind', 'Firebase', 'GSAP', 'Razorpay', 'Cloudinary'].map((tech) => (
                  <span key={tech} className='text-gray-700 rounded-md font-medium p-2 text-sm bg-gray-200 m-[5px]'>{tech}</span>
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
    title: "YourRest - Your own Restaurant",
  }
}
