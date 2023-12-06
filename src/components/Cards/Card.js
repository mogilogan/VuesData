import { motion } from "framer-motion";
import { useRef } from "react";

const Card = ({ Description, free, pro, ultra, mega, url, title, img }) => {
  return (
    <section className=" w-full px-4 py-12">
      <div className="mx-auto w-full">
        <SquishyCard
          Description={Description}
          free={free}
          pro={pro}
          ultra={ultra}
          mega={mega}
          url={url}
          title={title}
          img={img}
        />
      </div>
    </section>
  );
};

const SquishyCard = ({
  Description,
  free,
  pro,
  ultra,
  mega,
  url,
  title,
  img,
}) => {
  const Ref = useRef(null);
  return (
    <motion.div
      whileHover="hover"
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      style={{ backgroundImage: `url(${img})` }}
      className={`relative t h-96 w-80 cards shrink-0 min-w-[80%] max-w-[80%]   rounded-xl p-8`}
    >
      <div className="relative z-10 text-white ">
        <div className="dropdown">
          <button className="dropbtn bg-red-500 px-4 py-4 rounded-lg">
            PRICES
          </button>
          <div className="dropdown-content px-4 py-4">
            <p href="#">{free}</p>
            <p href="#">{pro}</p>
            <p href="#">{ultra}</p>
            <p href="#">{mega}</p>
          </div>
        </div>

        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-2xl font-black text-[#ad3a3a] leading-[1.2]"
        >
          {title}
        </motion.span>
        <p className="text-[0.8rem] sm:text-lg">{Description}</p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Get it now
      </button>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default Card;
