"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Procedures() {
  const pageData = [
    {
      heading: "MISA license",
      Number: "01",
      description:
        "Explore the unparalleled ease of running your business in Abu Dhabi, the largest emirate in UAE, and make your business thrive amongst the best dynamic economy.",
      dash: "------------------------",
    },
    {
      heading: "Certificate from Ministry of Commerce and industry",
      Number: "02",
      description:
        "Establish your business in Dubai, the tax-favorable, business-friendly and highly desirable economically diverse destination that has ranked first in ease of doing business.",
      dash: "------------------------",
    },
    {
      heading: "Ministry of Labor and Social Development (MLSD)",
      Number: "03",
      description:
        "Get immense advantage of seamless business setup in Sharjah, and experience the privilege of setting up business irrespective of mainland, offshore, or freezone preferences.",
      //dash: "------------------------------",
    },
    {
      heading: "General Organization of Social Insurance (GOSI)",
      Number: "04",
      description:
        "Explore the unparalleled ease of running your business in Abu Dhabi, the largest emirate in UAE, and make your business thrive amongst the best dynamic economy.",
      dash: "------------------------",
    },
    {
      heading: "General Authority of Zakat and Tax (GAZT)",
      Number: "05",
      description:
        "Establish your business in Dubai, the tax-favorable, business-friendly and highly desirable economically diverse destination that has ranked first in ease of doing business.",
      dash: "------------------------",
    },
    {
      heading: "Registration of Wasel",
      Number: "06",
      description:
        "Get immense advantage of seamless business setup in Sharjah, and experience the privilege of setting up business irrespective of mainland, offshore, or freezone preferences.",
      // dash: "------------------------",
    },
  ];

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    // Check screen size on the client side
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 600);
    };

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Initial check on component mount
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  const [loaded, setLoaded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Simulate fetching data, you should replace this with your actual data fetching logic
    setTimeout(() => {
      setDataLoaded(true);
    }, 2000); // Adjust the delay as needed

    // In this example, we're simulating data loading for 2 seconds.
  }, []);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="ProceduresContainer">
      <h2 className="businessDesc" style={{ color: "#fff", marginTop: "0" }}>
        Steps and procedures
      </h2>
      {!isMobileScreen && dataLoaded && !loaded ? ( // Check dataLoaded before rendering desktop view
        <div className="proceduresCardContainerWrapper">
          <div className="proceduresCardContainer">
            {pageData.map((data, index) => (
              <div className="verticalContainer" key={index}>
                <div className="contentContainer">
                  <div className="extraContainer">
                    <div className="circleNumber">
                      <h1
                        className="servicesHeading"
                        style={{ color: "#1125B" }}
                      >
                        {data.Number}
                      </h1>
                    </div>
                    <div
                      className="lineContainer"
                      style={{ color: "#fff", fontSize: "30px" }}
                    >
                      {data.dash}
                    </div>
                  </div>
                  <div className="proceduresHeadingContainer">
                    <h1 className="proceduresHeading" style={{ color: "#fff" }}>
                      {data.heading}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : isMobileScreen ? (
        <Image
          src="/Procedures.svg"
          width={100}
          height={100}
          alt="mobile"
          layout="responsive"
          quality={100}
          priority={true}
          unoptimized
          style={{ display: loaded ? "block" : "none" }}
          onLoad={handleImageLoad}
        />
      ) : null}
    </div>
  );
}

export default Procedures;
