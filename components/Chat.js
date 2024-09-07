// components/Chat.js
import React from 'react';
import Link from 'next/link';

const Chat = () => {
  return (
    <>
      <Link href="/#contact">
        <div className='fixed bottom-12 right-6 flex items-center gap-3 text-black z-50 cursor-pointer'>
          <span className='bg-gray-100 rounded-full flex items-center px-4 py-2 shadow-custom-full hover:bg-gray-300 transition-colors duration-300'>
            Share your thoughts!
          </span>
          <span className='p-3 bg-gradient-to-r from-[#76bbbd] to-[#793333] rounded-full shadow-custom-full hover:p-2 transition-all duration-300'>
            <img className='w-6 h-6' src="/chat.png" alt="Chat Icon" />
          </span>
        </div>
      </Link>
    </>
  );
};

export default Chat;
