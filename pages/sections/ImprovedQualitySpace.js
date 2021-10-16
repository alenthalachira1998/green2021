import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';

import ImprovedModal from '../../components/ImprovedModal';
const bg = {
    backgroundImage: 'url("/images/living.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

}

const ImprovedQualityOfSpace = () => {
    return (
        <>
         <section id="improved-quality-of-space">

       
           
            <div className="h-screen lg:h-screen relative" style={bg}>
                 
      
                <div className="absolute  bg-black h-screen  lg:h-screen w-screen opacity-40 flex flex-col items-center justify-center"></div>
              
                 
                <div className="relative  ">
              
                <div className="flex-col h-screen">
               
                    <div className="flex  flex-col items-center h-full   justify-center">
               
                <div className=" flex flex-col  lg:max-w-2xl md:max-w-xl max-w-xs   px-10 h-3/5 md:h-2/5 xl:h-2/5  justify-center ">
                <div className="text-white lg:text-xl pb-6 text-base max-w-xl lg:text-center lg:font-normal flex flex-col justify-center lg:items-center  "><h1 className="lg:pb-6 pb-2  text-lg lg:text-4xl">Improved Quality Of Space </h1> Safety, security and well being of occupants.   &#160; &#160; &#160; &#160; &#160; &#160; &#160;&#160;&#160; &#160;</div>
                            <div className="self-start lg:self-center">
                               <ImprovedModal/>
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

export default ImprovedQualityOfSpace;

