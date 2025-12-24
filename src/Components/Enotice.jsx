import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PresidentNoticeSection = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [expanded, setExpanded] = useState(false);
const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = [
    {
      title: "New Semester Begins",
      date: "Dec 20, 2025",
      description:
        "The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.The new semester will commence from January 5th. Ensure you have enrolled for all courses.",
    },
    {
      title: "Library Renovation",
      date: "Dec 18, 2025",
      description:
        "The library will be closed for renovations from Dec 25th to Jan 2nd.",
    },
  ];

  const documents = [
    { title: "Academic Calendar 2026", link: "#" },
    { title: "Exam Guidelines", link: "#" },
  ];

  useEffect(() => {
  if (selectedNotice) {
    // Lock background scroll
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none"; // mobile fix
  } else {
    // Restore scroll
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
  };
}, [selectedNotice]);


  return (
    <section className="max-w-7xl mx-auto pt-6 pb-4 md:pt-16 lg:pt-24 lg:pb-12 px-4 lg:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 lg:gap-8">
        {/* ======= PRESIDENT MESSAGE ======= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-linear-to-r from-gray-50 via-white to-gray-50 rounded-3xl p-6 border border-gray-200"
        >
          {/* President Image */}
          <div className="flex justify-center">
          <motion.img
            src="https://sascma.ac.in:8443/Uploads/media/4d053ce2-bf1f-4e58-a3c2-aa09ed078209.JPG"
            alt="President"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-80 md:h-96 h-80 md:w-80 object-cover rounded-3xl shadow-2xl border-4 border-white w-full lg:mx-auto mb-6 lg:mb-10"
          />
          </div>
          {/* Title */}
          <h2 className="text-3xl font-bold text-[#9D2235] mb-6 text-center">
            President&apos;s Message
          </h2>

          {/* Intro Text */}
          <p className="text-gray-700 text-base leading-relaxed ">
            It gives me great pleasure, as Chairman of the Surat Technical and
            Education Research Society (STERS), to welcome you to the SASCMA
            College. SASCMA embodies STERS&apos; commitment to providing
            accessible and high-quality education.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mt-4">
            We are delighted with the college&apos;s growth, its modern
            facilities, and the introduction of future-oriented courses
            like MSc IT (Integrated) and BSc Data Science. Our focus
            remains on creating an environment where students can thrive
            academically, personally, and professionally.
          </p>

          {/* Expanded Content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-6"
              >
                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 ">
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

          {/* Toggle Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-[#9D2235] font-semibold hover:underline self-center"
            aria-expanded={expanded}
            aria-controls="president-message-expanded"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>

          {/* President Name */}
          <div className="mt-4 text-center">
            <p className="font-semibold text-gray-900 text-lg">
              Mr. Nirmal Vakhariya
            </p>
            <p className="text-gray-500 text-sm">President</p>
          </div>
        </motion.div>

        {/* ======= E-NOTICE BOARD ======= */}
        <aside className="bg-linear-to-r from-gray-50 via-white to-gray-50 rounded-3xl  p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            E-Notice Board
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-4">
            {["news", "documents"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg font-semibold text-sm transition focus:outline-none ${
                  activeTab === tab
                    ? "bg-[#9D2235] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                aria-selected={activeTab === tab}
                role="tab"
              >
                {tab === "news" ? "News" : "Documents"}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "news" && (
              <motion.div
                key="news"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-5"
                role="tabpanel"
              >
                {notices.map((notice, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-xl p-5 shadow border-l-4 border-[#9D2235]"
                    tabIndex={0}
                    aria-label={`Notice: ${notice.title}`}
                  >
                    <h3 className="font-semibold text-base text-gray-800">
                      {notice.title}
                    </h3>
                    <time
                      className="text-xs text-gray-500 block mt-1"
                      dateTime={new Date(notice.date).toISOString()}
                    >
                      {notice.date}
                    </time>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
                      {notice.description}
                    </p>

                    <button
                      onClick={() => setSelectedNotice(notice)}
                      className="mt-2 text-sm text-[#9D2235] font-semibold hover:underline"
                    >
                      Read more
                    </button>

                  </article>
                ))}
              </motion.div>
            )}

            {activeTab === "documents" && (
              <motion.div
                key="documents"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-5"
                role="tabpanel"
              >
                {documents.map((doc, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-xl p-5 shadow border-l-4 border-[#9D2235] flex justify-between items-center"
                    tabIndex={0}
                    aria-label={`Document: ${doc.title}`}
                  >
                    <h3 className="font-semibold text-base text-gray-800">
                      {doc.title}
                    </h3>
                    <a
                      href={doc.link}
                      className="text-sm text-[#9D2235] font-semibold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </aside>
      </div>


      <AnimatePresence>
  {selectedNotice && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg max-w-lg w-full mx-4 p-6 shadow-2xl relative max-h-[80vh]
      overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedNotice(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
          aria-label="Close popup"
        >
          ✕
        </button>

        {/* Content */}
        <h3 className="text-xl font-bold text-[#9D2235] mb-2">
          {selectedNotice.title}
        </h3>

        <time className="text-xs text-gray-500 block mb-4">
          {selectedNotice.date}
        </time>

        <p className="text-gray-700 text-sm leading-relaxed">
          {selectedNotice.description}
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default PresidentNoticeSection;
