"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

export default function Feedback() {
  return (
    <main>
      <div className="px-4 sm:px-8 md:px-16 lg:pl-[120px] mt-14 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500 font-bold">
        Guest Satisfaction is Our Goal;
      </div>
      <div className="mt-4 px-4 sm:px-8 md:px-16 lg:pl-[120px] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 font-bold">
        Valuable Feedback Matters to Us
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start lg:space-x-4">
        {/* 2 imgs */}
        <div className="flex flex-wrap justify-center">
          <Image
            className="mt-9 mx-4 lg:ml-[120px]"
            src="/fed1.png"
            width={300}
            height={1000}
          />
          <Image
            className="mt-9 mx-4"
            src="/fed2.png"
            width={300}
            height={1000}
          />
        </div>
        <div className="flex flex-col w-full max-w-md lg:w-[500px] h-auto lg:h-[400px] justify-center align-middle mx-4 mt-12 p-6 shadow-2xl">
          {/* feedback matter */}
          <h1 className="text-xl lg:text-2xl text-gray-500 font-bold mb-4">Nice experience.... </h1>
          <p>
            Tour of Do Dham - Yamunotri & Gangotri for 7 days from 10.05.24 to 16.05.24. Overall arrangements were very good. Our Darshan of both Yamunotri & Gangotri was very nice. Hotels arranged were good. Mr. MANAVENDRA of Tour My India coordinated the entire tour very nicely & he was kind enough to meet us personally at Dehradun.
          </p>
          <h1 className="text-lg lg:text-xl text-gray-500 font-bold mt-4">Chandrakant Gourimath</h1>
          <h1 className="text-md lg:text-1xl text-gray-500 font-bold">May 2024</h1>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStarHalfStroke} className="text-yellow-500" />
          </div>
          <button className="mt-4 border-2 border-blue-400 rounded-lg px-4 py-2 hover:bg-blue-400 hover:text-white transition duration-300">
            <a href="/Template/2">Explore More <FontAwesomeIcon icon={faInternetExplorer} /></a>
          </button>
        </div>
      </div>
      <div className='mt-12'>
      </div>
    </main>
  );
}
