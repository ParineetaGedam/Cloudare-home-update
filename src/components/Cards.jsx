import React, { useState } from "react";
import Reviews from "./Reviews";
import axios from "axios";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

// import required modules
export const Cards = ({ title, section, id }) => {
  const [review, setReview] = useState(false);
  const [uname, setUname] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post("https://cloudareapi.herokuapp.com/review", {
      user: uname,
      position: position,
      company: company,
      message: message,
      id: id,
    });
    setUname("");
    setCompany("");
    setPosition("");
    setMessage("");
    setSubmit(true);
    setTimeout(() => {
      setReview(false);
      setSubmit(false);
    }, 3000);
  };
  return (
    <div className="cards">
      <h1>{title}</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        loop={true}
        centerSlide={true}
        fade={true}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {section.map((data, i) => {
          return (
            <SwiperSlide key={i}>
              <Reviews
                rname={data.rname}
                rtitle={data.rtitle}
                content={data.content}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {review && (
        <div className="feedback">
          <div className="popup">
            <div className="popup-inner">
              <button className="close-btn" onClick={() => setReview(false)}>
                X
              </button>

              {submit ? (
                <form className="contact" onSubmit={(e) => handleSubmit(e)}>
                  <h3>
                    Thanks for your review! <br />
                    We will definitely get back to you.
                  </h3>
                </form>
              ) : (
                <form className="contact" onSubmit={(e) => handleSubmit(e)}>
                  <h2>Review</h2>
                  <input
                    type="text"
                    class="field"
                    placeholder="Name"
                    onChange={(e) => setUname(e.target.value)}
                    value={uname}
                  />
                  <input
                    type="text"
                    class="field"
                    placeholder="Position"
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                  />
                  {id === 1 && (
                    <input
                      type="text"
                      class="field"
                      placeholder="Company"
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                    />
                  )}
                  <textarea
                    placeholder="Message"
                    class="field"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cards;
