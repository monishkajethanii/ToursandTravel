import React from 'react';

const Confirmation = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-[220px]">
      <div className="bg-pink-500 text-white text-center py-4">
        <h2 className="text-xl font-bold">Ticket</h2>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold text-gray-700">Package:</span>
          <span className="text-gray-600">Package 1</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold text-gray-700">Date:</span>
          <span className="text-gray-600">July 30, 2024</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold text-gray-700">Time:</span>
          <span className="text-gray-600">6:00 PM</span>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700">Ticket No: </span>
            <span className="text-gray-600">#22</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
