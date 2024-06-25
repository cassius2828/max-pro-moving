import { useRef } from "react";
import StaffGallery from "../StaffGallery";
import { useGSAP } from "@gsap/react";
import { fadeFromTop, fadeFromTopNT, longFadeIn, slamInTop } from "../../gsap/baseAnimations";

const Landing = () => {
  const container = useRef();

  useGSAP(
    () => {
      fadeFromTopNT("h1");
     longFadeIn('button')
     
    },
    { scope: container }
  );
  return (
    <div ref={container} className="w-full h-full relative">
      {/* <img className="w-full" src="/images/moving-hero.jpeg" alt="" /> */}
      <StaffGallery />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-6xl lg:text-9xl text-gray-200 mb-10 font-extrabold text-center">
          Move with Confidence, Trust in Maximum Protection
        </h1>
        <button className="lg:mt-24 opacity-0 transition duration-300 ease hover:-translate-y-3 border-gray-200 border-4 rounded p-5 text-2xl lg:text-7xl text-gray-200  bg-tranparent hover:bg-blue-900">
          Get a FREE quote today!
        </button>
      </div>
    </div>
  );
};
export default Landing;
