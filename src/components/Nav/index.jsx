/* eslint-disable react/prop-types */
import { useState } from "react";
import { Hamburger } from "../Hamburger";

//////////////////
// Navigation Component
//////////////////
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  ///////////////////////////
  // GSAP Animations for elements within the container
  ///////////////////////////

  return (
    <nav className="w-full bg-neutral-900 text-gray-100 fixed top-0 left-0 justify-between align-middle z-[99] p-4 flex">
      <div className="flex justify-center items-center">
        <img
          className="hidden md:block w-40 fade-in "
          src={`${import.meta.env.VITE_CDN_PATH}/MPM-LOGO-05032025.png`}
          alt="Max Pro Moving AZ logo"
        />
        <h2 className="my-auto text-4xl lg:text-6xl ml-10 fade-in ">
          Max Pro Moving AZ{" "}
        </h2>
      </div>

      <ul className="p-4 mr-10 text-lg lg:text-2xl hidden items-center lg:flex fade-in">
        <NavListItem link="/" text="Home" />
        <NavListItem link="#quote-form" text="Detailed Quote" />
        <NavListItem
          link="https://docs.google.com/forms/d/1nReTIlmoeVGxuUSxRNchpkriseCjxWRUfw8Lb76C4Ec"
          text="Fast Quote"
        />
        <NavListItem
          link="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNvMGFfT1BnEAE!2m1!1s0x0:0xa0ac3b99a75948e1!3m1!1s2@1:CIHM0ogKEICAgMCo0a_OPg%7CCgwI4sSFwAYQoJT2wAM%7C?hl=en-US&source=sh/x/kp/local/m1/0&kgs=4cbe47e38fd74129"
          text="Reviews"
        />
        <NavListItem link="/about" text="About Us" />
      </ul>
      {/* Mobile navigation */}
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <MobileNav />}
    </nav>
  );
};

////////////////////////////////////
// Dropdown List Item Component
////////////////////////////////////
export const NavListItemDropDown = ({ text, dropdownArr }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li
      className="block relative px-4 py-2"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button>{text}</button>
      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg">
          {dropdownArr.map((item) => (
            <li key={item.text}>
              <a href={item.link} className="block px-4 py-2 hover:bg-gray-600">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

////////////////////////////////////
// Single List Item Component
////////////////////////////////////
export const NavListItem = ({ link, text }) => {
  return (
    <li>
      <a
        href={link}
        className="block px-4 py-2 hover:bg-gray-300 rounded-md hover:text-gray-800 transition-colors duration-200"
      >
        {text}
      </a>
    </li>
  );
};

////////////////////////////////////
// Mobile Navigation Component
////////////////////////////////////
import { Link } from "react-router-dom";

export const MobileNav = () => {
  return (
    <ul className="absolute bg-neutral-900 text-gray-100 w-full h-100svh top-0 left-0 transition-all ease-out duration-500 flex flex-col align-middle justify-evenly">
      <li className="text-white text-3xl mx-auto hover:bg-gray-300 rounded-md hover:text-gray-800 transition-colors duration-200 ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white text-3xl mx-auto hover:bg-gray-300 rounded-md hover:text-gray-800 transition-colors duration-200 ">
        <a href="#quote-form">Detailed Quote</a>
      </li>
      <li className="text-white text-3xl mx-auto hover:bg-gray-300 rounded-md hover:text-gray-800 transition-colors duration-200 ">
        <a
          href="https://docs.google.com/forms/d/1nReTIlmoeVGxuUSxRNchpkriseCjxWRUfw8Lb76C4Ec"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fast Quote
        </a>
      </li>
      <li className="text-white text-3xl mx-auto hover:bg-gray-300 rounded-md hover:text-gray-800 transition-colors duration-200 ">
        <a
          href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNvMGFfT1BnEAE!2m1!1s0x0:0xa0ac3b99a75948e1!3m1!1s2@1:CIHM0ogKEICAgMCo0a_OPg%7CCgwI4sSFwAYQoJT2wAM%7C?hl=en-US&source=sh/x/kp/local/m1/0&kgs=4cbe47e38fd74129"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reviews
        </a>
      </li>
      <li className="text-white text-3xl mx-auto hover:bg-gray-300 rounded-md hover:text-gray-800 transition-colors duration-200 ">
        <Link to="/about">About Us</Link>
      </li>
    </ul>
  );
};
