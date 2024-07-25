"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';

const MyFavsPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <main>
      <h1 className="text-2xl lg:text-4xl text-gray-400 m-7 font-bold">My Favorites</h1>
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 justify-center items-center">
        {favorites.length === 0 ? (
          <p className="text-gray-500">No favorites yet.</p>
        ) : (
          favorites.map((item) => (
            <div key={item.id} className="border-4 border-blue-400 w-40 lg:w-48 p-6 text-center rounded-lg bg-white hover:scale-110 transition-transform duration-200">
              <h1 className="text-lg lg:text-xl font-bold mb-2">{item.title}</h1>
              <p className="text-sm lg:text-md text-gray-700 mb-4">{item.insights}</p>
              <Link href={item.link}>
                <img src={item.imgSrc} alt={item.title} className="mx-auto w-16 h-16 lg:w-24 lg:h-24" />
              </Link>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default MyFavsPage;
