import NavigateBackBtn from "../components/Reuseables/NavigateBackBtn";

export default function License() {


  return (
    <div className="max-w-4xl mx-auto mt-20 px-6 py-12 bg-white shadow-lg rounded-lg text-base md:text-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
        License
      </h1>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Effective Date: May 3, 2025
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Business License</strong>: Max Pro Moving AZ is licensed in
          Arizona and complies with all applicable laws.
        </li>
        <li>
          <strong>Insurance Coverage</strong>: We include general and cargo
          insurance. More coverage available on request.
        </li>
        <li>
          <strong>Content Usage</strong>: All website content is owned by Max
          Pro Moving AZ and cannot be reused without permission.
        </li>
        <li>
          <strong>Compliance</strong>: We follow all AZ DOT and FMCSA
          regulations.
        </li>
        <li>
          <strong>Contact</strong>: For inquiries, email us at{" "}
          <a
            href="mailto:maxpromove@gmail.com"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            maxpromove@gmail.com
          </a>
          .
        </li>
      </ul>
      <NavigateBackBtn />
    </div>
  );
}
