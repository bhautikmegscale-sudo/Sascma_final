import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-12 mt-22 md:mt-36">
      {/* Tag */}
      <div className="flex md:justify-center items-center justify-start mb-2">
        <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
        <h4 className=" text-sm uppercase tracking-widest text-gray-500">
          Privacy Policy
        </h4>
        <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#213153] text-start md:text-center">
        Privacy Policy for SASCMA ERP
      </h2>

      {/* <p className="mb-6 font-semibold text-lg text-[#9D2235]">Effective Date: 01/12/2024</p> */}

      <p className="mb-6 text-gray-700 leading-relaxed">
        SASCMA ERP is committed to protecting the privacy and security of the personal information of all users including students, faculty, and administrative staff who use our platform.
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our College ERP System.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">1. Information We Collect</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
        <li>Personal identification details (name, address, contact, etc.)</li>
        <li>Academic records and enrollment details</li>
        <li>Financial information (if applicable)</li>
        <li>Identification documents (ID cards, government-issued IDs, etc.)</li>
        <li>Website usage data (IP address, cookies, browsing behavior)</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">2. How We Use Your Information</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
        <li>Student admissions, registration, and academic administration</li>
        <li>Communication regarding academic and administrative matters</li>
        <li>Processing financial transactions (fees, scholarships, etc.)</li>
        <li>Security and identification verification</li>
        <li>Compliance with legal and regulatory obligations</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">3. Information Sharing and Disclosure</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        We do not sell or trade personal information. However, we may share data with:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
        <li>Government authorities, as required by law</li>
        <li>Third-party service providers for administrative and operational purposes</li>
        <li>Affiliated educational institutions for academic collaborations</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">4. Data Protection Measures</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
        <li>Secure storage systems</li>
        <li>Restricted access to personal data</li>
        <li>Encryption and security protocols for online transactions</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">5. Your Rights</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
        <li>Access their personal data</li>
        <li>Request corrections to inaccurate information</li>
        <li>Withdraw consent for certain data processing activities</li>
        <li>Exercise other rights as defined under applicable laws</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">6. Cookies and Website Tracking</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Our website may use cookies and analytics tools to enhance user experience. Users may manage cookie preferences through browser settings.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-[#213153]">7. Updates to This Policy</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        We may update this Privacy Policy periodically. Any changes will be posted on our official website with the revised effective date.
      </p>
    </section>
  );
}
