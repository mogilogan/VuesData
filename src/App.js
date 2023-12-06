import "locomotive-scroll/dist/locomotive-scroll.css";
import "./input.css";

import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

// import ScrollTriggerProxy from "./components/elements/ScrollTriggerProxy";

import Footer from "./sections/Footer";
import Home from "./sections/Home";

import Cards from "./components/Cards/Cards";

function App() {
  // useLocoScroll();
  const containerRef = useRef(null);

  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {" "}
              <main className="App" data-scroll-container ref={containerRef}>
                <AnimatePresence>
                  <Home key="home" />

                  <Footer key="Footer" />
                </AnimatePresence>
              </main>
            </>
          }
        />
        <Route
          path="/apis"
          element={
            <>
              <Cards />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
