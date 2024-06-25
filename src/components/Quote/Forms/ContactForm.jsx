import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";

export const ContactForm = () => {
    return (
      <>
        <div className="my-12 mt-6">
          <label
            htmlFor="addressFrom"
            className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
          >
            first name
          </label>
          <input
            type="text"
            id="addressFrom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter pick up location"
            required
          />
        </div>
        <div className="my-12">
          <label
            htmlFor="addressFrom"
            className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
          >
            last name
          </label>
          <input
            type="text"
            id="addressFrom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter pick up location"
            required
          />
        </div>
        <div className="my-12">
          <label
            htmlFor="addressFrom"
            className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
          >
            cell
          </label>
          <input
            type="text"
            id="addressFrom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter pick up location"
            required
          />
        </div>
        <div className="my-12">
          <label
            htmlFor="addressFrom"
            className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
          >
            email
          </label>
          <input
            type="text"
            id="addressFrom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter pick up location"
            required
          />
        </div>
        <BackAndNextBtns/>

      </>
    );
  };