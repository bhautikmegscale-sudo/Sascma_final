import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { admissionDocuments } from "../data/admissionDocuments";

const AdmissionPdfViewer = () => {
  const { id } = useParams();
  const document = admissionDocuments.find((item) => item.id === id);

  if (!document || !document.pdfPath) {
    return <Navigate to="/admissions" replace />;
  }

  return (
    <section className="min-h-screen bg-[#f8f8f8] px-4 pb-8 pt-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

        <div className="overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
          <iframe
            src={document.pdfPath}
            title={document.title}
            className="h-[80vh] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AdmissionPdfViewer;
