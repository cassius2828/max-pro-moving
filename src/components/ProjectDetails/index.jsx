/* eslint-disable react/prop-types */


import { useRef } from "react";

import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Define project categories
const residential = ["Dorms", "Houses", "Apartments/Condos", "and more!"];
const commercial = ["Offices", "Warehouses", "Gyms", "and more!"];
const storeToDoor = [
  "Large or special items picked up directly from the store and delivered to your front door.",
];
const specialItems = ["large items", "special items"];
const specialItemsDump = ["large items", "special items", "group items"];

//////////////////////////////////
// Project Details Component
//////////////////////////////////
const ProjectDetails = () => {
  return (
    <section className="bg-[#f2f2f2] text-gray-900 py-10 mt-40">
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

//////////////////////////////////
// Project Card Component
//////////////////////////////////
export const ProjectCard = ({ title, arr }) => {
  return (
    <>
      <div>
        <h3 className="text-5xl font-semibold mb-5 text-blue-600">{title}</h3>
        <ul className="list-disc list-inside mb-10">
          {arr.map((item, idx) => {
            return (
              <li className="my-3 placeholder-opacity-100" key={item + idx}>
                <a
                  href="#quote-form"
                  className="hover:text-blue-500 text-gray-900 text-3xl"
                >
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

//////////////////////////////////
// Quote By Project Component
//////////////////////////////////
export const QuoteByProject = ({ children }) => {
 



  return (
    <div >
      <div
        id="by-project"
        className="bg-gray-200 p-10 rounded-lg shadow-lg lg:mx-auto w-full lg:w-25vw"
      >
        <h2 className="text-6xl font-bold mb-16 text-blue-700">BY PROJECT:</h2>
        {children}
      </div>
    </div>
  );
};

//////////////////////////////////
// Quote By Item Component
//////////////////////////////////
export const QuoteByItem = ({ children }) => {



  return (
    <div >
      <div
        id="by-item"
        className="bg-gray-200 p-10 rounded-lg shadow-lg lg:mx-auto w-full lg:w-25vw"
      >
        <h2 className="text-6xl font-bold mb-16 text-blue-700">BY ITEM</h2>
        {children}
      </div>
    </div>
  );
};

const pricingOptions = [
  {
    name: "By Project",
    id: "pricingOption-hobby",
    href: "#",
    priceMonthly: "$29",
    description:
      "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
    subCategories: [
      {
        title: "residential",
        features: ["Dorms", "Houses", "Apartments / Condos", "and more!"],
      },
      {
        title: "commercial",
        features: ["Offices", "Warehouses", "Gyms", "and more!"],
      },
    ],
  },
  {
    name: "By Item",
    id: "pricingOption-team",
    href: "#",
    priceMonthly: "$99",
    description:
      "Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.",
    subCategories: [
      {
        title: "store-to-store delivery",
        features: [
          "Large or special items picked up directly from the store and delivered to your front door.",
        ],
      },
      {
        title: "special item delivery",
        features: ["Large items", "Special items"],
      },
      {
        title: "dumping",
        features: ["Large items", "special items", "group items"],
      },
    ],
  },
];

export function ProjectDetailsv2() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-semibold text-blue-400">
            Quote by Category
          </h2>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
           Get a quote based on the type of service you would require. Selecting a category will be applied to the quote calculator
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              rx={604}
              ry={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#0f3ea3" />
                <stop offset={1} stopColor="#2563eb" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {pricingOptions.map((pricingOption) => (
                <div
                  key={pricingOption.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={pricingOption.id}
                      className="text-3xl font-semibold text-blue-600"
                    >
                      {pricingOption.name}
                    </h3>
                    <div className=" flex items-baseline gap-x-2">
                      <span className="text-base/7 font-semibold text-gray-600">
                        {pricingOption.title}
                      </span>
                    </div>

                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm/6 text-gray-600"
                    >
                      {pricingOption.subCategories.map((subCategory) => (
                        <div key={subCategory.title}>
                          <p className="mt-6 text-base/7 text-gray-600 uppercase font-semibold">
                            {subCategory.title}
                          </p>
                          {subCategory.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <FontAwesomeIcon icon={faCheck} />
                              <button className="text-start capitalize hover:text-blue-600 transition-colors duration-200">{feature}</button>
                            </li>
                          ))}
                        </div>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={pricingOption.href}
                    aria-describedby={pricingOption.id}
                    className="mt-8 block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get started today
                  </a>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-base/7 font-semibold text-blue-600">
                    Discounted
                  </h3>
                  <p className="mt-1 text-base/7 text-gray-600">
                    Dolor dolores repudiandae doloribus. Rerum sunt aut eum.
                    Odit omnis non voluptatem sunt eos nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Buy discounted license <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
