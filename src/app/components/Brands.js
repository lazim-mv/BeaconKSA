"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function Brands({ imageSources, initialAnimateValue  }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animateValue, setAnimateValue] = useState(initialAnimateValue );

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Set the animate value based on screen width
      const newAnimateValue = screenWidth < 600 ? initialAnimateValue  : "-200%";

      // Update the animate value only if it has changed
      if (newAnimateValue !== animateValue) {
        setAnimateValue(newAnimateValue);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set the initial animate value
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [animateValue]);

  const controls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      x: animateValue,
      transition: {
        repeat: Infinity,
        duration: 180, // Adjust the duration when hovering
        ease: "linear",
      },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      x: animateValue,
      transition: {
        repeat: Infinity,
        duration: 60, // Original duration
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    handleHoverEnd();
    console.log("use");
  }, []);
  return (
    <div>
      <motion.div
        className="scrolling-logos"
        initial={{ x: "0%" }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {imageSources.map((src, index) => (
          <Image
            key={index}
            quality={100}
            priority={true}
            unoptimized
            src={src}
            width={100}
            height={0}
            layout="responsive"
            alt="ImageClients"
            className="logoClients"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Brands;
