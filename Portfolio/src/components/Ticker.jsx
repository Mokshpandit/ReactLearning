import React from "react";
import { motion } from "framer-motion";

const Ticker = ({ images, from, to }) => {
  return (
    <div className="flex my-4 md:my-12 MyGradient overflow-x-hidden ">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className= "image h-20 p-3 m-3 md:m-5 md:h-40 md:w-56 md:p-5 drop-shadow-xl"  src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="image h-20 p-3 m-3 md:m-5 md:h-40 md:w-56 md:p-5 drop-shadow-xl " src={image} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default Ticker;