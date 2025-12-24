import React, { useEffect, useRef, useState } from "react";

const faculty = [
  { name: "Dr. Bhumi Desai", role: "Vice-Principal", image: "/Astaff/p4.webp" },
  { name: "Dr. Ashish Desai", role: "Principal", image: "/Astaff/p1.webp" },
  { name: "Ms. Dhyani Vashi", role: "Coordinator", image: "/Astaff/p5.webp" },
  { name: "Dr. Hemang Desai", role: "Coordinator", image: "/Astaff/p3.webp" },
  { name: "Dr. Dilshad Patel", role: "Coordinator", image: "/Astaff/p7.webp" },
  { name: "Dr. Shalini Mali", role: "Coordinator", image: "/Astaff/p6.webp" },
  { name: "Dr. Heta Desai", role: "Coordinator", image: "/Astaff/p2.webp" },
  { name: "Dr. Chandani Desai", role: "Coordinator", image: "/Astaff/p8.webp" },
];

// Only double for infinite loop (not triple ❌)
const slides = [...faculty, ...faculty];

export default function Faculty() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const startX = useRef(0);

  const [index, setIndex] = useState(faculty.length);
  const [hover, setHover] = useState(false);
  const [cardWidth, setCardWidth] = useState(324);

  // RESPONSIVE WIDTH
  useEffect(() => {
    const updateWidth = () => {
      setCardWidth(window.innerWidth < 768 ? window.innerWidth - 48 : 324);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    if (hover) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, [hover]);

  // SLIDE TRANSFORM
  useEffect(() => {
    const slider = sliderRef.current;
    slider.style.transition = "transform 0.6s ease";
    slider.style.transform = `translateX(-${index * cardWidth}px)`;

    // Infinite reset
    if (index >= faculty.length * 2) {
      setTimeout(() => {
        slider.style.transition = "none";
        setIndex(faculty.length);
      }, 600);
    }

    if (index < faculty.length) {
      setTimeout(() => {
        slider.style.transition = "none";
        setIndex(faculty.length * 2 - 1);
      }, 600);
    }
  }, [index, cardWidth]);

  // SWIPE SUPPORT
  const touchStart = (e) => (startX.current = e.touches[0].clientX);
  const touchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 60) setIndex((i) => i + 1);
    if (diff < -60) setIndex((i) => i - 1);
  };

  // ⭐ LOAD ONLY NEARBY IMAGES ⭐
  const shouldLoadImage = (i) => Math.abs(i - index) <= 2;

  const activeDot =
    (index - faculty.length + faculty.length) % faculty.length;

  return (
    <section className="bg-linear-to-b from-[#eef2ff] to-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-start lg:justify-center mb-4"> 
          <span className="w-10 h-0.5 bg-red-700 mr-3"></span> 
          <h4 className="text-sm uppercase tracking-widest text-gray-500"> Our Faculty </h4> 
          <span className="w-10 h-0.5 bg-red-700 ml-3"></span> 
          </div> 
          <h1 className="text-start text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:text-center">
             Meet our experienced and dedicated faculty members 
          </h1> 

        <div
          className="relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex"
              onTouchStart={touchStart}
              onTouchEnd={touchEnd}
            >
              {slides.map((item, i) => (
                <div
                  key={i}
                  style={{ minWidth: cardWidth }}
                  className="rounded-lg shadow-xl transition-all md:mx-3 mx-1"
                >
                  <div className="aspect-3/4 overflow-hidden rounded-t-2xl">
                    {shouldLoadImage(i) ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        decoding="async"
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200 animate-pulse" />
                    )}
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={() => setIndex((i) => i - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow"
          >
            ‹
          </button>

          <button
            onClick={() => setIndex((i) => i + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow"
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {faculty.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(faculty.length + i)}
              className={`h-3 rounded-full transition-all ${
                activeDot === i ? "w-8 bg-red-700" : "w-3 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
