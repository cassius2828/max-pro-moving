/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
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
    <nav
   
      className="w-full bg-blue-800 text-[#f2f2f2]  fixed top-0 left-0 justify-between align-middle z-20 p-4 md:p-0 flex"
    >
      <div className="flex justify-center items-center">
        <img
          className="hidden md:block w-40 fade-in "
          src="/images/mpm-logo-blue-800.svg"
          alt=""
        />
        <h2 className="my-auto text-4xl lg:text-6xl ml-10 fade-in ">
          Max-Protection Moving{" "}
        </h2>
      </div>

      <ul className="p-4 mr-10 text-lg lg:text-2xl hidden items-center lg:flex fade-in ">
        <NavListItem link={`/`} text="Home" />
        <NavListItemDropDown
          text={`Max-Protection Moving`}
          dropdownArr={[
            {
              text: "Max Pro Home",
              link: "/max-protection-moving/max-pro-home",
            },
            {
              text: "Free Quote Now!",
              link: "/max-protection-moving/free-quote-now",
            },
          ]}
        />
        <NavListItemDropDown
          text={`Workers`}
          dropdownArr={[
            {
              text: `What's ENL Workforce?`,
              link: "/workers/whats-enl-workforce",
            },
            {
              text: "New Worker Sign Up",
              link: `/workers/new-worker-sign-up`,
            },
          ]}
        />
        <NavListItemDropDown
          text={`Business Owners`}
          dropdownArr={[
            {
              text: `Register Business Account`,
              link: "/business-owners/register-business-account",
            },
            {
              text: "Quote & Book",
              link: `/business-owners/quote-book`,
            },
            {
              text: "Edit Profile",
              link: `/business-owners/edit-profile`,
            },
          ]}
        />
        <NavListItem text={`About Us`} link={`/about-us`} />
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
      <a href={link} className="block px-4 py-2 hover:text-blue-500">
        {text}
      </a>
    </li>
  );
};

////////////////////////////////////
// Mobile Navigation Component
////////////////////////////////////
export const MobileNav = () => {




  return (
    <ul

      className="absolute bg-blue-800 w-full h-100svh top-0 left-0 transition-all ease-out duration-500 flex flex-col align-middle justify-evenly"
    >
      <li className="text-white text-3xl mx-auto hover:text-blue-500 ">
        <a href="#">Home</a>
      </li>
      <li className="text-white text-3xl mx-auto hover:text-blue-500 ">
        <a href="#">About</a>
      </li>
      <li className="text-white text-3xl mx-auto hover:text-blue-500 ">
        <a href="#">Services</a>
      </li>
      <li className="text-white text-3xl mx-auto hover:text-blue-500 ">
        <a href="#">Portfolio</a>
      </li>
      <li className="text-white text-3xl mx-auto hover:text-blue-500 ">
        <a href="#">Contact</a>
      </li>
      <li className="text-white text-3xl mx-auto hover:text-blue-500 ">
        <a href="#">Blog</a>
      </li>
    </ul>
  );
};
