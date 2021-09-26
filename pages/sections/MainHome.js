
import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';

import Link from 'next/link'
const bg = {
    backgroundImage: 'url("/mainp.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

}

const MainHome = () => {
    return (
        <>
         <section id="main-home">

       
           
            <div className="h-screen lg:h-screen relative" style={bg}>
                 
      
                <div className="absolute  bg-black h-full  lg:h-screen w-full opacity-60 flex flex-col items-center justify-center"></div>
              
                 
                <div className="relative  ">
              
                <div className="flex-col h-screen">
               
                    <div className="flex  flex-col items-center h-full   justify-center">
               
                <div className=" flex flex-col  lg:max-w-6xl md:max-w-xl max-w-s   px-10 h-3/5 md:h-2/5 xl:h-2/5  justify-center ">
                <div className="text-white lg:text-lg pb-6 text-sm  lg:text-center lg:font-normal flex flex-col justify-center lg:items-center "><h1 className="lg:pb-6 pb-2  font-bold text-green-400 text-lg lg:text-4xl"> Greenest ONE </h1> Greenest ONE offers our customers a functionally designed home with enhanced quality of
space and life. Project is located in a calm, clean, well connected and lush green location
within Thiruvananthapuram Corporation, at Njandoorkonam. Project consist of 30 high-
performance individual villa units, club house and lots of recreational and easy go common
amenities.</div>
                            <div className="self-start lg:self-center">
                              <Link href="/projects"  ><a className="text-center text-white text-xl lg:text-2xl border-b-2">View Project</a></Link>
                               </div>
                              
                                     <span className="text-white self-start lg:self-center lg:mt-4 lg:text-5xl text-4xl pt-8 font-thin  animate-ping"> <IoIosArrowRoundDown  /></span>
                               
                </div>
                </div>
                       
                        

                         
                        
                            

                
                      
                    </div>
                </div>


            </div>



        </section>
        </>
    )
}

export default MainHome;

