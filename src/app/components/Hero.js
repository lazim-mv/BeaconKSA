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
        <h1 className="heroTitle">
          Launch and Expand Your Business In UAE with our Expertise
        </h1>
        <p className="heroDescription">
          We help you fulfill your entrepreneurial journey and dream business
          setup in UAE with support on tax and accounting to legal support and
          marketing.
        </p>
        <a href="/pages/Contact">
          <div className="hButtonContainer heroButton">
            <div className="visibleWrapperContainer">
              <div className="topVisibleContainer btn">
                Let&apos;s Talk
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
                Let&apos;s Talk
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
