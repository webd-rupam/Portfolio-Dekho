// components/Chat.js
import React from 'react';
import Link from 'next/link';

const Chat = () => {
  return (
    <Link href="/#contact">
      <div 
        className='fixed bottom-16 right-6 flex items-center gap-3 text-black z-50 cursor-pointer'
        aria-label="Chat with us"
      >
        <span 
          className='bg-gray-100 rounded-full flex items-center px-4 py-2 shadow-custom-full hover:bg-gray-300 transition-colors duration-300'
          aria-label="Share your thoughts"
        >
          Share your thoughts!
        </span>
        <span 
          className='p-3 bg-gradient-to-r from-[#76bbbd] to-[#793333] rounded-full shadow-custom-full hover:p-2 transition-all duration-300'
        >
          <img 
            className='w-6 h-6' 
            src="/chat.png" 
            alt="Chat icon" 
          />
        </span>
      </div>
    </Link>
  );
};

export default Chat;
