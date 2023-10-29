"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Places() {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";

  const pageData = [
    {
      img: "/Jurisdiction/Jeddah.svg",
      heading: "Abu Dhabi",
      Number: "01",
      description:
        "Explore the unparalleled ease of running your business in Abu Dhabi, the largest emirate in UAE, and make your business thrive amongst the best dynamic economy.",
    },
    {
      img: "/Jurisdiction/Damam.svg",
      heading: "Dubai",
      Number: "02",
      description:
        "Establish your business in Dubai, the tax-favorable, business-friendly and highly desirable economically diverse destination that has ranked first in ease of doing business.",
    },
    {
      img: "/Jurisdiction/Riyadh.svg",
      heading: "Sharjah",
      Number: "03",
      description:
        "Get immense advantage of seamless business setup in Sharjah, and experience the privilege of setting up business irrespective of mainland, offshore, or freezone preferences.",
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
            <div class="placesCard " key={index}>
              <div class="card-side back placesCardImage">
                <Image
                  src={data.img}
                  width={500}
                  height={500}
                  alt={`juri ${index}`}
                  layout="responsive"
                  quality={100}
                  priority={true}
                  unoptimized
                  objectFit="cover"
                />
              </div>
              <div className="juriContent card-side front">
                <div className="circleNumber">
                  <h1>{data.Number}</h1>
                </div>
                <h1 style={{ color: "#fff" }} className="servicesHeading">
                  {data.heading}
                </h1>
                <p className="juriDesc">{data.description}</p>
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