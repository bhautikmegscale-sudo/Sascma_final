import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ExternalLink, FileText, BookOpen, GraduationCap } from "lucide-react";

export default function PdfViewer() {
  const query = new URLSearchParams(useLocation().search);
  const file = query.get("file");

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mt-30 pb-8">
        {/* LEFT SIDE - PDF */}
        <div className="md:col-span-2 bg-white rounded shadow h-[90vh]">
          {file ? (
            <iframe
              src={`${file}#toolbar=1`}
              title="PDF Viewer"
              className="w-full h-full border-0"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No PDF selected
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
    </div>
  );
}
