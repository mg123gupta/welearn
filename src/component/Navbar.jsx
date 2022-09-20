import React from "react";
import bird from "../images/bird.png";

const Navbar = () => {
  return (
    <div className="w-full fixed flex justify-center items-center z-10 top-0">
      <div className=" flex justify-between items-center w-full h-20   bottom-0 border-b-2 pb-10 bg-gray-50 capitalize px-10 pt-10">
        <div className="flex justify-around items-center">
          <div className="bird flex items-center justify-between text-gray-900">
            <img src={bird} alt="" className="w-12 h-12" />
            <h1 className="text-3xl uppercase">WeLearn</h1>
          </div>
          <ul className="hidden md:flex px-6 uppercase text-sm font-semibold whitespace-nowrap ">
            <li className="mr-6">For Organizations</li>
            <li className="mr-6">For Courses</li>
            <li>For Kids</li>
          </ul>
        </div>
        <div>
          <ul className="hidden md:flex items-center ">
            <li className="mr-6">
              <select>
                <option value="English">English</option>
                <option value="hindi">hindi</option>
              </select>
            </li>
            <li className="mr-6">
              <a href="#">log in</a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold rounded-md text-white px-6 py-2 text-center whitespace-nowrap mr-4"
                style={{ backgroundColor: "#079992" }}
              >
                sign up
              </a>
            </li>
          </ul>
          <div className="wrapper md:hidden">
            <div className="menu flex justify-center items-center flex-col w-6 h-20    z-20 right-6 cursor-pointer">
              <div className="w-full h-1 mb-1 rounded-md bg-gray-400 "></div>
              <div className="w-full  h-1 mb-1 rounded-md bg-gray-400 "></div>
              <div className="w-full h-1 rounded-md bg-gray-400 "></div>
            </div>
            <ul className="w-40 hidden leading-10">
              <li>
                <select name="english" id="">
                  <option value="English">English</option>
                  <option value="hindi">hindi</option>
                </select>
              </li>
              <li>FOR ORGANIZATIONS</li>
              <li>FOR COURSES</li>
              <li>FOR KIDS</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
