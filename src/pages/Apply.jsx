import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import { WHY_CLOUDARE, DEV, DEVELOPERS_TESTIMONIALS } from "../constant";
import Partners from "../components/Partners";
import dot from "../assests/svg/dot.svg";
import applyjob from "../assests/images/applyjob.webp";
import Testimonial from "../components/Testimonial";
import "../styles/hire.css";

export default function Apply() {
  return (
    <React.Fragment>
      <div className="layout">
        <Navbar />
        <Landing
          title="Get Jobs with Top Global Companies"
          content="Connecting your talent with the opportunities that you’re actually interested in."
          href="https://job.cloudare.in/jobs/Careers"
          label="Apply Now"
          src={applyjob}
        />
        <div
          style={{
            overflow: "hidden",
            textAlign: "center",
            padding: "0px 0",
            animation: "slideInUp 2s",
            marginTop: "100px",
          }}
        >
          <h2>Access jobs with the world’s leading entrprises</h2>
        </div>
        <Partners list={DEV} />
        <section className="box">
          <h1
            style={{
              textAlign: "center",
              padding: "2% 0",
              fontWeight: "400",
              fontFamily: "Ember",
            }}
          >
            Why choose to work with Cloudare
          </h1>
          <div className="why-usa">
            {WHY_CLOUDARE.map((data, i) => {
              return (
                <div key={i} className="carda">
                  <img className="card-image" src={data.src} alt="logo" />
                  <div className="card-content">
                    <h3 className="card-title">{data.title}</h3>
                    <p className="card-description">{data.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <Testimonial
          title="Why our Developers Love Us"
          section={DEVELOPERS_TESTIMONIALS}
          id={2}
        />{" "}
      </div>
      <Footer />
    </React.Fragment>
  );
}
