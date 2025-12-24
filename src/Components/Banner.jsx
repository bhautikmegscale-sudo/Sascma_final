import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- BANNER DATA ---------------- */
const banners = [
  {
    desktop: "./b1.png",
    mobile: "/b1-mobile.webp",
    title: "Welcome to Our Campus",
    subtitle: "Shaping Futures with Knowledge",
  },
  {
    desktop: "./b33.png",
    mobile: "/b33-mobile.webp",
    title: "Modern Learning",
    subtitle: "Innovate • Learn • Lead",
  },
  {
    desktop: "./b44.webp",
    mobile: "/b44-mobile.webp",
    title: "Quality Education",
    subtitle: "Empowering Students for Tomorrow",
  },
];

/* ---------------- FEATURES DATA ---------------- */
const features = [
  {
    title: "Faculty",
    description:
      "Meet our expert faculty dedicated to guiding your academic journey.",
    bg: "bg-gray-100",
    text: "text-gray-800",
  },
  {
    title: "Amenities",
    description:
      "Explore campus amenities designed for comfort, learning, and growth.",
    bg: "bg-[#DBDBDB]",
    text: "text-gray-800",
  },
  {
    title: "Committees",
    description: "Explore profiles of our president and committee members.",
    bg: "bg-[#213153]",
    text: "text-white",
  },
];

/* ---------------- DEVICE DETECTION ---------------- */
const useBannerImage = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
};

/* ---------------- COMPONENT ---------------- */
export default function Banner() {
  const [index, setIndex] = useState(0);
  const isDesktop = useBannerImage();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ---------- BANNER ---------- */}
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={isDesktop ? banners[index].desktop : banners[index].mobile}
              alt="banner"
              className="h-[80vh] lg:h-full w-full"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {banners.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-8 rounded-full transition-all duration-500 ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ---------- FEATURES SECTION ---------- */}
      <section className="relative -mt-42 lg:-mt-14 z-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-xl text-start">
            {features.map((item, i) => (
              <div
                key={i}
                className={`${item.bg} ${item.text} p-5 md:p-6`}
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-1 h-6 bg-[#9D2235] mr-3"></span>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

