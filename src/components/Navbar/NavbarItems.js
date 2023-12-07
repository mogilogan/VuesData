import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ isToggled }) => {
  const items = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "Products",
      url: "#",
    },
    {
      name: "Apis",
      url: "/apis",
    },
    {
      name: "Contact",
      url: "#",
    },
  ];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.ul
        className="pt-[100px] pr-[70px] pb-[200px] pl-[70px]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {items.map((item, key) => (
          <motion.li
            className="text-xl text-white py-4 rounded cursor-pointer list-none"
            variants={navItem}
            key={key}
          >
            <Link to={`${item.url}`}>
              <p className="hover:text-red-800">{item.name}</p>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Navbar;
