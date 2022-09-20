import React from "react";
import tutor from "../images/Tutor Search.webp";
import world from "../images/world.webp";
import phone from "../images/phone.webp";
import appstore from "../images/appstore.svg";
import play from "../images/play.png";
import { FaArrowRight } from "react-icons/fa";
//import Abc from "./Organisaationcard";

const Main = () => {
  return (
    <div className=" mt-20 ">
      <div className="py-20" style={{ backgroundColor: "rgb(255, 201, 41)" }}>
        <div className="w-full flex justify-center items-center ">
          <div className="w-full  md:w-1/2  flex justify-center items-center flex-col mb-10 px-10">
            <h1 className=" w-full text-3xl sm:text-4xl  leading-10 mb-5 text-gray-800 sm:text-gray-700  text-center font-semibold">
              Do More with WeLearn
            </h1>
            <p className="leading-7 text-gray-600 text-center font-light">
              Unlock the power of our personalized learning experience to
              achieve your English learning goals faster. Discover how fun and
              easy learning English can be — only on WeLearn!
            </p>
          </div>
        </div>
        <div className="w-full md:flex  lg:items-start lg:justify-center mb-0 h-full  lg:flex-row px-10">
          <div className="border-r-2 w-1/4 ">
            <nav>
              <ul className="list-none hidden lg:flex  text-right mr-6 capitalize text-xl text-gray-600 leading-10 h-full flex-col">
                <li>
                  {" "}
                  <a href="#">tutor discovery</a>{" "}
                </li>
                <li>
                  <a href="#">flexible scheduling</a>
                </li>
                <li>
                  <a href="#">specialized curriculum </a>
                </li>
                <li>
                  <a href="#">interactive classroom</a>
                </li>
                <li>
                  <a href="#">lesson review</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-full flex justify-start items-start flex-col pb-60">
            <img src={tutor} alt="" />
            <div className="s w-full sm:w-1/2 leading-7">
              <h4 className="font-light text-sm mt-5 md:mt-0">
                TUTOR DISCOVERY
              </h4>
              <p className="font-regular text-black ">
                Find the perfect tutor for your needs and interest
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(255, 201, 41)"
            fill-opacity="1"
            d="M0,128L60,112C120,96,240,64,360,48C480,32,600,32,720,74.7C840,117,960,203,1080,240C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div> */}
	  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="transform rotate-180 -mb-1 -mt-60">
        <path
          fill="#399EA7"
          fill-opacity="1"
          d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,117.3C672,85,768,75,864,90.7C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div 
        className="w-full flex justify-center items-center "
        style={{ backgroundColor: "#399EA7" }}
      >
        <div className="w-full md:w-3/5 flex justify-center  flex-col pt-20  px-12 pb-12">
          <h1 className="text-white text-4xl pb-10 text-center">
            A Plan for Everyone
          </h1>
          <h3 className="text-left ">Set a weekly schedule</h3>
          <div className="flex flex-col md:flex-row justify-between w-full text-bg-white text-xl">
            <select
              name=""
              id=""
              className="w-full md:w-72 h-14 mt-3 rounded-md px-4 outline-none text-white"
              style={{ backgroundColor: "rgb(29, 78, 96)" }}
            >
              <option bg value="15 minutes per day" className="">
                15 minutes per day
              </option>
              <option value="30 minutes per day">30 minutes per day</option>
              <option value="60 minutes per day">60 minutes per day</option>
              <option value="120 minutes per day">120 minutes per day</option>
            </select>
            <br />
            <select
              name=""
              id=""
              className=" h-14 mt-3 w-full md:w-72 rounded-md px-4 outline-none text-xl text-white"
              style={{ backgroundColor: "rgb(29, 78, 96)" }}
            >
              <option value="1 days per week" className="">
                1 days per week
              </option>
              <option value="3 days per week">3 days per week</option>
              <option value="5 days per week">5 days per week</option>
              <option value="7 days per week">7 days per week</option>
            </select>
          </div>
          <h1 className="my-6">Select a commitment level</h1>
          <div
            className=" w-full text-center text-white md:flex justify-evenly text-xl items-center rounded-md"
            style={{ backgroundColor: "#006266" }}
          >
            <p className="py-3 md:border-r-2  pr-5 border-gray-500 text-center ">
              1 month
              <br /> <span>-</span>
            </p>
            <hr />
            <p className="py-3 md:border-r-2 pr-5 border-gray-500 text-center">
              3 months <br /> <span>10% off</span>
            </p>
            <hr />
            <p className="py-3 text-center">
              6 months <br /> <span>33% off</span>
            </p>
          </div>
          <hr className="border-b-1 border-gray-400 my-5" />
          <div className="w-full sm:flex justify-evenly ">
            <div
              className="w-10 p-4 rounded-full text-white font-semibold absolute right-0 -top-4 "
              style={{ backgroundColor: "#399EA" }}
            >
              33
            </div>
            <button
              className=" flex items-center justify-center w-full sm:w-2/5 rounded-md  border-2 border-yellow-400   py-2  capitalize mt-4 sm:mt-0 font-semibold  text-center text-xl "
              style={{ backgroundColor: "#f1c40f", color: "rgb(29, 78, 96)" }}
            >
              sign up
              <FaArrowRight className="ml-6 " />
            </button>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#399EA7"
          fill-opacity="1"
          d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,117.3C672,85,768,75,864,90.7C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="w-full flex md:flex justify-center items-center flex-col md:flex-row-reverse px-10  ">
        <div className="w-64 sm:w-80 md:w-1/2 flex justify-center md:justify-flex-end items-center -mt-16 md:-mt-60">
          <img src={world} alt="world" className="" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center  md:-mt-20">
          <div className="md:w-3/5 flex justify-center items-center flex-col md:-mt-20 ">
            <h1 className="text-4xl mb-3 font-sans font-medium ">
              One subscription, unlimited access
            </h1>
            <p className="text-regular font-light mb-14">
              Every one of our plans unlocks access to our full tutor community
              and course catalog. Study with your favorite tutors every week or
              meet someone new for every lesson!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="px-10 flex justify-evenly capitalize  items-center flex-col lg:flex-row mb-20 md:justify-center"> */}
      {/* <div
					className="w-full md:w-2/5  flex  items-center  sm:items-center justify-between rounded-xl py-6  sm:mr-2"
					style={{ backgroundColor: "#EEEE" }}
				>
					<div className="flex items-start md:items-center justify-evenly  p-6">
						<img src={business} alt="" className=" w-16 h-16 " />
						<div className="w-3/5">
							<h1 className="text-2xl font-medium mb-2 w-4/5 flex  items-center">for organizations <FaArrowRight /> </h1>
							<p>
								empower your team wi items-centerth practical, real-world english skills they
								need to excel in global business.
							</p>
						</div>
					</div>
				</div> */}

      {/* <div
					className="w-full md:w-2/5  flex justify-center items-center rounded-xl mt-4 lg:mt-0 py-6"
					style={{ backgroundColor: "#C6F0F2" }}
				>
					<div className=" flex items-start md:items-center justify-evenly p-7">
						<img src={bird} alt="" className="w-14 h-14 " />
						<div className="w-4/5">
							<h1 className="text-2xl mb-2 font-medium flex justify-bettween items-center">for kids <FaArrowRight /></h1>
							<p className="text-sm">
								unlock your child's global future with lessons filled with fun
								and games that have them spesking english from day 1.
							</p>
						</div>
					</div>
				</div> */}
      {/* </div> */}
      {/* <Abc/> */}
      <div
        className="w-full flex justify-center items-center  flex-col md:flex-row px-8 pt-14 "
        style={{ backgroundColor: "rgb(255, 97, 79)" }}
      >
        <div className="w-full md:w-3/5 flex justify-center  items-centers flex-col   px-8">
          <h1 className="text-4xl md:text-5xl mb-4 text-center md:text-left font-sans">
            WeLearn on the go
          </h1>
          <p className="text-xl font-serif text-center md:text-left ">
            Start or schedule lessons anytime, anywhere with our Android and
            iPhone apps.
          </p>
          <div className="w-full flex justify-center sm:justify-start  sm:3/5 text-white  my-16">
            <div className="w-1/2 flex justify-end md:justify-center">
              <img className="w-36 h-8" src={appstore} alt="" />
            </div>
            <div className="w-1/2">
              <img className="w-36 h-8 " src={play} alt="" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center items-center">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
