import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { admissionDocuments } from "../data/admissionDocuments";

const AdmissionDocuments = () => {
  return (
    <section className="min-h-screen bg-white px-4 pb-16 pt-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9D2235]">
            Admission 2026-27
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[#14213d] sm:text-4xl">
            Admission Documents
          </h1>
        </div>

        <div className="overflow-hidden border border-gray-300 bg-white">
          {admissionDocuments.map((document) => (
            <div
              key={document.id}
              className="grid min-h-24 grid-cols-[72px_1fr] border-b border-gray-300 last:border-b-0 md:grid-cols-[78px_1fr_155px]"
            >
              <div className="flex items-center justify-center border-r border-gray-300 px-3 py-5 text-[#111827]">
                <FileText className="h-6 w-6" strokeWidth={1.8} />
              </div>

              <div className="flex items-center px-4 py-0 text-lg font-semibold text-black sm:px-6">
                {document.title}
              </div>

              <div className="col-span-2 border-t border-gray-300 px-3 py-3 md:col-span-1 md:border-l md:border-t-0 md:px-2 cursor-pointer">
                {document.pdfPath ? (
                  <Link
                    to={`/admissions/view/${document.id}`}
                    className="group flex h-full min-h-16 w-full items-center justify-center bg-transparent px-4 py-0 md:min-h-[unset] cursor-pointer"
                  >
                    <span style={{ cursor: 'pointer' }} className="inline-flex min-w-[132px] items-center justify-center rounded-[2px] bg-[#ae2d35] px-8 py-4 text-2xl font-medium text-white shadow-sm transition-[border-radius,transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:scale-[1.015] group-hover:rounded-[999px] group-hover:bg-[#2d4593] group-hover:shadow-[0_12px_30px_rgba(45,69,147,0.28)] ">
                      View
                    </span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="flex h-full min-h-16 w-full items-center justify-center bg-transparent px-4 py-3 md:min-h-[unset]"
                  >
                    <span className="inline-flex min-w-[132px] items-center justify-center rounded-[2px] bg-gray-300 px-8 py-4 text-lg font-medium text-gray-600 transition-[border-radius] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      Coming Soon
                    </span>
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
