import NavigateBackBtn from "../components/Reuseables/NavigateBackBtn";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-6 py-12 bg-white shadow-lg rounded-lg text-base md:text-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
        Privacy Policy
      </h1>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Effective Date: May 3, 2025
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Information We Collect</strong>: Your name, address, email,
          phone number, and moving details.
        </li>
        <li>
          <strong>Use of Information</strong>: We use your info to provide and
          improve our services.
        </li>
        <li>
          <strong>Data Sharing</strong>: We do not sell or share your data
          except for essential services like payments.
        </li>
        <li>
          <strong>Data Security</strong>: We implement reasonable security to
          protect your data.
        </li>
        <li>
          <strong>Your Rights</strong>: You can request access to or deletion of
          your data by contacting us.
        </li>
        <li>
          <strong>Changes</strong>: We may update this policy and will reflect
          changes on this page.
        </li>
      </ul>
      <NavigateBackBtn />
    </div>
  );
}
