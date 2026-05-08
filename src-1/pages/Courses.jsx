import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../data/coursesData";

const CoursesIntro = {
  tag: "Our Courses",
  title: "Education programs crafted to build successful futures.",
  imageMain: "/l1.webp", // public folder recommended
};

export default function Courses() {
  const navigate = useNavigate(); // ✅ Must be inside the component

  return (
    <div className="min-h-screen bg-white mt-0 md:mt-20 py-20">

      {/* Hero Section with Background Image */}
      <div
        className="relative h-56 md:h-72 mb-6 md:mb-12 overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${CoursesIntro.imageMain})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#213153]/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-center mb-2">
            {/* <span className="w-12 h-[3px] bg-[#9D2235] mr-4 rounded"></span> */}
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center tracking-wide">
              {CoursesIntro.tag}
            </h2>
            {/* <span className="w-12 h-[3px] bg-[#9D2235] ml-4 rounded"></span> */}
          </div>
          <h4 className="text-sm md:text-base uppercase font-semibold tracking-widest text-white/90">
            {CoursesIntro.title}
          </h4>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4 lg:px-8">
        {coursesData.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className=" rounded-lg border border-[#213153]/20 bg-white p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
          >
            {/* Short Name */}
            <div className="flex items-center justify-center h-14 md:h-20  rounded-lg bg-[#213153]/10 mb-6">
              <span className="text-3xl md:text-4xl font-bold md:font-bold text-[#213153] tracking-wide select-none">
                {course.short}
              </span>
            </div>

            {/* Full Name */}
            <h3 className="text-lg font-semibold mb-3 text-[#213153]">
              {course.full}
            </h3>

            {/* Duration */}
            <div className="flex items-center gap-2 text-[#213153]/90  0 mb-6">
              <Clock className="w-5 h-5" />
              <span className="select-none">{course.duration}</span>
            </div>

            {/* View Detail Button */}
           <button
              onClick={() => navigate(`/courses/${course.id}`)}
              className="mt-auto w-full rounded-lg border border-[#9d2235] py-3 font-medium text-[#9d2235] transition-colors hover:bg-[#9d2235] hover:text-white"
              type="button"
            >
              View Detail
            </button>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
