  import React from "react";

  const WelcomeSection = () => {
    return (
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center relative">
            
            {/* Left Content */}
            <div className="relative">
              {/* Decorative line */}
              <div className="flex items-center mb-4">
                <span className="w-10 h-0.5 bg-red-700 mr-3"></span>
                <h4 className="text-sm uppercase tracking-widest text-gray-500">
                  Welcome to sascma
                </h4>
                <span className="w-10 h-0.5 bg-red-700 ml-3"></span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Surat Technical Education & Research Society
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                SASCMA (STERS Arts, Science, and Commerce Management Academy) is a leading institution based in Surat, governed by The Surat Technical and Education Research Society (STERS). Established with the goal of delivering high-quality, future-ready education, SASCMA fosters academic excellence, personal growth, and professional development in a supportive and inclusive environment.
              </p>

              <p className="text-gray-600 leading-relaxed ">
                We Offer a wide range of undergraduate and post graduate programs, including BBA, BCom, BCA, BA, BSc, MCom
              </p>

            </div>

            {/* Right Images */}
            <div className="relative">
              {/* Main Image */}
              <img
                src="./l1.webp"
                alt="Library"
                className="w-full h-96 object-cover"
              />

              {/* Small Overlapping Image */}
              <img
                src="./l2.webp"
                alt="Students"
                className="hidden md:block absolute -bottom-16 -left-16 w-64 h-40 object-cover shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>
    );
  };

  export default WelcomeSection;
