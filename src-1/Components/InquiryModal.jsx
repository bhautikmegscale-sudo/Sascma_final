import React, { useState, useEffect } from "react";

export default function InquiryModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    question: "",
  });

  const [submitting, setSubmitting] = useState(false);

  /* 🔒 Lock background scroll only when modal is open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      await fetch("http://10.27.1.208:8443/api/v1/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          dbname: "dbfrontcms",
        },
        body: JSON.stringify(formData),
      });

      alert("Inquiry submitted successfully 🎓");

      setFormData({
        name: "",
        mobileNumber: "",
        email: "",
        question: "",
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-2"
      onClick={onClose}
    >
      <div
        className="
          bg-white
          w-full
          max-w-lg
          max-h-[90vh]
          overflow-y-auto
          p-8
          relative
          rounded-lg
          animate-fadeIn
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#213153] mb-6 text-center">
          Admission Inquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            rows="3"
            placeholder="Your Question"
            required
            value={formData.question}
            onChange={handleChange}
            className="w-full border px-4 py-2"
          />

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
  );
}
