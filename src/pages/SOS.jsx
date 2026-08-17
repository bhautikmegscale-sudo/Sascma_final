import React from 'react';

const SOS = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-46 mb-16 min-h-screen">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-3">
          <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
          <h4 className="text-xs sm:text-sm uppercase tracking-widest text-gray-500">
            Emergency Contacts
          </h4>
          <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#213153] mb-3 leading-tight">
          <span role="img" aria-label="sos" className="mr-2 inline-block">🆘</span> 
          Mental Health & Crisis Helplines — India
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          You are not alone. Please reach out to these contacts for support or email us at <a href="mailto:info@sascma.ac.in" className="text-[#9D2235] hover:underline font-semibold">info@sascma.ac.in</a>.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* 24/7 Services */}
        <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 lg:p-8 border-t-4 border-[#9D2235] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1">
          <h2 className="text-xl lg:text-2xl font-bold mb-6 text-[#213153] flex items-center gap-3">
            <span className="bg-[#9D2235]/10 p-2 rounded-full">
              <svg className="w-5 h-5 text-[#9D2235]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </span>
            24/7 Services
          </h2>
          <ul className="space-y-4">
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">Tele-MANAS (National)</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:14416" className="hover:underline">14416</a> / <a href="tel:18008914416" className="hover:underline">18008914416</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">KIRAN (Govt)</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:18005990019" className="hover:underline">18005990019</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">Vandrevala Foundation</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:+919999666555" className="hover:underline">+91 99996 66555</a> / <a href="tel:18602662345" className="hover:underline">18602662345</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">AASRA</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:02227546669" className="hover:underline">02227546669</a> / <a href="tel:+919820466726" className="hover:underline">+91 98204 66726</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">iCall (TISS)</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:9152987821" className="hover:underline">91529 87821</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">1Life</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:7893078930" className="hover:underline">78930 78930</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">Iris Knowledge Foundation</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:18004198202" className="hover:underline">18004198202</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">MPower</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:18001208200" className="hover:underline">18001208200</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">Fortis Stress Helpline</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:+918376804102" className="hover:underline">+91 83768 04102</a>
              </span>
            </li>
          </ul>
        </div>

        {/* Limited Hours */}
        <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 lg:p-8 border-t-4 border-[#e67e22] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1">
          <h2 className="text-xl lg:text-2xl font-bold mb-6 text-[#213153] flex items-center gap-3">
            <span className="bg-[#e67e22]/10 p-2 rounded-full">
              <svg className="w-5 h-5 text-[#e67e22]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </span>
            Limited Hours
          </h2>
          <ul className="space-y-4">
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-end mb-1">
                <span className="font-semibold text-gray-700 text-sm">Voice That Cares</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">(9 AM–9 PM)</span>
              </div>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:8448844845" className="hover:underline">84488 44845</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-end mb-1">
                <span className="font-semibold text-gray-700 text-sm">Roshni Trust, Hyderabad</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">(11 AM–9 PM)</span>
              </div>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:+918142020033" className="hover:underline">+91 81420 20033</a> / <a href="tel:8142020044" className="hover:underline">81420 20044</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-end mb-1">
                <span className="font-semibold text-gray-700 text-sm">Lifeline Foundation, Kolkata</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">(10 AM–10 PM)</span>
              </div>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:+919163940404" className="hover:underline">+91 91639 40404</a> / <a href="tel:9088030303" className="hover:underline">90880 30303</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-end mb-1">
                <span className="font-semibold text-gray-700 text-sm">Connecting Trust, Pune</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">(12 PM–8 PM)</span>
              </div>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:+919922001122" className="hover:underline">+91 99220 01122</a> / <a href="tel:9922004305" className="hover:underline">99220 04305</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-end mb-1">
                <span className="font-semibold text-gray-700 text-sm">Sneha, Chennai</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">(8 AM–10 PM)</span>
              </div>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:04424640050" className="hover:underline">04424640050</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-end mb-1">
                <span className="font-semibold text-gray-700 text-sm">Sumaitri, Delhi</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">(2 PM–10 PM, weekdays)</span>
              </div>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:01123389090" className="hover:underline">01123389090</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-end mb-1">
                <span className="font-semibold text-gray-700 text-sm">Parivarthan, Bengaluru</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">(Mon–Fri, 4 PM–10 PM)</span>
              </div>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:+917676602602" className="hover:underline">+91 76766 02602</a>
              </span>
            </li>
          </ul>
        </div>

        {/* Specialised */}
        <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 lg:p-8 border-t-4 border-[#2980b9] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1">
          <h2 className="text-xl lg:text-2xl font-bold mb-6 text-[#213153] flex items-center gap-3">
            <span className="bg-[#2980b9]/10 p-2 rounded-full">
              <svg className="w-5 h-5 text-[#2980b9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </span>
            Specialised
          </h2>
          <ul className="space-y-4">
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">Childline (minors)</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:1098" className="hover:underline">1098</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">Women Helpline</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:181" className="hover:underline">181</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">NIMHANS</span>
              <span className="text-[#9D2235] font-bold">
                <a href="tel:08046110007" className="hover:underline">08046110007</a>
              </span>
            </li>
            
            <li className="flex flex-col border-b border-gray-100 pb-3 pt-2 mt-2 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">National Emergency</span>
              <span className="text-[#213153] font-bold">
                <a href="tel:112" className="hover:underline">112</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">Police</span>
              <span className="text-[#213153] font-bold">
                <a href="tel:100" className="hover:underline">100</a>
              </span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-semibold text-gray-700 text-sm mb-1">Ambulance</span>
              <span className="text-[#213153] font-bold">
                <a href="tel:108" className="hover:underline">108</a>
              </span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default SOS;
