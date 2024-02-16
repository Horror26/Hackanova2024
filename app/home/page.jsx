'use client'
import React from 'react';
import Herosection from './Herosection';
import Features from './Features';
import Full from './full';
import  Activity from './Activity';
import Home from '../../components/component/home.tsx';
const LandingPage = () => {
  return (
    <div className="bg-gray-100">
   {/* <Home/> */}
     <Herosection/>
     <Features/>
     <Activity/>
    </div>
  );
};

export default LandingPage;
