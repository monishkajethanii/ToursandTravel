"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

const Box = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (item) => {
    const isFavorite = favorites.some(fav => fav.id === item.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.id !== item.id);
    } else {
      updatedFavorites = [...favorites, item];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const categories = [
    { id: 1, title: 'Wildlife', insights: '70+ insights', imgSrc: 'tiger-banner.png', link: '/Template/1' },
    { id: 2, title: 'Heritage', insights: '25+ insights', imgSrc: 'heritage.png', link: '/Template/2' },
    { id: 3, title: 'Trekking', insights: '70+ insights', imgSrc: 'trek1.jpeg', link: '/Template/3' },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 pt-12 px-4">
      {categories.map((category) => (
        <div key={category.id} className="border-4 border-blue-400 w-40 lg:w-48 p-6 text-center rounded-lg bg-white hover:scale-110 transition-transform duration-200">
          <h1 className="text-lg lg:text-xl font-bold mb-2">{category.title}</h1>
          <p className="text-sm lg:text-md text-gray-700 mb-4">{category.insights}</p>
          <Link href={category.link}>
            <img src={category.imgSrc} alt={category.title} className="mx-auto w-16 h-16 lg:w-24 lg:h-24" />
          </Link>
          <div className="mt-4 cursor-pointer" onClick={() => toggleFavorite(category)}>
            <FontAwesomeIcon icon={favorites.some(fav => fav.id === category.id) ? solidBookmark : regularBookmark} className="text-blue-500 text-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
