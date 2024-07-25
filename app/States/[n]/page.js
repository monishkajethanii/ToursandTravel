"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPaw, faGift } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const States = () => {
  const {n }=useParams();
  console.log(n)
  const [data, setData] = useState(null);

  useEffect(() => {
    if (n) {
      async function fetchData() {
        try {
          const response = await fetch("/data.json");
          const fetchedData = await response.json();
          setData(fetchedData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [n]);

  const attractions = [
    {
      title: "Amer Fort",
      description:
        "An impregnable fort that makes Jaipur’s important landmark, Amer Fort is a well-known and most-visited attraction in Rajasthan.",
      imgSrc: "/amer.png",
    },
    {
      title: "City Palace",
      description:
        "An exquisite royal palace, City Palace offers a sneak peek inside the cultural and historical opulence of Rajasthan. It’s architectural grandeur deserves a special mention.",
      imgSrc: "/city.png",
    },
    {
      title: "Jantar Mantar",
      description:
        "Featuring the world’s largest stone sundial, Jantar Mantar is an ancient open-sky observatory that must not be missed when visiting Jaipur.",
      imgSrc: "/jantar.png",
    },
  ];

  return (
    <main>
      <div className="relative flex flex-col md:flex-row">
        <div className="inner-left-jammu w-full md:w-1/2">
          {/* Image Section */}
          {data && data[n] && data[n].src && (
            <Image
              src={data[n].src}
              alt="Tourism"
              layout="responsive"
              width={700}
              height={600}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 bg-white">
          <nav className="text-sm text-gray-600 mb-4">
            <a href="/">Home</a> / States /
            {data && data[n] && data[n].state && (
              <span className="text-orange-600"> {data[n].state}</span>
            )}
          </nav>
          {data && data[n] && data[n].title && (
            <h1 className="text-6xl font-bold text-gray-500">
              {data[n].title}
            </h1>
          )}
          <p className="text-xl text-gray-400 mt-4">
            {data && data[n] && data[n].caption}
          </p>
          <div className="mt-14 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                Heritage
              </h2>
              <p className="text-gray-600">
                Witness the Unprecedented Architectural Grandeur.
              </p>
            </div>
            <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <FontAwesomeIcon icon={faPaw} className="mr-2" />
                Wildlife
              </h2>
              <p className="text-gray-600">
                Marvel at the Unique Ecosystem and Diverse Wildlife.
              </p>
            </div>
            <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <FontAwesomeIcon icon={faGift} className="mr-2" />
                Festivals
              </h2>
              <p className="text-gray-600">
                Take a Plunge in the Rich Culture - Fairs & Festivals.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* paragraphs */}
      <div className="pl-14 bg-white">
        {data && data[n] && data[n].state && (
          <h1 className="text-4xl mt-7 font-bold text-gray-500">
            About {data[n].state} Tourism
          </h1>
        )}
        <p className="mt-7 text-gray-600">{data && data[n] && data[n].para1}</p>
      </div>
      <div className="pl-14 bg-white">
        <h1 className="text-3xl font-bold text-gray-500 mt-7">
          {data && data[n] && data[n].title2}
        </h1>
        <p className="mt-7 text-gray-600">{data && data[n] && data[n].para2}</p>
      </div>
      <div className="pl-14 bg-white">
        <h1 className="text-3xl font-bold text-gray-500 mt-7">
          {data && data[n] && data[n].title3}
        </h1>
        <p className="mt-7 text-gray-600">{data && data[n] && data[n].para3}</p>
      </div>
      <div className="pl-14 bg-white">
        <h1 className="text-3xl font-bold text-gray-500 mt-7">
          {data && data[n] && data[n].title4}
        </h1>
        <p
          className="mt-7 text-gray-600"
          dangerouslySetInnerHTML={{ __html: data && data[n] && data[n].para4 }}
        ></p>
      </div>
      <div className="pl-14 bg-white">
        <h1 className="text-3xl font-bold text-gray-500 mt-7">
          {data && data[n] && data[n].title5}
        </h1>
        <ul className="list-disc ml-14 mt-7 text-gray-600">
          {data &&
            data[n] &&
            data[n].list.split(".").map((item, index) => (
              <li key={index} className="p-2">
                {item.trim()}
              </li>
            ))}
        </ul>
      </div>
      <div className="container mx-auto my-8 pl-14">
        {data && data[n] && data[n].state && (
          <h2 className="text-3xl font-bold mb-6 text-gray-500">
            Popular Tourist Attractions in {data[n].state}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-12">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={attraction.imgSrc}
                alt={attraction.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default States;