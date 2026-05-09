import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

export default function FloatingInquiryButton() {
  return (
    <a
      href="/inquiry"
      className="fixed bottom-6 right-3 z-40 bg-[#9D2235] text-white p-3 rounded-full shadow-lg hover:bg-[#7f1c2b]"
    >
      <FaQuestionCircle size={18} />
    </a>
  );
}