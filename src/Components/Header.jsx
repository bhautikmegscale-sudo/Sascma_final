import React, { useState, useRef, useEffect } from "react";
import { coursesData } from "../data/coursesData";
import { Link } from "react-router-dom";
const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState(null);
  const [nestedDirection, setNestedDirection] = useState({});
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
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
      link: "https://sascma.ac.in",
    },
    {
      name: "About Us",
      link: "https://sascma.ac.in/about",
      submenu: [
        { label: "About Us", link: "https://sascma.ac.in/about" },
        { label: "Trustee", link: "https://sascma.ac.in/committee" },
        { label: "Amenities", link: "https://sascma.ac.in/amenities" },
      ],
    },
    {
      name: "Courses",
      link: "https://sascma.ac.in/courses",
      submenu: [
        { label: "Courses", link: "https://sascma.ac.in/courses" },
        { label: "B.COM.", link: "https://sascma.ac.in/courses/bcom" },
        { label: "B.B.A", link: "https://sascma.ac.in/courses/bba" },
        { label: "B.C.A", link: "https://sascma.ac.in/courses/bca" },
        { label: "M.COM.", link: "https://sascma.ac.in/courses/mcom" },
        { label: "M.SC.(I.T.)", link: "https://sascma.ac.in/courses/msc" },
        { label: "B.A.(Psychology)", link: "https://sascma.ac.in/courses/ba" },
        { label: "B.SC.(Data Science)", link: "https://sascma.ac.in/courses/bsc" },
        { label: "M.A.(Psychology)", link: "https://sascma.ac.in/courses/ma" },
      ],
    },
    {
      name: "Staff",
      link: "https://sascma.ac.in/staff/academic",
      submenu: [
        {
          label: "Academic Staff",
          link: "https://sascma.ac.in/staff/academic",
          submenu: [

            { label: "B.COM.", link: "https://sascma.ac.in/staff/academic/bcom" },
            { label: "B.B.A", link: "https://sascma.ac.in/staff/academic/bba" },
            { label: "B.C.A", link: "https://sascma.ac.in/staff/academic/bca" },
            { label: "M.COM.", link: "https://sascma.ac.in/staff/academic/mcom" },
            { label: "M.SC.(I.T.)", link: "https://sascma.ac.in/staff/academic/msc" },
            { label: "B.A.(Psychology)", link: "https://sascma.ac.in/staff/academic/ba" },
            { label: "B.SC.(Data Science)", link: "https://sascma.ac.in/staff/academic/bsc" },
            { label: "M.A.(Psychology)", link: "https://sascma.ac.in/staff/academic/ma" },
          ],    
        },
        { label: "Non-Academic Staff", link: "/staff/non-academic" },
      ],
    },
    {
      name: "Accreditations",
      submenu: [
        { label: "IPD", link: `/pdf-viewer?file=${encodeURIComponent("https://sascma.ac.in/IDP/SASCMA_IDP_final.pdf")}`, newTab: false },
        { 
          label: "AICTE", 
          link: `/pdf-viewer?file=${encodeURIComponent("https://sascma.ac.in/IDP/SASCMA_IDP_final.pdf")}`,
          submenu :[
            { label: "LOA 2024-25" , link: "/pdf-viewer?file=/AICTE/LOA_Report_24-25.PDF", newTab: false },
            { label: "EOA 2025-26", link: "/pdf-viewer?file=/AICTE/EOA_Report_2025-26.PDF", newTab: false },
          ]
        },
        { label: "NIRF", link: "/pdf-viewer?file=/NIRF/NIRF-REPORT-SASCMA%20COLLEGE.pdf", newTab: false },
      ],
    },
    {
      name: "Student Corner",
      link: "/",
      submenu: [
        { label: "Notice Board", link: "/" },
        { label: "Exam Schedule", link: "/" },
        { label: "Fees Details", link: "/" },
        { label: "Admission Details", link: "/admissions" },
        { label: "Toppers Details", link: "/admissions/view/our-toppers" }
      ],
    },
    {
      name: "Alumni",
      link: "/",
      submenu: [
        { label: "Testimonials", link: "/testimonial" },
        { label: "Reviews", link: "/courses" }
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

  const shouldOpenInNewTab = (item) => {
    if (!item || !item.link) return false;
    if (item.newTab) return true;
    // Check if it's an external link to decide between <a> and <Link>
    return typeof item.link === "string" && item.link.startsWith("http");
  };


  return (
    <header className="w-full bg-[#213153] shadow-md fixed top-0 left-0 z-50 transition-transform duration-300"
      style={{ transform: showHeader ? "translateY(0)" : "translateY(-100%)" }}
    >
      {/* Top Bar */}
      <nav className="hidden lg:flex border-b border-gray-200">
        <div className="px-4 w-full">
          <div className="flex justify-between items-center h-14 gap-2">
            {/* Only show top links on lg and up */}
            <div className="hidden lg:flex gap-3 xl:gap-6 flex-wrap xl:flex-nowrap">
              {topLinks.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-1 xl:gap-2 text-[10px] xl:text-xs uppercase text-white whitespace-nowrap"
                >
                  <span className="text-white">{item.icon}</span>
                  <span className="truncate xl:truncate-none">{item.label}</span>
                </div>
              ))}
            </div>
             <div className="hidden lg:flex items-center gap-2 xl:gap-3 ml-4">
              <Link
                to="/admissions"
                className="relative overflow-hidden rounded-md inline-flex min-w-[170px] xl:min-w-[190px] items-center justify-center bg-[#9D2235] px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-bold text-white transition-all duration-300 ease-in-out group z-10 border border-[#9D2235] hover:shadow-[0_0_15px_rgba(157,34,53,0.5)] hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-[#14213d] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10 origin-center"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out -z-10"></span>
                <span className="relative z-10 tracking-wide">Admission for 2026-27</span>
              </Link>
              <a
                href="https://student.sascma.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-md inline-flex min-w-[110px] xl:min-w-[125px] items-center justify-center bg-white px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-bold text-[#14213d] transition-all duration-300 ease-in-out group z-10 border border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-[#9D2235] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10 origin-center"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#14213d]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out -z-10"></span>
                <span className="relative z-10 tracking-wide group-hover:text-white transition-colors duration-300">Student Login</span>
              </a>
              <a
                href="https://new.sascma.ac.in/raise-ticket"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-md inline-flex min-w-[90px] xl:min-w-[100px] items-center justify-center bg-transparent px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-bold text-white transition-all duration-300 ease-in-out group z-10 border border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:border-white hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-[#14213d] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10 origin-center"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out -z-10"></span>
                <span className="relative z-10 tracking-wide">Help Desk</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-2">
          <div className="flex justify-between lg:justify-around items-center py-3 md:py-4 relative gap-2">
            <div className="flex flex-shrink-0">
              {/* Logo */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
                className="flex items-center gap-1 md:gap-3 xl:gap-4 cursor-pointer">
                <img
                  src="/logo.webp"
                  alt="SASCMA Logo"
                  className="h-12 md:h-12 xl:h-16 w-auto"
                />

                <div className="leading-tight hidden sm:block">
                  <h1 className="text-sm md:text-md xl:text-[20px] font-bold tracking-wide text-gray-900 whitespace-nowrap">
                    SASCMA COLLEGE
                  </h1>
                  <p className="text-[10px] md:text-[12px] xl:text-sm tracking-widest text-gray-500 font-semibold whitespace-nowrap">
                    SINCE 1910
                  </p>
                </div>
              </a>


            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-2 xl:gap-6 text-[#9D2235] font-medium flex-wrap xl:flex-nowrap">
              {mainLinks.map((link) => {
                const hasSubmenu = !!link.submenu;
                const isOpen = activeMenu === link.name;

                return (
                  <div
                    key={link.name}
                    className="relative whitespace-nowrap"
                    // Open submenu on hover (also works on devices that support hover)
                    onMouseEnter={() => { if (!isOpen) { hasSubmenu && setActiveMenu(link.name); } }}
                    onMouseLeave={() => { if (!isOpen) { setActiveMenu(null); } }}
                  >
                    <div className="flex items-center gap-1">
                      {/* TEXT → NAVIGATE */}
                      {/* TEXT → NAVIGATE */}
                      {shouldOpenInNewTab(link) ? (
                        <a
                          href={link.link}
                          target={link.newTab ? "_blank" : undefined}
                          rel={link.newTab ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            if (link.name === "Home") {
                              e.preventDefault();
                              window.location.href = "/";
                            }
                          }}
                          className="text-sm lg:text-sm xl:text-lg hover:text-[#7f1a2a] transition-colors py-2 px-1 cursor-pointer whitespace-nowrap"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.link}
                          onClick={(e) => {
                            if (link.name === "Home") {
                              e.preventDefault();
                              window.location.href = "/";
                            }
                          }}
                          className="text-sm lg:text-sm xl:text-lg hover:text-[#7f1a2a] transition-colors py-2 px-1 cursor-pointer whitespace-nowrap"
                        >
                          {link.name}
                        </Link>
                      )}

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
                          className="p-1 cursor-pointer flex-shrink-0"
                          aria-label="Toggle submenu"
                        >
                          <svg
                            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""
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
                        className=" absolute left-0  mt-2 w-56 bg-white shadow-xl rounded-md border border-gray-200 z-50"
                        // Keep open when hovering over submenu itself
                        onMouseEnter={() => { setActiveMenu(link.name); }}
                        onMouseLeave={() => { setActiveMenu(null); }}
                      >
                        {link.submenu.map((item, index) => (
                          <div
  key={item.label}
  className="relative group"
  onMouseEnter={(e) => {
    if (item.submenu) {
      setActiveSubmenuItem(item.label);

      const rect = e.currentTarget.getBoundingClientRect();
      const spaceRight = window.innerWidth - rect.right;

      setNestedDirection((prev) => ({
        ...prev,
        [item.label]: spaceRight < 212 ? "left" : "right",
      }));
    }
  }}
  onMouseLeave={(e) => {
    // check if mouse moved into nested submenu
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setActiveSubmenuItem(null);
    }
  }}
>
                            {shouldOpenInNewTab(item) ? (
                              <a
                                href={item.link}
                                target={item.newTab ? "_blank" : undefined}
                                rel={item.newTab ? "noopener noreferrer" : undefined}
                                className={`cursor-pointer flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-[#9D2235] hover:text-white transition-colors ${index === 0 ? "rounded-t-md" : ""
                                  } ${index === link.submenu.length - 1 ? "rounded-b-md" : ""}`}
                                onClick={() => setActiveMenu(null)}
                              >
                                <span>{item.label}</span>
                                {item.submenu && (
                                  <svg className="h-4 w-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                )}
                              </a>
                            ) : (
                              <Link
                                to={item.link}
                                className={`cursor-pointer flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-[#9D2235] hover:text-white transition-colors ${index === 0 ? "rounded-t-md" : ""
                                  } ${index === link.submenu.length - 1 ? "rounded-b-md" : ""}`}
                                onClick={() => setActiveMenu(null)}
                              >
                                <span>{item.label}</span>
                                {item.submenu && (
                                  <svg className="h-4 w-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                )}
                              </Link>
                            )}

                            {/* Nested submenu for items that have their own submenu (e.g. Academic Staff → courses) */}
                            {item.submenu && activeSubmenuItem === item.label && (
                              <div className={`absolute top-0 w-52 bg-white shadow-xl rounded-md border border-gray-200 z-50 overflow-hidden ${nestedDirection[item.label] === 'right' ? 'left-full ml-1' : '-left-53'}`}>
                                {item.submenu.map((sub) => (
                                  shouldOpenInNewTab(sub) ? (
                                    <a
                                      key={sub.label}
                                      href={sub.link}
                                      target={sub.newTab ? "_blank" : undefined}
                                      rel={sub.newTab ? "noopener noreferrer" : undefined}
                                      className="block px-4 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
                                      onClick={() => setActiveMenu(null)}
                                    >
                                      {sub.label}
                                    </a>
                                  ) : (
                                    <Link
                                      key={sub.label}
                                      to={sub.link}
                                      className="block px-4 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
                                      onClick={() => setActiveMenu(null)}
                                    >
                                      {sub.label}
                                    </Link>
                                  )
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Desktop Admission Button */}
           


            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center px-1 py-2 text-[#9D2235] "
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
                    {/* TEXT → NAVIGATE (mobile: open submenu instead of navigating when submenu exists) */}
                    {link.submenu ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu(prev => prev === link.name ? null : link.name);
                          // close any open nested submenu when switching top-level menu
                          setMobileOpenSubmenu(null);
                        }}
                        className="flex-1 text-left"
                      >
                        {link.name}
                      </button>
                    ) : shouldOpenInNewTab(link) ? (
                      <a
                        href={link.link}
                        target={link.newTab ? "_blank" : undefined}
                        rel={link.newTab ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          setActiveMenu(null);
                          setMobileMenuOpen(false);
                          if (link.name === "Home") {
                            e.preventDefault();
                            window.location.href = "/";
                          }
                        }}
                        className="flex-1"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.link}
                        onClick={(e) => {
                          setActiveMenu(null);
                          setMobileMenuOpen(false);
                          if (link.name === "Home") {
                            e.preventDefault();
                            window.location.href = "/";
                          }
                        }}
                        className="flex-1"
                      >
                        {link.name}
                      </Link>
                    )}

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
                          className={`h-5 w-5 transition-transform ${activeMenu === link.name ? "rotate-180" : ""
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
                        <div key={item.label}>
                          {item.submenu ? (
                            <div>
                              <button
                                onClick={() => setMobileOpenSubmenu(prev => prev === item.label ? null : item.label)}
                                className="w-full flex items-center justify-between text-left px-8 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
                              >
                                <span>{item.label}</span>
                                <svg className={`h-4 w-4 ml-2 transition-transform ${mobileOpenSubmenu === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>

                              {mobileOpenSubmenu === item.label && (
                                <div className="pl-12">
                                  {item.submenu.map((sub) => (
                                    shouldOpenInNewTab(sub) ? (
                                      <a
                                        key={sub.label}
                                        href={sub.link}
                                        target={sub.newTab ? "_blank" : undefined}
                                        rel={sub.newTab ? "noopener noreferrer" : undefined}
                                        onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
                                        className="block px-4 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
                                      >
                                        {sub.label}
                                      </a>
                                    ) : (
                                    <Link
                                        key={sub.label}
                                        to={sub.link}
                                        onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
                                        className="block px-4 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
                                      >
                                        {sub.label}
                                      </Link>
                                    )
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            shouldOpenInNewTab(item) ? (
                              <a
                                key={item.label}
                                href={item.link}
                                target={item.newTab ? "_blank" : undefined}
                                rel={item.newTab ? "noopener noreferrer" : undefined}
                                className="block px-8 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
                                onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
                              >
                                {item.label}
                              </a>
                            ) : (
                              <Link
                                key={item.label}
                                to={item.link}
                                className="block px-8 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
                                onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
                              >
                                {item.label}
                              </Link>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 py-3 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  to="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative overflow-hidden rounded-full inline-flex w-full items-center justify-center bg-[#9D2235] px-3 py-3 text-md font-semibold text-white transition-all duration-500 ease-in-out group z-10 border border-[#9D2235]"
                >
                  <span className="absolute inset-0 bg-[#14213d] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10 origin-center rounded-full"></span>
                  <span className="relative z-10">Admission for 2026-27</span>
                </Link>
                <a
                  href="https://student.sascma.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative overflow-hidden rounded-full inline-flex w-full items-center justify-center bg-[#14213d] px-3 py-3 text-md font-semibold text-white transition-all duration-500 ease-in-out group z-10 border border-[#14213d]"
                >
                  <span className="absolute inset-0 bg-[#9D2235] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10 origin-center rounded-full"></span>
                  <span className="relative z-10">Student Login</span>
                </a>
                <a
                  href="https://new.sascma.ac.in/raise-ticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative overflow-hidden rounded-full inline-flex w-full items-center justify-center bg-[#a8394b] px-3 py-3 text-md font-semibold text-white transition-all duration-500 ease-in-out group z-10 border border-[#a8394b]"
                >
                  <span className="absolute inset-0 bg-[#14213d] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out -z-10 origin-center rounded-full"></span>
                  <span className="relative z-10">Help Desk</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;










// import React, { useState, useRef, useEffect } from "react";
// import { coursesData } from "../data/coursesData";
// import { Link } from "react-router-dom";
// const Header = () => {
//   const [showHeader, setShowHeader] = useState(true);
//   const lastScrollY = useRef(0);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [activeSubmenuItem, setActiveSubmenuItem] = useState(null);
//   const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   // Hide header on scroll down
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
//         setShowHeader(false);
//       } else {
//         setShowHeader(true);
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const topLinks = [
//     {
//       label: "Dumas Road, Vesu, Surat - 395007",
//       icon: (
//         <svg
//           className="h-4 w-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//           />
//         </svg>
//       ),
//     },
//     {
//       label: "Affiliated to Veer Narmad South Gujarat University",
//       icon: (
//         <svg
//           className="h-4 w-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 14l9-5-9-5-9 5 9 5z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 14v7"
//           />
//         </svg>
//       ),
//     },
//     {
//       label: "88666 61565",
//       icon: (
//         <svg
//           className="h-4 w-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//           />
//         </svg>
//       ),
//     },
//     {
//       label: "sascma@yahoo.com",
//       icon: (
//         <svg
//           className="h-4 w-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
//           />
//         </svg>
//       ),
//     },
//   ];

//   const mainLinks = [
//     {
//       name: "Home",
//       submenu: null,
//       link: "/",
//     },
//     {
//       name: "About Us",
//       link: "/about",
//       submenu: [
//         { label: "About Us", link: "/about" },
//         { label: "Committee", link: "/committee" },
//       ],
//     },
//     {
//       name: "Courses",
//       link: "/courses",
//       submenu: [
//         { label: "Courses", link: "/courses" },
//         { label: "B.B.A", link: "/courses/bba" },
//         { label: "B.COM.", link: "/courses/bcom" },
//         { label: "B.C.A", link: "/courses/bca" },
//         { label: "M.COM.", link: "/courses/mcom" },
//         { label: "M.SC.", link: "/courses/msc" },
//         { label: "B.A.", link: "/courses/ba" },
//         { label: "B.SC.", link: "/courses/bsc" },
//       ],
//     },
//     {
//       name: "Staff",
//       link: "staff/academic",
//       submenu: [
//         {
//           label: "Academic Staff",
//           link: "/staff/academic",
//           submenu: [

//             { label: "B.B.A", link: "/staff/academic/bba" },
//             { label: "B.COM.", link: "/staff/academic/bcom" },
//             { label: "B.C.A", link: "/staff/academic/bca" },
//             { label: "M.COM.", link: "/staff/academic/mcom" },
//             { label: "M.SC.", link: "/staff/academic/msc" },
//             { label: "B.A.", link: "/staff/academic/ba" },
//             { label: "B.SC.", link: "/staff/academic/bsc" },
         
//           ],
//         },
//         { label: "Non-Academic Staff", link: "/staff/non-academic" },
//       ],
//     },
//     {
//       name: "Gallery",
//       submenu: null,
//       link: "/gallery",
//     },
//     {
//       name: "Career",
//       link: "/career",
//       submenu: null,
//     },
//   ];

//   useEffect(() => {
//     if (!mobileMenuOpen) {
//       setActiveMenu(null);
//     }
//   }, [mobileMenuOpen]);


//   return (
//     <header className="w-full bg-[#213153] shadow-md fixed top-0 left-0 z-50 transition-transform duration-300"
//       style={{ transform: showHeader ? "translateY(0)" : "translateY(-100%)" }}
//     >
//       {/* Top Bar */}
//       <nav className="hidden lg:flex border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center h-14">
//             {/* Only show top links on lg and up */}
//             <div className="hidden lg:flex space-x-6">
//               {topLinks.map((item) => (
//                 <div
//                   key={item.label}
//                   className="flex items-center space-x-2 text-xs uppercase text-white"
//                 >
//                   <span className="text-white">{item.icon}</span>
//                   <span>{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Navigation */}
//       <nav className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4 relative">
//             <div className="flex ">
//               {/* Logo */}
//               <Link
//                 to="/"
//                 className="flex items-center gap-4 cursor-pointer">
//                 <img
//                   src="/logo.webp"
//                   alt="SASCMA Logo"
//                   className="h-16 w-auto"
//                 />

//                 <div className="leading-tight">
//                   <h1 className="text-[20px] font-bold tracking-wide text-gray-900">
//                     SASCMA COLLEGE
//                   </h1>
//                   <p className="text-sm tracking-widest text-gray-500 font-semibold">
//                     SINCE 1910
//                   </p>
//                 </div>
//               </Link>


//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex space-x-8 text-[#9D2235] font-medium">
//               {mainLinks.map((link) => {
//                 const hasSubmenu = !!link.submenu;
//                 const isOpen = activeMenu === link.name;

//                 return (
//                   <div
//                     key={link.name}
//                     className="relative"
//                     // Open submenu on hover (also works on devices that support hover)
//                     onMouseEnter={() => { if (!isOpen) { hasSubmenu && setActiveMenu(link.name); } }}
//                     onMouseLeave={() => { if (!isOpen) { setActiveMenu(null); } }}
//                   >
//                     <div className="flex items-center gap-1">
//                       {/* TEXT → NAVIGATE */}
//                       <Link
//                         to={link.link}
//                         className="text-lg hover:text-[#7f1a2a] transition-colors py-2 px-1"
//                       >
//                         {link.name}
//                       </Link>

//                       {/* ARROW → TOGGLE SUBMENU */}
//                       {hasSubmenu && (
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setActiveMenu(prev =>
//                               prev === link.name ? null : link.name
//                             );
//                           }}
//                           className="p-1"
//                           aria-label="Toggle submenu"
//                         >
//                           <svg
//                             className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""
//                               }`}
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </button>
//                       )}
//                     </div>


//                     {/* Submenu */}
//                     {hasSubmenu && isOpen && (
//                       <div
//                         className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-md border border-gray-200 z-50"
//                         // Keep open when hovering over submenu itself
//                         onMouseEnter={() => { setActiveMenu(link.name); }}
//                         onMouseLeave={() => { setActiveMenu(null); }}
//                       >
//                         {link.submenu.map((item, index) => (
//                           <div
//                             key={item.label}
//                             className="relative"
//                             onMouseEnter={() => setActiveSubmenuItem(item.label)}
//                             onMouseLeave={() => setActiveSubmenuItem(null)}
//                           >
//                             <a
//                               href={item.link}
//                               className={`flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-[#9D2235] hover:text-white transition-colors ${index === 0 ? "rounded-t-md" : ""
//                                 } ${index === link.submenu.length - 1 ? "rounded-b-md" : ""}`}
//                               onClick={() => setActiveMenu(null)}
//                             >
//                               <span>{item.label}</span>
//                               {item.submenu && (
//                                 <svg className="h-4 w-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                               )}
//                             </a>

//                             {/* Nested submenu for items that have their own submenu (e.g. Academic Staff → courses) */}
//                             {item.submenu && activeSubmenuItem === item.label && (
//                               <div className="absolute left-full top-0 ml-1 w-52 bg-white shadow-xl rounded-md border border-gray-200 z-50 overflow-hidden">
//                                 {item.submenu.map((sub) => (
//                                   <a
//                                     key={sub.label}
//                                     href={sub.link}
//                                     className="block px-4 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
//                                     onClick={() => setActiveMenu(null)}
//                                   >
//                                     {sub.label}
//                                   </a>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden flex items-center px-3 py-2 text-[#9D2235] "
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {!mobileMenuOpen ? (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="lg:hidden bg-white mb-4">
//               {mainLinks.map((link) => (
//                 <div key={link.name} className=" hover:bg-gray-100">
//                   <div className="flex items-center justify-between px-4 py-3 text-[#9D2235] font-medium">
//                     {/* TEXT → NAVIGATE */}
//                     <Link
//                       to={link.link}
//                       onClick={() => {
//                         setActiveMenu(null);
//                         setMobileMenuOpen(false);
//                       }}
//                       className="flex-1"
//                     >
//                       {link.name}
//                     </Link>

//                     {/* ARROW → TOGGLE SUBMENU */}
//                     {link.submenu && (
//                       <button
//                         type="button"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setActiveMenu(activeMenu === link.name ? null : link.name);
//                         }}
//                         className="ml-2"
//                         aria-label="Toggle submenu"
//                       >
//                         <svg
//                           className={`h-5 w-5 transition-transform ${activeMenu === link.name ? "rotate-180" : ""
//                             }`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>
//                     )}
//                   </div>
//                   {/* Submenu */}
//                   {link.submenu && activeMenu === link.name && (
//                     <div className="bg-gray-50">
//                       {link.submenu.map((item) => (
//                         <div key={item.label}>
//                           {item.submenu ? (
//                             <div>
//                               <button
//                                 onClick={() => setMobileOpenSubmenu(prev => prev === item.label ? null : item.label)}
//                                 className="w-full flex items-center justify-between text-left px-8 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
//                               >
//                                 <span>{item.label}</span>
//                                 <svg className={`h-4 w-4 ml-2 transition-transform ${mobileOpenSubmenu === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                 </svg>
//                               </button>

//                               {mobileOpenSubmenu === item.label && (
//                                 <div className="pl-12">
//                                   {item.submenu.map((sub) => (
//                                     <a
//                                       key={sub.label}
//                                       href={sub.link}
//                                       onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
//                                       className="block px-4 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
//                                     >
//                                       {sub.label}
//                                     </a>
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
//                           ) : (
//                             <a
//                               key={item.label}
//                               href={item.link}
//                               className="block px-8 py-2 text-gray-700 hover:bg-[#9D2235] hover:text-white transition"
//                               onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}
//                             >
//                               {item.label}
//                             </a>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



