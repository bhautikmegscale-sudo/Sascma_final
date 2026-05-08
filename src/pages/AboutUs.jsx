import React, { useEffect, useState } from "react";

/* ================= ABOUT PAGE DATA ================= */

const aboutIntro = {
  tag: "About Us",
  title: "STERS Arts, Science & Commerce Management Academy",
  imageMain: "/aboutImg/aboutCampus.jpeg",
};

const aboutContent = [
  {
    heading: "Who We Are",
    text: `SASCMA (STERS Arts, Science, and Commerce Management Academy) is a
    leading institution based in Surat, governed by The Surat Technical and
    Education Research Society (STERS). Established with the goal of delivering
    high-quality, future-ready education, SASCMA fosters academic excellence,
    personal growth, and professional development in a supportive and inclusive
    environment.`,
  },
  {
    heading: "Our Vision",
    text: `To be a center of academic innovation and excellence that shapes
    socially responsible, industry-ready individuals equipped with knowledge,
    ethics, and leadership.`,
  },
];

/* ================= FEATURES ================= */

const features = [
  {
    title: "Student Life & Events",
    description:
      "At SASCMA, education goes beyond the classroom. We host a range of events throughout the year including academic seminars, cultural festivals, sports meets, competitions, awareness drives, and social initiatives.",
    bg: "bg-[#213153]",
    text: "text-white",
  },
  {
    title: "Our People",
    description:
      "Our strength lies in our people. We have highly qualified faculty, supportive administration, and a culture that promotes mentorship, respect, and professional growth.",
    bg: "bg-[#DBDBDB]",
    text: "text-gray-800",
  },
  {
    title: "Campus & Infrastructure",
    description:
      "Our campus supports immersive learning with modern classrooms, labs, library resources, seminar halls, sports facilities, and student-friendly infrastructure.",
    bg: "bg-gray-100",
    text: "text-gray-800",
  },
];

/* ================= STATS ================= */

const statsData = [
  { value: 1, label: "Opened in" },
  { value: 5260, label: "Students" },
  { value: 97, label: "Graduation Rate", suffix: "%" },
  { value: 70, label: "Faculty" },
];

/* ================= GALLERY ================= */

const galleryImages = [
  "/aboutImg/a1.webp",
  "/aboutImg/a2.webp",
  "/aboutImg/a3.webp",
  "/aboutImg/a4.webp",
  "/aboutImg/a5.webp",
];

/* ================= COUNT UP ================= */

const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1500;
    const increment = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

/* ================= COMPONENT ================= */

const AboutUs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-46 pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-3 lg:gap-5">

          {/* ================= LEFT SIDE ================= */}

          <div>

            {/* HERO SECTION */}
            <section className="pb-4 bg-white">

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-5 items-center">

                {/* TEXT */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>

                    <h4 className="text-xs sm:text-sm uppercase tracking-widest text-gray-500">
                      {aboutIntro.tag}
                    </h4>

                    <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {aboutIntro.title}
                  </h2>

                  {aboutContent.map((item, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#213153] mb-3">
                        {item.heading}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* IMAGE */}
                <div>
                  <img
                    src={aboutIntro.imageMain}
                    alt="Campus"
                    className="w-full h-80 sm:h-105 xl:h-130 object-cover rounded-3xl shadow-xl"
                  />
                </div>

              </div>
            </section>

            {/* STATS */}
            <section className="bg-gray-100 py-8 md:py-6 ">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center px-4 sm:px-6">
                {statsData.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6"
                  >
                    <h2 className="text-3xl sm:text-4xl  font-bold text-[#9D2235]">
                      <CountUp
                        end={item.value}
                        suffix={item.suffix || "+"}
                      />
                    </h2>
                    <p className="mt-3 text-[#213153] text-xs sm:text-sm md:text-lg font-semibold">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            
          </div>

          {/* ================= RIGHT SIDE SCROLLER ================= */}

          <div className="w-full lg:w-auto">
            {/* DESKTOP VERTICAL */}
            <div className="hidden lg:block">
              <div className="sticky top-24 h-[calc(100vh-120px)] overflow-hidden rounded-lg">
                <div className="vertical-marquee">
                  <div className="vertical-track">
                    {[...galleryImages, ...galleryImages].map((img, i) => (
                      <div
                        key={i}
                        className="mb-5 overflow-hidden rounded-lg "
                      >
                        <img
                          src={img}
                          alt="Campus"
                          className="h-68 w-full object-cover transition duration-700 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE + TABLET HORIZONTAL */}
            <div className="block lg:hidden mt-8">
              <h3 className="text-2xl font-bold text-[#213153] mb-5">
                Campus Gallery
              </h3>
              <div className="horizontal-marquee overflow-hidden rounded-2xl">
                <div className="horizontal-track">
                  {[...galleryImages, ...galleryImages].map((img, i) => (
                    <div
                      key={i}
                      className="mx-2 shrink-0 overflow-hidden rounded-2xl shadow-lg"
                    >
                      <img
                        src={img}
                        alt="Campus"
                        className="h-56 sm:h-64 w-65 sm:w-85 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FEATURES */}
        <section className="py-6 w-full">
          <div className="flex ">
            {features.map((item, i) => (
              <div
                key={i}
                className={`${item.bg} ${item.text} p-6 sm:p-8 shadow-lg`}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <span className="w-1 h-7 bg-[#9D2235] mr-3 rounded-full"></span>
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ================= STYLE ================= */}

      <style>
        {`
          /* DESKTOP VERTICAL */
          @keyframes verticalScroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .vertical-marquee {
            height: 100%;
            overflow: hidden;
            position: relative;
          }

          .vertical-track {
            display: flex;
            flex-direction: column;
            animation: verticalScroll 35s linear infinite;
          }

          .vertical-track:hover {
            animation-play-state: paused;
          }

          /* MOBILE HORIZONTAL */

          @keyframes horizontalScroll {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .horizontal-marquee {
            width: 100%;
            position: relative;
          }

          .horizontal-track {
            display: flex;
            width: max-content;
            animation: horizontalScroll 30s linear infinite;
          }

          .horizontal-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </>
  );
};

export default AboutUs;