"use client";
import { useState, useEffect } from "react";
import Box from "./Box";
import Nav from "./Nav";
import TypedText from "./TypedText";
import Alert from "./Alert";
import Regions from "./Regions";
import Feedback from "./Feedback";
import About from "./About";
import Footer from "./Footer";

const Page = () => {
  const videos = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
    "video5.mp4",
    "video6.mp4",
    "video7.mp4",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <main>
      <Nav />
      <div className="flex flex-col lg:flex-row m-6 p-5">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
          <div className="relative w-full lg:w-[400px]">
            <video
              src={videos[index]}
              className="transition-opacity duration-1000 ease-in-out rounded-lg w-full lg:h-[600px] object-cover"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:ml-[50px] pt-14 mt-[20px] lg:mt-0 w-full lg:w-auto">
          <div className="text-center">
            <div className="text-4xl lg:text-7xl font-bold">
              Let us plan you a perfect
            </div>
            <div className="text-3xl lg:text-6xl font-bold text-blue-400 mt-2">
              <TypedText strings={["India Holiday"]} typeSpeed={50} />
            </div>
            <div className="text-gray-500 text-md lg:text-xl mt-4">
              Tailored Journeys to Match Your Dreams.
            </div>
            <Box />
          </div>
        </div>
      </div>
      <div className="lg:pt-[50px]">
        <Regions />
      </div>
      <div>
        <Alert />
      </div>
      <div>
        <Feedback />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer/>
      </div>
    </main>
  );
};

export default Page;
