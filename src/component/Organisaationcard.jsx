import { data } from "jquery";
import React from "react";
import bird from "../images/._bird.png";

const Data = {
  data1: {
    image: "../images/bird.png",
    title: "For Organization",
    content:
      "Empower your team with practical, real-world English skills they need to excel in global business.",
  },
  data2: {
    image: "../images/world.webp",
    title: "For kids",
    content:
      "Unlock your child’s global future with lessons filled with fun and games that have them speaking English from day 1.",
  },
};

const { data1, data2 } = Data;

export const Abc = () => {
  return (
    <>
      <Organisaationcard data={data1} />
      <Organisaationcard data={data2} />
    </>
  );
};

const Organisaationcard = ({ data }) => {
  return (
    <div className="px-10 py-12 w-full lg:w-1/2 mx-6 my-5 bg-gray-500 flex justify-evenly items-center rounded-2xl">
      <img src={data.image} alt="" className="w-1/5 h-1/5" />
      <div>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default Organisaationcard;
