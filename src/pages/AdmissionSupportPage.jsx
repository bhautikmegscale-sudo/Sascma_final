import React from "react";

export default function AdmissionSupportPage() {
    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-16">
            {/* ================= HERO ================= */}

            <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <span className="w-12 h-[2px] bg-[#9D2235] mr-3"></span>

                        <h4 className="uppercase tracking-[4px] text-sm text-gray-500 font-semibold">
                            Admission Support
                        </h4>

                        <span className="w-12 h-[2px] bg-[#9D2235] ml-3"></span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#213153] mb-4">
                        Start Your Journey With SASCMA
                    </h1>

                    <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
                        Get complete guidance for admission process, required documents,
                        eligibility, and course selection. Explore everything you need for
                        a smooth admission experience.
                    </p>
                </div>
            </section>

            {/* ================= VIDEO + DOCUMENTS ================= */}

            <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* ================= VIDEO SIDE ================= */}

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 flex flex-col">
                        <div className="bg-[#213153] px-6 py-5">
                            <h2 className="text-2xl font-bold text-white">
                                Admission Process Video
                            </h2>

                            <p className="text-white/80 mt-1 text-sm">
                                Watch complete admission guidance and process details.
                            </p>
                        </div>

                        <div className="p-4 md:p-6 flex-1 flex items-center">
    <div className="w-full h-full min-h-[650px] rounded-2xl overflow-hidden bg-black">
        <video
            controls
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
        >
            <source
                src="/admission/adminssion_process.mp4"
                type="video/mp4"
            />

            Your browser does not support the video tag.
        </video>
    </div>
</div>
                    </div>

                    {/* ================= DOCUMENT SIDE ================= */}

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 flex flex-col">
                        <div className="bg-[#9D2235] px-6 py-5">
                            <h2 className="text-2xl font-bold text-white">
                                Required Documents
                            </h2>

                            <p className="text-white/80 mt-1 text-sm">
                                Keep these documents ready before applying.
                            </p>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            {/* Replace image with your own */}

                            <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6">
                                <img
                                    src="/admission/WhatsApp Image 2026-05-08 at 10.59.26.jpeg"
                                    alt="Required Documents"
                                    className="w-full h-full md:h-full object-cover"
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STEPS ================= */}

            {/* <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-[#213153] rounded-3xl overflow-hidden shadow-xl px-6 md:px-10 py-10 md:py-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Admission Steps
            </h2>

            <p className="text-white/80 max-w-2xl mx-auto">
              Follow these simple steps to complete your admission process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-14 h-14 rounded-full bg-[#9D2235] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>

              <h3 className="text-lg font-bold text-[#213153] mb-2">
                Register
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Fill admission inquiry form with correct details.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-14 h-14 rounded-full bg-[#9D2235] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>

              <h3 className="text-lg font-bold text-[#213153] mb-2">
                Upload Documents
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Submit all required academic and personal documents.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-14 h-14 rounded-full bg-[#9D2235] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>

              <h3 className="text-lg font-bold text-[#213153] mb-2">
                Verification
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Admission team verifies your submitted details.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-14 h-14 rounded-full bg-[#9D2235] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>

              <h3 className="text-lg font-bold text-[#213153] mb-2">
                Confirm Admission
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Complete fee payment and confirm your seat.
              </p>
            </div>
          </div>
        </div>
      </section> */}
        </div>
    );
}
