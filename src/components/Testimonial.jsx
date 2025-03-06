import React, { useState } from 'react';
import Reviews from './Reviews';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

export const Testimonial = ({ title, section, id }) => {
  const [review, setReview] = useState(false);
  const [uname, setUname] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (uname.trim() === '' || position.trim() === '' || message.trim() === '') {
      setFormError(true);
      return;
    }

    // If all mandatory fields are filled, proceed with form submission
    try {
      await axios.post('https://cloudareapi.herokuapp.com/review', {
        user: uname,
        position: position,
        company: company,
        message: message,
        id: id,
      });

      setUname('');
      setCompany('');
      setPosition('');
      setMessage('');
      setSubmit(true);

      setTimeout(() => {
        setReview(false);
        setSubmit(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting review:', error);
      // You can handle the error as needed
    }
  };

  return (
    <div className="testimonials" style={{marginTop:"-50px"}}>
      <h1 style={{marginBottom:"-25px"}}>{title}</h1>

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
              <Reviews rname={data.rname} rtitle={data.rtitle} content={data.content} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="subheading">
        <h2>We would love to hear your experience with Cloudare</h2>
        <button type="submit" className="btn" onClick={() => setReview(true)}>
          Leave a Review
        </button>
      </div>
      {review && (
        <div className="feedback">
          <div className="popup">
            <div className="popup-inner">
              <button className="close-btn" onClick={() => setReview(false)}>
                X
              </button>

              {submit ? (
                <form className="contact">
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
                    className="field"
                    placeholder="Name"
                    onChange={(e) => setUname(e.target.value)}
                    value={uname}
                    required
                  />
                  <input
                    type="text"
                    className="field"
                    placeholder="Position"
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    required
                  />
                  {id === 1 && (
                    <input
                      type="text"
                      className="field"
                      placeholder="Company"
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                    />
                  )}
                  <textarea
                    placeholder="Message"
                    className="field"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  ></textarea>
                  {formError && <p className="error-message">Please fill out all mandatory fields.</p>}
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

export default Testimonial;
