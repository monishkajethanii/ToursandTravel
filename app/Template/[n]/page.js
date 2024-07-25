"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TypedText from "../../TypedText";
import { useParams } from 'next/navigation';
import Screen from "@/app/Screen/page";

export default function Page() {
  const { n } = useParams();
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

  const packages = data && data[n] ? data[n].packages : [];
  const duration = data && data[n] ? data[n].duration : [];
  const packing = data && data[n] ? data[n].packing : [];
  const str = data && data[n] && data[n].str ? data[n].str : "Default text";

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
      </div>

      <div className="data">
        <h3 className="m-6 lg:text-6xl font-bold text-4xl text-gray-400">
          {data && data[n] ? (
            <TypedText strings={[str]} typeSpeed={50} />
          ) : (
            <Screen />
          )}
        </h3>
        <p className="m-7">{data && data[n] && data[n].para1}</p>
        <p className="m-7">{data && data[n] && data[n].para2}</p>
      </div>

      <div className="packages">
        <h3 className="m-6 text-2xl lg:text-4xl text-gray-400">
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
        <h3 className="m-7 text-2xl lg:text-4xl text-gray-400">
          <b>Best Selling Packages</b>
        </h3>
      </div>

{/* cardsss responsive */}
<div className="flex flex-col lg:flex-row space-y-[150px] lg:space-y-0 justify-center items-center">
  {packages.map((pkg, index) => (
    <div className="card flex flex-col items-center text-center rounded-lg object-fill" key={index}>
      <a href={`/ticket/${n}`} className="flex flex-col items-center">
        <div className="relative img">
          <Image
            src={packing[index]}
            width={200}
            height={100}
            alt={`Package Image ${index + 1}`}
            className="rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 img-hover:shadow-lg"
          />
        </div>
        <h5 className="mt-4 text-sm lg:text-xl text-gray-500">{pkg}</h5>
        <h3 className="mt-1 mb-2 text-sm lg:text-lg text-gray-400">{duration[index]}</h3>
      </a>
    </div>
  ))}
</div>

      {/* practice */}
      <div className="flex flex-col mt-16">
        <h1 className="text-2xl lg:text-4xl text-gray-400 m-7 mt-[150px] font-bold">
          Our Latest Travel Stories About{" "}
          {data && data[n] && data[n].imp && data[n].imp} in India
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 pt-12 px-4">
          {/* Container for each item */}
          <div className="flex items-center justify-center">
            {data && data[n] && data[n].uni1 && (
              <div className="relative">
                {/* img 1 */}
                <Image
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={data[n].uni1}
                  width={300}
                  height={200}
                  alt="Travel Story 1"
                />
                {/* para 1 */}
                <p className="resp hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
                  {data && data[n] && data[n].unipara1}
                </p>
                {/* date 1 */}
                <p className="text-gray-400 mt-4">
                  {data && data[n] && data[n].date1}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {data && data[n] && data[n].uni2 && (
              <div className="relative">
                {/* image 2 */}
                <Image
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={data[n].uni2}
                  width={300}
                  height={200}
                  alt="Travel Story 2"
                />
                {/* para 2 */}
                <p className="resp hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 mt-[70px]">
                  {data && data[n] && data[n].unipara2}
                </p>
                {/* date 2 */}
                <p className="text-gray-400 mt-4">
                  {data && data[n] && data[n].date2}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {data && data[n] && data[n].uni3 && (
              <div className="relative">
                {/* img 3 */}
                <Image
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={data[n].uni3}
                  width={300}
                  height={200}
                  alt="Travel Story 3"
                />
                {/* para 3 */}
                <p className="resp hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
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
      <div className="mt-7">
      </div>
    </main>
  );
}
