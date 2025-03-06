import React, { useState } from "react";
import { FAQs } from "../constant";
import "../styles/faq.css";
const FAQ = () => {
  const [id, setId] = useState(false);
  return (
    <section className="faq-section" id="faq">
      <div className="row">
        <h2>Frequently Asked Questions</h2>

        <div className="faq" id="accordion">
          {FAQs.map((data, i) => {
            return (
              <div key={i} className="fcard">
                <div className="fcard-header">
                  <h5
                    className="faq-title"
                    onClick={() => {
                      setId(data.id);
                    }}
                  >
                    <span className="badge">{data.id}</span>
                    <p>{data.ques}</p>
                  </h5>
                </div>
                {id === i + 1 && (
                  <div className="fcard-body">
                    <p>{data.ans}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
