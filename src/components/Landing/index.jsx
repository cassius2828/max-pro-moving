import { Suspense, lazy } from "react";
const StaffGallery = lazy(() => import("../StaffGallery"));

import LoadingPlaceholder from "../Reuseables/LoadingPlaceholder";

const Landing = () => {
  ///////////////////////////
  // GSAP Animations
  ///////////////////////////
  const cards = [
    {
      name: "Our Mission",
      description:
        "To provide a professional & stress free move that is focused on your experience.",
    },
    {
      name: "Our Vision",
      description:
        "To push forward innovation in moving as the most reliable, professional, and caring client experience.",
    },
    {
      name: "Plan your project now",
      description:
        "Get in touch with an expert. Send a detailed quote to receive an in depth quote or send in a fast quote to secure a date with less details.",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pt-0 md:pt-32 h-screen">
      <Suspense fallback={<LoadingPlaceholder />}>
        <StaffGallery />
      </Suspense>

      <div className="mx-auto px-6 lg:px-8 absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className=" w-screen lg:mx-0 mt-96 p-3 md:mt-64 xl:mt-64">
          <h1 className="flex flex-wrap mt-64 sm:mt-40 justify-center gap-3 fade-in text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl text-center w-screen md:w-auto">
            <span>Move with Confidence,</span>{" "}
            <span>Trust in Maximum Protection</span>
          </h1>
        </div>
        <div className="fade-in mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-3 justify-items-center">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-black/30 p-6 ring-1 ring-inset ring-white/70 w-10/12 md:w-11/12 lg:w-10/12"
            >
              <div className="text-3xl md:text-4xl">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300 text-xl lg:text-2xl">
                  {card.description}
                </p>
                {card.name === "Our Mission" && (
                  <ol className="mt-4 ml-4 space-y-1 text-xl lg:text-2xl text-gray-200 list-decimal list-inside">
                    <li>1. Care</li>
                    <li>2. Safety</li>
                    <li>3. Quality</li>
                  </ol>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="fade-in flex flex-col md:flex-row justify-center gap-8 md:gap-12 my-40 md:mt-12 w-4/5 mx-auto">
          <a
            href="#quote-form"
            className="uppercase fade-in lg:mt-24 transition duration-300 ease hover:-translate-y-3 border-gray-200 border-2 rounded p-3 text-xl lg:text-2xl text-gray-200  bg-tranparent hover:bg-gray-900"
          >
            Caclulate your budget / Get a &nbsp;
            <span className="font-semibold">FREE</span>&nbsp; quote now!
          </a>
          <a
            href="https://docs.google.com/forms/d/1nReTIlmoeVGxuUSxRNchpkriseCjxWRUfw8Lb76C4Ec/edit"
            target="_blank"
            rel="noreferrer"
            className="uppercase fade-in lg:mt-24 transition duration-300 ease hover:-translate-y-3 border-gray-200 border-2 rounded p-3 text-xl lg:text-2xl text-gray-200  bg-tranparent hover:bg-gray-900"
          >
            Submit a quote request
          </a>
        </div>
      </div>
    </div>
  );
};
export default Landing;
