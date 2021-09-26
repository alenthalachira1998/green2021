// export default ElegantResortLiving
import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';

import ElegantModal from '../../components/ElegantModal';

const bg = {
    backgroundImage: 'url("/images/nature.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

}

const ElegantResortLiving = () => {
    return (
        <>
         <section id="elegant-resort-living">

       
           
            <div className="h-screen lg:h-screen relative" style={bg}>
                 
      
                <div className="absolute  bg-black h-full  lg:h-screen w-full opacity-60 flex flex-col items-center justify-center"></div>
              
                 
                <div className="relative  ">
              
                <div className="flex-col h-screen">
               
                    <div className="flex  flex-col items-center h-full   justify-center">
               
                <div className=" flex flex-col  lg:max-w-2xl md:max-w-xl max-w-xs   px-10 h-3/5 md:h-2/5 xl:h-2/5  justify-center ">
                <div className="text-white lg:text-xl pb-6 text-base max-w-xl lg:text-center lg:font-normal flex flex-col justify-center lg:items-center  "><h1 className="lg:pb-6 pb-2  text-lg lg:text-4xl"> Elegant Resort Living</h1> Integrated facilities and means of entertainment for a healthy, happy and peaceful life for all.</div>
                            <div className="self-start lg:self-center">
                               <ElegantModal/>
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

export default ElegantResortLiving

