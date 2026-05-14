import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const staffData = [
  {
    id: 1,
    name: "Mrs Trivedi Rupal J",
    designation: "Administrative Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/8f78eb0c-4dfe-4ab0-be7d-b8bb540d6f01.JPG",
    specialization: "-",
    qualification: "M.Com, B.Com, MBA (Pursuing)",
    experience: "3 Years",
    email:"nistha.jaimin@gmail.com",
  },
  {
    id: 8,
    name: "Jinesh Shah",
    designation: "Accountant",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/ef6c131c-345d-43ad-966e-61bfb920af56.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  },
  {
    id: 3,
    name: "Mr. Mehul Gandhi",
    designation: "Administrative Staff",
   image: "https://sascma.ac.in:8443/api/v1/Uploads/media/6244d678-3460-4c9d-97ec-6410012cb742.JPG",
    specialization: "-",
    qualification: "B.Com",
    experience: "-",
    email:"meh_janu83@yahoo.com",
  },
  {
    id: 4,
    name: "Desai Bimalkumar Balvantbhai",
    designation: "Administrative Staff",
   image: "https://sascma.ac.in:8443/api/v1/Uploads/media/f66f23b1-a6e9-4a7a-a417-89828f30ac99.JPG",
    specialization: "-",
    qualification: "B.com",
    experience: "20 Years",
    email:"desai.bimal1980@yahoo.com",
  },
  {
    id: 5,
  name: "Patel Rakesh Ratilal",
    designation: "Administrative Staff",
   image: "https://sascma.ac.in:8443/api/v1/Uploads/media/d8ccd89d-3450-4c27-a408-803789e13727.JPG",
    specialization: "-",
    qualification: "M.com (DCPA)",
    experience: "14 Years",
    email:"rakeshrnatali@gmail.com",
  },  
  {
    id: 6,
    name: "Viraj Patel",
    designation: "Administrative Staff",
   image: "https://sascma.ac.in:8443/api/v1/Uploads/media/02b500e4-f001-43ad-bd80-eda1848a05fa.JPG",
    specialization: "-",
    qualification: " M.Com, B.Com",
    experience: "4 Years",
    email:"patelviraj4@gmail.com",
  },
  {
    id: 7,
    name: "Mr. Shah Nikhilesh Dineshbhai",
    designation: "Administrative Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/21d27c45-89ec-4759-a467-9a32be878244.JPG",
    specialization: "-",
    qualification: "MCA, BCA",
    experience: "-",
    email:"nikshah19@yahoo.in",
  }, 
    {
    id: 8,
    name: "Mr. Rajan Patel",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/ae372789-9224-498a-a9cd-d60d3a66fa70.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 9,
    name: "Mr. Rahul Shinde",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/595ef115-948e-4a2b-9654-80f841a36abb.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 10,
    name: "Mr. Ripal Patel",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/a82d18f2-0132-4c5f-a0cb-631784a810fb.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 11,
    name: "Mr. Amit Rathod",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/b6a3303d-dc06-488f-8d73-78f3e0197178.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 12,
    name: "Mr. Alish Patel",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/77775d8b-8e95-4b97-9fde-6422857805d3.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 13,
    name: "Mrs. Ramilaben Leelawala",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/4bb70f6c-6234-4f15-98e6-fea266ab7125.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 14,
    name: "Mr. Milan Patel",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/49dbbeb8-1d01-4728-9ff8-511146af182f.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 15,
    name: "Mr. Vinit Upadhyay",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/ae1a1a5a-d555-42cb-87e4-aa2d78c9b9bf.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 16,
    name: "Mr. Manish Patel",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/1c36a6d4-14b6-44f1-bfa6-4bd337f91481.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 17,
    name: "Jinal Shah",
    designation: "Accountant",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/a3a828fb-3659-4d61-a484-872fc919edf1.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 18,
    name: "Mr. Pratik Patel",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/4a5b87e1-7cbc-430d-9d16-0bea6e72d24f.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 19,
    name: "Mr. Dharmesh Shah",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/8223e4d3-4f11-4e78-9010-78f124d0ee07.JPG",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 20,
    name: "Mr. Henish Patel",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/3b5d4ed7-f488-46ea-acc3-99dd6c0f13fd.jpeg",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
  }, 
    {
    id: 21,
    name: "Mr. Vikas Patel",
    designation: "Support Staff",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/65c44131-37c6-4590-93f5-051dba6bb526.jpeg",
    specialization: "-",
    qualification: "-",
    experience: "-",
    email:"-",
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
