"use client";
import Image from "next/image";
import React from "react";


function Hero() {
 
  return (
    <div className="heroContainer">
      <div className="imageWithText">
        <Image
          className="hImage"
          src="/hero.webp"
          alt="Asian Engineer"
          width={1366}
          height={670}
          layout="responsive"
          quality={100}
          priority={true}
          unoptimized
        />
        <div className="textOverlay">
          {/* <div className="heroContent"> */}
            <div>
              <h1 className="heorHeading">
                Setup Your Business <br /> in Saudi Arabia
              </h1>
            </div>
            <div className="heroDescContainer">
              <p className="heroDesc">
                Setting up business in KSA might seem hectic without legitimate
                support. From streamlining the group entities to ensuring
                high-end corporate governance, Beacon offers specialized
                solutions to run your business in Saudi Arabia and thrive in
                this competitive landscape.
              </p>
              <p className="mHeroDesc">
                Setting up business in KSA might seem hectic without legitimate
                support. From streamlining the group entities to ensuring
                high-end corporate governance, Beacon offers specialized
                solutions to run your business in Saudi Arabia and thrive in
                this competitive landscape.
              </p>
            </div>
            <a href="/pages/Services">
              <div className="hButtonContainer heroButton">
                <div className="visibleWrapperContainer">
                  <div className="topVisibleContainer btn">
                    Why Saudi
                    <div className="topVisibleArrow">
                      <Image
                        className="heroArrows"
                        src="/whiteArrow.svg"
                        width={21}
                        height={18}
                        alt="heroContact"
                      />
                    </div>
                  </div>
                  <div className="bottomVisibleContainer btn">
                    Why Saudi
                    <div className="bottomVisibleArrow">
                      <Image
                        className="heroArrows"
                        src="/whiteArrow.svg"
                        width={21}
                        height={18}
                        alt="heroContact"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        {/* </div> */}
      </div>
      {/* <div className="clientsImgContainer">
        <Brands
          imageSources={imageSources}
          initialAnimateValue="-160%"
          hoverDuration="180"
          duration="60"
        />
      </div> */}
    </div>
  );
}

export default Hero;
