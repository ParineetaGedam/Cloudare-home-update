import React from "react";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";

import { WHY_US, BENEFITS, PARTNERS, CLIENTS_TESTIMONIALS } from "../constant";
import Button from "../components/Button";

import Timeline from "../components/Timeline";
import FAQ from "../components/FAQ";
import dot from "../assests/svg/dot.svg";

import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import hiretalent from "../assests/images/hire-talent.webp";
import tick from "../assests/images/tick1.png";
import "../styles/hire.css";

const HireTalent = () => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <Landing
          title="Hire Top talent to build innovative solutions."
          content="We help you source, vet, manage the world’s best talent."
          label="Hire Talent"
          trigger={true}
          src={hiretalent}
          id={1}
        />
      </div>
      <div
        style={{
          overflow: "hidden",
          textAlign: "center",
          padding: "0px 0",
          animation: "slideInUp 2s",
          marginTop: "50px",
        }}
      >
        <h2>Enterprises and startups choose Cloudare to scale their teams</h2>
      </div>
      <Partners list={PARTNERS} className="custom-partners" />
      <div className="box" id="work">
        {BENEFITS.map((item, idx) => {
          return (
            <div key={idx} className="box-item">
              <h4>{item.title}</h4>
              <div className="inner-item">
                <img src={tick} alt="logo" style={{ paddingRight: "14px" }} />

                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="why-us"
        style={{
          display: "flex",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {WHY_US.map((data, i) => {
          return (
            <div key={i} className="card">
              <img className="card-image" src={data.src} alt="logo" />
              <div className="card-content">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-description">{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="achievement ">
        <div>
          <h1>500+</h1>
          <h5>Resources Placed</h5>
        </div>
        <div>
          <h1>2 Days</h1>
          <h5>Average time to match</h5>
        </div>
        <div>
          <h1>100%</h1>
          <h5>Satisfaction</h5>
        </div>
      </div>
      <div className="box">
        <div className="tbox">
          <div className="header-text">
            <h2>
              Build your dream team with our wide range of specialities to cater
              to your requirements
            </h2>
            <a href="/files/proposal.pdf">
              <Button label="About Cloudare" />
            </a>
          </div>
          <Timeline />{" "}
        </div>{" "}
      </div>
      <div className="driven-skill">
        <div className="header-text">
          <h1>What skills will drive your vision? </h1>
        </div>
        <div className="skill-content">
          <div>
            <h3>IT Skills</h3>
            <div class="tags">
              <div className="broker-tag">Devops</div>
              <div className="broker-tag">React js</div>
              <div className="broker-tag">Android</div>
              <div className="broker-tag">Swift</div>
              <div className="broker-tag">Python</div>
            </div>
          </div>
          <div>
            <h3>Non-IT Skills</h3>
            <div class="tags">
              <div className="broker-tag">Sales</div>
              <div className="broker-tag">Marketing</div>
              <div className="broker-tag">Product Management</div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial
        title="Why our Clients Believe in US"
        section={CLIENTS_TESTIMONIALS}
        id={1}
      />
      <div className="box">
        <FAQ />
      </div>

      <Footer />
    </>
  );
};
export default HireTalent;
