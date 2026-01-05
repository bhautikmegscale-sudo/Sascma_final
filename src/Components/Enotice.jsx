import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PresidentNoticeSection = () => {
  const [expanded, setExpanded] = useState(false);

  /* 🔹 Typing Effect Logic */
  const fullText = "Mr. Nirmal Vakhariya";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 120); // typing speed

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="relative bg-linear-to-r from-gray-100 via-white to-gray-50 py-8 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-8 relative z-10">

        {/* Message Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="lg:w-1/2 w-full bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-2xl"
        >
          
          {/* Heading */}
          <div className="flex items-center mb-4">
            <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
            <h4 className="text-sm uppercase tracking-widest text-gray-500">
              President&apos;s Message
            </h4>
            <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1">
            
            {/* ✅ REAL Typing Effect */}
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 whitespace-nowrap">
              {typedText}
            </h3>

            <p className="text-gray-600 mt-1">
              <span className="text-gray-600 font-medium">President</span>
            </p>

            {/* Intro Text */}
            <p className="text-gray-700 mt-4 leading-relaxed text-base">
              It gives me great pleasure, as Chairman of the Surat Technical and
              Education Research Society (STERS), to welcome you to the SASCMA
              College. SASCMA embodies STERS&apos; commitment to providing
              accessible and high-quality education.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              We are delighted with the college&apos;s growth, its modern
              facilities, and the introduction of future-oriented courses
              like MSc IT (Integrated) and BSc Data Science. Our focus
              remains on creating an environment where students can thrive
              academically, personally, and professionally.
            </p>

            {/* Toggle Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-[#9D2235] font-semibold hover:underline self-center text-base"
              aria-expanded={expanded}
              aria-controls="president-message-expanded"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-[#9D2235] mb-3">
                        Our Vision
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        To be a center of academic innovation and excellence that
                        shapes socially responsible, industry-ready individuals
                        equipped with knowledge, ethics, and leadership.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-xl font-semibold text-[#9D2235] mb-3">
                        Our Mission
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        To provide student-centered, value-based education that
                        integrates theory and practice and prepares students for
                        global opportunities.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* President Image */}
        {/* <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img
            src="https://sascma.ac.in:8443/Uploads/media/4d053ce2-bf1f-4e58-a3c2-aa09ed078209.JPG"
            alt="President"
            className="w-full h-auto lg:h-140 rounded-3xl border-4 border-white shadow-2xl object-center"
          />
        </motion.div> */}
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <img
              src="https://sascma.ac.in:8443/Uploads/media/4d053ce2-bf1f-4e58-a3c2-aa09ed078209.JPG"
              alt="Principal"
              className="w-full h-auto lg:h-135 object-cover rounded-3xl  border-4 border-white"
            />
          </motion.div>
      </div>
    </div>
  );
};

export default PresidentNoticeSection;