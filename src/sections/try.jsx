import "./style.css";
import { useRef } from "react";
import {
 motion,
 useScroll,
 useSpring,
 useTransform,
 useMotionValue,
 useVelocity,
 useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 } = {}) {
 const baseX = useMotionValue(0);
 const { scrollY } = useScroll();
 const scrollVelocity = useVelocity(scrollY);
 const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
 });
 const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: true
 });
 const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

 const directionFactor = useRef(1);
 const prevT = useRef(0);
 useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;

    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
 });

 return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
 );
}

export default function Try() {
 return (
    <section style={{paddingTop:'20vh',paddingBottom:'20vh',position:'relative',width:'100%'}}>
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
    </section>
 );
}