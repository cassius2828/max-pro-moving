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
        {/* heading */}
        <h2 className="text-3xl font-bold mb-4">Your Quote</h2>

        {quoteIsLoading ? (
          <div className="flex justify-center items-center h-72">
            <LoaderIcon className="w-20 h-20" />
          </div>
        ) : (
          <>
            {/* Quote amount */}
            <div className="text-5xl font-extrabold text-green-500 mb-6">
              ${Number(quoteAmount.toFixed(2))}
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
                href="mailto:info@azmaxpro.com"
                className="text-blue-600 underline"
              >
                info@azmaxpro.com
              </a>{" "}
              or call{" "}
              <a href="tel:+1234567890" className="text-blue-600 underline">
                +1 (234) 567-890
              </a>
              .
            </p>

            {/* Close button */}
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition"
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
