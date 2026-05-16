import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { motion, AnimatePresence } from "framer-motion";
import { Info, BookOpen, Calendar, FileText, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* -------- Tabs -------- */

const tabs = [
  { id: "about", label: "About", icon: Info },
  { id: "syllabus", label: "Syllabus", icon: BookOpen },
  { id: "timetable", label: "Timetable", icon: Calendar },
];

export default function CourseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  const [activeTab, setActiveTab] = useState("about");

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#213153]">
        Course not found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-20 md:pt-24 pb-8 md:pb-10">
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-65 sm:h-80 md:h-95 w-full">
        {/* Background Image */}
        <img
          src={course.banner}
          alt={course.full}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#213153]/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto w-full"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center tracking-wide mb-2">
              {course.full}
            </h1>
            <p className="text-sm md:text-base uppercase font-semibold tracking-widest text-white/90">
              Duration: {course.duration}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className=" pt-4  md:py-8">
        <div className="max-w-7xl px-4 lg:px-8 mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-1 sm:gap-4 border-b border-[#213153]/15 mb-4 md:mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1 px-2 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-medium transition
                    ${
                      activeTab === tab.id
                        ? "text-[#9d2235] border-b-2 border-[#9d2235]"
                        : "text-[#213153]/70 hover:text-[#213153]"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className=" rounded-lg border border-[#213153]/15 bg-white p-3 md:p-6 shadow-sm"
            >
              {/* ABOUT */}
              {activeTab === "about" && (
                <div>
                  {/* <h3 className="text-xl sm:text-2xl font-semibold text-[#213153] mb-4">
                    About the Course
                  </h3> */}
                  {/* <p className="text-[#213153]/70 leading-relaxed text-sm sm:text-base">
                    {course.about}
                  </p> */}
                  <div
                    className="text-[#213153]/70 leading-relaxed text-sm sm:text-base space-y-4"
                    dangerouslySetInnerHTML={{ __html: course.about }}
                  />
                </div>
              )}

              {/* SYLLABUS */}
              {activeTab === "syllabus" && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#213153] mb-4">
                    Course Syllabus
                  </h3>
                  {activeTab === "syllabus" && (
                    <div>
                      {/* <h3 className="text-xl sm:text-2xl font-semibold text-[#213153] mb-4">
                        Course Syllabus
                      </h3> */}

                      {/* ✅ CASE 1: MODULE EXISTS */}
                      {course.modules ? (
                        <div className="space-y-4">
                          {course.modules.map((module, i) => (
                            <details
                              key={i}
                              className=" rounded-lg p-2 md:p-4 bg-gray-50"
                            >
                              <summary className="cursor-pointer font-semibold text-[#213153] text-[16px] md:text-[18px]">
                                {module.name}
                              </summary>

                              <div className="mt-3 space-y-3">
                                {module.semesters.map((sem, j) => (
                                  <details
                                    key={j}
                                    className="ml-2 pl-2 md:ml-4 md:pl-4"
                                  >
                                    <summary className="cursor-pointer text-[#9d2235] font-medium text-[15px] md:text-[17px]">
                                      {sem.sem}
                                    </summary>

                                    <ul className="mt-2 ml-4 space-y-2">
                                      {sem.subjects.map((sub, k) => (
                                        <li
                                          key={k}
                                          className="flex justify-between text-[13px] md:text-[14px]"
                                        >
                                          {sub.name}
                                          <button
                                            onClick={() =>
                                              navigate(
                                                `/pdf-viewer?file=${encodeURIComponent(sub.pdf)}`,
                                              )
                                            }
                                            className="text-[#9d2235] text-[11px] md:text-[14px] hover:underline font-semibold"
                                          >
                                            View PDF
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  </details>
                                ))}
                              </div>
                            </details>
                          ))}
                        </div>
                      ) : course.semesters ? (
                        /* ✅ CASE 2: DIRECT SEM (LIKE BCOM) */
                        <div className="space-y-4">
                          {course.semesters.map((sem, i) => (
                            <details
                              key={i}
                              className=" rounded-lg p-4 bg-gray-50"
                            >
                              <summary className="cursor-pointer font-semibold text-[#9d2235] text-[15px] md:text-[17px]">
                                {sem.sem}
                              </summary>

                              <ul className="mt-2 ml-4 space-y-2 text-sm">
                                {sem.subjects.map((sub, k) => (
                                  <li
                                    key={k}
                                    className="flex justify-between text-[13px] md:text-[14px]"
                                  >
                                    {sub.name}
                                    <button
                                      onClick={() =>
                                        navigate(
                                          `/pdf-viewer?file=${encodeURIComponent(sub.pdf)}`,
                                        )
                                      }
                                      className="text-[#9d2235] text-[11px] md:text-[14px] hover:underline font-semibold"
                                    >
                                      View PDF
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">No syllabus available</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* TIMETABLE */}
              {activeTab === "timetable" && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#213153] mb-4">
                    Timetable
                  </h3>
                  <p className="text-[#213153]/70 text-sm sm:text-base">
                    {course.timetable}
                  </p>
                </div>
              )}

              {/* MATERIAL */}
              {activeTab === "material" && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#213153] mb-4">
                    Study Material
                  </h3>
                  <p className="text-[#213153]/70 text-sm sm:text-base">
                    {course.material}
                  </p>
                </div>
              )}

              {/* MENTOR */}
              {activeTab === "mentor" && (
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#213153]/10 flex items-center justify-center text-[#213153] font-bold text-xl sm:text-2xl">
                    {course.mentor.initials}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#213153]">
                      {course.mentor.name}
                    </h3>
                    <p className="text-[#213153]/70 text-sm sm:text-base">
                      {course.mentor.experience}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
