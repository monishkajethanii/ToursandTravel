"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Search = ({ n }) => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [hasSelected, setHasSelected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        console.log("Fetched data:", jsonData);

        const dataArray = Object.values(jsonData);
        console.log("Converted array:", dataArray);
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && !hasSelected) {
      const filteredSuggestions = data
        .filter(
          (item) =>
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.str.toLowerCase().includes(value.toLowerCase())
        )
        .map((item) => item.title);
      console.log(filteredSuggestions);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setHasSelected(true);
    search(suggestion);
  };

  const search = (query) => {
    const inputValueLower = (query || inputValue).toLowerCase();
    const filteredResults = data.filter(
      (item) =>
        item.str.toLowerCase().includes(inputValueLower) ||
        item.title.toLowerCase().includes(inputValueLower)
    );
    console.log(filteredResults);
    setResults(filteredResults);
  };

  return (
    <div className="p-4 bg-white rounded-lg relative">
      <div className="relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="search-screen-icon absolute ml-2 mt-2.5"
          width={20}
        />
        <input
          type="text"
          placeholder="Search.."
          value={inputValue}
          onChange={handleInputChange}
          className="search-screen w-50 rounded-2xl h-10 pr-3 pl-10 py-2 border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:placeholder-gray-500 hover:shadow-[10px_10px_5px] transition-all delay-75 cursor-pointer"
        />
      </div>
      {!hasSelected && suggestions.length > 0 && (
        <ul className="absolute mt-1 w-full max-w-xs bg-white border border-gray-300 rounded-lg shadow-md max-h-48 overflow-y-auto z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <ul>
          {results.map((result) => (
            <li key={result.id} className="mb-2">
              <Link
                href={`/${result.path}/${result.id}`}
                className="block p-4 shadow-sm transition"
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
