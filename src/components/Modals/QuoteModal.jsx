import { LoaderIcon } from "react-hot-toast";
import { useQuoteContext } from "../../customHooks/useQuoteContext";

// eslint-disable-next-line react/prop-types
const QuoteModal = ({ onClose }) => {
  const { quoteAmount, quoteFormSuccess, quoteIsLoading } = useQuoteContext();

  return (
    // backdrop
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      {/* modal box */}
      <div className="bg-gray-100 rounded-lg p-6 max-w-md w-full text-center">
        {quoteIsLoading ? (
          <div className="flex justify-center items-center h-72">
            <LoaderIcon className="w-20 h-20" />
          </div>
        ) : (
          <>
            {/* Quote amount */}
            <div
              className={`text-5xl font-extrabold ${
                quoteFormSuccess ? "text-green-500 " : " text-red-500 "
              } mb-6`}
            >
              {quoteFormSuccess ? "Success!" : "Error"}
            </div>

            {/* Body text */}
            <p className="mb-4 text-gray-700">
              {quoteFormSuccess
                ? "Your quote request was sent successfully! Our staff will reach out soon to go over the details of your move."
                : "We’re sorry—something went wrong submitting your quote request."}
            </p>

            {/* Contact links */}
            <p className="mb-6 text-gray-700">
              In the meantime, feel free to email us at{" "}
              <a
                href="mailto:maxpromove@gmail.com"
                className="text-gray-800underline"
              >
                maxpromove@gmail.com
              </a>{" "}
              or call{" "}
              <a href="tel:+1234567890" className="text-gray-800underline">
                +1 (234) 567-890
              </a>
              .
            </p>

            {/* Close button */}
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
