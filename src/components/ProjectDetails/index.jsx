/* eslint-disable react/prop-types */

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FadeInTopAngle } from "../../gsap/baseAnimations";

const residential = ["Dorms", "Houses", "Apartments/Condos", "and more!"];
const commercial = ["Offices", "Warehouses", "Gyms", "and more!"];
const storeToDoor = [
  "Large or special items picked up directly from the store and delivered to your front door.",
];
const specialItems = ["large items", "special items"];
const specialItemsDump = ["large items", "special items", "group items"];

const ProjectDetails = () => {
  return (
    <section className="bg-[#0d0d0e] text-[#f2f2f2] py-10 mt-40">
      <div className="container mx-auto">
        <h1 className="text-center text-8xl font-bold mb-40 text-blue-500">
          Quote By Category
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuoteByProject>
            <ProjectCard title={`Residential`} arr={residential} />
            <ProjectCard title={`Commercial`} arr={commercial} />
          </QuoteByProject>
          <QuoteByItem>
            <ProjectCard title={`Store-To-Door-Delivery`} arr={storeToDoor} />
            <ProjectCard title={`Special Item Delivery`} arr={specialItems} />
            <ProjectCard title={`Dumping`} arr={specialItemsDump} />
          </QuoteByItem>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

export const ProjectCard = ({ title, arr }) => {
  return (
    <>
      <div>
        <h3 className="text-5xl font-semibold mb-5 text-blue-400">{title}</h3>
        <ul className="list-disc list-inside mb-10">
          {arr.map((item, idx) => {
            return (
              <li className="my-3" key={item + idx}>
                <a href="#quote-form" className="hover:text-blue-500 text-3xl ">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export const QuoteByProject = ({ children }) => {
  const container = useRef()
  useGSAP(() => {
FadeInTopAngle('#by-project', 'left')

  },{scope:container})
  return (
    <div ref={container}>

        <div id="by-project" className="bg-[#1a1a1b] p-10 rounded-lg shadow-lg  lg:mx-auto w-full lg:w-25vw ">
      <h2 className="text-6xl font-bold mb-16 text-blue-600">BY PROJECT:</h2>
      {children}
    </div>
    </div>

  
  );
};

export const QuoteByItem = ({ children }) => {
  const container = useRef()
  useGSAP(() => {

FadeInTopAngle('#by-item', 'right')
  },{scope:container})
  return (
    <div ref={container}>
          <div id="by-item" className="bg-[#1a1a1b] p-10 rounded-lg shadow-lg  lg:mx-auto w-full  lg:w-25vw">
      <h2 className="text-6xl font-bold mb-16 text-blue-600">BY ITEM</h2>
      {children}
    </div>
    </div>

  );
};
