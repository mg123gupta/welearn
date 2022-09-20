import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-4">
      <div className="rounded-xl w-full border-2 mt-10 m-4">
        <div
          className="grid sm:flex justify-around items-start pb-32 pt-10 grid-rows-2 grid-cols-2 px-10 text-xs sm:text-sm font-bold"
          style={{ backgroundColor: "eeeeee", color: "#333333" }}
        >
          <div>
            <ul className="leading-8 font-semibold">
              <li className="text-sm  leading-10" style={{ color: "#838383" }}>
                ABOUT
              </li>
              <li>
                <a href="#">COURSES</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <li>
                <a href="#">CAREERS</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="leading-8 font-semibold">
              <li className="text-sm  leading-10" style={{ color: "#838383" }}>
                JOIN
              </li>
              <li>
                <a href="#">WeLearn</a>
              </li>
              <li>
                <a href="#">WeLearn KIDS</a>
              </li>
              <li>
                <a href="#">WeLearn FOR</a>
              </li>
              <li>
                <a href="#">ORGANIZATION</a>
              </li>
              <li>
                <a href="#">BECOME A TUTOR</a>
              </li>
              <li>
                <a href="#">BECOME AN AMBASSADOR</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="leading-8 font-semibold">
              <li className="text-sm leading-10" style={{ color: "#838383" }}>
                USEFUL LINKS
              </li>
              <li>
                {" "}
                <a href="#">WeLearn HELP CENTER</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">WeLearn(IOS)</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">WeLearn (ANDROID)</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">WeLearn KIDS(IOS)</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">WeLearn KIDS (ANDROID)</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:flex items-center  text-xs text-gray-500 px-5 flex-wrap leading-10 justify-evenly mb-10">
        <div>
          <ul className="flex justify-evenly">
            <li className="mr-4">
              <a href="#">PRIVACY POLICY</a>
            </li>
            <li className="mr-4">
              <a href="#">TERMS AND CONDITIONS</a>
            </li>
            <li className="mr-4">
              <a href="#">JOBS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex text-base">
            <li className="mr-2 ">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="mr-2">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="mr-2">
              <FaFacebookSquare />
            </li>
            <li>
              <a href="#"></a>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="mt-4 sm:mt-0 text-xs text-gray-500 ">
          WeLearn INC. © COPYRIGHT 2021. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
};

export default Footer;
