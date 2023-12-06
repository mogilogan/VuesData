import React, { useState } from "react";
import NavbarItems from "./NavbarItems";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="absolute top-[1rem] right-[1rem] z-[12] w-[100%] flex justify-end w-fit">
        <button
          className="w-[40px] h-[40px] rounded-[50%] border-none bg-[#c42c2c] cursor-pointer z-[1]"
          onClick={() => setToggle(!isToggled)}
        >
          =
        </button>
      </div>
      <div className="fixed top-[1rem] right-[1rem] z-[10] w-[100%] ">
        <AnimatePresence>
          {isToggled && (
            <motion.div
              className="w-[250px] h-[100vh] m-0 rounded-[16px] bg-gradient-to-t from-[#613030] text-rose-500"
              initial="hidden"
              animate={isToggled ? "visible" : "hidden"}
              exit="hidden"
              variants={navContainer}
            >
              <NavbarItems isToggled={isToggled} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
