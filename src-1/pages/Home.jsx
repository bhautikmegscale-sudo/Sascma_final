import React from 'react';
import Banner from '../Components/Banner';
import WelcomeSection from '../Components/WelcomeSection';
import Enotice from '../Components/Enotice';
import Principle from '../Components/PrincipleMessage';
import CourseCard from '../Components/CourseCard';
import FacultyCard from '../Components/FacultyCard';
import AdmissionPopup from '../Components/AdmissionPopup';

const Home = () => {
  return (
    <>
      <AdmissionPopup />
      <Banner />
      <WelcomeSection />
      <Enotice />
      <Principle />
      <CourseCard />
      <FacultyCard />
    </>
  );
};

export default Home;
