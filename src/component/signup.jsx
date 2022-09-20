import React from "react";
import signup from "../images/sign up.png";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="w-full h-full sm:flex">
      <div className="hidden sm:flex w-1/2">
        <img src={signup} alt="" />
      </div>
      <div className="w-full sm:w-1/2 pt-20 px-10">
        <h1 className="text-xl sm:text-xl text-center font-regular pb-6">
          Start learning English with WeLearn
        </h1>
        <h2 className="text-xs font-regular text-center">Sign up with:</h2>
        <div className="w-full flex justify-evenly py-6 text-xs sm:text-sm ">
          <div className="flex justify-evenly items-center border border-gray-600 rounded-md px-2   sm:w-1/3 py-1 mr-2 sm:mr-4">
            <FaFacebook className="" />
            <a href="#">Facebook</a>
          </div>
          <div className="flex justify-evenly items-center border border-gray-600 rounded-md  px-1 w-1/3 whitespace-nowrap mr-2 sm:mr-4">
            <FcGoogle />
            <a href="#">Google</a>
          </div>
          <div className="flex justify-evenly items-center border border-gray-600 rounded-md w-1/3 py-2">
            <FaApple />
            <a href="#">Apple</a>
          </div>
        </div>
        <div className="flex  flex-row justify-center items-center">
          <hr className="w-40  -mt-2 text-gray-700 " />
          <p className=" px-4">or</p> <hr className="w-40 -mt-2" />
        </div>
        <h2 className="text-center w-full py-4 text-sm">
          Sign up with your email address:
        </h2>
        <form action="" className="flex justify-center items-center flex-col">
          <input
            placeholder="Email"
            type="text "
            className="w-72 sm:w-64 lg:w-80 px-4 py-2 border-2 rounded-md outline-none focus-within:border-black"
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            className="w-72 sm:w-64 lg:w-80 px-4 py-2  border-2 rounded-md outline-none  focus-within:border-black "
          />
          <br />
          <div className="flex justify-center items-center pb-10">
            <input
              type="submit"
              value="create account"
              className=" rounded-md text-white px-4 py-1 shadow-xl capitalize"
              style={{ backgroundColor: "#228891" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
