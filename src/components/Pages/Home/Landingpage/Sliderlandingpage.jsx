import React from 'react'
import LandingpageImg from "../../../../assets/landingPage.png";
import Imgslides from './Imgslides';

function Sliderlandingpage() {    
    const sliderInfo = [
        {       
          headline: "Academic Project Hub ",  
          herocopy: "A versatile tool designed to assist academicians, \n including students, mentors, software developers, and  business professionals. ",        
          imgsrc: LandingpageImg,
          btnValue: "View Projects"
        },
        {
            headline: "Best Articles ",  
            herocopy: "A versatile tool designed to assist academicians, including students, mentors, software developers, and business professionals. ",        
            imgsrc: LandingpageImg,
            btnValue: "View Articles"
        },
        {
            headline: "Academic Books ",  
            herocopy: "A versatile tool designed to assist academicians, \n including students, mentors, software developers, and  business professionals. ",        
            imgsrc: LandingpageImg,
            btnValue: "View Books"
        },];
  return (
    <div>
       <Imgslides slides={sliderInfo} />
    </div>
  )
}

export default Sliderlandingpage
