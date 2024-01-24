"use client";
import Image from "next/image";
import React from "react";
import heroImg from "../../../public/hero.webp";

function Hero() {
  return (
    <div className="heroContainer">
      <Image
        className="hImage"
        src={heroImg}
        alt="Asian Engineer"
        width={1366}
        height={670}
        layout="responsive"
        quality={100}
        priority={true}
        unoptimized
      />
      <div className="heroContent">
        <h1 className="heroTitle">Setup Your Business in Saudi Arabia</h1>
        <p className="heroDescription">
          Setting up business in KSA might seem hectic without legitimate
          support. From streamlining the group entities to ensuring high-end
          corporate governance
        </p>
        <a href="/pages/Contact">
          <div className="hButtonContainer heroButton">
            <div className="visibleWrapperContainer">
              <div className="topVisibleContainer btn">
                Contact Us
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
                Contact Us
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
    </div>
  );
}

export default Hero;
