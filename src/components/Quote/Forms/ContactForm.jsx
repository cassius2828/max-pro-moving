import { useRef } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import { useGSAP } from "@gsap/react";
import { fadeInMultiple } from "../../../gsap/baseAnimations";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

///////////////////////////////////
// Contact Form Component
///////////////////////////////////
// export const ContactForm = () => {
//   const container = useRef();
//   const { handleUpdateForm } = useQuoteContext();

//   /////////////////////////////////
//   // GSAP animations for form sections
//   /////////////////////////////////
//   useGSAP(
//     () => {
//       fadeInMultiple(".form-section");
//     },
//     { scope: container }
//   );

//   return (
//     <div
//       ref={container}
//       className="form-section flex flex-col justify-evenly h-full"
//     >
//       {/* Input for first name */}
//       <div className="my-12 mt-6">
//         <label
//           htmlFor="firstName"
//           className="block capitalize mb-5 text-3xl font-medium text-blue-900"
//         >
//           First Name
//         </label>
//         <input
//           onChange={(e) => handleUpdateForm(e.target)}
//           type="text"
//           id="firstName"
//           name="firstName"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           placeholder="Enter first name"
//           required
//         />
//       </div>

//       {/* Input for last name */}
//       <div className="my-12">
//         <label
//           htmlFor="lastName"
//           className="block capitalize mb-5 text-3xl font-medium text-blue-900"
//         >
//           Last Name
//         </label>
//         <input
//           onChange={(e) => handleUpdateForm(e.target)}
//           type="text"
//           id="lastName"
//           name="lastName"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           placeholder="Enter last name"
//           required
//         />
//       </div>

//       {/* Input for cell */}
//       <div className="my-12">
//         <label
//           htmlFor="cell"
//           className="block capitalize mb-5 text-3xl font-medium text-blue-900"
//         >
//           Cell
//         </label>
//         <input
//           onChange={(e) => handleUpdateForm(e.target)}
//           type="text"
//           id="cell"
//           name="cell"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           placeholder="Enter cell number"
//           required
//         />
//       </div>

//       {/* Input for email */}
//       <div className="my-12">
//         <label
//           htmlFor="email"
//           className="block capitalize mb-5 text-3xl font-medium text-blue-900"
//         >
//           Email
//         </label>
//         <input
//           onChange={(e) => handleUpdateForm(e.target)}
//           type="text"
//           id="email"
//           name="email"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           placeholder="Enter email"
//           required
//         />
//       </div>

//       <BackAndNextBtns />
//     </div>
//   );
// };

export function ContactForm() {
  const container = useRef();
  const { handleUpdateForm } = useQuoteContext();
  return (
    <form
      ref={container}
      className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
    >
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* first name */}
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              First name*
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleUpdateForm(e.target)}
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                required
              />
            </div>
          </div>
          {/* last name */}
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Last name*
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleUpdateForm(e.target)}
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                required
              />
            </div>
          </div>
          {/* email */}
          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address*
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleUpdateForm(e.target)}
                type="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                required
              />
            </div>
          </div>
          {/* phone */}
          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleUpdateForm(e.target)}
                type="tel"
                id="phone"
                autoComplete="phone"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
              />
            </div>
          </div>
          {/* message */}
          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleUpdateForm(e.target)}
                type="textarea"
                id="message"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm/6 resize-none"
                rows="4" 
                placeholder="Enter your text here..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <BackAndNextBtns />
      </div>
    </form>
  );
}
