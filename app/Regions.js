"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";

const Regions = () => {
  const [regionsData, setRegionsData] = useState({});
  const [selectedRegion, setSelectedRegion] = useState("1"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/images.json'); 
        const data = await response.json();
        setRegionsData(data);
      } catch (error) {
        console.error('Error fetching images data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId);
  };

  const currentImages = regionsData && regionsData[selectedRegion] && regionsData[selectedRegion]?.img || [];

  return (
    <section id="main" className="main">
      <div className="pl-7 lg:p-10">
        <h1 className="text-2xl lg:text-6xl text-gray-500 font-bold">
          Explore Top Destinations by Region
        </h1>
        <nav className="p-5 lg:p-7">
          <ul className="flex flex-wrap justify-center lg:justify-start">
            {['North India', 'South India', 'East India', 'West India', 'Central India', 'North East India'].map((region, index) => (
              <li key={index} className="pr-4 lg:pr-6">
                <Link
                  href="#main"
                  onClick={() => handleRegionClick((index + 1).toString())}
                  className="focus:outline-none focus:border-b-4 focus:border-blue-400"
                >
                  {region}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col lg:flex-row p-5 lg:p-7">
          <img
            src={`/${currentImages[0]}`}
            className="p-4 rounded-lg w-full lg:w-[550px] h-auto"
            alt="Selected Region"
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 p-4">
            {currentImages.slice(1).map((img, index) => (
              <img key={index} src={`/${img}`} className="rounded-lg w-full h-auto" alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;
