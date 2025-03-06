import { React, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PARTNERS } from "./Partners";
const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const carousel1 = useRef();
  useEffect(() => {
    console.log(
      carousel.current.scrollWidth,
      carousel.current.clientWidth,
      200 * PARTNERS.length
    );
    setWidth(carousel.current.scrollWidth - 1000);
  });
  return (
    <section className="partners">
      <h1>Companies that trust Cloudare</h1>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {/* <Carousals/>  */}
          {PARTNERS.map((logo, i) => {
            return (
              <motion.div key={i} className="item">
                <img src={logo} width="150px" alt={PARTNERS[i]} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Slider;
