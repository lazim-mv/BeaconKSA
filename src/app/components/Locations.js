"use client";
import Image from "next/image";
import React, { useState } from "react";

function Locations() {
  const [isHovered, setIsHovered] = useState(false);

  const imageSrc = isHovered ? "/whiteArrow.svg" : "/blackArrow.svg";
  return (
    <div className="locationContainer">
      <div className="locationFlexContainer">
        <div className="locationImgContainer">
          <Image
            src="/location.webp"
            width={500}
            height={500}
            alt="ImageLocation"
            layout="responsive"
            quality={100}
            priority={true}
            unoptimized
          />
        </div>
        <div className="locationContentContainer">
          <div>
            <h2 className="locationHeading">
              Set Your Business with the
              <br /> Best Investment Potential
            </h2>
            <h2 className="locationHeading mlocationHeading">
              Set Your Business with the
              <br /> Best Investment Potential
            </h2>
          </div>
          <div>
            <p className="locationDesc">
              Saudi Arabia is one of the most competitive and dominant countries
              in the Middle East which has great investment potential. With an
              extensive scope for innovation, we provide services that encourage
              running a successful business with specialized guidance on
              administrative, legal, technological, and marketing aspects. We
              give you the right business incorporation assistance with
              necessary guidance through the entire process while making sure it
              adheres to all the required steps efficiently. This encourages you
              to exercise ease of doing business, enjoy 100% business ownership,
              leverage financial and regulatory incentives, and experience
              streamlined processes. Being your trusted incorporation experts,
              we take true responsibility for your business setup and establish
              your company in Saudi Arabia.
            </p>
          </div>
          <a className="locationButton" href="/pages/Services">
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
      </div>
    </div>
  );
}

export default Locations;
