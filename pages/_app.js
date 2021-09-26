import Layout from '../components/Layout';
import '../styles/index.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../css/menu.css'
config.autoAddCss = false
import {useState, useEffect} from "react";




function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        },1500);
      })

  return (
    <>
    
    {isLoading==true? <div className="flex   h-screen items-center justify-center" > <img src="/logoo.png" className="h-20 w-20 animate-pulse"/></div> : 
    <Layout>
      <Component {...pageProps} />
      </Layout>
 } 
   </>
  );
}

export default MyApp;


