// src/components/RegisterForm.js
import React from 'react';
import RegisterImg from "../assets/7806914.png";
import Logo from "../assets/logo1.png";

const Register = () => {
  return (
    <div className="flex max-h-full">
      {/* Left side with full-screen image */}
      <div className="hidden lg:flex lg:w-1/2  bg-cover bg-center" style={{ backgroundImage: `url(${RegisterImg})` }}>
        {/* You can customize the image URL and other styles */}
        {/* <img className="max-h-full"  src={RegisterImg} alt=""  /> */}
        {/* <img className="" src={RegisterImg} alt="" /> */}
      </div>

      {/* Right side with the registration form */}
      <div className="w-full lg:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="max-w-md w-full h-full">
            <img src={Logo} />
          <h2 className="text-3xl font-semibold mb-4">Create your account</h2>

          {/* Your form goes here */}
          <form>
            {/* Form fields go here */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Your Full Name
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Your Email Address
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Your Phone Number
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Choose Your Country
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Choose Your State
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Enter City
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Enter Postal or Pin Code
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Choose Your Profile Type:-
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            {/* Add more form fields as needed */}
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Register
            </button>
            <h4 className='mt-2 font-semibold'>Already have an account <a href="#" className='underline'>Login</a> </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
