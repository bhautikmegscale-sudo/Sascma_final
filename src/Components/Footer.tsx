import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      submenu: [
        { label: "Home", url: "/" },
        { label: "About Us", url: "/about" },
        { label: "Committee", url: "/committee" },
        { label: "Courses", url: "/courses" },
        { label: "Career", url: "/career" },
        { label: "Events", url: "/events" },
        { label: "Staff", url: "/staff/academic" },
      ],
    },
    {
      title: "Courses",
      submenu: [
        { label: "B.B.A", url: "/courses/bba" },
        { label: "B.COM.", url: "/courses/bcom" },
        { label: "B.C.A", url: "/courses/bca" },
        { label: "M.COM.", url: "/courses/mcom" },
        { label: "M.SC.", url: "/courses/msc" },
        { label: "B.A.", url: "/courses/ba" },
        { label: "B.SC.", url: "/courses/bsc" },
      ],
    },
  ];

  return (
    <footer className="bg-[#213153] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 border-b border-gray-600 pb-10">
          {/* Logo & Description */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 lg:w-1/2">
            <img src="/logo.webp" alt="College Logo" className="h-32 sm:h-40" />
            <div className="space-y-2 text-center">
              <p className="font-bold text-[#a8394b] text-sm">
                The Surat Technical Education & Research Society <br />
                Smt. Kalavatiben Fulchandbhai Vakharia Education Complex  
                Dumas Road, Vesu, Surat – 395007
              </p>
              <p className="text-gray-300 font-bold text-sm">
                SASCMA English Medium Commerce College & Shri Hasmukhlal Hojiwala
                College of Business Administration & Smt. Ushaben Jayvadan
                Bodawala College of Computer Application
              </p>
              <p className="font-bold text-[#a8394b] text-sm">
                Affiliated to Veer Narmad South Gujarat University
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 lg:w-1/2">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-bold mb-4 text-[#a8394b]">{section.title}</h4>
                <ul className="space-y-2 text-sm font-semibold">
                  {section.submenu.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.url}
                        className="text-gray-400 hover:text-white transition"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#a8394b]">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-semibold">
                <li>Dumas Road, Vesu</li>
                <li>Surat – 395007</li>
                <li>Phone: +91 88666 61565</li>
                <li>Email: sascma@yahoo.com</li>
              </ul>
              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-3">
                <a href="#" className="text-gray-400 border border-gray-400 hover:border-white p-1 rounded hover:text-white transition">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="text-gray-400 border border-gray-400 hover:border-white p-1 rounded hover:text-white transition">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="text-gray-400 border border-gray-400 hover:border-white p-1 rounded hover:text-white transition">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="text-gray-400 border border-gray-400 hover:border-white p-1 rounded hover:text-white transition">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="#" className="text-gray-400 border border-gray-400 hover:border-white p-1 rounded hover:text-white transition">
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <p className="text-center md:text-left">
            © 2025 SASCMA College | Proudly created by{" "}
            <a
              href="https://www.megascale.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white"
            >
              @Megascale
            </a>
          </p>
          <div className="flex items-center gap-3">
            <a href="/privacy-policy" className="hover:text-white cursor-pointer">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-of-use" className="hover:text-white cursor-pointer">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
