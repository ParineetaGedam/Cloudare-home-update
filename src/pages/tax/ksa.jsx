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
  CONSULT_SERVICES,
} from "./../../constant";
import Partners from "./../../components/Partners";
import ProductLanding from "./../../components/productLanding";
import bg from "./../../assests/images/consult-landing.webp";
import dot from "./../../assests/svg/dot.svg";
import Landing from "./../../components/Landing";
import project from "./../../assests/images/project.webp";


import Algosibi from "./../../assests/logo/ksa_Logos/Algosibi.png"
import Alqureshi from "./../../assests/logo/ksa_Logos/Alqureshi.jpeg"
import SRG from "./../../assests/logo/ksa_Logos/SRG-removebg.png"
import Yamama from "./../../assests/logo/ksa_Logos/Yamama.jpeg"
import cenomi from "./../../assests/logo/ksa_Logos/cenomi.png"
import government from "./../../assests/logo/ksa_Logos/government-ae-logo-english.png"
import shift from "./../../assests/logo/ksa_Logos/shift.png"
import signify from "./../../assests/logo/ksa_Logos/signify-logo.webp"

// changes by - Parineeta Gedam Date - 25-02-2023
import knighFrank from "./../../assests/logo/ksa_Logos/knigh-frank.png"
import savvyGamesLogo from "./../../assests/logo/ksa_Logos/savvy-games-logo.svg"
import benchmark from "./../../assests/logo/ksa_Logos/benchmark.jpg"
// End of the code

function Consultation() {
  const imageStyle = {
    maxWidth: '100%',
    height: '440px',
    marginTop: '35px'
  };

  const featurexStyle = {
    marginTop: '38px'
  };
  return (
    <React.Fragment>
      <div className="layout">
        <div className="contact">
          <div className="call-detail"></div>
        </div>
        <Navbar />
        <ProductLanding
          title="Saudi Arabia's Best Choice"
          subtitle="for Seamless and Reliable Zatca E-Invoicing"
          content="Our ZATCA compliant solution is developed for all Phase II waves & integrates with any ERP - making us the most sought after cloud e-invoicing Solutions in the market."
          label="Contact Us"
          trigger={true}
          src="https://img.freepik.com/free-vector/money-loan-contract-e-payment-application-finances-management_335657-3150.jpg?t=st=1724304421~exp=1724308021~hmac=9251c8fdea47ceec6112c25d5d1718539a885089e4b8e69322dcf60e88032d74&w=900"
          id={2}
        />
      </div>
      <div class="containery" style={{marginTop:"-100px"}}>
        <h2 className="h2y">Trusted by 10+ Saudi Arabia Businesses</h2>
        <div className="statsy">
          <div className="staty">
            <span className="stat-valuey">$2.5M+</span>
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
      <div className="e-invoicing-sectiont">
        <div className="contentt">
            <h1 className="h1t">Get Phase II <br /> compliant <br /> e-invoicing solution</h1> 
            <ul className="ult">
                <li className="lit">Cloud based product for facilitating generation of e-invoices as per ZATCA guidelines</li>
                <li className="lit">Seamless government interactions with auto-retries, translation, and other value-added features</li>
                <li className="lit">e-Archival as a service for data storage and retrieval as per the government guidelines</li>
            </ul>
        </div>
        <div className="image-containert">
            <img src="https://img.freepik.com/premium-vector/online-tax-payment-concept_86047-175.jpg?w=740" className="imgt" alt="Data archival on Saudi Arabia based cloud servers" />
            {/* <p className="pt">Data archival on Saudi Arabia based cloud servers</p> */}
        </div>
    </div>

    <div className="e-invoicing-sectiont">
        <div className="contentt">
            <h1 className="h1t">How does Cloudare <br /> integrate with your <br /> ERP or POS? </h1> 
            <ul className="ult">
                <li className="lit">Cloudare’s restful API’s will integrate into your ERP or POS with minimal to no change</li>
                <li className="lit">Automatically register hundreds of ERP/POS in single click with ZATCA and receive cryptographic stamp for each device</li>
                <li className="lit">APIs will act as a middleware connecting the ERP/POS and ZATCA system ensuring 100% e-invoicing compliance</li>
                <li className="lit">On invoice finalization, our API automatically sends invoice data to Cloudare cloud platform for conversion to ZATCA e-invoice</li>

            </ul>
        </div>
        <div className="image-containert">
            <img src="https://img.freepik.com/free-vector/hand-drawn-erp-illustration_23-2149388659.jpg?t=st=1725879282~exp=1725882882~hmac=da21dbe0c71147f80230da7d60f9d17aca616536fe114ad442daddff9d1b0c3f&w=740" className="imgt" alt="Data archival on Saudi Arabia based cloud servers" style={imageStyle} />
            {/* <p className="pt">Data archival on Saudi Arabia based cloud servers</p> */}
        </div>
    </div>

    <section className="clients-sectionksa" style={{marginTop:"30px"}}>
      <h2 className="h2ksa">Our Clients</h2>
      <div className="clients-sliderksa">
        <div className="clientsksa">
          <div className="clientksa">
            <img
              src={Algosibi}
              alt="Raychem Logo"
              className="imgksa"
            />
          </div>

          {/* changes by - Parineeta Gedam Date - 25-02-2023 */}
          <div className="clientksa">
            <img
              src={benchmark}
              alt="Benchmark"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={knighFrank}
              alt="knigh-Frank"
              className="imgksa"
              style={{width:'200px'}}
            />
          </div>
          <div className="clientksa">
            <img
              src={savvyGamesLogo}
              alt="Savvy-Games-Logo"
              className="imgksa"
              style={{width:'180px'}}
            />
          </div>
          {/* End of the code */}

          <div className="clientksa">
            <img
              src={Alqureshi}
              alt="Mindzie Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={SRG}
              alt="Religare Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
               src={Yamama}
              alt="Seertree Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={cenomi}
              alt="Client 5 Logo"
              className="imgksa"
              style={{width:'120px'}}
            />
          </div>
          <div className="clientksa">
            <img
              src={government}
              alt="Client 6 Logo"
              className="imgksa"
              style={{width:'120px'}}
            />
          </div>
          <div className="clientksa">
            <img
              src={shift}
              alt="Client 7 Logo"
              className="imgksa"
              style={{width:'120px'}}
            />
          </div>
          <div className="clientksa">
            <img
              src={signify}
              alt="Client 8 Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={Algosibi}
              alt="Client 9 Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={Alqureshi}
              alt="Client 10 Logo"
              className="imgksa"
            />
          </div>

         
          <div className="clientksa">
            <img
              src={SRG}
              alt="Raychem Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={Yamama}
              alt="Mindzie Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={cenomi}
              alt="Religare Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={government}
              alt="Seertree Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={shift}
              alt="Client 5 Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={signify}
              alt="Client 6 Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={Algosibi}
              alt="Client 7 Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={Alqureshi}
              alt="Client 8 Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={SRG}
              alt="Client 9 Logo"
              className="imgksa"
            />
          </div>
          <div className="clientksa">
            <img
              src={Yamama}
              alt="Client 10 Logo"
              className="imgksa"
            />
          </div>
        </div>
      </div>
    </section>

      <div className="containerx">
        <h2 className="h2x">Why choose Cloudare for Saudi Arabia e-Invoicing?</h2>
        <div className="featuresx">
          <div className="rowx">
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1662450248_group18144741.svg"
                  alt="Always stay compliant"
                  className="imgx"
                />
                <h3 className="h3x">Data validations to avoid penalty</h3>
                <p className="px">
                150+ smart data validations to ensure invoice data is as per ZATCA regulations therefore rendering error-free invoices
                </p>
              </div>
            </div>
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1662450139_group18144750.svg"
                  alt="Dedicated support team"
                  className="imgx"
                />
                <h3 className="h3x">PDF A/3 invoice with XML</h3>
                <p className="px">
                Cloudare adds Phase II QR code & certified XML into existing invoice to generate final PDF A/3 invoice
                </p>
              </div>
            </div>
          </div>
          <div className="rowx">
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1662450239_group18144746.svg"
                  alt="Smart integration service with any number/type of system"
                  className="imgx"
                />
                <h3 className="h3x">
                ZATCA compliant XML generation
                </h3>
                <p className="px"> Cloudare generates UUID, Invoice Hash, Invoice Counter Value, QR code & converts invoice into UBL 2.1 XML format</p>
              </div>
            </div>
            <div class="columnx">
              <div className="featurex">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1662450130_group18144766.svg"
                  alt="24/7 compliance with 99.99% uptime"
                  className="imgx"
                />
                <h3 className="h3x">Electronic exchange of Invoice</h3>
                <p className="px">
                Share final PDF A/3 invoice with your customer through Cloudare automatic email APIs
                </p>
              </div>
            </div>
          </div>
          <div className="rowx" style={{ marginTop: '-13px' }}>
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1662450230_group18144748.svg"
                  alt="Seamless integration"
                  className="imgx"
                />
                <h3 className="h3x" style={{ marginRight: '-10px' }}>
                Reporting through ZATCA Integration
                </h3>
                <p className="px">
                Cloudare integrates with ZATCA to get clearance/report XML invoice & receives certified XML back from ZATCA
                </p>
              </div>
            </div>
            <div className="columnx">
              <div className="featurex">
                <img
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1662450113_group18144756.svg"
                  alt="Real-time updates"
                  className="imgx"
                  
                />
                <h3 className="h3x">
                KSA Cloud based e-invoice storage
                </h3>
                <p className="px">
                e-Invoice data archival upto 6 years on SLA based cloud servers
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
            What is e-invoicing?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">e-Invoicing is a procedure that aims to convert invoicing process from paper into electronic mode. The <br /> e-invoicing process allows exchanging and processing invoices, credit notes, and debit notes in a structured electronic format between buyer and seller using an integrated e-invoicing solution.</p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq2" />
            <label for="faq2" className="faq-questionq">
            When will e-invoicing (FATOORAH) be implemented?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">e-Invoicing (FATOORAH) will be implemented in two phases :
                   <br /> <br />

Phase 1 (Generation Phase) - Applicable form December 4, 2021 <br />
Phase 2 (Integration Phase) - Applicable starting from January 1, 2023 and implemented in waves. Date of integration will be notified ZATCA at least 6 <br />months in advance.</p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq3" />
            <label for="faq3" className="faq-questionq">
            How do I prepare for the technical requirements of e-invoicing (FATOORAH)?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">The technical requirements are typically implemented by solution providers (like Cloudare) or the internal technical teams for in-house built solutions. <br />Taxpayers can approach us to update to a compliant electronic system and make sure that you are generating compliant invoices starting from December 4, 2021.</p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq4" />
            <label for="faq4" className="faq-questionq">
            To whom does the second phase of e-invoicing in Saudi Arabia or Fatoorah apply?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">ZATCA notified the two waves under phase 2 of e-invoicing. VAT-registered businesses with more than SAR 3 billion fall under wave 1 (w.e.f 1st January 2023), and more than SAR 500 million turnover in 2021 falls under wave 2 (w.e.f 1st July 2023).</p>
            </div>
        </div>

        <div className="faq-itemq">
            <input type="checkbox" id="faq5" />
            <label for="faq5" className="faq-questionq">
            How do I create an electronic invoice in Saudi Arabia?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">You must integrate your ERP/POS/accounting system with ZATCA's Fatoora portal using compliant e-invoicing software to generate <br /> phase 2 compliant e-invoices.</p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq6" />
            <label for="faq6" className="faq-questionq">
            How does e-invoicing help Saudi Arabia?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">e-Invoicing enhances transparency in commercial transactions. Also, it leads to data standardisation, seamless trade, speedy communication, faster <br />payments and reduced costs.</p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq7" />
            <label for="faq7" className="faq-questionq">
            Which Solution is best for e-invoicing?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">Cloudare e-invoicing Solution is best for e-invoicing in Saudi Arabia. Cloudare provides ZATCA phase 2-compliant e-invoicing Solution that easily integrates any ERP/POS and generates PDF/A3 e-invoices.</p>
            </div>
        </div>

        <div className="faq-itemq">
            <input type="checkbox" id="faq8" />
            <label for="faq8" className="faq-questionq">
            Is e-invoicing in Saudi Arabia mandatory for me?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">e-Invoicing in Saudi Arabia applies to all taxpayers registered under VAT and any other parties issuing tax invoices on behalf of suppliers subject to VAT. <br /> However, non-resident taxpayers of KSA are excluded from the e-invoicing initiative.</p>
            </div>
        </div>
        <div className="faq-itemq">
            <input type="checkbox" id="faq9" />
            <label for="faq9" className="faq-questionq">
            What does an e-invoice look like and how is it different from current invoices?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">For Phase 1 (December 4, 2021), format of the e-invoices is similar to that of current tax invoices, with some additional fields - <br /> <br />

1. For Simplified tax invoices (issued for B2C transactions) - Mandatory to add QR codes <br />
2. For Tax invoices (issued for B2B transactions) - Mandatory to add VAT number of buyer if the buyer is a registered VAT payer and Optional to add QR code No specific file format has been specified for Phase 1, but they must be issued from an electronic system meeting ZATCA’s requirements. Also, electronic copies <br />of all invoices must be stored by the taxpayer.</p>
            </div>
        </div>


        <div className="faq-itemq">
            <input type="checkbox" id="faq10" />
            <label for="faq10" className="faq-questionq">
            When to issue an e-invoice vs a standard invoice?
                <i className="fas fa-chevron-down"></i>
            </label>
            <div className="faq-answerq">
                <p className="pq">e-Invoices shall be issued for all tax invoices including export sales and other zero-rated supplies. Credits and debit notes should also be provided electronically. <br /> E-invoicing is not applicable for Exempt supplies, Import of goods and Supplies under reverse charge mechanism.</p>
            </div>
        </div>


    </div>

    


      <Footer />
    </React.Fragment>
  );
}



export default Consultation;
