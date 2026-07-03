import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Principle = () => {
  const fullText = "Dr. Ashish K. Desai";

const qualification =
  "(PhD, MPhil, M.Com. - Accountancy, M.Com. - Statistics, B.Com)";

  /* 🔹 Typing Effect Logic */
  const fullText = "Dr. Ashish K. Desai";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 120); // typing speed

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="relative bg-linear-to-r from-gray-100 via-white to-gray-50 py-8 lg:py-12 overflow-hidden">

      {/* Floating animated blobs */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-0 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-2000"></div> */}

      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-8 relative z-10">

        {/* Principal Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img
            src="https://sascma.ac.in:8443/api/v1/Uploads/media/96eb2807-c488-4309-ad6c-2bae67da4532.jpeg"
            alt="Principal"
            className="w-full h-auto lg:h-175 object-cover  rounded-3xl border-4 border-white"
          />
        </motion.div>

        {/* Message Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="lg:w-1/2 w-full bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-2xl"
        >

          {/* Heading */}
          <div className="flex items-center mb-4">
            <span className="w-10 h-0.5 bg-red-700 mr-3"></span>
            <h4 className="text-sm uppercase tracking-widest text-gray-500">
              Principal's Message
            </h4>
            <span className="w-10 h-0.5 bg-red-700 ml-3"></span>
          </div>

<div className="flex flex-col gap-1">

  <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 whitespace-nowrap">
    {typedText}
  </h3>

  <p className="text-gray-600 mt-1">
    <span className="font-medium">
      {qualification}
    </span>{" "}
    — <span className="text-gray-400">Principal</span>
  </p>

  <div className="mt-4 space-y-5 text-gray-700 leading-relaxed text-base text-justify">

    <p>
      Education is the foundation upon which individuals build their future
      and contribute meaningfully to society. At SASCMA College, we are
      committed to creating an academic environment that nurtures knowledge,
      discipline, values, and excellence.
    </p>

    <p>
      Under the guidance of STERS Trust, the college strives to provide
      quality education through dedicated faculty, modern infrastructure,
      and a culture that encourages intellectual growth and holistic
      development. We believe that true education extends beyond academic
      achievement and helps students develop confidence, responsibility,
      leadership, and a lifelong passion for learning.
    </p>

    <p>
      Our institution continuously works towards empowering students with
      the skills, ethics, and vision required to meet the challenges of a
      dynamic and competitive world. Along with academic pursuits, students
      are encouraged to participate in cultural, social, and co-curricular
      activities that contribute to their overall personality development.
    </p>

    <p>
      At SASCMA College, our objective is not only to prepare students for
      successful careers but also to shape responsible citizens with strong
      human values and social awareness.
    </p>

    <p>
      I extend my best wishes to all students for a meaningful, enriching,
      and successful academic journey.
    </p>

    <div className="pt-2">
      <p className="font-medium">Warm regards,</p><br />
      <p className="font-semibold">Dr. Ashish Desai</p><br />
      <p>Principal</p><br />
      <p>SASCMA College</p><br />
    </div>

  </div>

</div>
        </motion.div>
      </div>

      {/* Animations */}
      {/* <style>
          {`
            @keyframes blob {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }

            @keyframes blink {
              50% { opacity: 0; }
            }
            .animate-blink {
              animation: blink 1s step-end infinite;
            }
          `}
        </style> */}
    </div>
  );
};

export default Principle;
