import Iframe from "react-iframe";

import Link from 'next/link';


export default function FooterandLocation() {
  const wrapper= {
    position: 'relative',
    overflow: 'hidden',
    paddingTop:'56.25%'
  }
  const iiframe={
    position: 'absolute',
    top:'0',
    left:'0',
    width:'100%',
    height:'100%'
  }
  const bg={
    backgroundColor:'black'
  }
  const mapresponsive={
    overflow:'hidden',
    paddingBottom:'56.25%',
    position:'relative',
    height:'0'
}
const mapresponsiveiframe={
    left:0,
    top:0,
    height:'100%',
    width:'100%',
    position:'absolute'
}

  return (
    <>
    
      <section id="footer-location"  >
      <div className="  h-screen p-10 flex-col  justify=start flex sm:justify-center"  style={bg}>
   
        <div className="sm:mx-6 xl:mx- 2xl:mx-52 flex justify-center  items-start lg:items-center">
         
        <div>
        
          <div className="grid grid-cols-1 min-h-full lg:grid-cols-2   gap-10 " >
            <div className=" bg-white bg-opacity-10   shadow-14xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xl mt-10 lg:mt-0" ><h2 className="text-center font-bold text-white my-2 p-4"> Walk Through Video </h2>
            
            <div style={wrapper}>
            
            <iframe
             
              src="https://www.youtube.com/embed/tgbNymZ7vqY"  style={iiframe} 

            ></iframe>
            </div>
            </div>
            <div>
            <div className="bg-white bg-opacity-10  mt-2   shadow-14xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xl"><h2 className="text-center font-bold text-white my-2 p-4"> Project Location </h2>
            <div className='text-xs sm:text-sm md:text-base text-white  lg:m-10 tex-white font-semibold'> Greenest buildings<br/> and business pvt ltd,
Tc14/733, Nandavanam , Thiruvananthapuram</div>
            <div style={mapresponsive}>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9202803206713!2d76.95393381478293!3d8.507121493883881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMjUuNiJOIDc2wrA1NycyMi4wIkU!5e0!3m2!1sen!2sin!4v1630850939086!5m2!1sen!2sin"  width='100%' style={mapresponsiveiframe}
        
            ></Iframe>
    

            </div>
           
            </div>
            </div>
          
          </div>
        </div>
    
   
        </div>
      
        </div>
        <div className="absolute bottom-10 ">
      
        </div>
           
      </section>

     
    </>
  );
}
