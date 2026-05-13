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
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-white p-4 shadow-2xl sm:p-6 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black text-lg text-white shadow-md transition hover:scale-105"
          aria-label="Close admission popup"
        >
          ×
        </button>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9D2235]">
            Admissions Open
          </p>
          <h2 className="mt-3 text-lg md:text-xl font-bold leading-snug text-black sm:text-3xl md:text-3xl">
            B.Com. (VNSGU)
            <br />
            B.B.A. &amp; B.C.A. (VNSGU &amp; AICTE Approved)
            <br />
            M.Com / Integrated MSc(IT) / BSc (Data Science) (VNSGU)
            <br />
            BA & MA (VNSGU)
          </h2>
          <div className="text-lg font-semibold">
            For all courses search{" "}
            <span className="bg-[#9D2235] text-white px-2 py-0">
              "SASCMA"  on GCAS
            </span>

            <br className="" />
            For BA & MA search{" "}
            <span className="bg-[#9D2235] text-white px-2 py-0 ">
              "STERS" on GCAS
            </span>
          </div>
        </div>

        <div className="mt-4 md:mt-6 overflow-hidden rounded-md border-4 border-black shadow-xl">
          <img
            src="/aboutImg/Prospectus Admissions 2026-27_page-0001_new.jpg"
            alt="SASCMA campus"
            className="h-[260px] w-full object-cover sm:h-[360px] md:h-[460px]"
          />
        </div>

        <div className="mt-4 md:mt-6 grid gap-4 grid-cols-1 md:grid-cols-3">
          <Link
            to="/admissions-support"
            onClick={() => setOpen(false)}
            className="inline-flex min-w-[220px] items-center justify-center bg-[#9D2235] px-3lg:px-6 py-2 lg:py-4 text-md lg:text-lg font-semibold text-white transition hover:bg-[#7d1b2b]"
          >
            Admission Process GCAS
          </Link>
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="inline-flex min-w-[220px] items-center justify-center bg-[#9D2235] px-3 lg:px-6 py-2 lg:py-4 text-md lg:text-lg font-semibold text-white transition hover:bg-[#7d1b2b]"
          >
            Admission for 2026-27
          </Link>
          <Link
            to="/inquiry"
            onClick={() => setOpen(false)}
            className="inline-flex min-w-[220px] items-center justify-center bg-[#9D2235] px-3lg:px-6 py-2 lg:py-4 text-md lg:text-lg font-semibold text-white transition hover:bg-[#7d1b2b]"
          >
            Student Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
