import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-2 sm:px-4 py-4 sm:py-6 backdrop-blur-sm overflow-y-auto"
        onClick={() => setOpen(false)}
      >
        <div
          className="relative w-full max-w-4xl rounded-xl sm:rounded-2xl bg-white p-3 sm:p-5 md:p-7 shadow-2xl my-auto"
          onClick={(event) => event.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-2 top-2 sm:right-3 sm:top-3 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black text-base sm:text-lg text-white shadow-md transition hover:scale-105"
            aria-label="Close admission popup"
          >
            ×
          </button>

          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center pr-6 sm:pr-8">
            <p className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#9D2235]">
              Admissions Open
            </p>

            <h2 className="mt-2 text-sm sm:text-lg md:text-2xl font-bold leading-snug text-black">
              🎓 Choose Your Path: Commerce, Management,
              <br className="hidden sm:block" />
              Computer Science & Arts (VNSGU)
            </h2>

            <h2 className="mt-1 text-sm sm:text-lg md:text-2xl font-bold leading-snug text-[#012a5e] animate-bounce-scale">
              Keep SASCMA - STERS
            </h2>

            {/* Search Info */}
            <div className="mt-3 text-xs sm:text-sm md:text-lg font-semibold leading-relaxed">
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-1 sm:gap-2">
                <span>For all courses search</span>

                <span className="bg-[#9D2235] text-white px-2 py-1 rounded text-[11px] sm:text-sm">
                  "SASCMA" on GCAS
                </span>
              </div>

              <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-1 sm:gap-2">
                <span>For BA & MA search</span>

                <span className="bg-[#9D2235] text-white px-2 py-1 rounded text-[11px] sm:text-sm">
                  "STERS" on GCAS
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-4 sm:mt-6 overflow-hidden rounded-md border-2 sm:border-4 border-black shadow-xl">
            <img
              src="/aboutImg/Prospectus Admissions 2026-27_page-0001_new.jpg"
              alt="SASCMA campus"
              className="w-full object-contain max-h-[220px] sm:max-h-[380px] md:max-h-[500px]"
            />
          </div>

          {/* Buttons */}
          <div className="mt-4 sm:mt-6 grid gap-3 grid-cols-1 md:grid-cols-3">
            <Link
              to="/admissions-support"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-md bg-[#9D2235] px-4 py-3 text-sm sm:text-base lg:text-lg font-semibold text-white transition hover:bg-[#7d1b2b]"
            >
              Admission Process GCAS
            </Link>

            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-md bg-[#9D2235] px-4 py-3 text-sm sm:text-base lg:text-lg font-semibold text-white transition hover:bg-[#7d1b2b]"
            >
              Admission for 2026-27
            </Link>

            <Link
              to="/inquiry"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-md bg-[#9D2235] px-4 py-3 text-sm sm:text-base lg:text-lg font-semibold text-white transition hover:bg-[#7d1b2b]"
            >
              Student Enquiry
            </Link>
          </div>
        </div>
      </div>
      <style>{`
  @keyframes bounceScale {
    0%   { transform: scale(0.95); }
    50%  { transform: scale(1.08); }
    100% { transform: scale(0.95); }
  }

  .animate-bounce-scale {
    animation: bounceScale 1.5s ease-in-out infinite;
  }
`}</style>
    </>
  );
}
