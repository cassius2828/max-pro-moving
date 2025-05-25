import NavigateBackBtn from "../components/Reuseables/NavigateBackBtn";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-6 py-12 bg-white shadow-lg rounded-lg text-base md:text-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
        About Max Pro Moving
      </h1>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Max Pro Moving is a locally owned and operated moving company proudly
        based in Tempe, Arizona. We have decades of experience in moving and
        have found the formula to the best service.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        It all starts with you, the client! Everyone is different, and we
        understand that in order to make your life easier we need to know what
        matters to you most. We will take the time to understand what makes a
        difference to you and offer the best options to fit your approach!
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        A change of your surroundings can be stressful. Our team cares about
        taking the strain off of your back and they are trained to perform with
        the utmost professionalism and quality.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        At Max Pro Moving AZ we go the extra mile to ensure your belongings are
        protected, your timeline is respected, and your expectations are
        exceeded.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        We’re proud to serve our Arizona community and look forward to helping
        you with your next move. For questions, quotes, or custom requests, feel
        free to contact us at{" "}
        <a
          href="mailto:maxpromove@gmail.com"
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          maxpromove@gmail.com
        </a>{" "}
        .
      </p>
      <NavigateBackBtn />
    </div>
  );
}
