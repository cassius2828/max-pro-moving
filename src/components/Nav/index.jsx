/* eslint-disable react/prop-types */
import { useState } from "react";

export const Nav = () => {


  return (
    <nav className="w-full bg-gray-900 fixed top-0 left-0 flex justify-between align-middle z-20 p-4">
      <h2 className="text-6xl ml-10">Max-Protection Moving </h2>

      <ul className="flex  p-4 mr-10 text-2xl">
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
    </nav>
  );
};

export const NavListItemDropDown = ({ text, dropdownArr }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li
      className="block relative  text-2xl px-4 py-2"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button >{text}</button>
      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg">
          {dropdownArr.map((item) => {
            return (
              <li key={item.text}>
                <a
                  href={item.link}
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export const NavListItem = ({ link, text }) => {
  return (
    <li>
      <a href={link} className="block  px-4 py-2 hover:text-gray-600">
        {text}
      </a>
    </li>
  );
};
