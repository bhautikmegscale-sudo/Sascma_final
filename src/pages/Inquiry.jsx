import React, { useState } from "react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    question: "",
  });

  const [submitting, setSubmitting] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const payload = { ...formData };
      console.log("INQUIRY PAYLOAD (LOCAL):", payload);

      // FUTURE API (plug later)
      await fetch("http://10.27.1.208:8443/api/v1/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          dbname: "dbfrontcms",
        },
        body: JSON.stringify(payload),
      });

     

      setFormData({
        name: "",
        mobileNumber: "",
        email: "",
        question: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="mt-30 md:mt-50 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
            <h4 className="text-sm uppercase tracking-widest text-gray-500">
              Inquiry
            </h4>
            <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Admission Inquiry
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a question about admissions or programs?  
            Fill out the form below and we’ll get back to you.
          </p>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <div className="bg-white shadow-md border-t-4 border-[#9D2235] p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-2"
              />

              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full border px-4 py-2"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2"
              />

              <textarea
                name="question"
                rows="4"
                placeholder="Your Question"
                required
                value={formData.question}
                onChange={handleChange}
                className="w-full border px-4 py-2"
              ></textarea>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#9D2235] text-white py-2 hover:bg-[#7f1c2b] disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
