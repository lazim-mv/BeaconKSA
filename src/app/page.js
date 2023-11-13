"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Services from "./components/Services";
import { Clients, ScrollingLogos } from "./components/Clients";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileHeader from "./components/MobileHeader";
import { useEffect, useState } from "react";
import Places from "./components/Places";

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = [
    "Incorporation",
    "Accounting",
    "Auditing",
    "Digital Strategy",
    "Digital Marketing",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const whiteScreen = document.getElementById("white-screen");
      if (whiteScreen) {
        // whiteScreen.style.opacity = '0';
        whiteScreen.classList.add("hidden");
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <MobileHeader />
      <div id="white-screen">
        <div className="outer-circle">
          <div className="inner-circle"></div>
        </div>
        <div className="changeTextContainer">
          <h1 className="spinnerText">Your Global Advisory Partner For</h1>
          <h1 className="changeText">{textOptions[textIndex]}</h1>
        </div>
      </div>
      <div className="mainContainer">
        <Hero />
        {/* <BusinessSetup /> */}
        <Services />
        <Locations />
        {/* <Jurisdiction /> */}
        <Places />
        <Clients />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   // Fetch data here (e.g., from an API)
//   const data = "Some data fetched at build time";

//   return {
//     props: {
//       data,
//     },
//   };
// }
