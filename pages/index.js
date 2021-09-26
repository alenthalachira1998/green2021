import About from "./sections/About";
import MainHome from "./sections/MainHome";
import Head from "next/head";

import BuildQuality from "./sections/BuildQuality";
import ElegantResortLiving from "./sections/ElegantResortLiving";
import ReactFullpage from "@fullpage/react-fullpage";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

import Menuu from "../components/Menuu";


import ImprovedQualityOfSpace from "./sections/ImprovedQualitySpace";
import LowLivingCost from "./sections/LowLivingCost";
import FooterandLocation from "./sections/FooterandLocation";
export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute   lg:top-4 w-full flex justify-center z-10">
        <img
          src="/logo.png"
          alt="Picture of the author"
          className="w-44 h-14"
        />
      </div>
      <div className="absolute    p-2  lg:p-4 flex w-screen justify-between ">
        <Menuu />
        <div className="flex text-3xl z-10  lg:text-5xl text-gray-200 ">
          {" "}
          <div className="hover:text-pink-800 hover:animate-ping">
          <AiOutlineInstagram />
          </div>
          <div className="hover:text-blue-400 hover:animate-ping">
          <AiOutlineFacebook />
          </div>
        </div>
      </div>

      {/* <Navbar/> */}
      {/* <MainHome/>

   <About/>
    <Contact/>  */}

      {/* </div>  */}

      <ReactFullpage
        licenseKey="6E5201D5-E37447CD-AE1913F6-91AFE3AA"
        scrollSpeed={1000}
        navigation="true"
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <MainHome />
              </div>
              <div className="section">
                <ElegantResortLiving />
              </div>
              <div className="section">
               <ImprovedQualityOfSpace/>
              </div>
              <div className="section">
              <LowLivingCost/>
              </div>
              <div className="section">
                <BuildQuality />
              </div>
              <div className="section">
              <About/>
              </div>
             
              <div className="section">
              <FooterandLocation/>
              </div>
             
              
              
            </div>
          );
        }}
      />

      {/* } */}
    </>
  );
}
