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
        "Provide a professional, stress-free relocation service focused on the client experience; care, safety & quality.",
    },
    {
      name: "Our Vision",
      description:
        "To push forward innovation in transportation as the most reliable, professional, and caring client experience.",
    },
    {
      name: "Get Quotes Today!",
      description:
        "We offer quick quotes for an immediate phone assessment, or you can provide your move details to receive an estimated quote range.",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pt-0 md:pt-32 h-screen">
      <Suspense fallback={<LoadingPlaceholder />}>
        <StaffGallery />
      </Suspense>

      <div className="mx-auto max-w-8xl px-6 lg:px-8 absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="mx-auto lg:mx-0 mt-72 md:mt-0">
          <h1 className="fade-in text-5xl font-semibold tracking-tight text-white sm:text-8xl text-center w-screen md:w-auto">
            Move with Confidence, Trust in Maximum Protection
          </h1>
        </div>
        <div className="fade-in mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-black/30 p-6 ring-1 ring-inset ring-white/70 w-10/12 md:w-full mx-auto"
            >
              {/* <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" /> */}
              <div className="text-3xl md:text-4xl">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300 text-xl lg:text-2xl">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="fade-in flex justify-center gap-12 mt-12 w-4/5 mx-auto">
          <a href="#quote-form" className="uppercase fade-in lg:mt-24 transition duration-300 ease hover:-translate-y-3 border-gray-200 border-2 rounded p-3 text-xl lg:text-2xl text-gray-200  bg-tranparent hover:bg-blue-900">
            Caclulate your budget / Get a &nbsp;
            <span className="font-semibold">FREE</span>&nbsp; quote now!
          </a>
          <a
            href="https://docs.google.com/forms/d/1nReTIlmoeVGxuUSxRNchpkriseCjxWRUfw8Lb76C4Ec/edit"
            target="_blank"
            rel="noreferrer"
            className="uppercase fade-in lg:mt-24 transition duration-300 ease hover:-translate-y-3 border-gray-200 border-2 rounded p-3 text-xl lg:text-2xl text-gray-200  bg-tranparent hover:bg-blue-900"
          >
            Submit a quote request
          </a>
        </div>
      </div>
    </div>
  );
};
export default Landing;
