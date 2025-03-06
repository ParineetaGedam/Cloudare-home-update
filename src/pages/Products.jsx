import React from "react";
import "../styles/consulting.css";
import Navbar from "../components/Navbar";
// import CountrySelect from "../components/CountrySelect";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Service from "../components/Services";
import "../styles/LandscapeCard.css";
import "../styles/sliderzx.css";

import {
  PRODUCTS_OPTION,
  PRODUCT_FIRST_SLIDER,
  PRODUCT_SECOND_SLIDER,
  INDIA_FINANCE,
  CONSULT_SERVICES,
} from "../constant";
import Partners from "../components/Partners";
import ProductLanding from "../components/productLanding";
// import bg from "../assests/images/consult-landing.webp";
// import dot from "../assests/svg/dot.svg";
import Landing from "../components/Landing";
import project from "../assests/images/project.webp";
function Consultation() {
  return (
    <React.Fragment>
      <div className="layout">
        <div className="contact">
          <div className="call-detail"></div>
        </div>
        <Navbar />

        <ProductLanding
          title="Transform Your Business with"
          subtitle="Leading ERP Solutions"
          content="When selecting an ERP (Enterprise Resource Planning) solution, it's crucial to find a reliable and experienced SI (System Integrator) partner to ensure a successful implementation. Below are some key aspects to consider when evaluating SI partners for ERP implementations"
          label="Contact Us"
          trigger={true}
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149365029.jpg?t=st=1716803949~exp=1716807549~hmac=4dc386c06f225a4dd3d5ee996de8c5175a8de1f75f96960452f63b4796bf26f2&w=740"
          id={2}
        />
      </div>

      {/* <section className="announcement-sectionzx">
        <div className="containerzx">
          <div className="sliderzx">
            <div className="slideszx">
              <div className="cardzx card-1zx">
                <h3 className="h3zx">
                  E-Invoicing in Malaysia: A Complete Solution For Your Business
                </h3>
                <a href="/tax/my" target="_blank" className="read-nowzx">
                  Read now →
                </a>
              </div>
              <div className="cardzx card-2zx">
                <h3 className="h3zx">
                  E-Invoicing in KSA: A Complete Solution For Your Business
                </h3>
                <a href="/tax/ksa" target="_blank" className="read-nowzx">
                  Read now →
                </a>
              </div>
              <div className="cardzx card-3zx">
                <h3 className="h3zx">
                  Hiring in USA: A Complete Solution For Your Business
                </h3>
                <a href="/tax/us" target="_blank" className="read-nowzx">
                  Read now →
                </a>
              </div>
              
            </div>

            <div className="navigation-autozx">
              <div className="auto-btn1zx"></div>
              <div className="auto-btn2zx"></div>
              <div className="auto-btn3zx"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Partners list={CLIENTS} title="Enterprises and startups use Cloudare to scale their teams"/> */}
      <section className="services" style={{ marginTop: "74px" }}>
        <h1>Our Services </h1>
        <div className="card-container">
          {PRODUCTS_OPTION.map((item, idx) => {
            return (
              <ProductCard
                key={idx}
                product={item.product}
                desc={item.desc}
                img={item.src}
                popupDesc={item.popupDesc}
                cardNumber={item.cardNumber}
              />
            );
          })}
        </div>

        <Partners
          list={PRODUCT_FIRST_SLIDER}
          title="Enterprises and startups choose Cloudare as SI partner to scale their teams"
        />
        <Partners list={PRODUCT_SECOND_SLIDER} title="Our Clients" />

        <div className="achievement ">
          <div>
            <h1>500+</h1>
            <h5>Integration Done</h5>
          </div>
          <div>
            <h1>15-30 Days</h1>
            <h5>Timeline</h5>
          </div>
          <div>
            <h1>100%</h1>
            <h5>Satisfaction</h5>
          </div>
        </div>

        <div className="why-us" style={{marginTop:"35px"}}>
          {INDIA_FINANCE.map((data, i) => {
            return (
              <div key={i} className="cardl">
                <img
                  className="card-imagel"
                  alt="logo"
                  src={data.src}
                  width="30px"
                  height="30px"
                />
                <div className="card-contentl">
                  <h3 className="h3l">{data.title}</h3>
                  <p>{data.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <Cards title="" section={INDIA_FINANCE} id={1}/> */}
        {/* <Testimonial title="Middle East Finance" section={PAYROLL_BANNERS} id={1}/> */}

        <div className="consult-services">
          <Service service={CONSULT_SERVICES} stitle="How can we help?" />
        </div>

        <div className="box" id="background" style={{ marginTop: "60px" }}>
          <Landing
            title="Empower your business with Cloudare"
            label="Let's Talk"
            content="Got a project?"
            href="https://calendly.com/cloudare"
            src={project}
          />
        </div>
      </section>
      <div></div>

      <Footer />
    </React.Fragment>
  );
}

export default Consultation;
