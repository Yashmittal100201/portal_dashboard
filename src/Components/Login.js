// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/otpvarification');
    alert(`Logged in with email: ${email}`);
    setEmail(''); // Clear the input field after submission
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-green-500 text-lg animate-bounce ">
        <span className="font-extrabold bg-gradient-to-bl from-[#23aed4] to-[#17b33e] bg-clip-text text-transparent material-icons text-[12rem]">check_circle</span>
      </div>
      <form onSubmit={handleSubmit} className="w-96 text-center"> 
        <h2 className="text-xl font-bold font-['Helvetica','sans-serif', 'Lato'] mb-3">Please enter your mobile number</h2>
        <input
          type="phone"
          placeholder="Enter your phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-green-500 rounded-lg p-2 w-72 focus:outline-none focus:border-green-600"
        />
        <p className='text-gray-400  mb-3 font-thin'>(example:971 xxxx xxxx)</p>
        <button
          type="submit"
          className="font-bold text-xl animate-pulse bg-gradient-to-r from-[#23aed4] to-[#17b33e] w-72  text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;