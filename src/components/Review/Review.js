"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { twMerge } from "tailwind-merge";

import { testimonials } from "../../Data/ReviewData";

const Review = () => {
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "#FF0088",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  return (
    <div className="h-screen  flex flex-col antialiased  bg-slate-900 items-center justify-center relative overflow-hidden">
      <motion.p
        style={{ display: "inline-block" }}
        variants={item}
        className="text-3xl text-white text-left"
      >
        Reviews
      </motion.p>
      <InfiniteMovingCards direction="left" speed="40" />
    </div>
  );
};

export const InfiniteMovingCards = ({
  speed,
  direction,
  pauseOnHover = true,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        `${speed}s`
      );
    }
  };
  return (
    <div
      ref={containerRef}
      className="font-mono scroll relative z-20 group max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    >
      <ul
        ref={scrollerRef}
        className={twMerge(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {testimonials.map((testimonial, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {testimonial.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {testimonial.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {testimonial.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
