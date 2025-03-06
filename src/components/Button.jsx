import React, { useState } from "react";
import "../styles/button.css";
import "../styles/contact.css";
import axios from "axios";

const Button = (props) => {
  const [trigger, setTrigger] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [submit, setSubmit] = useState(false);

  const handleSubmit = async () => {
    console.log(props.id);
    axios
      .post("https://cloudareapi.herokuapp.com/send", {
        user: username,
        email: email,
        phone: phone,
        message: message,
        id: props.id,
      })
      .then((res) => {
        setSubmit(true);
      })
      .catch((err) => {
        setSubmit(true);
      });
    setTimeout(() => {
      setTrigger(false);
      setSubmit(false);
    }, 2000);
  };
  const handleBtnClick = () => {
    if (!trigger) {
      setTrigger((prev) => !prev);
    } else {
      setTrigger((prev) => !prev);
    }
  };
  const validateEmail = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(e.target.checkValidity());
  };
  const validatePhone = (e) => {
    setPhone(e.target.value);
    // setIsValidPhone(e.target.checkValidity());
  };
  if (props.trigger) {
    return (
      <>
        <button
          id={props.id}
          type="submit"
          className="btn"
          onClick={() => handleBtnClick()}
        >
          {props.label}
        </button>
        {trigger && (
          <div className="popup">
            <div className="popup-inner">
              <button className="close-btn" onClick={() => handleBtnClick()}>
                X
              </button>
              {submit ? (
                <>
                  <h2 className="contact">Thank You!</h2>
                  <h5>We will contact you shortly</h5>
                </>
              ) : (
                <form className="contact" onSubmit={() => handleSubmit()}>
                  <h2>Contact Us</h2>
                  <input
                    type="text"
                    className="field"
                    placeholder="Your Name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />

                  <input
                    type="email"
                    className="field"
                    placeholder="Your Email"
                    onChange={validateEmail}
                    value={email}
                    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                    required
                  />
                  {!isValidEmail && (
                    <span id="error">
                      Must match standard email format xxx@xxx.xxx
                    </span>
                  )}
                  <input
                    type="tel"
                    className="field"
                    placeholder="Your Phone"
                    onChange={validatePhone}
                    value={phone}
                  />
                  {/* {!isValidPhone && (
                    <span id="error">
                      Must match standard phone format
                    </span>
                  )} */}

                  <textarea
                    placeholder="Message"
                    className="field"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  ></textarea>
                  <button type="submit" className="btn">
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <button
        id={props.id}
        type="submit"
        className="btn"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
  }
};
export default Button;
