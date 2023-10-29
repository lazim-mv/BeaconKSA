"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ScrollingLogos } from "./Clients";
import Brands from "./Brands";

function Hero() {
  const imageSources = [
    "/clients/newBrands/1.svg",
    "/clients/newBrands/2.svg",
    "/clients/newBrands/3.svg",
    "/clients/newBrands/4.svg",
    "/clients/newBrands/5.svg",
    "/clients/newBrands/6.svg",
    "/clients/newBrands/1.svg",
    "/clients/newBrands/2.svg",
    "/clients/newBrands/3.svg",
    "/clients/newBrands/4.svg",
    "/clients/newBrands/5.svg",
    "/clients/newBrands/6.svg",
    "/clients/newBrands/1.svg",
    "/clients/newBrands/2.svg",
    "/clients/newBrands/3.svg",
    "/clients/newBrands/4.svg",
    "/clients/newBrands/5.svg",
    "/clients/newBrands/6.svg",
    "/clients/newBrands/1.svg",
    "/clients/newBrands/2.svg",
    "/clients/newBrands/3.svg",
    "/clients/newBrands/4.svg",
    "/clients/newBrands/5.svg",
    "/clients/newBrands/6.svg",
    "/clients/newBrands/1.svg",
    "/clients/newBrands/2.svg",
    "/clients/newBrands/3.svg",
    "/clients/newBrands/4.svg",
    "/clients/newBrands/5.svg",
    "/clients/newBrands/6.svg",
    // Add more image sources as needed
  ];

  return (
    <div className="heroContainer">
      <div className="imageWithText">
        <Image
          className="hImage"
          src="/hero.png"
          alt="Asian Engineer"
          width={1366}
          height={670}
          layout="responsive"
          quality={100}
          priority={true}
          unoptimized
        />
        <Image
          className="MobilehImage"
          src="/hero.png"
          alt="Asians Engineer"
          width={0}
          height={600}
          layout="responsive"
          quality={100}
          priority={true}
          unoptimized
        />
        <div className="textOverlay">
          <div>
            <h1 className="heorHeading">
              Launch and Expand
              <br /> Your Business In UAE <br /> with our Expertise
            </h1>
          </div>
          <div className="heroDescContainer">
            <p className="heroDesc">
              We help you fulfill your entrepreneurial journey and dream
              <br />
              business setup in UAE with support on tax and accounting to
              <br /> legal support and marketing.
            </p>
            <p className="mHeroDesc">
              We help you fulfill your entrepreneurial journey and dream
              business setup in UAE with support on tax and accounting to legal
              support and marketing.
            </p>
          </div>
          <a href="/pages/Services">
            <div className="hButtonContainer heroButton">
              <div className="visibleWrapperContainer">
                <div className="topVisibleContainer btn">
                  Why Dubai
                  <div className="topVisibleArrow">
                    <Image
                      src="/blueArrow.svg"
                      width={21}
                      height={21}
                      alt="heroContact"
                    />
                  </div>
                </div>
                <div className="bottomVisibleContainer btn">
                  Why Dubai
                  <div className="bottomVisibleArrow">
                    <Image
                      src="/blueArrow.svg"
                      width={21}
                      height={21}
                      alt="heroContact"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* <div className="clientsImgContainer">
        <Brands imageSources={imageSources} initialAnimateValue ="-160%" />;
      </div> */}
    </div>
  );
}

export default Hero;