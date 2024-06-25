import { useState } from "react";

const Nav = () => {
  return (
    <nav className="w-full bg-red-500 fixed top-0 left-0 flex justify-between">
      <h2 className="text-3xl">Max-Protection Moving </h2>
      <ul>
        <li>home</li>
        <li>Max-Protection moving</li>
        <li>workers</li>
        <li>business owners</li>
        <li>prime militia security</li>
        <li>about us</li>
      </ul>
    </nav>
  );
};
export default Nav;

export const Nav2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 fixed top-0 left-0 flex justify-between align-middle z-20 p-4">
      <h2 className="text-6xl ml-10">Max-Protection Moving </h2>

      <ul className="flex  p-4 mr-10 text-2xl">
        <li>
          <a href="/home" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li
          className="relative text-2xl mx-4"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-gray-400">Max-Protection Moving</button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg">
              <li>
                <a
                  href="/max-protection-moving/max-pro-home"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Max Pro Home
                </a>
              </li>
              <li>
                <a
                  href="/max-protection-moving/free-quote-now"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Free Quote Now!
                </a>
              </li>
            </ul>
          )}
        </li>
        <li
          className="relative text-2xl mx-4"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-gray-400">Workers</button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg">
              <li className="text-2xl mx-4">
                <a
                  href="/workers/whats-enl-workforce"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  What's ENL Workforce?
                </a>
              </li>
              <li className="text-2xl mx-4">
                <a
                  href="/workers/new-worker-sign-up"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  New Worker Sign Up
                </a>
              </li>
            </ul>
          )}
        </li>
        <li
          className="relative text-2xl mx-4"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-gray-400">Business Owners</button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg">
              <li className="text-2xl mx-4">
                <a
                  href="/business-owners/register-business-account"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Register Business Account
                </a>
              </li>
              <li className="text-2xl mx-4">
                <a
                  href="/business-owners/quote-book"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Quote & Book
                </a>
              </li>
              <li className="text-2xl mx-4">
                <a
                  href="/business-owners/edit-profile"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Edit Profile
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className=" text-2xl mx-4">
          <a href="/about-us" className="hover:text-gray-400">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
};
