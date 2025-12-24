import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Hide header on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topLinks = [
    {
      label: "Dumas Road, Vesu, Surat - 395007",
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: "Affiliated to Veer Narmad South Gujarat University",
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14v7"
          />
        </svg>
      ),
    },
    {
      label: "88666 61565",
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      label: "sascma@yahoo.com",
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const mainLinks = [
    {
      name: "Home",
      submenu: null,
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
      submenu: [
        { label: "About Us", link: "/about" },
        { label: "Committee", link: "/committee" },
      ],
    },
    {
      name: "Courses",
      link: "/courses",
      submenu: [
        { label: "Courses", link: "/courses" },
        { label: "B.B.A", link: "/courses/bba" },
        { label: "B.COM.", link: "/courses/bcom" },
        { label: "B.C.A", link: "/courses/bca" },
        { label: "M.COM.", link: "/courses/mcom" },
        { label: "M.SC.", link: "/courses/msc" },
        { label: "B.A.", link: "/courses/ba" },
        { label: "B.SC.", link: "/courses/bsc" },
      ],
    },
    {
      name: "Staff",
      link: "/staff/academic",
      submenu: [
        { label: "Academic Staff", link: "/staff/academic" },
        { label: "Non-Academic Staff", link: "/staff/non-academic" },
      ],
    },
    {
      name: "Gallery",
      submenu: null,
      link: "/gallery",
    },
    {
      name: "Career",
      link: "/career",
      submenu: null,
    },
  ];

  useEffect(() => {
    if (!mobileMenuOpen) {
      setActiveMenu(null);
    }
  }, [mobileMenuOpen]);


  return (
    <header className="w-full bg-[#213153] shadow-md fixed top-0 left-0 z-50 transition-transform duration-300"
      style={{ transform: showHeader ? "translateY(0)" : "translateY(-100%)" }}
    >
      {/* Top Bar */}
      <nav className="hidden lg:flex border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            {/* Only show top links on lg and up */}
            <div className="hidden lg:flex space-x-6">
              {topLinks.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center space-x-2 text-xs uppercase text-white"
                >
                  <span className="text-white">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4 relative">
            <div className="flex ">
                {/* Logo */}
                <Link
                  to="/"
                  className="flex items-center gap-4 cursor-pointer">
                  <img
                    src="/logo.webp"
                    alt="SASCMA Logo"
                    className="h-16 w-auto"
                  />

                  <div className="leading-tight">
                    <h1 className="text-[20px] font-bold tracking-wide text-gray-900">
                      SASCMA COLLEGE
                    </h1>
                    <p className="text-sm tracking-widest text-gray-500 font-semibold">
                      SINCE 1910
                    </p>
                  </div>
                </Link>


             </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 text-[#9D2235] font-medium">
              {mainLinks.map((link) => {
                const hasSubmenu = !!link.submenu;
                const isOpen = activeMenu === link.name;

                return (
                  <div
                    key={link.name}
                    className="relative"
                    // Only apply hover behavior if the menu wasn't opened by click
                    onMouseEnter={() => {
                      if (window.matchMedia("(hover: hover)").matches && !isOpen) {
                        hasSubmenu && setActiveMenu(link.name);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.matchMedia("(hover: hover)").matches && !isOpen) {
                        setActiveMenu(null);
                      }
                    }}
                  >
                    <div className="flex items-center gap-1">
                      {/* TEXT → NAVIGATE */}
                      <Link
                        to={link.link}
                        className="text-lg hover:text-[#7f1a2a] transition-colors py-2 px-1"
                      >
                        {link.name}
                      </Link>

                      {/* ARROW → TOGGLE SUBMENU */}
                      {hasSubmenu && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenu(prev =>
                              prev === link.name ? null : link.name
                            );
                          }}
                          className="p-1"
                          aria-label="Toggle submenu"
                        >
                          <svg
                            className={`h-4 w-4 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>


                    {/* Submenu */}
                    {hasSubmenu && isOpen && (
                      <div
                        className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-md border border-gray-200 z-50 overflow-hidden"
                        // Keep open when hovering over submenu itself
                        onMouseEnter={() => {
                          if (window.matchMedia("(hover: hover)").matches) {
                            setActiveMenu(link.name);
                          }
                        }}
                        onMouseLeave={() => {
                          if (window.matchMedia("(hover: hover)").matches) {
                            setActiveMenu(null);
                          }
                        }}
                      >
                        {link.submenu.map((item, index) => (
                          <a
                            key={item.label}
                            href={item.link}
                            className={`block px-6 py-3 text-gray-700 hover:bg-[#9D2235] hover:text-white transition-colors ${
                              index === 0 ? "rounded-t-md" : ""
                            } ${index === link.submenu.length - 1 ? "rounded-b-md" : ""}`}
                            onClick={() => setActiveMenu(null)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center px-3 py-2 text-[#9D2235] "
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {!mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white mb-4">
              {mainLinks.map((link) => (
                <div key={link.name} className=" hover:bg-gray-100">
                  <div className="flex items-center justify-between px-4 py-3 text-[#9D2235] font-medium">
                  {/* TEXT → NAVIGATE */}
                  <Link
                    to={link.link}
                    onClick={() => {
                      setActiveMenu(null);
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1"
                  >
                    {link.name}
                  </Link>

                  {/* ARROW → TOGGLE SUBMENU */}
                  {link.submenu && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(activeMenu === link.name ? null : link.name);
                      }}
                      className="ml-2"
                      aria-label="Toggle submenu"
                    >
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          activeMenu === link.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {/* Submenu */}
                {link.submenu && activeMenu === link.name && (
                  <div className="bg-gray-50">
                    {link.submenu.map((item) => (
                      <a
                        key={item.label}
                        href={item.link}
                        className="block px-8 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
