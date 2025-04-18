import React from 'react';
import Link from 'next/link';

const Projects = () => {
  return (
    <>
      <div id='projects' className='bg-[#fefdfd] min-h-screen w-full overflow-x-hidden flex flex-col justify-center gap-8 md:gap-16 lg:gap-32 md:pb-16 pb-20'>
        <div className='flex flex-col items-center gap-5 text-center px-4 md:mt-20 mt-[75px]'>
          <h2 className='text-2xl mt-5 md:text-3xl lg:text-4xl font-bold text-black'>PROJECTS</h2>
          <span className='bg-[#7843E9] w-8 h-1.5 rounded-full'></span>
          <p className='text-lg md:text-xl lg:text-xl text-[#333] md:px-10 md:w-[65vw]'>
            Here you will find some of the projects that I created along with more information and their links.
          </p>
        </div>

        {/* Project Section 8 */}
<div className='flex flex-col lg:flex-row w-full md:gap-16 mx-auto px-4 md:px-6 xl:px-20 md:mt-4 mt-10'>
          <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-12 w-full'>
            <img src="betalkative.jpg" alt="Project 1 description" className='w-full xl:w-[55%] h-auto object-cover max-w-2xl xl:ml-16' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-center xl:text-left xl:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold'>BeTalkative</h4>
              <p className='text-base md:text-lg mt-5 text-[#666] xl:mr-10'>
              BeTalkative is a full-featured real-time chat application built with modern web technologies. It offers a seamless messaging experience with features like group chats, user profiles, moderation tools, and rich message interactions.
              </p>
              <Link href="/BeTalkative" target="_blank">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-[#7843E9] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-md text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 text-center mt-8">
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>
        </div>

{/* Project Section 7 */}
<div className='flex flex-col lg:flex-row w-full md:gap-16 mx-auto px-4 md:px-6 xl:px-20 md:mt-4 mt-10'>
          <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-12 w-full'>
            <img src="yourrest.jpg" alt="Project 1 description" className='w-full xl:w-[55%] h-auto object-cover max-w-2xl xl:ml-16' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-center xl:text-left xl:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold'>YourRest</h4>
              <p className='text-base md:text-lg mt-5 text-[#666] xl:mr-10'>
              YourRest is a web application designed to empower local restaurants by streamlining their operations. Restaurant owners can efficiently manage menus, track deliveries, and handle customer orders with integrated support for online payments and cash on delivery options.
              </p>
              <Link href="/YourRest" target="_blank">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-[#7843E9] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-md text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 text-center mt-8">
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>
        </div>

{/* Project Section 5 */}
<div className='flex flex-col lg:flex-row w-full md:gap-16 mx-auto px-4 md:px-6 xl:px-20 mt-16'>
          <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-12 w-full'>
            <img src="randomly.jpg" alt="Project 2 description" className='w-full xl:w-[55%] h-auto object-cover max-w-2xl xl:ml-16' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-center xl:text-left xl:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold'>RANDOMLY</h4>
              <p className='text-base md:text-lg mt-5 text-[#666] xl:mr-10'>
              Randomly is a real-time chat platform that connects users with strangers for spontaneous conversations. With a focus on privacy and simplicity, users can easily engage in anonymous chats, enjoy real-time messaging, and quickly find new connections.
              </p>
              <Link href="/Randomly" target="_blank">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-[#7843E9] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-md text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 text-center mt-8">
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>
        </div>

          {/* Project Section 6 */}
          <div className='flex flex-col lg:flex-row w-full md:gap-16 mx-auto px-4 md:px-6 xl:px-20 md:mt-4 mt-10'>
          <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-12 w-full'>
            <img src="expensetree.jpg" alt="Project 1 description" className='w-full xl:w-[55%] h-auto object-cover max-w-2xl xl:ml-16' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-center xl:text-left xl:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold'>ExpenseTree</h4>
              <p className='text-base md:text-lg mt-5 text-[#666] xl:mr-10'>
              ExpenseTree helps you seamlessly track and manage your finances with ease and precision. Whether budgeting for goals or monitoring daily expenses. It provides you with clear insights in a secure, user-friendly environment.
              </p>
              <Link href="/ExpenseTree" target="_blank">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-[#7843E9] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-md text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 text-center mt-8">
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>
        </div>

 {/* Project Section 8 */}
 <div className='flex flex-col lg:flex-row w-full md:gap-16 mx-auto px-4 md:px-6 xl:px-20 md:mt-4 mt-10'>
          <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-12 w-full'>
            <img src="socialload.jpg" alt="Project 1 description" className='w-full xl:w-[55%] h-auto object-cover max-w-2xl xl:ml-16' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-center xl:text-left xl:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold'>SocialLoad</h4>
              <p className='text-base md:text-lg mt-5 text-[#666] xl:mr-10'>
              SocialLoad is a powerful web application that allows users to download videos from multiple platforms like YouTube, Instagram, TikTok, and more by simply providing the video URL
              </p>
              <Link href="/SocialLoad" target="_blank">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-[#7843E9] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-md text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 text-center mt-8">
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Section 1 */}
        <div className='flex flex-col lg:flex-row w-full md:gap-16 mx-auto px-4 md:px-6 xl:px-20 md:mt-4 mt-10'>
          <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-12 w-full'>
            <img src="cheerswithtea.jpg" alt="Project 1 description" className='w-full xl:w-[55%] h-auto object-cover max-w-2xl xl:ml-16' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-center xl:text-left xl:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold'>Cheers with Tea</h4>
              <p className='text-base md:text-lg mt-5 text-[#666] xl:mr-10'>
               Cheers With Tea is a Full Stack Crowdfunding project. Here, your fans can find and fund you. This platform is mainly for developers, creators and influencers over the world wide.
              </p>
              <Link href="/CheersWithTea" target="_blank">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-[#7843E9] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-md text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 text-center mt-8">
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>
        </div>


        {/* Project Section 2 */}
        <div className='flex flex-col lg:flex-row w-full md:gap-16 mx-auto px-4 md:px-6 xl:px-20 mt-16'>
          <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-12 w-full'>
            <img src="portfolio.jpg" alt="Project 3 description" className='w-full xl:w-[55%] h-auto object-cover max-w-2xl xl:ml-16' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-center xl:text-left xl:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold'>Portfolio Dekho</h4>
              <p className='text-base md:text-lg mt-5 text-[#666] xl:mr-10'>
              Portfolio Dekho showcases a developer&apos;s work with a modern, engaging design. It highlights projects with optimized performance and a responsive layout, featuring interactive project previews. This platform is perfect for presenting professional achievements effectively.
              </p>
              <Link href="/Portfolio" target="_blank">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-[#7843E9] focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-md text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 text-center mt-8">
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>
        </div>


          {/* Project Section 4 */}
          <div className='flex flex-col lg:flex-row w-full md:gap-16 mx-auto px-4 md:px-6 xl:px-20 mt-16'>
          <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-12 w-full'>
            <img src="reciperover.jpg" alt="Project 2 description" className='w-full xl:w-[55%] h-auto object-cover max-w-2xl xl:ml-16' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-center xl:text-left xl:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold'>Recipe Rover</h4>
              <p className='text-base md:text-lg mt-5 text-[#666] xl:mr-10'>
              RecipeRover is a dynamic recipe search platform that helps users find recipes based on the ingredients they have at home. Users can also search by recipe name or category, making meal planning easy and convenient.
              </p>
              <Link href="/RecipeRover" target="_blank">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-[#7843E9] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-md text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 text-center mt-8">
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>
        </div>


         {/* Project Section 3 */}
         <div className='flex flex-col lg:flex-row w-full md:gap-16 mx-auto px-4 md:px-6 xl:px-20 mt-16'>
          <div className='flex flex-col xl:flex-row items-center gap-8 md:gap-12 w-full'>
            <img src="passx.jpg" alt="Project 2 description" className='w-full xl:w-[55%] h-auto object-cover max-w-2xl xl:ml-16' />
            <div className='flex flex-col justify-center w-full xl:w-1/2 text-center xl:text-left xl:ml-10'>
              <h4 className='text-xl md:text-2xl font-bold'>PassX</h4>
              <p className='text-base md:text-lg mt-5 text-[#666] xl:mr-10'>
              PassX is a secure platform designed for managing and storing passwords efficiently. It provides users with a streamlined way to keep their credentials safe and accessible, ensuring both convenience and security. The user-friendly interface allows for easy navigation and quick access to stored passwords, making it an essential tool for anyone to manage their digital security effectively.
              </p>
              <Link href="/PassX" target="_blank">
                <button
                  type="button"
                  className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 text-white bg-[#7843E9] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-md text-base md:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 text-center mt-8">
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;
