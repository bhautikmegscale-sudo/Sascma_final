import React from "react";
import { Play, Quote } from "lucide-react";

/* ================= TESTIMONIAL DATA ================= */

const testimonials = [
  {
    id: 1,
    name: "Diya Shah",
    course: "BBA (2023-26)",
    video: "/testimonials/video1.mp4",
    thumbnail: "/testimonials/thumb1.jpg",
  },
  {
    id: 2,
    name: "Pratik Valeja",
    course: "B.Com (2020-23)",
    video: "/testimonials/video2.mp4",
    thumbnail: "/testimonials/thumb2.jpg",
  },
  {
    id: 3,
    name: "Palak Jain",
    course: "B.Com (2023-26)",
    video: "/testimonials/video3.mp4",
    thumbnail: "/testimonials/thumb3.jpg",
  },
  {
    id: 4,
    name: "Devansh Agarwal",
    course: "B.Com (2023-26)",
    video: "/testimonials/video4.mp4",
    thumbnail: "/testimonials/thumb4.jpg",
  },
  {
    id: 5,
    name: "Shraddha Vyas",
    course: "Alumni (2021-24)",
    video: "/testimonials/video5.mp4",
    thumbnail: "/testimonials/thumb5.jpg",
  },
  {
    id: 6,
    name: "Kirti Bhagya",
    course: "M.Com (2024-26)",
    video: "/testimonials/video6.mp4",
    thumbnail: "/testimonials/thumb6.jpg",
  },
];

/* ================= COMPONENT ================= */

const TestimonialVideos = () => {
  return (
    <section className="bg-[#f7f9fc] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:mt-14">
        {/* ================= HEADING ================= */}

        <div className="text-center mb-6">
          {/* <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#9D2235]/10 mb-5">
            <Quote className="text-[#9D2235]" size={28} />
          </div> */}

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9D2235]">
            Student Testimonials
          </p>

          <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-[#14213d]">
            Voices of SASCMA
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base leading-relaxed">
            Hear directly from our students and alumni about their academic
            journey, campus life, and experiences at SASCMA College.
          </p>
        </div>

        {/* ================= VIDEO GRID ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* VIDEO */}
              <div className="relative overflow-hidden">
                <video
                  controls
                  preload="metadata"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-60 xl:h-80 w-full object-fill bg-black"
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                {/* PLAY OVERLAY */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70 shadow-2xl">
                    <Play
                      className="ml-1 text-[#9D2235]"
                      size={26}
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* TOP BADGE */}
                {/* <div className="absolute top-3 left-3 rounded-full bg-[#9D2235] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg">
                  Testimonial
                </div> */}
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#14213d]">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#9D2235]">
                  {item.course}
                </p>

                {/* <div className="mt-3 h-px w-full bg-gray-200"></div> */}

                    {/* <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    Student sharing their experience and journey at SASCMA
                    College.
                    </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
