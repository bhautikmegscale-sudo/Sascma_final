  import React, { useEffect, useState } from "react";
  import { motion } from "framer-motion";

  const Principle = () => {
    const messages = [
      {
        title: "Dr. Ashish Desai",
        name: "(PhD, MPhil, M.Com, B.Com)",
        role: "Principal",
        description:
          "As Principal of SASCMA College, it is my distinct pleasure to welcome you to our institute. At SASCMA, under the guidance of STERS, we pride ourselves on providing a nurturing and academically rich environment supported by excellent infrastructure. We are committed to the holistic development of our students, offering a wide array of programs, including our exciting new additions for 2025-26: MSc IT (Integrated), BSc Data Science, BA Psychology, BBA (Foreign Trade), and BCom Data Analytics. Our dedicated faculty and staff are here to guide you on your educational journey. Explore our website to discover the vibrant life at SASCMA, where learning goes beyond the classroom. We look forward to welcoming you to our community."
      },
    ];

    /* 🔹 Typing Effect Logic */
    const fullText = messages[0].title;
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
              src="https://sascma.ac.in:8443/api/v1/Uploads/media/8a50229f-931d-4d57-ae90-c63c4012a6e5.JPG"
              alt="Principal"
              className="w-full h-auto lg:h-135 object-cover rounded-3xl  border-4 border-white"
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

            {/* Content */}
            {messages.map((msg, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                
                {/* ✅ REAL Typing Effect */}
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 whitespace-nowrap">
                  {typedText}
                  {/* <span className="ml-1 border-r-2 border-gray-800 " /> */}
                </h3>

                <p className="text-gray-600 mt-1">
                  <span className="font-medium">{msg.name}</span> —{" "}
                  <span className="text-gray-400">{msg.role}</span>
                </p>

                <p className="text-gray-700 mt-4 leading-relaxed">
                  {msg.description}
                </p>
              </div>
            ))}
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
