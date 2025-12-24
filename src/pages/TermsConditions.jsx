import React from "react";

export default function TermsConditions() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-12 mt-22 md:mt-36">
      {/* Tag */}
      <div className="flex md:justify-center justify-start items-center mb-2">
        <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
        <h4 className="text-sm uppercase tracking-widest text-gray-500">
          Terms & Conditions
        </h4>
        <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#213153] text-start md:text-center">
        Terms and Conditions for Using SASCMA ERP
      </h2>

      <p className="mb-6 text-gray-700 leading-relaxed">
        Welcome to SASCMA ERP System. By accessing or using our platform, you agree to comply with the following terms and conditions:
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">1. User Responsibilities</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
        <li>You must provide accurate and current information while using the system.</li>
        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
        <li>Unauthorized use of the system is strictly prohibited.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">2. Data Usage</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        All data entered into the system is subject to our Privacy Policy. We do not share your personal data with third parties except as described in that policy.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">3. Intellectual Property</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        All content and materials on the ERP platform are owned by SASCMA and protected by intellectual property laws. Unauthorized reproduction or use is prohibited.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">4. Limitation of Liability</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        SASCMA is not liable for any damages arising from the use or inability to use the ERP system, including but not limited to data loss or service interruptions.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">5. Changes to Terms</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        We reserve the right to modify these terms at any time. Updates will be posted on our website with the effective date.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">6. Governing Law</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        These terms shall be governed by the laws of India, and any disputes shall be resolved in the courts located in Surat.
      </p>
    </section>
  );
}
