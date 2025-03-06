import React from "react";
import "./../../styles/consulting.css";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import ProductCard from "./../../components/ProductCard";
import Service from "./../../components/Services";
import "./../../styles/LandscapeCard.css";
import "./../../styles/my.css";

import {
  PRODUCTS_OPTION,
  PRODUCT_FIRST_SLIDER,
  PRODUCT_SECOND_SLIDER,
  INDIA_FINANCE,
  Malaysia_Clients_SLIDER,
  CONSULT_SERVICES,
} from "./../../constant";
import Partners from "./../../components/Partners";
import ProductLanding from "./../../components/productLanding";
import bg from "./../../assests/images/consult-landing.webp";
import dot from "./../../assests/svg/dot.svg";
import Landing from "./../../components/Landing";
import project from "./../../assests/images/project.webp";
function Consultation() {
  return (
    <React.Fragment>
      <div className="layout">
        <div className="contact">
          <div className="call-detail"></div>
        </div>
        <Navbar />
        <ProductLanding
          title="Get LHDN Compliant with"
          subtitle="Cloudare E-Invoicing Solutions"
          content="Cloudare E-Invoicing Solutions seamlessly aligns with LHDN's guidelines and is MDEC accredited. We offer the best B2B & B2C E-invoicing software solutions in the market - for Phase 1, 2 & 3 businesses"
          label="Contact Us"
          trigger={true}
          src="https://img.freepik.com/free-vector/paying-bills-concept-illustration_114360-19357.jpg?t=st=1722495818~exp=1722499418~hmac=1d506ad79695d49ea7f24049fd4e17acf915be7677f475fce229115dc811241a&w=740"
          id={2}
        />
      </div>
      <div class="containery" style={{marginTop:'150px'}}>
        <h2 className="h2y">Trusted by 10+ Malaysia Businesses</h2>
        <div className="statsy">
          <div className="staty">
            <span className="stat-valuey">$2M+</span>
            <span className="stat-descriptiony">
              E-invoices generated till date
            </span>
          </div>
          {/* <div class="staty">
            <span className="stat-valuey">0.1M+</span>
            <span className="stat-descriptiony">
              E-invoices generated till date
            </span>
          </div> */}
          <div class="staty">
            <span className="stat-valuey">99.2%</span>
            <span className="stat-descriptiony">
              E-invoice success generation rate
            </span>
          </div>
        </div>
      </div>
      <div class="containerz" style={{marginTop:"30px"}}>
        <h2 className="h2z">E-invoicing and Beyond</h2>
        <div class="featuresz">
          <div class="featurez">
            <img
              src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/657029efcef80a621257db4d_Group%201814218991.svg"
              alt="Self E-Invoices for Key Scenarios"
              className="imgz"
            />
            <h3 className="h3z">Self E-Invoices for Key Scenarios</h3>
            <p className="pz">
              Compliant e-invoicing for agents, foreign purchases, e-commerce,
              dividends, taxes, and gaming payouts.
            </p>
          </div>
          <div class="featurez">
            <img
              src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/657029ef1dcdf92f753452aa_Group%201814218993.svg"
              alt="Reconciliation between IRBM and your system"
              className="imgz"
            />
            <h3 className="h3z">Reconciliation between IRBM and your system</h3>
            <p className="pz">
              AI-driven engine flags discrepancies, ensuring sales & purchase
              reconciliation between IRBM server and your system.
            </p>
          </div>
          <div class="featurez">
            <img
              src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/657029eff58cb94f7ab88fdb_Group%201814218987.svg"
              alt="B2C Customer Portal"
              className="imgz"
            />
            <h3 className="h3z">B2C Customer Portal</h3>
            <p className="pz">
              Let your customers easily generate LHDN compliant invoices with a
              simple form. Invoices sync seamlessly to Cloudare for easy
              consolidation. Archive, retrieve, and manage invoices with ease.
            </p>
          </div>
        </div>
      </div>


      {/* Changes by - Parineeta Gedam  Date- 25/02/2025*/}
      <br/> <br/> <br/> <br/>
      <Partners list={Malaysia_Clients_SLIDER} title="Our Clients" />
      {/* End of  the code */}

      <div className="containerx" style={{marginTop:"12px"}}>
        <h2 className="h2x">Why choose Cloudare for Malaysia e-Invoicing?</h2>
        <div className="featuresx">
          <div className="rowx">
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/65703ed8a8b62b2093f1a6cf_Group%201814218642.svg"
                  alt="Always stay compliant"
                  className="imgx"
                />
                <h3 className="h3x">Always stay compliant</h3>
                <p className="px">
                  Auto-upgrades for new govt. changes without any internal
                  hassle
                </p>
              </div>
            </div>
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/657040810e5b1af606b843f9_Group%201000002259.svg"
                  alt="Dedicated support team"
                  className="imgx"
                />
                <h3 className="h3x">Dedicated support team</h3>
                <p className="px">
                  1-1 account manager for any compliance/technical queries
                </p>
              </div>
            </div>
          </div>
          <div className="rowx">
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/657040b00f5e2868cdeb30c6_Group%201814218615.svg"
                  alt="Smart integration service with any number/type of system"
                  className="imgx"
                />
                <h3 className="h3x">
                  Smart integration service with any number/type of system
                </h3>
                <p className="px">Go live with minimal business disruption</p>
              </div>
            </div>
            <div class="columnx">
              <div className="featurex">
                <img
                  src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/657040495e3f3235f8358b2e_Group%201814218975.svg"
                  alt="24/7 compliance with 99.99% uptime"
                  className="imgx"
                />
                <h3 className="h3x">24/7 compliance with 99.99% uptime</h3>
                <p className="px">
                  Reliable API stack with auto-scaling & backup servers
                </p>
              </div>
            </div>
          </div>
          <div className="rowx">
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/6570409a70616eb02017f12d_Group%201000002593.svg"
                  alt="Seamless integration"
                  className="imgx"
                />
                <h3 className="h3x">
                  Error free e-invoices with 99.98% success rate
                </h3>
                <p className="px">
                  Smart automations with 150+ data validations & auto-retrials
                </p>
              </div>
            </div>
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/65704064d64519a9ddf9009b_Group%201000002195.svg"
                  alt="Real-time updates"
                  className="imgx"
                />
                <h3 className="h3x">
                  Value added features to ease transition to e-invoice era
                </h3>
                <p className="px">
                  E-invoice vs Sales/ Purchase invoice reconciliation & Data
                  analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerw">
        <h2 className="h2w">Easy Tax Reconciliation & Filing</h2>
        <p className="descriptionw">
          We automate the process of collating data from multiple sources,
          reconciling data between source data & E-Invoice data and presenting
          results in a simple format for the action of tax teams.
        </p>
        <div className="featuresw">
          <div className="featurew">
            <img
              src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/65c0a6217e4ae2e81d2ca9a2_Group%201814218620.svg"
              alt="Automated data upload and reconciliation"
              className="imgw"
            />
            <h3 className="h3w">Automated data upload and reconciliation</h3>
            <p className="pw">
              Direct data upload from accounting books (GL) followed by
              reconciliation
            </p>
          </div>
          <div className="featurew">
            <img
              src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/65c0a6217e4ae2e81d2ca9a4_Invoice%20Digitisation.svg"
              alt="Speed and Scalability"
              className="imgw"
            />
            <h3 className="h3w">Speed and Scalability</h3>
            <p className="pw">
              Handle any volume effortlessly reconcile up to 10 million
              documents within just 15 minutes.
            </p>
          </div>
          <div className="featurew">
            <img
              src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/65c0a6217e4ae2e81d2ca9a5_Quick%20Approvals.svg"
              alt="Reconcile with 95%+ accuracy"
              className="imgw"
            />
            <h3 className="h3w">Reconcile with 95%+ accuracy</h3>
            <p className="pw">
              {" "}
              Identify mismatches and missing data between E-inv and sales data
              with an accuracy greater than 95%.
            </p>
          </div>
          <div className="featurew">
            <img
              src="https://cdn.prod.website-files.com/6141e3720a248d2024615d96/65c0a6217e4ae2e81d2ca9a3_Group%201814218621.svg"
              alt="Flexible and Configurable"
              className="imgw"
            />
            <h3 className="h3w">Flexible and Configurable</h3>
            <p className="pw">
              Reconciliation rules and thresholds that confirm to business needs
              and is easy to use.
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
                What is e-invoicing in Malaysia?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">E-invoicing is a digital alternative to paper invoices. E-invoicing is being implemented in many countries worldwide, and Malaysia is no exception in embracing this innovation. The e-invoice Model introduced by the Inland Revenue Board of Malaysia (IRBM) aims to make processes simpler, increase effectiveness, and minimise te­dious tasks for businesses.</p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq2" />
            <label for="faq2" className="faq-questionq">
            What are the features of Cloudare e-invoicing software? Why should you consider Cloudare e-invoicing software for your business?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">Cloudare is your one-stop solution for seamless e-invoicing compliance in Malaysia. Cloudare e-invoicing software offers various features to simplify and streamline your e-invoicing process:
                  <br />
i) Businesses will get personalised guidance and support from our Dedicated Account Manager. <br />
ii) Stay rest assured with Cloudare's rigorous data validation process as we ensure 99.99% accuracy in e-invoice generation. <br />
iii) Businesses can effortlessly integrate our software with over 50 ERP systems using our web APIs, achieving compliance within 4-6 weeks. You will not have to change a single line of code. <br />
iv) Businesses can also secure their e-invoice data for up to 7 years on our SLA-backed cloud servers, ensuring data integrity and accessibility. <br />
v) Beyond basic support, we provide value-added services to enhance your e-invoicing experience. Analyse your spending and sales patterns, generate error reports, create QR codes, and leverage convenient B2C e-invoice options via WhatsApp or SMS. <br /> Partner with Cloudare and transform e-invoicing compliance from complex to effortless in Malaysia. </p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq3" />
            <label for="faq3" className="faq-questionq">
            How to comply with the e-invoicing mandate in Malaysia?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">You can comply with the e-invoicing mandate in Malaysia by carrying out these activities: <br />
i) Assess applicability: Before diving into e-invoicing, consider whether it's mandatory for your business or if you're choosing to adopt it voluntarily. Next, examine your current invoicing process and identify opportunities to save time and money. <br />
ii) E-invoicing solution: Choose an e-invoicing solution that fits your needs and budget and which can be easily integrated with your ERP system like Cloudare. <br />
iii) Train your staff: Prepare your team on how to use the new e-invoicing system. They'll need to know how to create, send, and track e-invoices. 
By taking these steps, you can make sure your business is ready for the switch to e-invoices. <br /></p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq4" />
            <label for="faq4" className="faq-questionq">
            How does e-invoicing help Malaysia?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">The introduction of e-invoices in Malaysia will revolutionize the way businesses operate and boost the overall economy. It will make businesses more efficient, save them money, and help the whole economy run better. Businesses that adopt e-invoices will be ahead of the curve. By digitizing invoices, businesses can streamline processes, minimise paperwork, and record transactions with enhanced accuracy. </p>
            </div>
        </div>

        <div className="faq-itemq">
            <input type="checkbox" id="faq5" />
            <label for="faq5" className="faq-questionq">
            Is e-invoicing in Malaysia mandatory for me?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">To ensure a smooth transition and provide ample time for adoption, e-Invoicing implementation will be done in phases. Initially, e-Invoicing adoption will be based on the annual turnover or revenue (based on audited financial statements for 2022).However, e-Invoicing will become mandatory for all taxpayers from 1st July 2025, regardless of their sales volume.</p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq6" />
            <label for="faq6" className="faq-questionq">
            How to choose the right e-invoicing solution for your business in Malaysia?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">To make the switch to e-invoicing smoother, the Inland Revenue Board of Malaysia (IRBM) has created two ways to send e-invoices: <br />

MyInvois Portal: MyInvois Portal is a web-based portal that allows businesses to generate and submit invoices individually or upload them in bulk. This method is ideal for small businesses with a low volume of transactions.
API: API integration allows businesses to connect their existing ERP system directly with the IRB's system, enabling automated e-invoice transmission. This method is suitable for large businesses with a high volume of transactions. There are three different types of API model: <br />
i) Connect your business's ERP system directly to MyInvois. <br />
ii) Use a Peppol service provider. <br />
iii) Use a non-Peppol technology provider. <br /> <br />
Choosing the Right Method
The best method for your business will depend on your specific needs and transaction volume. If you have a small business with a low volume of transactions, the MyInvois Portal is a simple and affordable option. However, if you have a large business with a high volume of transactions, API integration is a more efficient and scalable solution</p>
            </div>
        </div>

    </div>

    


      <Footer />
    </React.Fragment>
  );
}



export default Consultation;
