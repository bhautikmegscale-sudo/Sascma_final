


import React, { useEffect } from "react";

export default function ReturnRefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-12 mt-22 md:mt-36">
      {/* Tag */}
      <div className="flex md:justify-center justify-start items-center mb-2">
        <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
        <h4 className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
          Return, Refund, &amp; Cancellation Policy
        </h4>
        <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#213153] text-start md:text-center">
        Return, Refund, &amp; Cancellation Policy for SASCMA ERP
      </h2>

      {/* Content */}
      <div className="space-y-4 text-gray-900 text-base md:text-lg font-bold leading-relaxed">
        <p>1. Ones payment made is not refunded at any circumstances.</p>
        <p>2. Payment is not Transferable for any other Student's Fees.</p>
        <p>
          3. If Student is Left College at Half Semester then Fees is not
          Refaunded at any Circumstances.
        </p>
        <p>
          4. All fee refunds and cancellations are subject to applicable UGC
          norms and guidelines.
        </p>
      </div>
    </section>
  );
}
