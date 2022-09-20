import React from "react";
import flag1 from "../images/flag1.png";
import chat from "../images/chat.webp";
import "../App.css";
import appstore from "../images/appstore.svg";
import play from "../images/play.png";
import "../App.css";
// import Organisaationcard from "./Organisaationcard";

const Intro = () => {
  return (
    <div>
      <div className=" w-full px-10 mt-36">
        <div className="flex lg:flex-row-reverse justify-center items-center my-20 flex-col border-2 border-gray-100 p-8">
          <div className="tutorimg w-full flex justify-center items-center mb-20 mt-10 border-2 border-gray-100 flex-col p-6">
            <div className="tutorpic w-40 h-40 sm:w-80 sm:h-80 rounded-full relative">
              <div className="w-40 h-20 sm:w-60 sm:h-20 flex justify-around border-2 rounded-xl items-center shadow-xl bg-gray-50  z-2 absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="flags w-12 h-12 rounded-full shadow-lg " />
                <div>
                  <h4 className="nameheading"> </h4>
                  <p className=" para text-xs whitespace-nowrap"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:flex justify-center lg:justify-start items-center lg:items-start  flex-col tracking-wider text-center lg:text-left">
            <h1 className="text-4xl">
              Say hello to your private English tutor
            </h1>
            <p className="text-xl font-regular text-gray-500 my-6 mb-10">
              Become fluent faster through one-on-one video chat lessons
              tailored to your goals.
            </p>
            <div className="hidden md:flex justify-center items-center">
              <input
                type="text"
                placeholder="Email"
                className="bg-gray-200 py-3 px-8 rounded-tr-sm rounded-tl-sm outline-none border-b-2 border-gray-300 "
              />
              <button className="bg-yellow-400 py-3 px-5 ml-3 rounded-md">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex md:hidden justify-center sm:justify-start  sm:3/5 text-white  my-16">
          <div className="w-1/2 flex justify-end">
            <img className="w-36" src={appstore} alt="" />
          </div>
          <div className="w-1/2">
            <img className="w-36" src={play} alt="" />
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <div>
          <div className="block md:flex justify-around items-center mx-8">
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <img src={chat} alt="" className="" />
            </div>
            <div className="text-left w-full md:w-2/5 tracking-wider flex flex-col ">
              <h1 className="text-4xl sm:text-5xl">
                English immersion from anywhere
              </h1>
              <p className="text-medium sm:text-xl  text-black sm:text-gray-500 my-6 mb-10 ">
                Build English proficiency and confidence through real
                conversations with friendly tutors from the US, UK, Australia,
                and more. All you need is your device!
              </p>
              <div className="block sm:flex md:hidden " style={{}}>
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-gray-200 py-3 px-8 rounded-tr-sm rounded-tl-sm outline-none border-b-2 border-gray-400 w-full sm:w-2/5  mb-4 sm:0"
                />
                <button className="bg-yellow-400 px-5 sm:px-2 ml-0 sm:ml-3 rounded-md w-full sm:w-1/5 text-base sm:text-sm whitespace-nowrap h-11 sm:h-12">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
