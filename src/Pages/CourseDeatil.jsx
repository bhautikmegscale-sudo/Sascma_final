import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { motion, AnimatePresence } from "framer-motion";
import {
  Info,
  BookOpen,
  Calendar,
  FileText,
  User,
} from "lucide-react";

/* -------- Tabs -------- */

const tabs = [
  { id: "about", label: "About", icon: Info },
  { id: "syllabus", label: "Syllabus", icon: BookOpen },
  { id: "timetable", label: "Timetable", icon: Calendar },
  { id: "material", label: "Material", icon: FileText },
  { id: "mentor", label: "Mentor", icon: User },
];

export default function CourseDetail() {
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
          <div className="flex flex-wrap gap-2 sm:gap-4 border-b border-[#213153]/15 mb-4 md:mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-medium transition
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
              className=" rounded-lg border border-[#213153]/15 bg-white p-6 sm:p-8 shadow-sm"
            >
              {/* ABOUT */}
              {activeTab === "about" && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#213153] mb-4">
                    About the Course
                  </h3>
                  <p className="text-[#213153]/70 leading-relaxed text-sm sm:text-base">
                    {course.about}
                  </p>
                </div>
              )}

              {/* SYLLABUS */}
              {activeTab === "syllabus" && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#213153] mb-4">
                    Course Syllabus
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-[#213153]/70 text-sm sm:text-base">
                    {course.syllabus.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
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
