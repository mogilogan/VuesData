import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";


import Logo from "../assets/Svgs/star_white_48dp.svg";




const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center text-white items-center overflow-x-hidden relative bg-slate-900">
      <div className="flex flex-col justify-center items-center">
        <img
          width="300"
          height="300"
          src={Logo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
          className="w-[10vw] h-auto "
        />
        <h3 data-scroll data-scroll-speed="-1">
          Vues Data
        </h3>
      </div>
      <motion.div
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
        className="w-[80vw]"
      >
        <ul className="[list-style:none] flex justify-between border-t-[1px] border-b-[1px] items-center flex-wrap m-8 mt-16 px-4 py-[0]">
          <li className="footerli" aria-hidden="true" onClick={() => handleScroll("#home")}>
            home
          </li>
          <li className="footerli" aria-hidden="true" onClick={() => handleScroll("#about")}>
            about
          </li>
          <li className="footerli" aria-hidden="true" onClick={() => handleScroll("#shop")}>
            apis
          </li>
          <li className="footerli" aria-hidden="true" onClick={() => window.open("https://vuesdata.github.io/#introductions", "_blank")}>
            documentation
          </li>
         
         
        </ul>
        <div className="px-[0] py-2 mx-16 my-[0] flex justify-between items-center">
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
           Contact: <br/>Sales and Support:
            vuesdata@gmail.com
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
          
            <a
            className="underline"
              href="#"
              target={"_blank"}
              rel="dofollow noreferrer"
            >
              LO
            </a>
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
