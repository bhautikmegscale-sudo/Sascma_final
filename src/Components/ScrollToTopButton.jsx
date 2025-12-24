import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed
        bottom-18
        right-3
        z-[99999]
        p-3
        rounded-full
        bg-[#213153]
        text-white
        shadow-2xl
        flex
        items-center
        justify-center
        hover:bg-[#1a2742]
        transition-all
        duration-300
      "
    >
       <FaArrowUp size={18} />
    </button>
  );
}
