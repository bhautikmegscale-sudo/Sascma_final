import React from "react";
import { useLocation, Link, Navigate, useParams } from "react-router-dom";
import { admissionDocuments } from "../data/admissionDocuments";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const AdmissionPdfViewer = () => {
  const { id } = useParams();
  const document = admissionDocuments.find((item) => item.id === id);

  if (!document || !document.pdfPath) {
    return <Navigate to="/admissions" replace />;
  }

  return (
    <section className="min-h-screen bg-[#f8f8f8] px-4 pb-8 pt-40 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-8 mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9D2235]">
            Admission Document
          </p>
          <h1 className="mt-2 text-2xl font-bold text-[#14213d] sm:text-3xl">
            {document.title}
          </h1>
        </div>

        <Link
          to="/admissions"
          className="inline-flex items-center gap-2 self-start bg-[#213153] px-5 py-3 text-white transition hover:bg-[#182540]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Documents
        </Link>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 pb-8">
        {/* <div className="overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
          <iframe
            src={document.pdfPath}
            title={document.title}
            className="h-[80vh] w-full"
          />
        </div> */}
        <div className="md:col-span-2 bg-white rounded shadow overflow-hidden">
          {document.pdfPath?.toLowerCase().endsWith(".pdf") ? (
            <iframe
              src={document.pdfPath}
              title={document.title}
              className="w-full h-[90vh] border-0"
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-100 p-4">
              <img
                src={document.pdfPath}
                alt={document.title}
                className=" w-full rounded object-fill  "
              />
            </div>
          )}
        </div>

        {/* RIGHT SIDE - USEFUL LINKS */}
        <div className="space-y-5 sticky top-24">
          {/* Useful Links */}
          <div className="bg-white rounded-xl shadow-sm ">
            <h3 className="px-4 py-3 font-semibold text-[#213153] text-[18px]">
              Useful Links
            </h3>

            <ul className="ps-2 text-sm">
              <li>
                <a
                  href="https://vnsgu.ac.in"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <FileText size={16} className="mr-2 text-[#9d2235]" />
                  VNSGU University
                </a>
              </li>

              <li>
                <Link
                  to="/"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <FileText size={16} className="mr-2 text-[#9d2235]" />
                  IQAC
                </Link>
              </li>

              <li>
                <Link
                  to={`/pdf-viewer?file=${encodeURIComponent("/NIRF/NIRF-REPORT-SASCMA COLLEGE.pdf")}`}
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <FileText size={16} className="mr-2 text-[#9d2235]" />
                  NIRF
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="bg-white rounded-xl shadow-sm ">
            <h3 className="px-4 py-3 font-semibold text-[#213153] ">Links</h3>

            <ul className="ps-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <BookOpen size={16} className="mr-2 text-[#9d2235]" />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/amenities"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <BookOpen size={16} className="mr-2 text-[#9d2235]" />
                  Amenities
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/bcom"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <GraduationCap size={16} className="mr-2 text-[#9d2235]" />
                  B.COM
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/bba"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <GraduationCap size={16} className="mr-2 text-[#9d2235]" />
                  B.B.A
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/bca"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <GraduationCap size={16} className="mr-2 text-[#9d2235]" />
                  B.C.A
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/mcom"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <GraduationCap size={16} className="mr-2 text-[#9d2235]" />
                  M.COM
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/msc"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <GraduationCap size={16} className="mr-2 text-[#9d2235]" />
                  M.SC.(I.T.)
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/ba"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <GraduationCap size={16} className="mr-2 text-[#9d2235]" />
                  B.A.(Psychology)
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/bsc"
                  className="flex items-center px-4 py-1.5 pb-4 hover:bg-gray-50 transition"
                >
                  <GraduationCap size={16} className="mr-2 text-[#9d2235]" />
                  B.SC.(Data Science)
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div className="bg-white rounded-xl shadow-sm ">
            <h3 className="px-4 py-3 font-semibold text-[#213153] ">
              Academics
            </h3>

            <ul className="ps-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <FileText size={16} className="mr-2 text-[#9d2235]" />
                  Download
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="flex items-center px-4 py-1.5 hover:bg-gray-50 transition"
                >
                  <FileText size={16} className="mr-2 text-[#9d2235]" />
                  Notice Board
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="flex items-center px-4 py-1.5 pb-4 hover:bg-gray-50 transition"
                >
                  <FileText size={16} className="mr-2 text-[#9d2235]" />
                  Exam Schedule
                </Link>
              </li>

              {/* <li>
                <Link
                  to="/"
                  className="flex items-center px-4 py-1.5 pb-4 hover:bg-gray-50 transition"
                >
                  <FileText size={16} className="mr-2 text-[#9d2235]" />
                  Online Fee Payment
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionPdfViewer;
