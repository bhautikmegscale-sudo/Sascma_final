import React, { useState, useEffect  } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

const galleries = [
  {
    title: "Campus View",
    images: [
  "/Gallery/campus/ca9.webp",
  "/Gallery/campus/ca2.webp",
  "/Gallery/campus/ca3.webp",
  "/Gallery/campus/ca4.webp",
  "/Gallery/campus/ca5.webp",
  "/Gallery/campus/ca6.webp",
  "/Gallery/campus/ca7.webp",
  "/Gallery/campus/ca8.webp",
  "/Gallery/campus/ca1.webp",
],
  },
  {
    title: "Computer Lab",
    images: ["/l2.webp","/Gallery/lab/la1.webp", "/Gallery/lab/la2.webp", "/Gallery/lab/la3.webp", "/Gallery/lab/la4.webp"],
  },
  {
    title: "Classrooms",
    images: ["/c1.webp", "/c2.webp", "/c3.webp", 
      "/c4.webp", "/c5.webp", "/c6.webp", "/c7.webp", ],
  },
  {
    title: "Library",
    images: ["/l1.webp", "/Gallery/library/li1.webp", "/Gallery/library/li2.webp", "/Gallery/library/li3.webp", 
      "/Gallery/library/li4.webp", "/Gallery/library/li5.webp"],
  },
  {
    title: "Spardh",
    images: ["/Gallery/spardh/s19.webp", "/Gallery/spardh/s2.webp", "/Gallery/spardh/s3.webp", "/Gallery/spardh/s4.webp", 
      "/Gallery/spardh/s5.webp", "/Gallery/spardh/s6.webp", "/Gallery/spardh/s7.webp", "/Gallery/spardh/s8.webp", 
      "/Gallery/spardh/s9.webp", "/Gallery/spardh/s10.webp", "/Gallery/spardh/s11.webp", "/Gallery/spardh/s12.webp", 
      "/Gallery/spardh/s13.webp", "/Gallery/spardh/s14.webp", "/Gallery/spardh/s15.webp", "/Gallery/spardh/s16.webp", 
      "/Gallery/spardh/s17.webp", "/Gallery/spardh/s18.webp", "/Gallery/spardh/s1.webp"],
  },
  // {
  //   title: "Navrang",
  //   images: ["/events/e1.webp"],
  // },
  // {
  //   title: "National Festivals",
  //   images: ["/events/f1.webp"],
  // },
  // {
  //   title: "Annual Function",
  //   images: ["/events/a1.webp"],
  // },
  // {
  //   title: "Navratri",
  //   images: ["/events/n1.webp"],
  // },
  // {
  //   title: "Sports Day",
  //   images: ["/sports/s2.webp"],
  // },
];

export default function Gallery() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (idx) => {
    setActiveGallery(idx);
    setActiveIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setActiveIndex(0);
  };

  const images =
    activeGallery !== null ? galleries[activeGallery].images : [];

    useEffect(() => {
  if (activeGallery !== null) {
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
  } else {
    document.body.style.overflow = "auto";
    document.body.style.touchAction = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
    document.body.style.touchAction = "auto";
  };
}, [activeGallery]);


  return (
    <section className="mt-30 lg:mt-50 pb-8 md:pb-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="flex justify-center items-center mb-2">
          <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
          <h4 className="text-sm uppercase tracking-widest text-gray-500">
            Campus Gallery
          </h4>
          <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          A Glimpse of Our Campus Life
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-6 md:mb-12">
          Experience the vibrant atmosphere and rich academic culture of SASCMA.
        </p>

        {/* MAIN GRID (UNCHANGED UI) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {galleries.map((gallery, idx) => (
            <div
              key={idx}
              onClick={() => openGallery(idx)}
              className="relative cursor-pointer shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={gallery.images[0]}
                alt={gallery.title}
                className="w-full h-70 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#213153cc] to-transparent p-3">
                <p className="text-white text-lg font-semibold">
                  {gallery.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeGallery !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={closeGallery}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={images[activeIndex]}
              alt="Gallery"
              className="w-full h-[45vh] md:h-[60vh] lg:h-[80vh] rounded-lg"
            />

            {/* Title */}
            <p className="text-center text-white mt-3 text-xl font-semibold">
              {galleries[activeGallery].title}
            </p>

            {/* Close */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4
             w-10 h-10 flex items-center justify-center
             rounded-full bg-black/70 text-white text-2xl
             hover:bg-black transition"
            >
              <IoClose size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + images.length) % images.length
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2
             w-12 h-12 flex items-center justify-center
             rounded-full bg-black/60 text-white text-3xl
             hover:bg-black/80 transition"
            >
              <IoChevronBack size={28} />
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setActiveIndex((activeIndex + 1) % images.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2
             w-12 h-12 flex items-center justify-center
             rounded-full bg-black/60 text-white text-3xl
             hover:bg-black/80 transition"
            >
              <IoChevronForward size={28} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-5">
              {images.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    i === activeIndex ? "bg-white" : "bg-gray-500"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
