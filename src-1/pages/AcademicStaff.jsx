import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";

const staffData = [
  {
    id: 1,
    name: "Dr. Ashish Desai",
    designation: "Principal",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/f0c13545-5bce-4b1a-94a5-f422cebe541d.JPG",
    specialization: "Accountancy and Statistics",
    qualification: "PhD, MPhil, M.Com, B.Com",
    experience: "21 Years",
    email: "kavirashish1421@gmail.com",
    courses:["B.COM.", "M.COM.", "B.B.A.", "B.C.A.", "M.SC.", "B.A."]
  },
  {
    id: 2,
    name: "Dr. Bhumi Soham Desai",
    designation: "Vice Principal",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/9e79f859-7b89-4190-8d87-aae95ae46f64.JPG",
    specialization: "Economics",
    qualification: "B.Com., B.A., M.B.E., GSET, M.Phil., Ph.D.",
    experience: "16 Years",
    email: "bhumisdesai@gmail.com",
    courses:["B.COM.", "M.COM.", "B.B.A.", "B.C.A.", "M.SC.", "B.A."]
  },
  {
    id: 5,
    name: "Dr. Dilshad Burzin Patel",
    designation: "Coordinator",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/581ec79f-0852-4c82-94e4-8d368f0319ea.JPG",
    specialization: "Accountancy",
    qualification: "Ph.D, GSET, M.Com, B.Com",
    experience: "7 Years",
    email: "prof.dilshadpatel@gmail.com",
    courses:["B.COM."]
  },
  {
    id: 6,
    name: "Dr. Chandni Sanket Desai",
    designation: "Coordinator",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/97461799-055a-41d3-8efe-a7871cbd1ee3.JPG",
    specialization: "HR",
    qualification: "Ph.D, MHRD, LLB, B.Com",
    experience: "4 Years",
    email: "chandnidesai11@gmail.com",
    courses:["B.B.A."]
  },
   {
    id: 4,
    name: "Dr. Shalini Animeshbhai Mali",
    designation: "Coordinator",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/5ef739cc-8be5-4177-bb39-49fa4e82088b.JPG",
    specialization: "Web",
    qualification: "PhD, MCA, BCA",
    experience: "9 Years",
    email: "mali.shalini.sm@gmail.com",
    courses:["B.C.A"]
  },
    {
    id: 7,
    name: "Dr. Heta Subhashchandra Desai",
    designation: "Coordinator",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/d191e008-e546-4858-b03c-f8cd876263fb.JPG",
    specialization: "CPPM, Java, PS, Python",
    qualification: "PhD, GSET, MCA, BCA",
    experience: "8 Years",
    email: "prof.hetadesai@gmail.com",
    courses:["B.C.A"]
  },
  {
    id: 3,
    name: "Dr. Hemang Desai",
    designation: "Coordinator",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/8079761d-9251-4bc2-940b-4dd8611a51e4.JPG",
    specialization: "AI, Data Science and Programming",
    qualification: "PhD, MPhil, PGDRM, MSC ICT, BCA",
    experience: "17 Years",
    email: "hemanddesai11@gmail.com",
    courses:["M.SC."]
  },
  {
    id: 8,
    name: "Ms. Dhyani Darpan Vashi",
    designation: "Coordinator",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/ce295a97-27c4-4594-b9e2-2960818b8f84.JPG",
    specialization: "Psychology",
    qualification: "MA Psychology, BA Psychology",
    experience: "1 Year",
    email: "dhyanivashi@gmail.com",
    courses:["B.A."]
  },
  {
    id: 9,
    name: "Mr. Donga Sagar Nandlal",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/851025dc-fd9a-4bd5-a438-aa0cd0ce01b3.JPG",
    specialization: "Statistics",
    qualification: "M.Sc (Applied Statistics), BBA",
    experience: "11 Years",
    email: "sagardonga91@gmail.com",
    courses:["M.COM."]
  },
  {
    id: 10,
    name: "Mr. Maurya Jayesh Bankelal",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/201c1abf-5407-4083-b6e1-742d7cb40810.JPG",
    specialization: "Computer Science and Application",
    qualification: "BSc(CS), PGDCA, MSc(CS), UGC-NET, PhD (Pursuing)",
    experience: "2 Years",
    email: "jayeshbmaurya@gmail.com",
    courses:["M.SC."]
  },
  {
    id: 11,
    name: "Dr. Niteshkumar Gunvantbhai Patel",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/37c2f19b-2298-4e18-994c-efb8456441c9.JPG",
    specialization: "Computer Science and Application",
    qualification: "PhD, NET, GSET, MSc(IT), BSc(IT)",
    experience: "13 Years",
    email: "ngp.6686@gmail.com",
    courses:["M.SC."]
  },
  {
    id: 12,
    name: "Dr. Parimalkumar Amratbhai Patel",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/a2918d21-5378-4efb-bed8-d8d0cb2befb8.JPG",
    specialization: "Mathematics",
    qualification: "PhD, MSc, BSc (Mathematics)",
    experience: "10 Years",
    email: "parimalpatel4149@gmail.com",
    courses:["B.SC."]
  },
  {
    id: 13,
    name: "Mr. Kunal Pradeep Patwa",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/27e4d02c-b22e-4faf-bd67-75c4ef843b18.JPG",
    specialization: "Financial Management and Accountancy",
    qualification: "GSET (Commerce), M.Com, B.Com, MBA (Pursuing)",
    experience: "1 Year",
    email: "patwakunal68@live.com",
    courses:["B.COM."]
  },
  {
    id: 14,
    name: "YAASHI KARAN TAILOR",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/27e4d02c-b22e-4faf-bd67-75c4ef843b18.JPG",
    specialization: "Economics",
    qualification: "GSET, MA (Economics), PhD (Pursuing)",
    experience: "1 Year",
    email: "yaashidp3001@gmail.com",
    courses:["B.A."]
  },
  {
    id: 15,
    name: "Dr. Maheshkumar Chhogabhai Purohit",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/6a959b33-f8dd-44f6-9afd-77964689f6a8.JPG",
    specialization: "Marketing",
    qualification: "PhD (Management), MBA, BBA",
    experience: "15 Years",
    email: "maheshpurohit180@gmail.com",
    courses:["B.B.A."]
  },
  {
    id: 16,
    name: "Ms. Simran M Chhabra",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/b9a7b147-fc53-4c33-a26b-5c622e427b33.JPG",
    specialization: "Business Communication",
    qualification: "-",
    experience: "4 Years",
    email: "simran.framegallery@gmail.com",
    courses:["B.A."]
  },
  {
    id: 17,
    name: "Ms. Disha Hirenbhai Ghadiyali",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/fcecb714-7f83-4303-8be3-79e55c839ff8.JPG",
    specialization: "BKS",
    qualification: "MBA, BSc",
    experience: "4 Years",
    email: "dghadiyali9697@gmail.com",
    courses:["B.SC."]
  },
  {
    id: 18,
    name: "Mrs. Vishwa Shreyashbhai Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/3f2bfd99-67c8-43dd-9a6d-d28ef2f4aa69.JPG",
    specialization: ".NET, ASP.NET, RDBMS, OS, Computer Basics",
    qualification: "BCA, MCA, PhD (Pursuing)",
    experience: "2 Years",
    email: "vishwa322001@gmail.com",
    courses:["B.C.A"]
  },
  {
    id: 19,
    name: "Dr. Umesh Kumar Amrutlal Patel",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/27cb19e1-4e96-4c38-b407-3e9ed1c16a25.JPG",
    specialization: "Physical Education",
    qualification: "PhD, M.P.Ed, B.P.Ed, BA",
    experience: "11 Years",
    email: "athleteumesh5@gmail.com",
    courses:["B.A."]
  },
  {
    id: 20,
    name: "Mrs. Bhavini Bhaumik Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/27cb19e1-4e96-4c38-b407-3e9ed1c16a25.JPG",
    specialization: "Programming, RDBMS, Software Engineering, Web Technology",
    qualification: "MCA, BCA",
    experience: "1 Year",
    email: "bhavinivashii@gmail.com",
    courses:["B.C.A"]
  },
  {
    id: 21,
    name: "Mr. Chintan Kalpesh Modi",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/afd56b7e-e88d-4369-ac68-2c70f67beb96.JPG",
    specialization: "Commerce",
    qualification: "M.Com, MBA, MA(Eco), LLB, NET, GSET, PGDRM, PGDCSR",
    experience: "7 Years",
    email: "profchintanmodi@gmail.com",
    courses:["B.B.A."]
  },
  {
    id: 22,
    name: "Mrs. Komal Punit Champaneri",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/ddb7d860-c41b-4c38-a518-dc0f3413d628.JPG",
    specialization: "Statistics",
    qualification: "MSc (Statistics), BSc (Statistics)",
    experience: "8 Years",
    email: "champanerikomal2022@gmail.com",
     courses:["M.SC."]
  },
  {
    id: 23,
    name: "Dr. Jayshree Dinesh Narang",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/f0c9f122-760d-421f-ad29-292607a7cebf.JPG",
    specialization: "Economics",
    qualification: "PhD, M.Phil, GSET, MA, BA (Economics)",
    experience: "15 Years",
    email: "jayshreeeco@gmail.com",
    courses:["B.A."]

  },
  {
    id: 24,
    name: "Mrs. Drusya Thampi Thannikkottu",
    designation: "Faculty",
    image: "httpS://sascma.ac.in:8443/api/v1/Uploads/media/f6fb6787-4114-428a-802b-fa0c4cdebf4c.JPG",
    specialization: "Commerce / Accountancy",
    qualification: "NET JRF, M.Com, B.Com, PhD (Pursuing)",
    experience: "3 Years",
    email: "drusya4edu@gmail.com",
    courses:["B.COM."]
  },
  {
    id: 25,
    name: "Mrs. Kadam Trusha Rajendrabhai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/197ef184-d594-4e37-be19-00ce8d3bcfbf.JPG",
    specialization: "Accountancy and Commerce",
    qualification: "GSET, M.Com, MBA (Finance), B.Com, PhD (Pursuing)",
    experience: "7 Years",
    email: "trushakada228@gmail.com",
    courses:["B.B.A."]

  },
  {
    id: 26,
    name: "Mr. Devaang Omprakash Bhatt",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/31d42833-24da-4fdc-ad88-79592c5d2a46.JPG",
    specialization: "English",
    qualification: "M.Phil, MA, B.Ed, BA, PhD (Pursuing)",
    experience: "10 Years",
    email: "devaangobhatt@gmail.com",
    courses:["B.A."]
  },
  {
    id: 27,
    name: "Dr. Rency Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/9296db2a-0fdd-4151-a635-ac0c96a5cc9b.JPG",
    specialization: "Accountancy, Management",
    qualification: "PhD, M.Phil, MBA (Finance), B.Com",
    experience: "12 Years",
    email: "renudesai90@gmail.com",
    courses:["B.B.A."]
  },
  {
    id: 28,
    name: "Mrs. Unnati Nishitkumar Vashi",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/590c2915-7e14-424a-a818-8bdf2cffa497.JPG",
    specialization: "Environment",
    qualification: "B.E Electrical",
    experience: "11 Years",
    email: "vashi.unni@gmail.com",
    courses:["M.SC."]
  },
  {
    id: 29,
    name: "Mrs. Hiral Nareshbhai Shah",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/3d34980b-c790-4cb6-9457-d882e5a1e388.jpg",
    specialization: "Commerce / Accountancy",
    qualification: "B.Com, M.Com, UGC-GSET, PhD (Pursuing)",
    experience: "7 Years",
    email: "hiralshah882@gmail.com",
    courses:["B.COM."]
  },
  {
    id: 30,
    name: "Mrs. Romali Bhautik Patel",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/3a592442-8125-4679-96e2-11df063b74ac.JPG",
    specialization: "English - Communication Skills",
    qualification: "BA, MA (English), PhD (Pursuing)",
    experience: "16 Years",
    email: "romali018@gmail.com",
    courses:["B.A."]
  },
   {
    id: 31,
    name: "Dr. Dipali Atit Modi",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/739a0876-2738-4912-8939-ce782280801f.JPG",
    specialization: "Economics",
    qualification: "GSET in Economics, MBE, B.Com",
    experience: "9 Years",
    email: "modi.dipali@gmail.com",
    courses:["B.COM."]
  },
  {
    id: 32,
    name: "Mrs. Krishna Bhumit Naik",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/ad380c4d-aa11-487d-bfd1-5cf05eabdc0b.JPG",
    specialization: "HR",
    qualification: "Diploma in Computer Science Engineering, BE (Computer Science), MBA HR",
    experience: "1 Year",
    email: "krishna.desai1006@gmail.com",
    courses:["B.B.A."]
  },
  {
    id: 33,
    name: "Mrs. Patel Binalibahen Marteenkumar",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/2066d4aa-1b09-4a30-9409-2bdd6b512686.JPG",
    specialization: "Accountancy & Indian Knowledge System",
    qualification: "M.Com, B.Com, B.Ed",
    experience: "2 Years",
    email: "binalipatel35@gmail.com",
    courses:["B.COM."]  
  },
  {
    id: 34,
    name: "Bhumi Sanket Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/9383bb19-33bc-4e4e-85a8-728c28d60a7b.JPG",
    specialization: "Marketing",
    qualification: "M.Com, MBA (Marketing), B.Com",
    experience: "3 Years",
    email: "bhumidesai0385@gamil.com",
    courses:["B.B.A."]
  },
  {
    id: 35,
    name: "Ms. Kapadiya Prachi Amish Kumar",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/ca6e4c0f-83c0-4942-b196-1b219a43c993.JPG",
    specialization: "Web",
    qualification: "MCA, BCA",
    experience: "2 Years",
    email: "kapadiaprachi1920@gmail.com",
    courses:["B.C.A"]
  },
  {
    id: 36,
    name: "Ms. Dhwani Dipakkumar Patel",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/33702013-800e-4157-a892-c5d87a12f40f.JPG",
    specialization: "Banking & Financial Management",
    qualification: "M.Com (Financial & Management Accounting), B.Com, PhD (Pursuing)",
    experience: "1 Year",
    email: "pdhwani96@gmail.com",
    courses:["M.COM."]
  },
  {
    id: 37,
    name: "Mrs. Rajni Tara Singh Shekhawat",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/c7bf1b83-f516-4e03-baa6-1dbcc48c8125.JPG",
    specialization: "Economics, Law",
    qualification: "BA, LL.B, LLM",
    experience: "4 Years",
    email: "shekhawatrajni311@gmail.com",
    courses:["B.A."]
  },
  {
    id: 38,
    name: "Dr. Trusha Prakashbhai Gajjar",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/c00f9a18-f2b1-40a2-8cfb-788320a3bd8f.JPG",
    specialization: "Commerce / Accountancy",
    qualification: "B.Com, M.Com, PhD, GSET, MSc Management with Data Analytics",
    experience: "7 Years",
    email: "trushagajjar3094@gmail.com",
    courses:["B.COM."]

  },
  {
    id: 39,
    name: "Dr. Vandana Prakashbhai Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/1986f3d7-d82b-4451-a2a2-194204fad207.JPG",
    specialization: "Marketing and HR",
    qualification: "B.Com, MHRD, M.Com, PhD, GSET",
    experience: "9 Years",
    email: "vandanadesai28@gmail.com",
    courses:["B.COM."]

  },
  {
    id: 40,
    name: "Ms. Hetal Vindochandra Gundarwala",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/cd360ca7-39d0-4cd9-8f11-c8e22b6e1831.JPG",
    specialization: "Economics",
    qualification: "M.Com (Financial Management), CMA Intermediate, B.Com, PhD (Pursuing)",
    experience: "3 Years",
    email: "hetalgundarwala.sascma@gmail.com",
    courses:["M.COM."]
  },
  {
    id: 41,
    name: "Ms. Krishna Jitendrakumar Gilitwala",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/8890d28a-1fbb-4b02-acd3-aa9dac2672ac.JPG",
    specialization: "AI",
    qualification: "MCA, BCA",
    experience: "1 Year",
    email: "krishnagilitwala4550@gmail.com",
    courses:["B.C.A"]
  },
  {
    id: 42,
    name: "Mrs. Jinal Raj Sopariwala",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/6f7f3e7b-6841-4450-934d-257d3b509e5a.JPG",
    specialization: "Management",
    qualification: "MBA, B.Ed, BBA, PhD (Pursuing)",
    experience: "7 Years",
    email: "sopariwalajinal@gmail.com",
    courses:["B.B.A"]
  },
  {
    id: 43,
    name: "Minal Bhavik Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/9a4074a5-d2b5-4112-8eab-10bb3e4abdee.JPG",
    specialization: "Computer Science",
    qualification: "MSc (IT), BSc (IT)",
    experience: "4 Years",
    email: "minaln44.nm@gmail.com",
    courses:["M.SC."]
  },
  {
    id: 44,
    name: "Gargi Sohil Kapadia",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/3c2e92bf-7641-4cc1-b040-c87e4f8aa82f.JPG",
    specialization: "-",
    qualification: "B.Ed, M.Com, MBA (Pursuing)",
    experience: "1 Year",
    email: "kapadiagargi1977@gmail.com",
    courses:["B.B.A"]

  },
  {
    id: 45,
    name: "CA Abhishek Sanjeev Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/45818818-8335-4371-9de3-8226d4eebde8.JPG",
    specialization: "Finance",
    qualification: "Chartered Accountant, GSET (Management), MBA (Finance), B.Com",
    experience: "4 Years",
    email: "abhidesai2309@gmail.com",
    courses:["B.B.A"]
  },
  {
    id: 46,
    name: "Mrs. Rajul Maulik Chudawala",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/4c788ad4-ebcc-47ab-854d-c473f1b86e83.JPG",
    specialization: "Foreign Trade",
    qualification: "MBA, B.Com",
    experience: "4 Years",
    email: "rajul.shah85@gmail.com",
    courses:["B.COM."]

  },
  {
    id: 47,
    name: "Dr. Sonal Amit Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/ce4efeb4-221b-4ec3-a734-07288ac21502.JPG",
    specialization: "Libraries",
    qualification: "B.Com, BLISc, MLISc, PhD",
    experience: "11 Years",
    email: "sonaladesai02@gmail.com",
    courses:["B.COM."]
    
  },

  {
    id: 49,
    name: "Mrs. Patel Priyanka Sunil",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/2d79159d-7317-4d23-a27c-f71cf2413124.JPG",
    specialization: "Economics",
    qualification: "MBA, BA, PhD (Pursuing)",
    experience: "4 Years",
    email: "priyankapatel.sascma@gmail.com",
    courses:["B.COM."]
  },
  {
    id: 50,
    name: "Ms. Nelviz Jalejar Jivasha",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/02c256d5-678e-470e-8376-6e205459da6a.JPG",
    specialization: "Accountancy",
    qualification: "GSET, M.Com, B.Com",
    experience: "5 Years",
    email: "njivasha@gmail.com",
   courses:["B.COM."]
  },
  {
    id: 51,
    name: "Ms. Rimple Hitendra Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/2e5898b0-09bf-47eb-938c-f2d165070118.JPG",
    specialization: "Android",
    qualification: "NET, MCA, BCA",
    experience: "11 Years",
    email: "rimple.sascma@gmail.com",
    courses:["B.C.A"]
  },
  {
    id: 52,
    name: "Dr. Pooja Raghunath Negi",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/db89cfc0-ecb8-42a8-b0d5-c7df929d3228.JPG",
    specialization: "Java, CG, Python",
    qualification: "PhD, MSc ICT, BCA",
    experience: "11 Years",
    email: "pooja.sascma24@gmail.com",
    courses:["M.SC."]

  },
  {
    id: 53,
    name: "Ms. Aarti Anil Agarwal",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/17adef7e-7fab-46c2-b61c-634d11972e1f.JPG",
    specialization: "Web Designing, Data Analytics, Machine Learning",
    qualification: "NET, MCA, BCA, PhD (Pursuing)",
    experience: "4 Years",
    email: "aarti.sascma@gmail.com",
    courses:["B.C.A"]
  },
  {
    id: 54,
    name: "Mrs. Bhumiben Jigarkumar Patel",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/c9424a74-337d-42d4-966f-9d0f6b8bba20.JPG",
    specialization: "PS, Java, ASP.NET",
    qualification: "MCA, BCA",
    experience: "2 Years",
    email: "bhumi.sutaria@gmail.com",
    courses:["B.C.A"]
  },
  {
    id: 55,
    name: "Mrs. Hinal V Shah",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/45b4d86b-da51-4833-b12b-fa3e8b098ac2.JPG",
    specialization: "Computer Science",
    qualification: "MSc (IT), BSc (IT)",
    experience: "5 Years",
    email: "hinalvshah1904@gmail.com",
    courses:["M.SC."]
  },
  {
    id: 56,
    name: "Mr. Ankit Ramashre Yadav",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/0913fd9c-8e91-4a81-b128-d1d218d3a2c9.jpg",
    specialization: "Statistics",
    qualification: "M.Com (Statistics), B.Com",
    experience: "2 Years",
    email: "ankityadavr22@gmail.com",
    courses:["M.COM"]
  },
  {
    id: 57,
    name: "Mr. Mohit Bhavarlal Mistry",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/eaef762d-5f00-434c-ab7b-d38bfeaeaba0.jpg",
    specialization: "English, Linguistics and Communication Skills",
    qualification: "MA (English), BSc IT",
    experience: "4 Years",
    email: "mohitjangid9878@gmail.com",
    courses:["B.SC."]

  },
  {
    id: 58,
    name: "Ms. Kajal Ashish Desai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/06cdee81-1cc0-48c1-91d2-00c9774aabda.jpg",
    specialization: "Computer Science",
    qualification: "MSc Software Project Management",
    experience: "1 Year",
    email: "desaikajal52111@gamil.com",
    courses:["M.SC."]
  },
  {
    id: 59,
    name: "Ms. Maitry B Patel",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/e6694387-1641-44e8-97f6-b409e69d1c59.jpg",
    specialization: "English Literature, Communication Skills",
    qualification: "GSET, MA (English), BA (English), PhD (Pursuing)",
    experience: "2 Years",
    email: "maitry1698@gmail.com",
     courses:["B.A."]
  },
  {
    id: 60,
    name: "Jariwala Dhruvisha Nimishkumar",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/cbefde36-e9d6-454c-8c53-d9cd11169c11.jpg",
    specialization: "Accountancy",
    qualification: "M.Com, B.Com",
    experience: "Fresher",
    email: "dhruvishajariwala22@gmail.com",
   courses:["B.COM."]
  },
  {
    id: 61,
    name: "Devanshi Jayeshkumar Parekh",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/6dfa5f8d-af7c-4dce-91c0-36f8e3f718ca.jpg",
    specialization: "Statistics",
    qualification: "NET, MSc (Applied Statistics), B.Com",
    experience: "4 Years",
    email: "devanshi2parekh@gmail.com",
    courses:["B.COM."]
  },
  {
    id: 62,
    name: "Vadhvaniya Hetal Rajeshbhai",
    designation: "Faculty",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/fe0a4542-338f-42b6-81a9-cd0ae3bfeb8d.jpg",
    specialization: "Business Statistics",
    qualification: "-",
    experience: "2 Years",
    email: "hetalvadhvaniya18@gmail.com",
    courses:["B.COM."]
  }
];

// Ensure every staff record has a `courses` array we can use for exact mappings later.
staffData.forEach((s) => {
  if (!Array.isArray(s.courses)) s.courses = [];
});

export default function StaffCards() {
  const { course } = useParams();

  const normalize = (s) => (s || "").toString().toLowerCase().replace(/[^a-z0-9]/g, "");
  const selected = course ? normalize(course) : null;

  const filtered = selected
    ? staffData.filter((s) => s.courses && s.courses.some((c) => normalize(c) === selected))
    : staffData;

  return (
    <div className="flex justify-center mt-30 lg:mt-50 pb-12 bg-white">
      <div className="min-h-screen  max-w-7xl px-4 lg:px-8">
        <div className="flex justify-start md:justify-center items-center mb-2">
          <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
          <h4 className="text-sm uppercase tracking-widest text-gray-500">Academic Staff</h4>
          <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
        </div>

        <h2 className="text-start md:text-center text-3xl md:text-4xl font-bold mb-6">Excellence in Teaching and Research</h2>

        <div className="grid gap-4 lg:gap-8 sm:grid-cols-3 lg:grid-cols-4 md:pt-4">
          {filtered.map((staff) => (
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
          loading="lazy"
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


