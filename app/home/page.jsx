
import React from 'react';
import Herosection from '../../components/home/Herosection';
import Features from '../../components/home/Features';
import Full from '../../components/home/full';
import  Activity from '../../components/home/Activity';
const LandingPage = () => {
  return (
    <div className="bg-gray-100 p-4">
   {/* <Home/> */}
      <Herosection/>
     <Features/>
     <Activity/>
    </div>
  );
};

export default LandingPage;
