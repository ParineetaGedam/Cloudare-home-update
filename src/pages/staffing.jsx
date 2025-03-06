import React from "react";
import "../styles/consulting.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Service from "../components/Services";
import "../styles/LandscapeCard.css";
import "../styles/my.css";
import "../styles/us.css";

import {
  PRODUCTS_OPTION,
  PRODUCT_FIRST_SLIDER,
  PRODUCT_SECOND_SLIDER,
  INDIA_FINANCE,
  CONSULT_SERVICES,
} from "../constant";
import Partners from "../components/Partners";
import ProductLanding from "../components/productLanding";
import bg from "../assests/images/consult-landing.webp";
import dot from "../assests/svg/dot.svg";
import Landing from "../components/Landing";
import project from "../assests/images/project.webp";
import bgUsa from "../assests/images/usa-first.png";

import Clover from "../assests/logo/Usa_Logos/Clover_Infotech.png";
import Liquidity from "../assests/logo/Usa_Logos/Liquidity_services.webp";
import Think from "../assests/logo/Usa_Logos/Think_Perfect.webp";
import Wia from "../assests/logo/Usa_Logos/Wia_System.webp";
import Innova from "../assests/logo/Usa_Logos/Innova.webp";


import hire from "../assests/logo/hire.png";
import cost from "../assests/logo/cost.png";
import transparency from "../assests/logo/transparency.png";
import speaker from "../assests/logo/speaker.png";
import matched from "../assests/logo/matched.png";
import skills from "../assests/logo/skills.png";
import software from "../assests/logo/software.png";
import sales from "../assests/logo/sales.png";
import marketing from "../assests/logo/marketing.png";
import product from "../assests/logo/product.png";

function Consultation() {
  const imageStyle = {
    maxWidth: "100%",
    height: "440px",
    marginTop: "35px",
  };

  const featurexStyle = {
    marginTop: "38px",
  };
  return (
    <React.Fragment>
      <div className="layout">
        <div className="contact">
          <div className="call-detail"></div>
        </div>
        <Navbar />
        <ProductLanding
          title="Unlock Top-tier Talent to Drive Innovation and"
          subtitle="Powering Your Success with Elite Talent"
          content="We specialize in sourcing, vetting, and managing the world’s leading professionals, connecting you with the best talent to fuel your business growth and drive innovative solutions."
          label="Contact Us"
          trigger={true}
          src={bgUsa}
          id={2}
        />
      </div>
      <div class="containery" style={{ marginTop: "-120px" }}>
        <h2 className="h2y">Trusted by 7+ Businesses</h2>
        <div className="statsy">
          <div className="staty">
            <span className="stat-valuey">20+</span>
            <span className="stat-descriptiony">Resources Placed</span>
          </div>
          <div class="staty">
            <span className="stat-valuey">2 Days</span>
            <span className="stat-descriptiony">Average time to match</span>
          </div>
          <div class="staty">
            <span className="stat-valuey">100%</span>
            <span className="stat-descriptiony">Satisfaction Rate</span>
          </div>
        </div>
      </div>
      {/* <div className="e-invoicing-sectiont">
        <div className="contentt">
          <h1 className="h1t">
            Get Phase II <br /> compliant <br /> e-invoicing solution
          </h1>
          <ul className="ult">
            <li className="lit">
              Cloud based product for facilitating generation of e-invoices as
              per ZATCA guidelines
            </li>
            <li className="lit">
              Seamless government interactions with auto-retries, translation,
              and other value-added features
            </li>
            <li className="lit">
              e-Archival as a service for data storage and retrieval as per the
              government guidelines
            </li>
          </ul>
        </div>
        <div className="image-containert">
          <img
            src="https://img.freepik.com/premium-vector/online-tax-payment-concept_86047-175.jpg?w=740"
            className="imgt"
            alt="Data archival on Saudi Arabia based cloud servers"
          />
         
        </div>
      </div> */}

      {/* <div className="e-invoicing-sectiont">
        <div className="contentt">
          <h1 className="h1t">
            How does Cloudare <br /> integrate with your <br /> ERP or POS?{" "}
          </h1>
          <ul className="ult">
            <li className="lit">
              Cloudare’s restful API’s will integrate into your ERP or POS with
              minimal to no change
            </li>
            <li className="lit">
              Automatically register hundreds of ERP/POS in single click with
              ZATCA and receive cryptographic stamp for each device
            </li>
            <li className="lit">
              APIs will act as a middleware connecting the ERP/POS and ZATCA
              system ensuring 100% e-invoicing compliance
            </li>
            <li className="lit">
              On invoice finalization, our API automatically sends invoice data
              to Cloudare cloud platform for conversion to ZATCA e-invoice
            </li>
          </ul>
        </div>
        <div className="image-containert">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-erp-illustration_23-2149388659.jpg?t=st=1725879282~exp=1725882882~hmac=da21dbe0c71147f80230da7d60f9d17aca616536fe114ad442daddff9d1b0c3f&w=740"
            className="imgt"
            alt="Data archival on Saudi Arabia based cloud servers"
            style={imageStyle}
          />
          
        </div>
      </div> */}

      <section className="wow-section-horizontal" style={{marginTop:"25px"}}>
        <div className="wow-content-horizontal">
          <div className="left-horizontal">
            <h2>Build Your Dream Team</h2>
            <p className="wow-text-horizontal">
              With a wide range of specialities to cater to your needs.
            </p>
            {/* <a href="#" className="cta-button-horizontal">Learn More About Cloudare</a> */}
          </div>

          <div className="steps-horizontal">
            <div className="step-horizontal bg-step1">
              <div className="step-details-horizontal">
                <h2>Tell Us Your Skillset Needs</h2>
                <p>
                  Fill out a short form, and we’ll call to understand your
                  requirements.
                </p>
              </div>
            </div>
            <div className="step-horizontal bg-step2">
              <div className="step-details-horizontal">
                <h2>We Find The Best Talent</h2>
                <p>Get a list of pre-vetted candidates within 2 days.</p>
              </div>
            </div>
            <div className="step-horizontal bg-step3">
              <div className="step-details-horizontal">
                <h2>Schedule Interviews</h2>
                <p>Select and interview the candidates that fit your needs.</p>
              </div>
            </div>
            <div className="step-horizontal bg-step4">
              <div className="step-details-horizontal">
                <h2>Start Deployment</h2>
                <p>
                  Kickstart your project with a no-risk, 2-week trial period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-sectionksa" style={{marginTop:"-30px"}}>
        <h2 className="h2ksa" style={{marginBottom:"45px"}}>Our Clients</h2>
        <div className="clients-sliderksa">
          <div className="clientsksa">
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Clover} alt="Raychem Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Liquidity} alt="Mindzie Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Think} alt="Religare Logo" style={{width:"50px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%",marginLeft:"-10px"}}>
              <img src={Innova} alt="Raychem Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Wia} alt="Seertree Logo" style={{width:"100px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Clover} alt="Client 5 Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Liquidity} alt="Client 6 Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Think} alt="Client 7 Logo" style={{width:"50px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%",marginLeft:"-10px"}}>
              <img src={Innova} alt="Raychem Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Wia} alt="Client 8 Logo" style={{width:"100px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Clover} alt="Client 9 Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Liquidity} alt="Client 10 Logo" style={{width:"120px"}} className="imgksa" />
            </div>

            <div className="clientksa" style={{width:"8%"}}>
              <img src={Think} alt="Raychem Logo" style={{width:"50px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%",marginLeft:"-10px"}}>
              <img src={Innova} alt="Raychem Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Wia} alt="Mindzie Logo" style={{width:"100px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Clover} alt="Religare Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Liquidity} alt="Seertree Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Think} alt="Client 5 Logo" style={{width:"50px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%",marginLeft:"-10px"}}>
              <img src={Innova} alt="Raychem Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Wia} alt="Client 6 Logo" style={{width:"100px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Clover} alt="Client 7 Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Liquidity} alt="Client 8 Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Think} alt="Client 9 Logo" style={{width:"50px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%",marginLeft:"-10px"}}>
              <img src={Innova} alt="Raychem Logo" style={{width:"120px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Wia} alt="Client 10 Logo" style={{width:"100px"}} className="imgksa" />
            </div>
            <div className="clientksa" style={{width:"8%"}}>
              <img src={Clover} alt="Religare Logo" style={{width:"120px"}} className="imgksa" />
            </div>
          </div>
        </div>
      </section>

      <div className="containerx" style={{marginTop:"-20px"}}>
        <h2 className="h2x">Cloudare: Tailored Staffing Solutions </h2>
        <div className="featuresx">
          <div className="rowx">
            <div className="columnx">
              <div className="featurex">
                <img src={hire} alt="Always stay compliant" className="imgx" />
                <h3 className="h3x">Hire with confidence</h3>
                <p className="px">
                  If you are not happy with the profiles, you pay nothing
                </p>
              </div>
            </div>
            <div className="columnx">
              <div className="featurex">
                <img src={speaker} className="imgx" />
                <h3 className="h3x">Fluent English Speakers</h3>
                <p className="px">
                  Excellent communicators who take ownership of business and
                  product objectives
                </p>
              </div>
            </div>
          </div>
          <div className="rowx">
            <div className="columnx">
              <div className="featurex">
                <img src={cost} className="imgx" />
                <h3 className="h3x">High quality/cost ratio</h3>
                <p className="px">High caliber talent at 8-12.5% of the CTC</p>
              </div>
            </div>
            <div class="columnx">
              <div className="featurex">
                <img
                  src={matched}
                  alt="24/7 compliance with 99.99% uptime"
                  className="imgx"
                />
                <h3 className="h3x">Ensure quick turnarounds</h3>
                <p className="px">
                  Get matched with highly compatible talent within 2 days
                </p>
              </div>
            </div>
          </div>
          <div className="rowx" style={{ marginTop: "-13px" }}>
            <div className="columnx">
              <div className="featurex">
                <img src={transparency} className="imgx" />
                <h3 className="h3x" style={{ marginRight: "-10px" }}>
                  Get full transparency
                </h3>
                <p className="px">View work history, portfolios and more</p>
              </div>
            </div>
            <div className="columnx">
              <div className="featurex">
                <img src={skills} alt="Real-time updates" className="imgx" />
                <h3 className="h3x">100+ skills available</h3>
                <p className="px">
                  Hire IT skills like Oracle, SAP, React, Node, Python, Angular,
                  Swift, React Native, Android, Java, DevOps, ML, and Non-IT
                  like Sales, PMO etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerw">
        <h2 className="h2w">What skills will drive your vision?</h2>
        {/* <p className="descriptionw">
          We automate the process of collating data from multiple sources,
          reconciling data between source data & E-Invoice data and presenting
          results in a simple format for the action of tax teams.
        </p> */}
        <div className="featuresw">
          <div className="featurew">
            <img
              src={software}
              alt="Automated data upload and reconciliation"
              className="imgw"
            />
            <h3 className="h3w">Software Development</h3>
            <p className="pw">
              We hiring IT candidates, a balanced combination of technical
              prowess, analytical thinking, soft skills, and a commitment to
              continuous learning is essential.
            </p>
          </div>
          <div className="featurew">
            <img src={sales} alt="Speed and Scalability" className="imgw" />
            <h3 className="h3w">Sales</h3>
            <p className="pw">
              Hire sales candidates with experience, strong communication
              skills, and a customer-focused approach. Assess motivation and fit
              through interviews and reference checks.
            </p>
          </div>
          <div className="featurew">
            <img
              src={marketing}
              alt="Reconcile with 95%+ accuracy"
              className="imgw"
            />
            <h3 className="h3w">Marketing</h3>
            <p className="pw">
              {" "}
              Hire marketing candidates with relevant experience, strong
              communication skills, and creativity. Assess analytical skills and
              cultural fit through interviews and portfolio reviews.
            </p>
          </div>
          <div className="featurew">
            <img
              src={product}
              alt="Flexible and Configurable"
              className="imgw"
            />
            <h3 className="h3w">Product Management</h3>
            <p className="pw">
              Select product management candidates with relevant experience,
              excellent communication abilities, and strategic thinking.
              Evaluate their prioritization skills and teamwork through
              interviews and practical exercises.
            </p>
          </div>
        </div>
      </div>

      {/* <Partners list={CLIENTS} title="Enterprises and startups use Cloudare to scale their teams"/> */}
      <section className="services">
        {/* <Cards title="" section={INDIA_FINANCE} id={1}/> */}
        {/* <Testimonial title="Middle East Finance" section={PAYROLL_BANNERS} id={1}/> */}

        <div className="consult-services">
          <Service service={CONSULT_SERVICES} stitle="How can we help?" />
        </div>
      </section>

      <div className="faq-sectionq">
        <h2 className="h2q">FAQs</h2>
        <div className="faq-itemq">
          <input type="checkbox" id="faq1" />
          <label for="faq1" className="faq-questionq">
            How long does it take to hire resources?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="faq-answerq">
            <p className="pq">
              The answer varies widely by type of position. Usually, the more
              entry-level, the quicker, while the more senior, technical, or
              executive, the longer it takes. Entry-level roles with no
              prerequisites might take a couple of weeks, on average, while
              management roles could take several months—or longer. We have a
              solution for this! With a team having expertise in several domains
              in recruitment, we can get the entire process completed within 15
              – 20 days.
            </p>
          </div>
        </div>
        <div className="faq-itemq">
          <input type="checkbox" id="faq2" />
          <label for="faq2" className="faq-questionq">
            Who takes responsibility for managing the employee?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="faq-answerq">
            <p className="pq">
              Once we deploy a candidate to a client, the candidate will be the
              whole sole responsibility of the client. Cloudare stands nowhere
              in between the client & the candidate for resolving issues related
              to attendance, performance, etc.
            </p>
          </div>
        </div>
        <div className="faq-itemq">
          <input type="checkbox" id="faq3" />
          <label for="faq3" className="faq-questionq">
            Can you provide the same resource on contract basis too?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="faq-answerq">
            <p className="pq">
              Yes, we can provide the same resource. However, the budget will be
              different which we can be discussed.
            </p>
          </div>
        </div>
        <div className="faq-itemq">
          <input type="checkbox" id="faq4" />
          <label for="faq4" className="faq-questionq">
            How does the payment cycle work?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="faq-answerq">
            <p className="pq">
              The payment cycle will be NET 30 days after the candidate
              successfully joins the client. However, this can be altered from
              case to case basis.
            </p>
          </div>
        </div>

        <div className="faq-itemq">
          <input type="checkbox" id="faq5" />
          <label for="faq5" className="faq-questionq">
            What if our CTC percentage budget is less?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="faq-answerq">
            <p className="pq">
              Here also, you don’t have to worry. We have experts working with
              us who can ideally get candidates within your budget. You can rely
              on us!
            </p>
          </div>
        </div>
        <div className="faq-itemq">
          <input type="checkbox" id="faq6" />
          <label for="faq6" className="faq-questionq">
            What if none of the resources are shortlisted by our Hiring team?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="faq-answerq">
            <p className="pq">
              The answer is: we have never faced such issues, as our team works
              in such a fantastic manner, that within two slots of profiles,
              even your niche profile will get closed.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Consultation;
