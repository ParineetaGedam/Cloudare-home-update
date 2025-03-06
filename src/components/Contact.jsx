import React from "react";
import Button from "./Button";
import "../styles/contact.css";
const Contact = (props) => {
  if (props.trigger) {
    return (
      <div class="popup">
        <div class="popup-inner">
          <button className="close-btn" onClick={(e) => handleBtnClick(e)}>
            X
          </button>
          <form className="contact-box">
            <h2>Contact Us</h2>
            <input type="text" class="field" placeholder="Your Name" />
            <input type="text" class="field" placeholder="Your Email" />
            <textarea placeholder="Message" class="field"></textarea>
            <Button label="Send" />
          </form>
        </div>
      </div>
    );
  }
};
export default Contact;
