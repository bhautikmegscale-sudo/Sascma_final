// import React from 'react';
// import { useEffect, useState } from "react";
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Banner from './Components/Banner';
// import CourseCard from './Components/CourseCard';
// import WelcomeSection from './Components/WelcomeSection';
// import FacultyCard from './Components/FacultyCard';
// import Enotice from './Components/Enotice';
// import Principle from './Components/PrincipleMessage';
// import Loader from './Components/Loader';
// import Gallery from './Components/Gallery';
// function App() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     // Simulate page loading
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000); // 2 seconds
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <div>
//         <Header />
//         <Banner />
//         <WelcomeSection/>
//         <Enotice/>
//         <Principle/>
//         <CourseCard/>
//         <FacultyCard/>
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default App




import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import AcademicStaff from './pages/AcademicStaff';
import NonAcademicStaff from './pages/NonAcademicStaff';
import CourseDetail from './pages/CourseDetail';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import Committee from './pages/Committee';
import Courses from './pages/Courses';
import Events from './pages/Events';
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Inquiry from "./pages/Inquiry";
import Gallery from "./pages/Gallery";

import FloatingInquiryButton from "./Components/FloatingInquiryButton";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import { i } from "framer-motion/client";
// import Courses from './pages/Courses';
// import Faculty from './pages/Faculty';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/staff/academic" element={<AcademicStaff />} />
        <Route path="/staff/non-academic" element={<NonAcademicStaff />} />

        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/gallery" element={<Gallery  />} />
        <Route path="/terms-of-use" element={<TermsConditions  />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy  />} />

        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
      <FloatingInquiryButton />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
