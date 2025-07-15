import React from "react";
// import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsApp.css"; // Create this CSS file
import whatsappIcon from "../assests/logo/whatsapp-Icon.png";

export default function WhatsAppContact() {
  return (
    <div className="whatsapp-contact">
      <a
        href="https://wa.me/916473703375"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        {/* <FaWhatsapp className="whatsapp-icon" /> */}
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
        {/* <span className="whatsapp-text">(+91) 64737-03375</span> */}
      </a>
    </div>
  );
}
