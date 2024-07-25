"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Confirmation from './Confirmation';

const Pay = () => {
  const [selectedOption, setSelectedOption] = useState('Debit/Credit Card');
  const [selectedBank, setSelectedBank] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  const renderForm = () => {
    switch (selectedOption) {
      case 'Debit/Credit Card':
        return (
          <div className="bg-gray-200 p-6 rounded-lg shadow-md mb-4">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-500">Card Number</label>
                <input 
                  type="text" 
                  placeholder="Enter Your Card Number" 
                  className="w-full p-2 mt-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-500">Name on the card</label>
                <input 
                  type="text" 
                  placeholder="Name on the card" 
                  className="w-full p-2 mt-1 border rounded"
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                  <label className="block text-gray-500">Expiry</label>
                  <div className="flex flex-col md:flex-row md:space-x-2">
                    <input 
                      type="text" 
                      placeholder="MM" 
                      className="w-full md:w-1/2 p-2 mt-1 border rounded"
                    />
                    <input 
                      type="text" 
                      placeholder="YY" 
                      className="w-full md:w-1/2 p-2 mt-1 border rounded"
                    />
                  </div>
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                  <label className="block text-gray-500">CVV</label>
                  <input 
                    type="text" 
                    placeholder="CVV" 
                    className="w-full p-2 mt-1 border rounded"
                  />
                </div>
              </div>
            </form>
          </div>
        );
      case 'Net Banking':
        return (
          <div className="bg-gray-200 p-6 rounded-lg shadow-md mb-4">
            <h4 className="text-xl font-semibold mb-4">Pay using Net Banking</h4>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="sbi" name="bank" value="SBI" />
                  <label htmlFor="sbi" className="flex-1">State Bank of India</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="hdfc" name="bank" value="HDFC" />
                  <label htmlFor="hdfc" className="flex-1">HDFC Bank</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="axis" name="bank" value="AXIS" />
                  <label htmlFor="axis" className="flex-1">AXIS Bank</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="icici" name="bank" value="ICICI" />
                  <label htmlFor="icici" className="flex-1">ICICI Bank</label>
                </div>
              </div>
              <div>
                <label className="block text-gray-500">All Banks</label>
                <select
                  className="w-full p-2 mt-1 border rounded"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                >
                  <option value="">Select Bank</option>
                  <option value="SBI">State Bank of India</option>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="AXIS">AXIS Bank</option>
                  <option value="ICICI">ICICI Bank</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'Mobile Wallets':
        return (
          <div className="bg-gray-200 p-6 rounded-lg shadow-md mb-4">
            <h4 className="text-xl font-semibold mb-4">Pay Using Wallets</h4>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="amazonpay" name="wallet" value="Amazon Pay" />
                  <label htmlFor="amazonpay" className="flex-1">Pay using Amazon Pay Balance and get upto INR 75* back. *T&C Apply</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="mobikwik" name="wallet" value="MobiKwik" />
                  <label htmlFor="mobikwik" className="flex-1">Pay Using MobiKwik & Get upto 20% Cashback. *T&C Apply</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="paytm" name="wallet" value="Paytm" />
                  <label htmlFor="paytm" className="flex-1">Paytm</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="payzapp" name="wallet" value="PayZapp" />
                  <label htmlFor="payzapp" className="flex-1">Pay using PayZapp and get 5% cashback up to INR 100 T&C Apply</label>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Gift Voucher':
        return (
          <div className="bg-gray-200 p-6 rounded-lg shadow-md mb-4">
            <h4 className="text-xl font-semibold mb-4">Pay using Gift Voucher</h4>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row items-center">
                <input 
                  type="text" 
                  placeholder="Enter your GV number" 
                  className="w-full p-2 border rounded"
                />
                <button className="mt-2 md:mt-0 md:ml-2 px-4 py-2 bg-blue-400 text-white rounded-lg">APPLY</button>
              </div>
              <p className="text-blue-400">
                Hey! Looks like you're trying to avail a discount code and not a Gift Voucher. 
                Please <a href="#" className="text-blue-400">click here</a> to avail the same.
              </p>
            </form>
          </div>
        );
      case 'UPI':
        return (
          <div className="bg-gray-200 p-6 rounded-lg shadow-md mb-4">
            <h4 className="text-xl font-semibold mb-4">Pay using UPI</h4>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="cred" name="upi" value="CRED UPI" />
                  <label htmlFor="cred" className="flex-1">CRED UPI</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="googlepay" name="upi" value="Google Pay" />
                  <label htmlFor="googlepay" className="flex-1">Google Pay</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="amazonpayupi" name="upi" value="Amazon Pay" />
                  <label htmlFor="amazonpayupi" className="flex-1">Amazon Pay</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="paytmupi" name="upi" value="Paytm" />
                  <label htmlFor="paytmupi" className="flex-1">Paytm</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="bhim" name="upi" value="BHIM" />
                  <label htmlFor="bhim" className="flex-1">BHIM</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="phonepe" name="upi" value="PhonePe" />
                  <label htmlFor="phonepe" className="flex-1">PhonePe</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="otherupi" name="upi" value="Other UPI" />
                  <label htmlFor="otherupi" className="flex-1">Other UPI</label>
                </div>
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-shrink-0">
                    <img src='./qr.png' alt="QR Code" className="w-full md:w-32 h-32 object-cover border border-gray-300 rounded-md shadow-md" />
                  </div>
                  <div className="flex-1">
                    <input type="radio" id="qr" name="upi" value="QR" />
                    <label htmlFor="qr" className="ml-2 text-lg font-medium">Scan QR Code</label>
                    <div className="p-4 mt-2 border-dashed border-2 border-gray-400 rounded-lg text-center">
                      Scan QR Code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main>
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Payment options</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <ul className="space-y-2">
            {[ 'Debit/Credit Card', 'Net Banking', 'Mobile Wallets', 'Gift Voucher', 'UPI'].map(option => (
              <li
                key={option}
                className={`cursor-pointer p-2 ${selectedOption === option ? 'bg-blue-400 text-white' : 'bg-gray-100'} ${selectedOption === option ? 'text-lg font-medium' : ''}`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4 md:pl-6">
          {renderForm()}
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
    {showComponent && <Confirmation />}
  </div>
  </main>
  );
};

export default Pay;
