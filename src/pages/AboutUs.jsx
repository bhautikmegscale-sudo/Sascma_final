import React, { useEffect, useState } from "react";

/* ================= ABOUT PAGE DATA ================= */

const aboutIntro = {
  tag: "About Us",
  title: "STERS Arts, Science & Commerce Management Academy",
  imageMain: "/aboutImg/banner.webp",
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

/* ---------------- FEATURES DATA ---------------- */
const features = [
  {
    title: "Student Life & Events",
    description:
      "At SASCMA, education goes beyond the classroom. We host a range of events throughout the year: Academic seminars and workshops Cultural festivals and celebration days Sports meets and competitions Fun events, social initiatives, and awareness drives.",
    bg: "bg-[#213153]",
    text: "text-white",
  },
  {
    title: "Our People",
    description:
      "Our strength lies in our people. We are proud to have: Highly qualified and experienced faculty from diverse fields A supportive administrative team dedicated to student success A culture that promotes mentorship, respect, and growth.",
    bg: "bg-[#DBDBDB]",
    text: "text-gray-800",
  },
  {
    title: "Campus & Infrastructure",
    description:
      "Our campus is designed to support immersive learning and all-round development. Facilities include.",
    bg: "bg-gray-100",
    text: "text-gray-800",
  },
];

/* ================= STATS DATA ================= */
const statsData = [
  { value: 1, label: "Opened in" },
  { value: 5260, label: "Students" },
  { value: 97, label: "Graduation rate of our student", suffix: "%" },
  { value: 70, label: "Faculty" },
];

/* ================= GALLERY DATA ================= */
const galleryImages = [
  "/aboutImg/a1.webp",
  "/aboutImg/a2.webp",
  "/aboutImg/a3.webp",
  "/aboutImg/a4.webp",
  "/aboutImg/a5.webp", 
];

/* ================= COUNT UP HOOK ================= */

const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(end / (duration / 16)));

    const timer = setInterval(() => {
      start += step;
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
      {/* ---------- ABOUT INTRO SECTION ---------- */}
      <section className="mt-30 lg:mt-50 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center mb-4">
                <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
                <h4 className="text-sm uppercase tracking-widest text-gray-500">
                  {aboutIntro.tag}
                </h4>
                <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {aboutIntro.title}
              </h2>

              {aboutContent.map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-2xl font-semibold text-[#213153] mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div>
              <img
                src={aboutIntro.imageMain}
                alt="Campus"
                className="w-full h-125 object-cover  rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STATS SECTION ---------- */}
      <section className="bg-gray-100 py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {statsData.map((item, i) => (
              <div key={i}>
                <h2 className="text-2xl md:text-5xl font-bold text-[#9D2235]">
                  <CountUp end={item.value} suffix={item.suffix || "+"} />
                </h2>
                <p className="mt-2 text-[#213153] text-sm font-semibold md:text-xl">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURES SECTION ---------- */}
      <section className="pt-8">
        <div className=" mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-xl overflow-hidden">
            {features.map((item, i) => (
              <div key={i} className={`${item.bg} ${item.text} p-6 lg:p-12`}>
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="w-1 h-6 bg-[#9D2235] mr-3"></span>
                  {item.title}
                </h3>
                <p className="text-md leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTINUOUS IMAGE SCROLL ---------- */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="marquee">
            <div className="marquee-track">
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Campus"
                  className="
                    h-60 sm:h-60 md:h-84
                    w-auto
                    object-cover
                    shadow-md
                    mx-2
                    shrink-0
                  "
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      <style>
        {`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        `}
      </style>

    </>
  );
};

export default AboutUs;

