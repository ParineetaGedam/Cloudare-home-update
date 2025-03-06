import React from "react";
import "../styles/consulting.css";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import ServiceCard from "../components/ServiceCard";
import { SERVICES_OPTION, CONSULT_SERVICES, CLIENTS } from "../constant";
import Service from "../components/Services";
import bg from "../assests/images/consult-landing.webp";
import project from "../assests/images/project.webp";

function Consultation() {
  return (
    <React.Fragment>
      <div className="layout">
        <div className="contact">
          <div className="call-detail"></div>
        </div>
        <Navbar />
        <Landing
          title="Your Business"
          subtitle="Our Solutions."
          content="Build simplified, efficient businesses with Cloudare"
          label="Contact Us"
          trigger={true}
          src={bg}
          id={2}
        />
      </div>
      <Partners
        list={CLIENTS}
        title="Enterprises and startups use Cloudare to scale their teams"
      />
      <section className="services">
        <h1>Our Services</h1>
        <div className="card-container">
          {SERVICES_OPTION.map((item, idx) => {
            return (
              <ServiceCard
                key={idx}
                service={item.service}
                desc={item.desc}
                img={item.src}
              />
            );
          })}
        </div>

        <div className="consult-services">
          <Service service={CONSULT_SERVICES} stitle="How can we help?" />
        </div>
        <div className="box" id="background">
          <Landing
            title="Empower your business with Cloudare"
            label="Let's Talk"
            content="Got a project?"
            href="https://calendly.com/cloudare"
            src={project}
          />
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Consultation;
