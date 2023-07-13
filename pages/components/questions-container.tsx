import type { NextPage } from "next";
import { useRef } from 'react';


import { sendEmailFormAsync } from "../utils";

const QuestionsContainer: NextPage = () => {

  const nameInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData)
    formData.append('service_id', "jem-studio-website");
    formData.append('template_id', 'template_uqx1z9l');
    formData.append('user_id', 'QgwCYyYU_ezgDI6yL');
    formData.append('message', "hi, my name is Jem and this is a test message")


    sendEmailFormAsync(formData);
  }

  const formLabelStyle = "text-sm"

  return (
    <div className="self-stretch flex flex-col items-center justify-center text-stone-600">
      <form className="w-3/4 lg:w-2/5">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="email" id="email" className="border-0 border-b border-b-stone-400 text-gray-900 text-sm focus:border-b-yellow-400 focus:ring-0 block w-full p-2.5 " placeholder="example@gmail.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
          <input type="email" id="email" className="border-0 border-b border-b-stone-400 text-gray-900 text-sm focus:border-b-yellow-400 focus:ring-0 block w-full p-2.5 " placeholder="example@gmail.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
          <input type="email" id="email" className="border-0 border-b border-b-stone-400 text-gray-900 text-sm focus:border-b-yellow-400 focus:ring-0 block w-full p-2.5 " placeholder="example@gmail.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
      </form>
    </div>
  );
};

export default QuestionsContainer;
