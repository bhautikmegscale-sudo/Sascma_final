import React from "react";
import { coursesData } from "../data/coursesData";

const CourseCard = () => {
  return (
    <>
      {/* Section Heading */}
      <div className="px-4 lg:px-8">
        <div className="flex items-center justify-start lg:justify-center mb-4 mt-10">
          <span className="w-10 h-0.5 bg-red-700 mr-3"></span>
          <h4 className="text-sm uppercase tracking-widest text-gray-500">
            Our Courses
          </h4>
          <span className="w-10 h-0.5 bg-red-700 ml-3"></span>
        </div>

        <h1 className="text-left lg:text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Explore our comprehensive range of courses
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-2 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className=" group relative overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 ease-out hover:shadow-2xl">
              {/* Image */}
              <img
                loading="lazy"
                src={course.banner}
                alt={course.full}
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110 lg:h-full"
              />

              {/* Desktop Hover Overlay */}
              <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-[#9D2235]/50 opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="text-center px-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {course.short}
                  </h3>

                  <p className="text-white font-medium mb-4 line-clamp-2">
                    {course.about}
                  </p>

                  <a
                    href={`/courses/${course.id}`}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
                  >
                    Read more
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>

              {/* Bottom Bar Desktop */}
              <div className="hidden lg:block absolute bottom-0 left-0 w-full bg-[#9D2235] text-white py-4 text-center font-semibold">
                {course.full}
              </div>

              {/* Mobile Content */}
              <div className="lg:hidden bg-white p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {course.short}
                </h3>

                <p className="text-gray-700 font-medium line-clamp-2">
                  {course.about}
                </p>

                <a
                  href={`/courses/${course.id}`}
                  className="mt-3 inline-flex items-center gap-2 text-red-700 font-semibold hover:underline"
                >
                  Read more
                  <span className="text-xl">→</span>
                </a>

                <div className="mt-3 bg-red-700 text-white py-2 font-semibold">
                  {course.full}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseCard;
