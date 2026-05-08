import React, { useState } from "react";
import InquiryModal from "./InquiryModal";
import { FaQuestionCircle } from "react-icons/fa";
export default function FloatingInquiryButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-3 z-40 bg-[#9D2235] text-white p-3 rounded-full shadow-lg hover:bg-[#7f1c2b]"
      >
        <FaQuestionCircle size={18}/>
      </button>

      {/* Modal */}
      <InquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
