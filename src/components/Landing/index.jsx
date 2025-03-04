import { Suspense, lazy } from "react";
const StaffGallery = lazy(() => import("../StaffGallery"));

import LoadingPlaceholder from "../Reuseables/LoadingPlaceholder";

const Landing = () => {
  ///////////////////////////
  // GSAP Animations
  ///////////////////////////

  return (
    <div className="  w-full h-full relative">
      <Suspense fallback={<LoadingPlaceholder />}>
        <StaffGallery />
      </Suspense>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="fade-in text-4xl lg:text-7xl text-gray-200 mb-10 font-extrabold text-center">
          Move with Confidence, Trust in Maximum Protection
        </h1>
        <button className="fade-in lg:mt-24 transition duration-300 ease hover:-translate-y-3 border-gray-200 border-4 rounded p-3 text-xl lg:text-4xl text-gray-200  bg-tranparent hover:bg-blue-900">
          Get a &nbsp;<span className="font-semibold">FREE</span>&nbsp;
           quote today!
        </button>
      </div>
    </div>
  );
};
export default Landing;
