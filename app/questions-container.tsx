'use client'
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from 'react';
import { Odor_Mean_Chey, Playfair_Display } from "next/font/google";

import { sendEmailFormAsync, sendEmailTestAsync } from "../utils/utils";

import waIcon from '../public/whatsappIcon.svg'
import loadingSpinner from '../public/loading_spinner.svg'

const playfair = Playfair_Display({
  subsets: ["latin"],
  fallback: ["serif"]
})

const QuestionsContainer: NextPage = () => {

  const msgInputRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  // formState can be "unsent", "loading", "sent"
  const [formState, setFormState] = useState("unsent");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setFormState("loading")
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('service_id', "jem-studio-website");
    formData.append('template_id', 'template_uqx1z9l');
    formData.append('user_id', 'QgwCYyYU_ezgDI6yL');
    for (let item of formData.entries()) {
      console.log(item)
    }
    const res = await sendEmailTestAsync(formData);
    if (res.ok) {
      console.log(res)
      setFormState("sent")
    }
    console.log("loading complete")
  }

  function whatsappHandler(e: React.MouseEvent<HTMLButtonElement>) {

    let apiLink = "https://api.whatsapp.com/send?phone=6588852577&text=";
    if (msgInputRef.current !== null && msgInputRef.current.value.trim() !== "") {
      apiLink = apiLink.concat(encodeURIComponent(msgInputRef.current?.value));
      console.log(apiLink);
    } else {
      let text = "Hi, I would like to enquire more about piano lessons at Rondo Studio.";
      apiLink = apiLink.concat(encodeURIComponent(text));
    }
    window.open(apiLink, "_newtab");

  }

  const formLabelStyle = "text-sm"

  return (
    <div className="self-stretch flex flex-col items-center justify-center text-stone-600">
      <p className={`text-2xl mb-6 ${playfair.className}`}>Want to know more?</p>
      <form className="w-3/4 max-w-2xl lg:w-2/5 flex flex-col items-stretch text-stone-600" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input autoComplete="true" autoCapitalize="true" type="text" id="name" name="name" className="bg-transparent border-0 border-b border-b-stone-400 text-gray-900 text-sm focus:border-b-yellow-400 focus:ring-0 block w-full py-2.5 px-0" required />
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="mb-6 grow">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input autoComplete="true" type="email" id="email" name="email" className="bg-transparent border-0 border-b border-b-stone-400 text-gray-900 text-sm focus:border-b-yellow-400 focus:ring-0 block w-full py-2.5 px-0 " required />
          </div>
          <div className="mb-6 grow">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
            <input autoComplete="true" type="tel" id="phone" name="phone" className="bg-transparent border-0 border-b border-b-stone-400 text-gray-900 text-sm focus:border-b-yellow-400 focus:ring-0 block w-full py-2.5 px-0" required />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
          <textarea ref={msgInputRef} id="message" name="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-400 transition-colors duration-300 ease-out focus:border-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your message here..."></textarea>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mt-6">
          <button disabled={formState === "loading" || formState === "sent"} type="submit"
            className={` ${formState==="sent" ? "bg-stone-300 text-stone-400":"bg-yellow-200 text-gray-900" }
            ${formState==="unsent" && "hover:bg-lime-200"} focus:ring-4 focus:outline-none focus:ring-lime-100
            rounded-full text-lg px-7 h-12 text-center self-center transition-colors duration-200`}>
            <span className={`${formState === "loading" ? "hidden" : ""}`}>
              {formState==="sent"?"Thank You!": "Contact Us"}
            </span>
            <Image src={loadingSpinner} alt="loading spinner" className={`${formState === "loading" ? "" : "hidden"} h-8 w-8 aspect-square animate-spin fill-white text-white stroke-white`} />
          </button>
          <button type="button" onClick={whatsappHandler} className="h-12 aspect-square rounded-full bg-lime-300 flex justify-center items-center">
            <Image src={waIcon} alt="send whatsapp message" className="h-4/6" />
          </button>
        </div>

      </form>
    </div>
  );
};

export default QuestionsContainer;
