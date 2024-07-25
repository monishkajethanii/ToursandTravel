"use client";
import { useState } from "react";

const StyledButton = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleClick = () => {
    setAlertVisible(true);
  };

  const handleClose = () => {
    setAlertVisible(false);
  };

  const done = (event) => {
    event.preventDefault();
    alert("Enquiry submitted successfully");
    setAlertVisible(false); 
    };

  return (
    <div className="flex items-center justify-center">
      <button
        className="border-4 border-white p-2 rounded-lg bg-blue-400 text-white hover:bg-white hover:text-blue-400 hover:border-blue-400 transition duration-300"
        onClick={handleClick}
      >
        Enquire Now
      </button>
      {isAlertVisible && <AlertBox onClose={handleClose} onSubmit={done} />}
    </div>
  );
};

const AlertBox = ({ onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-4 sm:max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &#x2715;
        </button>
        <form onSubmit={onSubmit}>
          <div className="mb-3 flex items-center">
            <img
              src="/logo.jpeg"
              width={50}
              height={50}
              className="rounded-full mb-3"
            />
            <p className="inline pl-2">JourneyToIndia</p>
          </div>
          <div className="mb-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div className="mb-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              placeholder="Contact no"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your tour description"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StyledButton;
