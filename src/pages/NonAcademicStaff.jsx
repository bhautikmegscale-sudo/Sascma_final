import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const staffData = [
  {
    id: 1,
  name: "Patel Rakesh Ratilal",
    designation: "Administrative Staff",
   image: "/Sstaff/TDP_5444.webp",
    specialization: "-",
    qualification: "M.com (DCPA)",
    experience: "14 Years",
    email:"rakeshrnatali@gmail.com",
  },
  {
    id: 2,
    name: "Desai Bimalkumar Balvantbhai",
    designation: "Administrative Staff",
   image: "/Sstaff/TDP_5447.webp",
    specialization: "-",
    qualification: "B.com",
    experience: "20 Years",
    email:"desai.bimal1980@yahoo.com",
  },
  {
    id: 3,
    name: "Mr. Shah Nikhilesh Dineshbhai",
    designation: "Administrative Staff",
  image: "/Sstaff/TDP_5452.webp",
    specialization: "-",
    qualification: "MCA, BCA",
    experience: "-",
    email:"nikshah19@yahoo.in",
  },

  {
    id: 4,
    name: "Mrs Trivedi Rupal J",
    designation: "Administrative Staff",
   image: "/Sstaff/TDP_5598.webp",
    specialization: "-",
    qualification: "M.Com, B.Com, MBA (Pursuing)",
    experience: "3 Years",
    email:"nistha.jaimin@gmail.com",
  

  },
  {
    id: 5,
    name: "Mr. Mehul Gandhi",
    designation: "Administrative Staff",
   image: "/Sstaff/TDP_5671.webp",
    specialization: "-",
    qualification: "B.Com",
    experience: "-",
    email:"meh_janu83@yahoo.com",
  },
  {
    id: 6,
    name: "Viraj Patel",
    designation: "Administrative Staff",
   image: "/Sstaff/TDP_5673.webp",
    specialization: "-",
    qualification: " M.Com, B.Com",
    experience: "4 Years",
    email:"patelviraj4@gmail.com",
  },
 
  
];

export default function StaffCards() {
  return (  
    <div className="flex justify-center mt-30 lg:mt-50 pb-12 bg-white">
    <div className="min-h-screen  max-w-7xl px-4 lg:px-8">
      <div className="flex justify-start md:justify-center items-center mb-2">
          <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
          <h4 className="text-sm uppercase tracking-widest text-gray-500">
            Non Academic Staff
          </h4>
          <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
        </div>

        <h2 className="text-start md:text-center text-3xl md:text-4xl font-bold mb-6">
          Administrative and Support Staff
        </h2>

      <div className="grid gap-4 lg:gap-8 sm:grid-cols-3 lg:grid-cols-4 md:pt-4">
        {staffData.map((staff) => (
          <StaffCard key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
    </div>
  );
}

function StaffCard({ staff }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
     className="bg-white rounded-lg shadow-xl overflow-hidden"


    >
      <div className="aspect-3/4 overflow-hidden">
        <img
          src={staff.image}
          alt={staff.name}
          className="h-full w-full object-cover object-top"
        />
      </div>


      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-slate-800">
          {staff.name}
        </h3>
        <p className="text-slate-500 mb-2 md:mb-4">{staff.designation}</p>

        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-medium text-[#9e2335] transition"
        >
          {open ? "Hide Details" : "View More →"}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-2 md:mt-4 space-y-2 text-sm text-slate-600"
            >
              <p>
                <span className="font-semibold">Specialization:</span> {staff.specialization}
              </p>
              <p>
                <span className="font-semibold">Qualification:</span> {staff.qualification}
              </p>
              <p>
                <span className="font-semibold">Experience:</span> {staff.experience}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {staff.email}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
