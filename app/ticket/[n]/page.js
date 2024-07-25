"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'tailwindcss/tailwind.css';
import { useParams } from 'next/navigation';
import Styles from "./ticket.modules.css";

const Page = () => {
  const { n } = useParams(); // Extracts the 'n' parameter from URL
  console.log(n);

  // Titles for different types
  const titles = ['','Wildlife', 'Heritage', 'Trekking'];
  const router = useRouter();

  // Check user status and navigate to the payment page
  const check = () => {
    const status = localStorage.getItem('status');
    const googleStatus = localStorage.getItem('googleStatus');
    if (status == 1 || googleStatus == 1) {
      router.push(`/ticket/${n}/payment`); // Use correct string interpolation
    } else {
      router.push('/sign');
    }
  };

  // State to manage active days
  const [activeDays, setActiveDays] = useState(new Set());

  // Toggle day active status
  const toggleDay = (day) => {
    setActiveDays((prevActiveDays) => {
      const newActiveDays = new Set(prevActiveDays);
      if (newActiveDays.has(day)) {
        newActiveDays.delete(day);
      } else {
        newActiveDays.add(day);
      }
      return newActiveDays;
    });
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="header bg-blue-400 p-4">
        <span className="text-3xl font-bold">Let's Travel to {titles[n]}</span>
      </div>
      <div className="planhead mt-8 text-center">
        <h3 className="text-2xl font-semibold">Day Wise Plan for {titles[n]}</h3>
      </div>
      <div className="plan mt-8">
        <ul className="days space-y-4">
          {Array.from({ length: 5 }).map((_, index) => {
            const dayNumber = index + 1;
            const isActive = activeDays.has(`Day ${dayNumber}`);

            return (
              <li key={dayNumber} className="bg-white p-4 rounded-md shadow-md">
                <div
                  className="day-header text-xl font-semibold cursor-pointer text-blue-600"
                  onClick={() => toggleDay(`Day ${dayNumber}`)}
                >
                  Day {dayNumber}
                </div>
                {isActive && (
                  <ol className="activity flex flex-wrap justify-center mt-4 space-x-4">
                    <li className="m-2">
                      Activity 1
                      <img className="w-32 h-32 rounded-md shadow-md" src='/pack1.webp' alt='Activity 1' />
                    </li>
                    <li className="m-2">
                      Activity 2
                      <img className="w-32 h-32 rounded-md shadow-md" src='/pack2.webp' alt='Activity 2' />
                    </li>
                    <li className="m-2">
                      Activity 3
                      <img className="w-32 h-32 rounded-md shadow-md" src='/pack3.webp' alt='Activity 3' />
                    </li>
                    <li className="m-2">
                      Activity 4
                      <img className="w-32 h-32 rounded-md shadow-md" src='/pack4.webp' alt='Activity 4' />
                    </li>
                  </ol>
                )}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mt-8">
          <button
            onClick={check}
            className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition duration-300">
            Proceed to payment
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
