 import Layout from '../components/Layout';
import '../styles/index.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../css/menu.css'
import '../css/overrides.css'
import '../css/blog-center.scss'
config.autoAddCss = false
import {useState, useEffect} from "react";




function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        },150);
      })

  return (
    <>
    
    {isLoading==true? <div className="flex flex-col  h-screen w-screen relative items-center m-0 p-0 justify-center" > <img src="/logoo.png" className=" object-center absolute h-20 w-20 animate-pulse"/></div> : 
   
 <Layout><Component {...pageProps} /></Layout> 
     
 } 
   </>
  );
}

export default MyApp;


