"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Places() {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";

  const pageData = [
    {
      img: "/Jurisdiction/Jeddah.webp",
      heading: "JEDDAH",
      Number: "01",
      description:
        "Make the most out of the plethora of opportunities that lie in the hands of Jeddah, Saudi Arabia backed by factors like low debt, macroeconomic stability, and high budget surplus. With the worldwide attention for offering an advanced institutional framework, Jeddah is an ideal place to run your business. We travel the extra mile to redefine your business with innovative solutions to cater to your business needs.",
    },
    {
      img: "/Jurisdiction/Dammam.webp",
      heading: "DAMMAM",
      Number: "02",
      description:
        "Discover the significant revenue opportunities, expand your business, improve credibility, and open the doors of business potential through the amazing incorporation possibilities that Dammam has for investors. Take advantage of the surge in demand for unique business ventures in the booming economy and participate in the evolving market to stay ahead of the curve in the region.",
    },
    {
      img: "/Jurisdiction/Riyadh.webp",
      heading: "RIYADH",
      Number: "03",
      description:
        "Get immense opportunities to benefit from the economic growth of Saudi Arabia through the diversification strategies that light up the opportunities for foreign and native businesses. Tap into the power of incorporating your company by extending the processes and establishing your business across the iconic location of Riyadh, Saudi Arabia, and leverage the growing consumer base of the country.",
    },
  ];

  const placesContainerRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const horizontalContainer = placesContainerRef.current;
  //     const containerRect = horizontalContainer.getBoundingClientRect();
  //     const scrollLeft = window.scrollY - containerRect.top;
  //     const translateX = Math.max(0, scrollLeft * 0.1); // Increase by 10%

  //     horizontalContainer.style.transform = `translateX(-${translateX}px)`;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="placesContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">Places</h6>
        <h2 className="businessDesc">
          Run Your Business At Coveted
          <br /> Business Landmarks
        </h2>
        <h2 className="mBusinessDesc">
          Run Your Business At Coveted
          <br /> Business Landmarks
        </h2>
      </div>
      <div className="scrollContainer">
        <div className="juriMainCardContainer" ref={placesContainerRef}>
          {pageData.map((data, index) => (
            <div className="cardNew" key={index}>
              <div className="content">
                <div className="frontNew">
                  <div className="juriContent ">
                    <div className="circleNumber">
                      <h1>{data.Number}</h1>
                    </div>
                    <h1 style={{ color: "#fff" }} className="servicesHeading">
                      {data.heading}
                    </h1>
                    <p className="juriDesc">{data.description}</p>
                  </div>
                </div>
                <div className="backNew">
                  <div className=" placesCardImage">
                    <Image
                      src={data.img}
                      width={500}
                      height={500}
                      alt={`juri ${index}`}
                      layout="responsive"
                      quality={100}
                      unoptimized
                      objectFit="cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href="/pages/Services">
        <div
          className="hButtonContainer servicesButton"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="visibleWrapperContainer">
            <div className="topVisibleContainer btn">
              Explore More
              <div className="topVisibleArrow">
                <Image
                  src={imageSrc}
                  width={23}
                  height={23}
                  alt="heroContact"
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </div>
            </div>
            <div className="bottomVisibleContainer btn">
              Explore More
              <div className="bottomVisibleArrow">
                <Image
                  src={imageSrc}
                  width={23}
                  height={23}
                  alt="heroContact"
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Places;
