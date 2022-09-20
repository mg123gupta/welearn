import React from "react";
import { FaArrowDown } from "react-icons/fa";
import kidsapp_mobile from "../images/kidsapp_mobile.jpg";
import two_children_with_dad from "../images/two_children_with_dad.jpg";
import store from "../images/store.svg";
import googleapp from "../images/googleapp.png";
import landscapemobile from "../images/landscapemobile.jpg";
import intro_video_screenshot from "../images/intro_video_screenshot.jpg";
import { MdPlayArrow, MdTranslate } from "react-icons/md";
import girl from "../images/girl.jpg";
import happy_tutor from "../images/happy_tutor.jpg";
import kids_safe from "../images/kids_safe.png";

const KidsWeLearn = () => {
  return (
    <div>
      <div className="relative flex justify-center flex-col-reverse sm:flex-col">
        <div>
          <img
            src="https://www.WeLearn.com/fe/static/kids/landing/header-image.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center  w-full z-1">
          <div className="px-5 sm:w-1/2 text-center">
            <h1 className="text-3xl sm:text-6xl font-semibold text-gray-700">
              Learn to speak English
            </h1>
            <p className="text-2xl text-gray-600 mt-5">
              in online lessons with a native speaker
            </p>
            <div className="md:flex mt-5 hidden gap-2 justify-center flex-wrap">
              <div className="border-2 rounded-md px-3">
                <p>1-on-1 tutors</p>
              </div>
              <div className="border-2 rounded-md px-3">
                <p>custom scheduling</p>
              </div>
              <div className="border-2 rounded-md px-3">
                <p>courses for ages 4-15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-10">
        <div className="flex justify-evenly items-center flex-col sm:flex-row-reverse">
          <div className="flex justify-center w-full sm:w-2/5 flex-col">
            <h2 className="text-center sm:text-left text-xl md:text-3xl lg:font-bold text-gray-700">
              Download WeLearn Kids and take English learning with you
            </h2>
            <div className="flex justify-center items-center">
              <div className="w-1/2 sm:w-1/2 md:w-2/5 flex sm:justify-start sm:items-start my-20 sm:my-10 gap-10">
                <img src={store} alt="appstore" className="w-1/2" />
                <img src={googleapp} alt="playstore" className="w-1/2" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center items-center">
            <img src={kidsapp_mobile} alt="" className="flex sm:hidden" />
            <img src={landscapemobile} alt="" className="hidden sm:flex" />
          </div>
        </div>
        <div className="w-full sm:flex px-5 justify-center items-center">
          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-700 text-center sm:text-left leading-10 my-4 sm:my-2">
              Start them speaking English early
            </h1>
            <div className="hidden sm:flex justify-center  flex-col">
              <p className="text-center sm:text-left">
                With WeLearn Kids, your child will learn English as it's
                actually spoken from our experienced, kid-friendly tutors. In
                1-on-1 lessons, your child gets the maximum speaking time and
                the maximum chance to develop spoken English fluency.
              </p>
              <button className="capitalize w-full  sm:w-1/2 text-xl text-white py-2 rounded-lg bg-blue-400 my-6">
                start now{" "}
              </button>
            </div>
          </div>

          <div className="sm:w-1/2 rounded-lg">
            <img src={two_children_with_dad} alt="" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-full sm:w-4/5 ">
            <h1 className="text-center text-2xl sm:text-4xl font-semibold text-gray-700 my-8 px-5">
              A personal English tutor, when and where you need them
            </h1>
            <div className="relative flex justify-center items-center w-full">
              <img src={intro_video_screenshot} alt="" className="w-4/5" />
              <div className="flex justify-center items-center w-full">
                <div
                  className="absolute w-14 sm:w-16 h-14 sm:h-16 bg-yellow-500 border-2  rounded-full flex justify-center items-center "
                  style={{ top: 150, transform: MdTranslate(0, -50) }}
                >
                  <MdPlayArrow className="w-12 h-20" />
                </div>
              </div>
            </div>
            <button className="capitalize text-center w-full rounded-2xl text-white my-7 py-3 bg-purple-600 opacity-80 font-semibold text-xl">
              see our plans
            </button>
          </div>
        </div>

        <div className="sm:px-16 flex justify-center items-center flex-col">
          <div className="w-full flex justify-center items-center flex-col reverse sm:flex-col ">
            <div className="rounded-xl w-full sm:w-4/5">
              <img src={girl} alt="" className="rounded-xl" />
            </div>
            <div>
              <h2 className="font-semibold text-2xl  sm:text-4xl text-center text-gray-600 my-4 px-2 py-10">
                Our courses are designed by experts and aligned to standardized
                academic English learning benchmarks.
              </h2>
            </div>
          </div>

          <button className="w-full capitalize text-white font-semibold text-lg sm:text-xl text-center bg-red-600 rounded-2xl py-3 mt-5 opacity-90 ">
            learn more about our courses
          </button>
        </div>

        <div className="lg:relative flex justify-center items-center flex-col-reverse sm:px-14 py-10">
          <div>
            <img src={happy_tutor} alt="" className="rounded-2xl" />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center flex-col lg:absolute bottom-80 right-0 top-0 lg:pr-12">
            <h3 className="font-semibold text-2xl  sm:text-4xl lg:text-3xl text-center lg:text-right text-gray-600 my-4 px-2 py-10">
              Choose from hundreds of experienced tutors - 100% native speakers
              of English and 100% excited to teach your child!
            </h3>
            <button className="w-full lg:w-4/5  capitalize text-white font-semibold text-xl text-center bg-blue-500 rounded-2xl py-3 mb-12 ">
              meet our tutors
            </button>
          </div>
        </div>
        <div className="sm:flex justify-center items-center px:10 sm:px-14">
          <div className="flex justify-center items-center w-full sm:w-2/5 py-10 sm:py-0">
            <img src={kids_safe} alt="" />
          </div>
          <div className="w-full sm:w-3/5 text-center sm:text-left text-sm text-gray-600 ">
            <p className="hidden sm:block">
              WeLearn Kids is certified by the kidSAFE Seal Program. The KidSafe
              Seal Program is an independent safety certification service and
              seal-of-approval program designed exclusively for
              children-friendly websites and technologies, including
              kid-targeted game sites, educational services, virtual worlds,
              social networks, mobile apps, tablet devices, and other similar
              interactive services and technologies. Click on the seal or go to
              www.kidsafeseal.com for more information.
            </p>
            <p className="text-center sm:hidden text-xs text-gray-600">
              WeLearn Kids is certified by the kidSAFE Seal Program. To learn
              more, click on the seal or go to www.kidsafeseal.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KidsWeLearn;
