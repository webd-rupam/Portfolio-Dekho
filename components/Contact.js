"use client"

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({ email: "", name: "", message: "" });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('https://formspree.io/f/mldrvlbg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      setStatus('Message sent successfully!');
      setForm({ email: "", name: "", message: "" }); // Clear the form
    } else {
      toast.error('Oops! Message cannot be sent at this moment.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      setStatus('Failed to send message.');
    }

    setLoading(false);
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div id='contact' className='relative min-h-screen w-full overflow-x-hidden flex flex-col justify-center gap-8 md:gap-16 lg:gap-32 pb-10 md:pb-20 bg-gradient-to-br from-teal-100 via-teal-50 to-teal-200'>
        <div className='relative z-[5] flex flex-col items-center gap-5 text-center px-4 mt-20'>
          <h2 className='text-xl mt-5 md:text-2xl lg:text-4xl font-bold text-gray-800'>CONTACT</h2>
          <span className='bg-[#7843E9] w-8 h-1.5 rounded-full'></span>
          <p className='text-lg md:text-xl lg:text-xl text-gray-700 md:px-10 md:w-[65vw]'>
            Feel free to contact me by submitting the form below, and I will get back to you as soon as possible.
          </p>
        </div>

        <div className="relative z-[5] flex justify-center items-center px-4 md:px-0">
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <div className="mb-4 sm:mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                required
                value={form.name}
                onChange={handleChange}
                type="text"
                id="name"
                name='name'
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                required
                onChange={handleChange}
                value={form.email}
                type="email"
                id="email"
                name='email'
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                required
                onChange={handleChange}
                value={form.message}
                id="message"
                name='message'
                placeholder="Enter Your Message"
                rows="4"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="transition-transform duration-500 ease-in-out transform hover:translate-y-1 px-4 py-2 sm:px-6 sm:py-3 bg-[#008080] text-white font-bold rounded-md shadow-lg hover:bg-[#004d40] focus:outline-none focus:ring-2 focus:ring-[#004d40]">
                {loading ? (
                  <div role="status">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  'SUBMIT'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
