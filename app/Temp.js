"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TypedText from "./TypedText";

const n = 3;

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const packages = data && data[n] ? data[n].packages : [];
  const duration = data && data[n] ? data[n].duration : [];
  const packing = data && data[n] ? data[n].packing : [];
  const str = data && data[n] && data[n].str ? data[n].str : "Default text";
  console.log(str)
  return (
    <main>
      <div className="header">
        {data && data[n] && data[n].image1 && (
          <Image
            src={data[n].image1}
            width={1550}
            height={50}
            style={{ marginTop: "10px" }}
            alt="Header Image"
          />
        )}
        <div className="imgtext1">{data && data[n] && data[n].imgtext1}</div>
        <div className="imgtext2">{data && data[n] && data[n].imgtext2}</div>
      </div>

      <div className="data">
        <h3 className="m-6 font-bold text-6xl text-gray-400">
          {data && data[n] ? (
            <TypedText strings={[str]} typeSpeed={50} />
          ) : (
            //getRandomSlogan()
            "Loading..."
          )}
        </h3>
        <p className="m-7">{data && data[n] && data[n].para1}</p>
        <p className="m-7">{data && data[n] && data[n].para2}</p>
      </div>

      <div className="packages">
        <h3 className="m-6 text-4xl text-gray-400">
          <b>Best Selling Packages of {data && data[n] && data[n].title}</b>
        </h3>
        <table className="table m-7">
          <tbody>
            {packages.map((pkg, index) => (
              <tr key={index}>
                <td>
                  <a>{pkg}</a>
                </td>
                <td>
                  <a>{duration[index]}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="">
        <h3 className="m-7 text-4xl text-gray-400">
          <b>Best Selling Packages</b>
        </h3>
      </div>

      <div className="packagecard flex align-middle justify-center">
        {packages.map((pkg, index) => (
          <div className="card object-fill" key={index}>
            <a>
              <Image
                src={packing[index]}
                width={200}
                height={100}
                alt={`Package Image ${index + 1}`}
              />
              <h5>{pkg}</h5>
              <h3>{duration[index]}</h3>
            </a>
          </div>
        ))}
      </div>
      {/* unesco content - uni (for imgs), unipara1.. (for paragraphs) date1 (for dates) */}
      <div className="flex flex-col mt-16">
        <h1 className="text-4xl text-gray-400 m-7 mt-[100px] font-bold">
          Our Latest Travel Stories About{" "}
          {data && data[n] && data[n].imp && data[n].imp} in India
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-7">
          {/* Container for each item */}
          <div className="flex flex-col items-center justify-center">
            {data && data[n] && data[n].uni1 && (
              <div className="relative group">
                {/* img 1 */}
                <Image
                  className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  src={data[n].uni1}
                  width={300}
                  height={200}
                  alt="Travel Story 1"
                />
                {/* para 1 */}
                <p className="mt-[70px] absolute inset-0 flex items-center justify-center text-lg font-semibold text-white bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                  {data && data[n] && data[n].unipara1}
                </p>
                {/* date 1 */}
                <p className="text-gray-400 mt-4">
                  {data && data[n] && data[n].date1}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            {data && data[n] && data[n].uni2 && (
              <div className="relative group">
                {/* image 2 */}
                <Image
                  className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  src={data[n].uni2}
                  width={300}
                  height={200}
                  alt="Travel Story 2"
                />
                {/* para 2 */}
                <p className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 mt-[70px]">
                  {data && data[n] && data[n].unipara2}
                </p>
                {/* date 2 */}
                <p className="text-gray-400 mt-4">
                  {data && data[n] && data[n].date2}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            {data && data[n] && data[n].uni3 && (
              <div className="relative group">
                {/* img 3 */}
                <Image
                  className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  src={data[n].uni3}
                  width={300}
                  height={200}
                  alt="Travel Story 3"
                />
                {/* para 3 */}
                <p className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white bg-black mt-[70px] bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                  {data && data[n] && data[n].unipara3}
                </p>
                {/* date 3 */}
                <p className="text-gray-400 mt-4">
                  {data && data[n] && data[n].date3}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
