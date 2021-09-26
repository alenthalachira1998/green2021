// import Iframe from "react-iframe";

// import Link from 'next/link';

// export default function About() {
//   const wrapper= {
//     position: 'relative',
//     overflow: 'hidden',
//     paddingTop:'56.25%'
//   }
//   const iiframe={
//     position: 'absolute',
//     top:'0',
//     left:'0',
//     width:'100%',
//     height:'100%'
//   }
//   const bg={
//     backgroundImage: 'url("/images/nature.jpg")'
//   }
//   const mapresponsive={
//     overflow:'hidden',
//     paddingBottom:'56.25%',
//     position:'relative',
//     height:'0'
// }
// const mapresponsiveiframe={
//     left:0,
//     top:0,
//     height:'100%',
//     width:'100%',
//     position:'absolute'
// }

//   return (
//     <>
    
//       <section id="about pt-4">
//       <div className="h-screen lg:h-screen relative" style={bg}>


//                 <div className="absolute  bg-black h-full  lg:h-screen w-full opacity-60 flex flex-col items-center justify-center"></div>


//                 <div className="relative  ">

   
//         <div className="lg:h-screen  h-screen mt-10  sm:mx-6 xl:mx- 2xl:mx-52 flex justify-center items-start lg:items-center">
  
//         <div>
//           <div className=" p-4 lg:mb-10 text-white  col-span-2  rounded-x " >
//           <h1 className="text-center lg:text-xl text-base  font-bold text-yellow-300  my-2  lg:mr-4 lg:pt-2 pb-4 " >About</h1>
//            <p className="text-sm  md:text-base"> GREENEST ONE is an iconic villa project at
//             Njandoorkonam-Thiruvananthapuram, 8 km from Techno Park conveniently
//             placed between NH – 66 & MC Road. The project consist of 29 high-end
//             technical villa community in 2.2 Acres of land, which performs to
//             the highest efficiency in functional & operational sectors. Through
//             deeply involved design, proper planning & study at the design stage;
//             the construction cost is reduced to a considerable figure resulted
//             in maintaining the current market rate.</p> <br/>
      
//           </div>
         
//             {/* <div className="  mt-10 lg:mt-0" style={bg}><h2 className="text-center font-bold text-yellow-400 my-2 p-4"> Walk Through Video </h2>
//             <div style={wrapper}>
            
//             <iframe
             
//               src="https://www.youtube.com/embed/tgbNymZ7vqY"  style={iiframe} 

//             ></iframe>
//             </div>
//             </div> */}
//             <div className="flex justify-center">
//             <div>
//             <div ><h2 className="text-center font-bold text-yellow-400 my-2 p-4"> Project Location </h2>
//             <div style={mapresponsive}>
//             <Iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9202803206713!2d76.95393381478293!3d8.507121493883881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMjUuNiJOIDc2wrA1NycyMi4wIkU!5e0!3m2!1sen!2sin!4v1630850939086!5m2!1sen!2sin"  width='100%' style={mapresponsiveiframe}
        
//             ></Iframe>
//            <div className='m-2 text-white lg:m-10 tex-white font-semibold'> Greenest buildings<br/> and business pvt ltd,
// Tc14/733, Nandavanam, Thiruvananthapuram</div>
//             </div>
//             </div>
//             </div>
//           </div>
//         </div>
//         </div>
        
//         </div>

        
        
//             </div>
//       </section>
//     </>
//   );
// }

import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';
import Iframe from "react-iframe"
const About = () => {
const bg = {
backgroundImage: 'url("/images/club house.jpg")',
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',

}
const wrapper= {
     position: 'relative',
      overflow: 'hidden',
       paddingTop:'56.25%'
     }
     const iiframe={
          position: 'absolute',
         top:'0',
          left:'0',
        
  
        }
return (
<section id="about">

<div className="h-screen lg:h-screen relative" style={bg}>
<div className="absolute bg-black h-full lg:h-screen w-full opacity-60 flex flex-col items-center justify-center"></div>
<div className="relative ">
<div className="flex-col h-screen">
<div className="flex flex-col items-center h-full justify-center">
<div className=" flex flex-col lg:max-w-6xl md:max-w-xl max-w-s px-10 h-3/5 md:h-2/5 xl:h-2/5 justify-start ">
<div className="text-white lg:text-lg pb-6 text-sm lg:text-center lg:font-normal flex flex-col justify-center lg:items-center "><h1 className="lg:pb-6 pb-2 text-lg lg:text-4xl"> About </h1> 
Our parent company Light and Shadow Projects, was started in the year 2011 as an interior contracting company and established as a construction contractor within a few years. By the year 2021 we have completed construction and handed over 70+ residential as well as commercial building projects in an around Thiruvananthapuram. 
Greenest Building and Business Pvt Ltd is managed by a core team of two Civil engineers and an Architect. Each having an experience of 10+ years in the field of design, construction and management in Kerala and abroad. .</div>

<div className="self-start lg:self-center">

</div>
<span className="text-white self-start lg:self-center lg:mt-4 lg:text-5xl text-4xl pt-8 font-thin animate-ping"> <IoIosArrowRoundDown /></span>
</div>
</div>


</div>
</div>

</div>


</section>
)
}
export default About