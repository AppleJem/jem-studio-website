'use client'
import type { NextPage } from "next";
import { useRef } from 'react';
import { Playfair_Display } from "next/font/google";

import { sendEmailFormAsync } from "../utils/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  fallback: ["serif"]
})

const QuestionsContainer: NextPage = () => {

  const nameInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("nop")
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData)
    formData.append('service_id', "jem-studio-website");
    formData.append('template_id', 'template_uqx1z9l');
    formData.append('user_id', 'QgwCYyYU_ezgDI6yL');
    formData.append('message', "hi, my name is Jem and this is a test message")
    console.log(formData);

    // sendEmailFormAsync(formData);
  }

  const formLabelStyle = "text-sm"

  return (
    <div className="self-stretch flex flex-col items-center justify-center text-stone-600">
      <p className={`text-2xl mb-6 ${playfair.className}`}>Want to know more?</p>
      <form className="w-3/4 max-w-2xl lg:w-2/5 flex flex-col items-stretch" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" id="name" className="border-0 border-b border-b-stone-400 text-gray-900 text-sm focus:border-b-yellow-400 focus:ring-0 block w-full py-2.5 px-0" required />
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="mb-6 grow">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="email" id="" className="border-0 border-b border-b-stone-400 text-gray-900 text-sm focus:border-b-yellow-400 focus:ring-0 block w-full py-2.5 px-0 " required />
          </div>
          <div className="mb-6 grow">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
            <input type="tel" id="phone" className="border-0 border-b border-b-stone-400 text-gray-900 text-sm focus:border-b-yellow-400 focus:ring-0 block w-full py-2.5 px-0" required />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-400 transition-colors duration-300 ease-out focus:border-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <button type="submit" className="text-gray-900 bg-gradient-to-r from-yellow-200 to-amber-200 
        hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200
        rounded-full text-lg px-7 h-12 text-center self-center mt-6">
          Contact Us
        </button>
        <button>

        </button>
      </form>
    </div>
  );
};

export default QuestionsContainer;
