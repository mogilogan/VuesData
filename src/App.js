import "locomotive-scroll/dist/locomotive-scroll.css";
import "./input.css";

import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Loader from "./components/Home/Loader";
import ScrollTriggerProxy from "./components/elements/ScrollTriggerProxy";

import Footer from "./sections/Footer";
import Home from "./sections/Home";

import Cards from "./components/Cards/Cards";

function App() {
  // useLocoScroll();
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {" "}
              <LocomotiveScrollProvider
                options={{
                  smooth: true,
                  smartphone: {
                    smooth: true,
                  },
                  tablet: {
                    smooth: true,
                  },
                }}
                containerRef={containerRef}
              >
                <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
                <main className="App" data-scroll-container ref={containerRef}>
                  <ScrollTriggerProxy />
                  <AnimatePresence>
                    {Loaded ? null : <Loader />}

                    <Home key="home" />

                    <Footer key="Footer" />
                  </AnimatePresence>
                </main>
              </LocomotiveScrollProvider>
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
