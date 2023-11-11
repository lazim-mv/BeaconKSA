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
  const [hideWhiteScreen, setHideWhiteScreen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const whiteScreen = document.getElementById("white-screen");
      if (whiteScreen) {
        // whiteScreen.style.opacity = '0';
        whiteScreen.classList.add("hidden");
      }
    }, 250); // 1000 milliseconds = 1 second

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  // const useBackgroundImage = true;

  return (
    <>
      <Header />
      <MobileHeader />
      {!hideWhiteScreen && (
        <div id="white-screen">
          <div class="loading">
            <div class="outer"></div>
            <div class="inner"></div>
          </div>
          <h1>Your Global Advisory Partner For Business Success</h1>
        </div>
      )}
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
