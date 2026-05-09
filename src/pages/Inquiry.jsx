import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Percent,
  GraduationCap,
} from "lucide-react";
import toast from "react-hot-toast";

const courseOptions = [
  "BBA - Regular",
  "BBA - Digital Marketing",
  "BBA - Foreign Trade",
  "BCA - Regular",
  "BCA - AI",
  "BCA - CS",
  "B.Com - Regular",
  "M.Com",
  "MSc IT",
  "BSc - DS",
  "MA",
];

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    area: "",
    percentage12: "",
    courses: [],
  });

  const [submitting, setSubmitting] = useState(false);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= COURSE SELECT ================= */

  const handleCourseChange = (course) => {
    setFormData((prev) => ({
      ...prev,
      courses: prev.courses.includes(course)
        ? prev.courses.filter((c) => c !== course)
        : [...prev.courses, course],
    }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const payload = { ...formData };

      console.log("INQUIRY PAYLOAD:", payload);

      await fetch("https://sascma.ac.in:8443/api/v1/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          dbname: "dbfrontcms",
        },
        body: JSON.stringify(payload),
      });

      toast.success("Inquiry submitted successfully!");

      setFormData({
        name: "",
        mobileNumber: "",
        email: "",
        area: "",
        percentage12: "",
        courses: [],
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen pt-20 md:pt-30 pb-16">
      {/* ================= HEADER ================= */}

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
        {/* <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="w-12 h-[2px] bg-[#9D2235] mr-3"></span>

            <h4 className="uppercase tracking-[4px] text-sm text-gray-500 font-semibold">
              Admission Assistance
            </h4>

            <span className="w-12 h-[2px] bg-[#9D2235] ml-3"></span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#213153] mb-4">
            Admission Inquiry Form
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Begin your academic journey with SASCMA. Fill in your details and
            our admission team will connect with you for guidance and support.
          </p>
        </div> */}
      </div>

      {/* ================= FORM ================= */}

      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >
          {/* TOP STRIP */}

          <div className="bg-[#213153] px-4 md:px-8 py-3 md:py-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Admission Assistance
            </h2>

            <p className="text-white/80 mt-2">
              Fill all required information carefully.
            </p>
          </div>

          {/* FORM BODY */}

          <form
            onSubmit={handleSubmit}
            className="p-4 md:p-10 space-y-8"
          >
            {/* BASIC DETAILS */}

            <div>
              <h3 className="text-xl font-semibold text-[#213153] mb-3 md:mb-6">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                {/* NAME */}

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
                    />
                  </div>
                </div>

                {/* MOBILE */}

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Mobile Number
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

                    <input
                      type="tel"
                      name="mobileNumber"
                      required
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
                    />
                  </div>
                </div>

                {/* EMAIL */}

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
                    />
                  </div>
                </div>

                {/* AREA */}

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Area / City
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="Enter your area"
                      className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
                    />
                  </div>
                </div>

                {/* PERCENTAGE */}

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    12th Percentage
                  </label>

                  <div className="relative">
                    <Percent className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      name="percentage12"
                      required
                      value={formData.percentage12}
                      onChange={handleChange}
                      placeholder="Enter 12th percentage"
                      className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* COURSES */}

            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-[#9D2235]" />

                <h3 className="text-xl font-semibold text-[#213153]">
                  Select Interested Courses
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {courseOptions.map((course, index) => (
                  <label
                    key={index}
                    className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition-all duration-200
                    ${
                      formData.courses.includes(course)
                        ? "bg-[#9D2235] text-white border-[#9D2235]"
                        : "bg-white hover:border-[#9D2235] border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.courses.includes(course)}
                      onChange={() => handleCourseChange(course)}
                      className="w-4 h-4 accent-[#9D2235]"
                    />

                    <span className="text-sm font-medium">{course}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SUBMIT */}

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full md:w-auto bg-[#9D2235] hover:bg-[#7d1b2b] text-white font-semibold px-10 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Admission Inquiry"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Percent,
//   GraduationCap,
// } from "lucide-react";

// const courseOptions = [
//   "BBA - Regular",
//   "BBA - Digital Marketing",
//   "BBA - Foreign Trade",
//   "BCA - Regular",
//   "BCA - AI",
//   "BCA - CS",
//   "B.Com - Regular",
//   "M.Com",
//   "MSc IT",
//   "BSc - DS",
//   "MA",
// ];

// export default function InquiryForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobileNumber: "",
//     email: "",
//     area: "",
//     percentage12: "",
//     courses: [],
//   });

//   const [submitting, setSubmitting] = useState(false);

//   /* ================= HANDLE CHANGE ================= */

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   /* ================= COURSE SELECT ================= */

//   const handleCourseChange = (course) => {
//     setFormData((prev) => ({
//       ...prev,
//       courses: prev.courses.includes(course)
//         ? prev.courses.filter((c) => c !== course)
//         : [...prev.courses, course],
//     }));
//   };

//   /* ================= SUBMIT ================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setSubmitting(true);

//       const payload = { ...formData };

//       console.log("INQUIRY PAYLOAD:", payload);

//       await fetch("https://sascma.ac.in:8443/api/v1/queries", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           dbname: "dbfrontcms",
//         },
//         body: JSON.stringify(payload),
//       });

//       alert("Inquiry submitted successfully!");

//       setFormData({
//         name: "",
//         mobileNumber: "",
//         email: "",
//         area: "",
//         percentage12: "",
//         courses: [],
//       });
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-[#f8f8f8] min-h-screen pt-20 md:pt-30 pb-16">
//       {/* ================= HEADER ================= */}

//       <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
//         {/* <div className="text-center">
//           <div className="flex justify-center items-center mb-4">
//             <span className="w-12 h-[2px] bg-[#9D2235] mr-3"></span>

//             <h4 className="uppercase tracking-[4px] text-sm text-gray-500 font-semibold">
//               Admission Assistance
//             </h4>

//             <span className="w-12 h-[2px] bg-[#9D2235] ml-3"></span>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold text-[#213153] mb-4">
//             Admission Inquiry Form
//           </h1>

//           <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
//             Begin your academic journey with SASCMA. Fill in your details and
//             our admission team will connect with you for guidance and support.
//           </p>
//         </div> */}
//       </div>

//       {/* ================= FORM ================= */}

//       <div className="max-w-5xl mx-auto px-4 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
//         >
//           {/* TOP STRIP */}

//           <div className="bg-[#213153] px-4 md:px-8 py-3 md:py-6">
//             <h2 className="text-2xl md:text-3xl font-bold text-white">
//               Admission Assistance
//             </h2>

//             <p className="text-white/80 mt-2">
//               Fill all required information carefully.
//             </p>
//           </div>

//           {/* FORM BODY */}

//           <form
//             onSubmit={handleSubmit}
//             className="p-4 md:p-10 space-y-8"
//           >
//             {/* BASIC DETAILS */}

//             <div>
//               <h3 className="text-xl font-semibold text-[#213153] mb-3 md:mb-6">
//                 Personal Information
//               </h3>

//               <div className="grid md:grid-cols-2 gap-5">
//                 {/* NAME */}

//                 <div>
//                   <label className="text-sm font-medium text-gray-700 mb-2 block">
//                     Full Name
//                   </label>

//                   <div className="relative">
//                     <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Enter full name"
//                       className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
//                     />
//                   </div>
//                 </div>

//                 {/* MOBILE */}

//                 <div>
//                   <label className="text-sm font-medium text-gray-700 mb-2 block">
//                     Mobile Number
//                   </label>

//                   <div className="relative">
//                     <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

//                     <input
//                       type="tel"
//                       name="mobileNumber"
//                       required
//                       value={formData.mobileNumber}
//                       onChange={handleChange}
//                       placeholder="Enter mobile number"
//                       className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
//                     />
//                   </div>
//                 </div>

//                 {/* EMAIL */}

//                 <div>
//                   <label className="text-sm font-medium text-gray-700 mb-2 block">
//                     Email Address
//                   </label>

//                   <div className="relative">
//                     <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Enter email address"
//                       className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
//                     />
//                   </div>
//                 </div>

//                 {/* AREA */}

//                 <div>
//                   <label className="text-sm font-medium text-gray-700 mb-2 block">
//                     Area / City
//                   </label>

//                   <div className="relative">
//                     <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

//                     <input
//                       type="text"
//                       name="area"
//                       required
//                       value={formData.area}
//                       onChange={handleChange}
//                       placeholder="Enter your area"
//                       className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
//                     />
//                   </div>
//                 </div>

//                 {/* PERCENTAGE */}

//                 <div className="md:col-span-2">
//                   <label className="text-sm font-medium text-gray-700 mb-2 block">
//                     12th Percentage
//                   </label>

//                   <div className="relative">
//                     <Percent className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

//                     <input
//                       type="text"
//                       name="percentage12"
//                       required
//                       value={formData.percentage12}
//                       onChange={handleChange}
//                       placeholder="Enter 12th percentage"
//                       className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D2235]"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* COURSES */}

//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                 <GraduationCap className="w-6 h-6 text-[#9D2235]" />

//                 <h3 className="text-xl font-semibold text-[#213153]">
//                   Select Interested Courses
//                 </h3>
//               </div>

//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {courseOptions.map((course, index) => (
//                   <label
//                     key={index}
//                     className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition-all duration-200
//                     ${
//                       formData.courses.includes(course)
//                         ? "bg-[#9D2235] text-white border-[#9D2235]"
//                         : "bg-white hover:border-[#9D2235] border-gray-300"
//                     }`}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={formData.courses.includes(course)}
//                       onChange={() => handleCourseChange(course)}
//                       className="w-4 h-4 accent-[#9D2235]"
//                     />

//                     <span className="text-sm font-medium">{course}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* SUBMIT */}

//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full md:w-auto bg-[#9D2235] hover:bg-[#7d1b2b] text-white font-semibold px-10 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-60"
//               >
//                 {submitting ? "Submitting..." : "Submit Admission Inquiry"}
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }