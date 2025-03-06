import React, { useState } from 'react';
import { DEV, CLIENTS, PARTNERS } from "../constant"
import "../styles/home.css"
const Partners = (props) => {

  //   return (
  //     <section className="partners">
  //         <h2>{props.title}</h2>
  //         <div  className="slider">
  //           <div  className="slide-track">
  //            {/* <Carousals/> */}
  //             {props.list.map((logo,i)=>{return(
  //             <div key={i} className="slide"><img src={logo}  width="150px" alt={logo}/></div>
  //         )})}
  //         </div>
  //         </div>
  //     </section>
  //   )
  // }
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle the previous slide
  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? props.list.length - 1 : prev - 1));
  // };

  // // Function to handle the next slide
  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === props.list.length - 1 ? 0 : prev + 1));
  // };

  return (
    <section className="partners" style={{ marginTop: "-21px" }}>
      <h2 style={{ marginBottom: "-9px" }}>{props.title}</h2>
      <div className="slider">
        <div className="slide-track"
          style={{ transform: `translateX(-${currentSlide * 150}px)` }}
        >
          {/* Duplicate the carousel items to create an infinite loop */}
          {props.list.map((logo, i) => {
            return (
              <div key={i} className="slide">
                <img src={logo} width="150px" alt={logo} />
              </div>
            );
          })}
          {props.list.map((logo, i) => {
            return (
              <div key={i + props.list.length} className="slide">
                <img src={logo} width="150px" alt={logo} />
              </div>
            );
          })}
          {/* Changes by - Parineeta Gedam  Date- 25/02/2025  */}
          {props.list.map((logo, i) => {
            return (
              <div key={i + props.list.length} className="slide">
                <img src={logo} width="150px" alt={logo} />
              </div>
            );
          })}
          {/* End of  the code */}
        </div>
      </div>
      {/* <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button> */}
    </section>
  );
};

export default Partners
