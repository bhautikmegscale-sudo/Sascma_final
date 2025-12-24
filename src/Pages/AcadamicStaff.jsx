import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const staffData = [

  {
    id: 1,
    name: "Dr. Ashish Desai",
    designation: "Principal",
    image: "/Astaff/p1.webp",
    specialization: "Accountancy and Statistics",
    qualification: "PhD, MPhil, M.Com, B.Com",
    experience: "21 Years",
    email: "kavirashish1421@gmail.com",
  },
  {
    id: 2,
    name: "Dr. Bhumi Soham Desai",
    designation: "Vice Principal",
    image: "/Astaff/p4.webp",
    specialization: "Economics",
    qualification: "B.Com., B.A., M.B.E., GSET, M.Phil., Ph.D.",
    experience: "16 Years",
    email: "bhumisdesai@gmail.com",
  },
  {
    id: 3,
    name: "Dr. Hemang Desai",
    designation: "Coordinator",
    image: "/Astaff/p3.webp",
    specialization: "AI, Data Science and Programming",
    qualification: "PhD, MPhil, PGDRM, MSC ICT, BCA",
    experience: "17 Years",
    email: "hemanddesai11@gmail.com",
  },
  {
    id: 4,
    name: "Dr. Shalini Animeshbhai Mali",
    designation: "Coordinator",
    image: "/Astaff/p6.webp",
    specialization: "Web",
    qualification: "PhD, MCA, BCA",
    experience: "9 Years",
    email: "mali.shalini.sm@gmail.com",
  },
  {
    id: 5,
    name: "Dr. Dilshad Burzin Patel",
    designation: "Coordinator",
    image: "/Astaff/p7.webp",
    specialization: "Accountancy",
    qualification: "Ph.D, GSET, M.Com, B.Com",
    experience: "7 Years",
    email: "prof.dilshadpatel@gmail.com",
  },
  {
    id: 6,
    name: "Dr. Chandni Sanket Desai",
    designation: "Coordinator",
    image: "/Astaff/p8.webp",
    specialization: "HR",
    qualification: "Ph.D, MHRD, LLB, B.Com",
    experience: "4 Years",
    email: "chandnidesai11@gmail.com",
  },
  {
    id: 7,
    name: "Dr. Heta Subhashchandra Desai",
    designation: "Coordinator",
    image: "/Astaff/p2.webp",
    specialization: "CPPM, Java, PS, Python",
    qualification: "PhD, GSET, MCA, BCA",
    experience: "8 Years",
    email: "prof.hetadesai@gmail.com",
  },
  {
    id: 8,
    name: "Ms. Dhyani Darpan Vashi",
    designation: "Coordinator",
    image: "/Astaff/p5.webp",
    specialization: "Psychology",
    qualification: "MA Psychology, BA Psychology",
    experience: "1 Year",
    email: "dhyanivashi@gmail.com",
  },
  {
    id: 9,
    name: "Mr. Donga Sagar Nandlal",
    designation: "Faculty",
    image: "/Astaff/p9.webp",
    specialization: "Statistics",
    qualification: "M.Sc (Applied Statistics), BBA",
    experience: "11 Years",
    email: "sagardonga91@gmail.com",
  },
  {
    id: 10,
    name: "Mr. Maurya Jayesh Bankelal",
    designation: "Faculty",
    image: "/Astaff/p10.webp",
    specialization: "Computer Science and Application",
    qualification: "BSc(CS), PGDCA, MSc(CS), UGC-NET, PhD (Pursuing)",
    experience: "2 Years",
    email: "jayeshbmaurya@gmail.com",
  },
  {
    id: 11,
    name: "Dr. Niteshkumar Gunvantbhai Patel",
    designation: "Faculty",
    image: "/Astaff/p11.webp",
    specialization: "Computer Science and Application",
    qualification: "PhD, NET, GSET, MSc(IT), BSc(IT)",
    experience: "13 Years",
    email: "ngp.6686@gmail.com",
  },
  {
    id: 12,
    name: "Dr. Parimalkumar Amratbhai Patel",
    designation: "Faculty",
    image: "/Astaff/p43.webp",
    specialization: "Mathematics",
    qualification: "PhD, MSc, BSc (Mathematics)",
    experience: "10 Years",
    email: "parimalpatel4149@gmail.com",
  },
  {
    id: 13,
    name: "Mr. Kunal Pradeep Patwa",
    designation: "Faculty",
    image: "/Astaff/p13.webp",
    specialization: "Financial Management and Accountancy",
    qualification: "GSET (Commerce), M.Com, B.Com, MBA (Pursuing)",
    experience: "1 Year",
    email: "patwakunal68@live.com",
  },
  {
    id: 14,
    name: "YAASHI KARAN TAILOR",
    designation: "Faculty",
    image: "/Astaff/p17.webp",
    specialization: "Economics",
    qualification: "GSET, MA (Economics), PhD (Pursuing)",
    experience: "1 Year",
    email: "yaashidp3001@gmail.com",
  },
  {
    id: 15,
    name: "Dr. Maheshkumar Chhogabhai Purohit",
    designation: "Faculty",
    image: "/Astaff/p18.webp",
    specialization: "Marketing",
    qualification: "PhD (Management), MBA, BBA",
    experience: "15 Years",
    email: "maheshpurohit180@gmail.com",
  },
  {
    id: 16,
    name: "Ms. Simran M Chhabra",
    designation: "Faculty",
    image: "/Astaff/p19.webp",
    specialization: "Business Communication",
    qualification: "-",
    experience: "4 Years",
    email: "simran.framegallery@gmail.com",
  },
  {
    id: 17,
    name: "Ms. Disha Hirenbhai Ghadiyali",
    designation: "Faculty",
    image: "/Astaff/p22.webp",
    specialization: "BKS",
    qualification: "MBA, BSc",
    experience: "4 Years",
    email: "dghadiyali9697@gmail.com",
  },
  {
    id: 18,
    name: "Mrs. Vishwa Shreyashbhai Desai",
    designation: "Faculty",
    image: "/Astaff/p24.webp",
    specialization: ".NET, ASP.NET, RDBMS, OS, Computer Basics",
    qualification: "BCA, MCA, PhD (Pursuing)",
    experience: "2 Years",
    email: "vishwa322001@gmail.com",
  },
  {
    id: 19,
    name: "Dr. Umesh Kumar Amrutlal Patel",
    designation: "Faculty",
    image: "/Astaff/p29.webp",
    specialization: "Physical Education",
    qualification: "PhD, M.P.Ed, B.P.Ed, BA",
    experience: "11 Years",
    email: "athleteumesh5@gmail.com",
  },
  {
    id: 20,
    name: "Mrs. Bhavini Bhaumik Desai",
    designation: "Faculty",
    image: "/Astaff/p25.webp",
    specialization: "Programming, RDBMS, Software Engineering, Web Technology",
    qualification: "MCA, BCA",
    experience: "1 Year",
    email: "bhavinivashii@gmail.com",
  },
  {
    id: 21,
    name: "Mr. Chintan Kalpesh Modi",
    designation: "Faculty",
    image: "/Astaff/p26.webp",
    specialization: "Commerce",
    qualification: "M.Com, MBA, MA(Eco), LLB, NET, GSET, PGDRM, PGDCSR",
    experience: "7 Years",
    email: "profchintanmodi@gmail.com",
  },
  {
    id: 22,
    name: "Mrs. Komal Punit Champaneri",
    designation: "Faculty",
    image: "/Astaff/p27.webp",
    specialization: "Statistics",
    qualification: "MSc (Statistics), BSc (Statistics)",
    experience: "8 Years",
    email: "champanerikomal2022@gmail.com",
  },
  {
    id: 23,
    name: "Dr. Jayshree Dinesh Narang",
    designation: "Faculty",
    image: "/Astaff/p28.webp",
    specialization: "Economics",
    qualification: "PhD, M.Phil, GSET, MA, BA (Economics)",
    experience: "15 Years",
    email: "jayshreeeco@gmail.com",
  },
  {
    id: 24,
    name: "Mrs. Drusya Thampi Thannikkottu",
    designation: "Faculty",
    image: "/Astaff/p30.webp",
    specialization: "Commerce / Accountancy",
    qualification: "NET JRF, M.Com, B.Com, PhD (Pursuing)",
    experience: "3 Years",
    email: "drusya4edu@gmail.com",
  },
  {
    id: 25,
    name: "Mrs. Kadam Trusha Rajendrabhai",
    designation: "Faculty",
    image: "/Astaff/p31.webp",
    specialization: "Accountancy and Commerce",
    qualification: "GSET, M.Com, MBA (Finance), B.Com, PhD (Pursuing)",
    experience: "7 Years",
    email: "trushakada228@gmail.com",
  },
  {
    id: 26,
    name: "Mr. Devaang Omprakash Bhatt",
    designation: "Faculty",
    image: "/Astaff/p36.webp",
    specialization: "English",
    qualification: "M.Phil, MA, B.Ed, BA, PhD (Pursuing)",
    experience: "10 Years",
    email: "devaangobhatt@gmail.com",
  },
  {
    id: 27,
    name: "Dr. Rency Desai",
    designation: "Faculty",
    image: "/Astaff/p38.webp",
    specialization: "Accountancy, Management",
    qualification: "PhD, M.Phil, MBA (Finance), B.Com",
    experience: "12 Years",
    email: "renudesai90@gmail.com",
  },
  {
    id: 28,
    name: "Mrs. Unnati Nishitkumar Vashi",
    designation: "Faculty",
    image: "/Astaff/p39.webp",
    specialization: "Environment",
    qualification: "B.E Electrical",
    experience: "11 Years",
    email: "vashi.unni@gmail.com",
  },
  {
    id: 29,
    name: "Mrs. Hiral Nareshbhai Shah",
    designation: "Faculty",
    image: "/Astaff/p41.webp",
    specialization: "Commerce / Accountancy",
    qualification: "B.Com, M.Com, UGC-GSET, PhD (Pursuing)",
    experience: "7 Years",
    email: "hiralshah882@gmail.com",
  },
  {
    id: 30,
    name: "Mrs. Romali Bhautik Patel",
    designation: "Faculty",
    image: "/Astaff/p44.webp",
    specialization: "English - Communication Skills",
    qualification: "BA, MA (English), PhD (Pursuing)",
    experience: "16 Years",
    email: "romali018@gmail.com",
  },
   {
    id: 31,
    name: "Dr. Dipali Atit Modi",
    designation: "Faculty",
    image: "/Astaff/p46.webp",
    specialization: "Economics",
    qualification: "GSET in Economics, MBE, B.Com",
    experience: "9 Years",
    email: "modi.dipali@gmail.com",
  },
  {
    id: 32,
    name: "Mrs. Krishna Bhumit Naik",
    designation: "Faculty",
    image: "/Astaff/p47.webp",
    specialization: "HR",
    qualification: "Diploma in Computer Science Engineering, BE (Computer Science), MBA HR",
    experience: "1 Year",
    email: "krishna.desai1006@gmail.com",
  },
  {
    id: 33,
    name: "Mrs. Patel Binalibahen Marteenkumar",
    designation: "Faculty",
    image: "/Astaff/p49.webp",
    specialization: "Accountancy & Indian Knowledge System",
    qualification: "M.Com, B.Com, B.Ed",
    experience: "2 Years",
    email: "binalipatel35@gmail.com",
  },
  {
    id: 34,
    name: "Bhumi Sanket Desai",
    designation: "Faculty",
    image: "/Astaff/p50.webp",
    specialization: "Marketing",
    qualification: "M.Com, MBA (Marketing), B.Com",
    experience: "3 Years",
    email: "bhumidesai0385@gamil.com",
  },
  {
    id: 35,
    name: "Ms. Kapadiya Prachi Amish Kumar",
    designation: "Faculty",
    image: "/Astaff/p51.webp",
    specialization: "Web",
    qualification: "MCA, BCA",
    experience: "2 Years",
    email: "kapadiaprachi1920@gmail.com",
  },
  {
    id: 36,
    name: "Ms. Dhwani Dipakkumar Patel",
    designation: "Faculty",
    image: "/Astaff/p48.webp",
    specialization: "Banking & Financial Management",
    qualification: "M.Com (Financial & Management Accounting), B.Com, PhD (Pursuing)",
    experience: "1 Year",
    email: "pdhwani96@gmail.com",
  },
  {
    id: 37,
    name: "Mrs. Rajni Tara Singh Shekhawat",
    designation: "Faculty",
    image: "/Astaff/p52.webp",
    specialization: "Economics, Law",
    qualification: "BA, LL.B, LLM",
    experience: "4 Years",
    email: "shekhawatrajni311@gmail.com",
  },
  {
    id: 38,
    name: "Dr. Trusha Prakashbhai Gajjar",
    designation: "Faculty",
    image: "/Astaff/p53.webp",
    specialization: "Commerce / Accountancy",
    qualification: "B.Com, M.Com, PhD, GSET, MSc Management with Data Analytics",
    experience: "7 Years",
    email: "trushagajjar3094@gmail.com",
  },
  {
    id: 39,
    name: "Dr. Vandana Prakashbhai Desai",
    designation: "Faculty",
    image: "/Astaff/p55.webp",
    specialization: "Marketing and HR",
    qualification: "B.Com, MHRD, M.Com, PhD, GSET",
    experience: "9 Years",
    email: "vandanadesai28@gmail.com",
  },
  {
    id: 40,
    name: "Ms. Hetal Vindochandra Gundarwala",
    designation: "Faculty",
    image: "/Astaff/p56.webp",
    specialization: "Economics",
    qualification: "M.Com (Financial Management), CMA Intermediate, B.Com, PhD (Pursuing)",
    experience: "3 Years",
    email: "hetalgundarwala.sascma@gmail.com",
  },
  {
    id: 41,
    name: "Ms. Krishna Jitendrakumar Gilitwala",
    designation: "Faculty",
    image: "/Astaff/p57.webp",
    specialization: "AI",
    qualification: "MCA, BCA",
    experience: "1 Year",
    email: "krishnagilitwala4550@gmail.com",
  },
  {
    id: 42,
    name: "Mrs. Jinal Raj Sopariwala",
    designation: "Faculty",
    image: "/Astaff/p58.webp",
    specialization: "Management",
    qualification: "MBA, B.Ed, BBA, PhD (Pursuing)",
    experience: "7 Years",
    email: "sopariwalajinal@gmail.com",
  },
  {
    id: 43,
    name: "Minal Bhavik Desai",
    designation: "Faculty",
    image: "/Astaff/p59.webp",
    specialization: "Computer Science",
    qualification: "MSc (IT), BSc (IT)",
    experience: "4 Years",
    email: "minaln44.nm@gmail.com",
  },
  {
    id: 44,
    name: "Gargi Sohil Kapadia",
    designation: "Faculty",
    image: "/Astaff/p60.webp",
    specialization: "-",
    qualification: "B.Ed, M.Com, MBA (Pursuing)",
    experience: "1 Year",
    email: "kapadiagargi1977@gmail.com",
  },
  {
    id: 45,
    name: "CA Abhishek Sanjeev Desai",
    designation: "Faculty",
    image: "/Astaff/p61.webp",
    specialization: "Finance",
    qualification: "Chartered Accountant, GSET (Management), MBA (Finance), B.Com",
    experience: "4 Years",
    email: "abhidesai2309@gmail.com",
  },
  {
    id: 46,
    name: "Mrs. Rajul Maulik Chudawala",
    designation: "Faculty",
    image: "/Astaff/p62.webp",
    specialization: "Foreign Trade",
    qualification: "MBA, B.Com",
    experience: "4 Years",
    email: "rajul.shah85@gmail.com",
  },
  {
    id: 47,
    name: "Dr. Sonal Amit Desai",
    designation: "Faculty",
    image: "/Astaff/p63.webp",
    specialization: "Libraries",
    qualification: "B.Com, BLISc, MLISc, PhD",
    experience: "11 Years",
    email: "sonaladesai02@gmail.com",
  },

  {
    id: 49,
    name: "Mrs. Patel Priyanka Sunil",
    designation: "Faculty",
    image: "/Astaff/p64.webp",
    specialization: "Economics",
    qualification: "MBA, BA, PhD (Pursuing)",
    experience: "4 Years",
    email: "priyankapatel.sascma@gmail.com",
  },
  {
    id: 50,
    name: "Ms. Nelviz Jalejar Jivasha",
    designation: "Faculty",
    image: "/Astaff/p65.webp",
    specialization: "Accountancy",
    qualification: "GSET, M.Com, B.Com",
    experience: "5 Years",
    email: "njivasha@gmail.com",
  },
  {
    id: 51,
    name: "Ms. Rimple Hitendra Desai",
    designation: "Faculty",
    image: "/Astaff/p66.webp",
    specialization: "Android",
    qualification: "NET, MCA, BCA",
    experience: "11 Years",
    email: "rimple.sascma@gmail.com",
  },
  {
    id: 52,
    name: "Dr. Pooja Raghunath Negi",
    designation: "Faculty",
    image: "/Astaff/p67.webp",
    specialization: "Java, CG, Python",
    qualification: "PhD, MSc ICT, BCA",
    experience: "11 Years",
    email: "pooja.sascma24@gmail.com",
  },
  {
    id: 53,
    name: "Ms. Aarti Anil Agarwal",
    designation: "Faculty",
    image: "/Astaff/p68.webp",
    specialization: "Web Designing, Data Analytics, Machine Learning",
    qualification: "NET, MCA, BCA, PhD (Pursuing)",
    experience: "4 Years",
    email: "aarti.sascma@gmail.com",
  },
  {
    id: 54,
    name: "Mrs. Bhumiben Jigarkumar Patel",
    designation: "Faculty",
    image: "/Astaff/p69.webp",
    specialization: "PS, Java, ASP.NET",
    qualification: "MCA, BCA",
    experience: "2 Years",
    email: "bhumi.sutaria@gmail.com",
  },
  {
    id: 55,
    name: "Mrs. Hinal V Shah",
    designation: "Faculty",
    image: "/Astaff/p70.webp",
    specialization: "Computer Science",
    qualification: "MSc (IT), BSc (IT)",
    experience: "5 Years",
    email: "hinalvshah1904@gmail.com",
  },
  {
    id: 56,
    name: "Mr. Ankit Ramashre Yadav",
    designation: "Faculty",
    image: "/Astaff/p73.webp",
    specialization: "Statistics",
    qualification: "M.Com (Statistics), B.Com",
    experience: "2 Years",
    email: "ankityadavr22@gmail.com",
  },
  {
    id: 57,
    name: "Mr. Mohit Bhavarlal Mistry",
    designation: "Faculty",
    image: "/Astaff/p74.webp",
    specialization: "English, Linguistics and Communication Skills",
    qualification: "MA (English), BSc IT",
    experience: "4 Years",
    email: "mohitjangid9878@gmail.com",
  },
  {
    id: 58,
    name: "Ms. Kajal Ashish Desai",
    designation: "Faculty",
    image: "/Astaff/p75.webp",
    specialization: "Computer Science",
    qualification: "MSc Software Project Management",
    experience: "1 Year",
    email: "desaikajal52111@gamil.com",
  },
  {
    id: 59,
    name: "Ms. Maitry B Patel",
    designation: "Faculty",
    image: "/Astaff/p76.webp",
    specialization: "English Literature, Communication Skills",
    qualification: "GSET, MA (English), BA (English), PhD (Pursuing)",
    experience: "2 Years",
    email: "maitry1698@gmail.com",
  },
  {
    id: 60,
    name: "Jariwala Dhruvisha Nimishkumar",
    designation: "Faculty",
    image: "/Astaff/p77.webp",
    specialization: "Accountancy",
    qualification: "M.Com, B.Com",
    experience: "Fresher",
    email: "dhruvishajariwala22@gmail.com",
  },
  {
    id: 61,
    name: "Devanshi Jayeshkumar Parekh",
    designation: "Faculty",
    image: "/Astaff/p78.webp",
    specialization: "Statistics",
    qualification: "NET, MSc (Applied Statistics), B.Com",
    experience: "4 Years",
    email: "devanshi2parekh@gmail.com",
  },
  {
    id: 62,
    name: "Vadhvaniya Hetal Rajeshbhai",
    designation: "Faculty",
    image: "/Astaff/p79.webp",
    specialization: "Business Statistics",
    qualification: "-",
    experience: "2 Years",
    email: "hetalvadhvaniya18@gmail.com",
  }


];

export default function StaffCards() {
  return (  
    <div className="flex justify-center mt-30 lg:mt-50 pb-12 bg-white">
    <div className="min-h-screen  max-w-7xl px-4 lg:px-8">
        <div className="flex justify-start md:justify-center items-center mb-2">
          <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
          <h4 className="text-sm uppercase tracking-widest text-gray-500">
            Academic Staff
          </h4>
          <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
        </div>

        <h2 className="text-start md:text-center text-3xl md:text-4xl font-bold mb-6">
          Excellence in Teaching and Research
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


