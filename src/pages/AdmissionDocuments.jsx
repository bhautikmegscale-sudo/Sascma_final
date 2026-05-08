import React from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";
import { admissionDocuments } from "../data/admissionDocuments";

const AdmissionDocuments = () => {
  return (
    <section className="min-h-screen bg-[#f5f7fb] px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mt-12 mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9D2235]">
            Admission 2026-27
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#14213d] sm:text-5xl">
            Admission Documents
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Access admission forms, prospectus, fee structures, and important
            academic documents for the upcoming academic year.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {admissionDocuments.map((document, index) => (
            <div
              key={document.id}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* Top Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-[#9D2235]/0 via-[#9D2235]/0 to-[#14213d]/0 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Number */}
              <div className="absolute right-5 top-5 text-5xl font-black text-gray-100 transition-all duration-500 group-hover:text-[#9D2235]/10">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9D2235]/10 transition-all duration-500 group-hover:bg-[#9D2235]">
                <FileText
                  className="h-8 w-8 text-[#9D2235] transition-all duration-500 group-hover:text-white"
                  strokeWidth={1.8}
                />
              </div>

              {/* Title */}
              <div className="relative z-10">
                <h2 className=" text-xl font-bold leading-snug text-[#14213d]">
                  {document.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  Important admission document available for viewing.
                </p>
              </div>

              {/* Divider */}
              <div className="relative z-10 my-4 h-px w-full bg-gray-200" />

              {/* Button */}
              <div className="relative z-10">
                {document.pdfPath ? (
                  <Link
                    to={`/admissions/view/${document.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#9D2235] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#14213d] hover:shadow-xl"
                  >
                    View Document

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center rounded-full bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-500"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionDocuments;