"use client";
import React, { useState } from "react";
import Styles from "./payment.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pay from "@/app/Pay";

const Page = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [teenCount, setTeenCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);

  const trains = [
    "Ulhasnagar",
    "Kalyan",
    "Thane",
    "Ambernath",
    "Badlapur",
    "Karjat",
    "Khopoli",
    "Kasara",
  ];
  const aero = [
    "Dadar",
    "Byculla",
    "CST",
    "Kurla",
    "Ghatkopar",
    "Parel",
    "Bhandup",
    "Mulund",
  ];
  const keywords =
    selectedMode === "Train"
      ? trains
      : selectedMode === "Aeroplane"
      ? aero
      : [];

  const TEEN_TICKET_PRICE = 2300;
  const ADULT_TICKET_PRICE = 2800;
  const SENIOR_TICKET_PRICE = 3500;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (!selectedMode && value.length) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
      if (selectedMode && value.length) {
        const filteredResults = keywords.filter((keyword) =>
          keyword.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filteredResults);
      } else {
        setResults([]);
      }
    }
  };

  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setResults([]);
  };

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
    setInput("");
    setResults([]);
    setShowTooltip(false);
  };

  const handleTeenChange = (e) => {
    setTeenCount(parseInt(e.target.value) || 0);
  };

  const handleAdultChange = (e) => {
    setAdultCount(parseInt(e.target.value) || 0);
  };

  const handleSeniorChange = (e) => {
    setSeniorCount(parseInt(e.target.value) || 0);
  };

  const totalPeople = teenCount + adultCount + seniorCount;
  const totalCost =
    teenCount * TEEN_TICKET_PRICE +
    adultCount * ADULT_TICKET_PRICE +
    seniorCount * SENIOR_TICKET_PRICE;

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Select the Mode of Transport
        </h3>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mode"
              value="Train"
              checked={selectedMode === "Train"}
              onChange={handleModeChange}
              className="form-radio"
            />
            <span>Train</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="mode"
              value="Aeroplane"
              checked={selectedMode === "Aeroplane"}
              onChange={handleModeChange}
              className="form-radio"
            />
            <span>Aeroplane</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Enter Source:</h3>
        <div className="relative">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Source"
            autoComplete="off"
            value={input}
            onChange={handleInputChange}
            disabled={!selectedMode}
          />
          {showTooltip && (
            <div className="absolute top-full left-0 mt-1 px-4 py-2 bg-yellow-300 text-black rounded-lg shadow-lg">
              Please select a mode of transport first.
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <ul className="list-disc pl-5">
          {results.map((result, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(result)}
              className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
            >
              {result}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Enter Number of People:</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label htmlFor="teen" className="w-1/2">
              Teen (18 to 25)
            </label>
            <input
              id="teen"
              type="number"
              value={teenCount}
              onChange={handleTeenChange}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="adult" className="w-1/2">
              Adult (25 to 50)
            </label>
            <input
              id="adult"
              type="number"
              value={adultCount}
              onChange={handleAdultChange}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="senior" className="w-1/2">
              Senior (50 to 75)
            </label>
            <input
              id="senior"
              type="number"
              value={seniorCount}
              onChange={handleSeniorChange}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Your Billing Details</h3>
        <hr className="mb-4" />
        <div>
          <div className="flex justify-between mb-2">
            <h4>Teen (18 to 25):</h4>
            <p>
              {teenCount} x {TEEN_TICKET_PRICE} ={" "}
              {teenCount * TEEN_TICKET_PRICE}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <h4>Adult (25 to 50):</h4>
            <p>
              {adultCount} x {ADULT_TICKET_PRICE} ={" "}
              {adultCount * ADULT_TICKET_PRICE}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <h4>Senior (50 to 75):</h4>
            <p>
              {seniorCount} x {SENIOR_TICKET_PRICE} ={" "}
              {seniorCount * SENIOR_TICKET_PRICE}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <h4>Total People:</h4>
            <p>{totalPeople}</p>
          </div>
          <div className="flex justify-between">
            <h4>Total Cost:</h4>
            <p>{totalCost}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="border-2 border-blue-400 rounded-lg w-[100px] h-[40px] hover:bg-blue-400 hover:text-white"
          onClick={handleClick}
        >
          Next
          <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
        </button>
        {showComponent && <Pay />}
      </div>
    </main>
  );
};

export default Page;
