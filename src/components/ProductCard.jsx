import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/productCard.css";
import "../styles/card.css";
import { CCloseButton } from "@coreui/react";
const ProductCard = ({ product, desc, img, popupDesc, cardNumber }) => {
  return (
    <Popup
      trigger={
        <div className="card">
          <img src={img} alt="icon" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{product}</h2>
            <p className="card-description">{desc}</p>
          </div>
        </div>
        // <div className="service-box select-box">
        //   <img className="icon" src={img} alt="icon" />
        //   <h3>{product}</h3>
        //   <p>{desc}</p>
        // </div>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal main-scroll">
          <div className="main-content">
            {cardNumber === "FIRST" && (
              <>
                <div class="two">
                  <h4>
                    <b>Vendor Payment Blocking based on 2A/2B</b>

                    <span>
                      <br></br>
                      Vendor Payment Blocking refers to a system implemented by
                      organizations to ensure compliance with regulatory
                      requirements and prevent unauthorized or fraudulent
                      payments to vendors. It involves a thorough review and
                      verification process before releasing payments to vendors
                      or suppliers.
                    </span>
                  </h4>
                </div>

                <div class="two">
                  <h4>
                    <h3>Vendor Verification:</h3>
                    <span>
                      During Step 2A, we perform a comprehensive verification of
                      the vendor's information. This includes validating the
                      vendor's identity, confirming their legitimacy, and
                      reviewing any contractual agreements or terms of service.
                      Our team meticulously examines the vendor's documentation
                      and conducts due diligence to ensure compliance with all
                      regulatory requirements.
                    </span>
                    <span>
                      The purpose of Step 2A is to establish a strong foundation
                      for vendor relationships and to mitigate any potential
                      risks associated with unauthorized vendors or suppliers.
                      By verifying the vendor's credentials and legitimacy, we
                      minimize the possibility of fraudulent activities and
                      safeguard your business's financial interests.
                    </span>
                  </h4>
                </div>

                <div class="two">
                  <h4>
                    <h3>Invoice Verification:</h3>
                    <span>
                      Once the vendor has successfully completed Step 2A, we
                      proceed to Step 2B, which focuses on verifying the
                      accuracy and legitimacy of the vendor's invoices. Our team
                      meticulously reviews each invoice, comparing it against
                      the agreed-upon terms, purchase orders, and contractual
                      obligations.
                    </span>
                    <span>
                      During this stage, we also verify the quality and quantity
                      of the goods or services provided by the vendor. This
                      ensures that the invoice aligns with the actual delivery
                      and that you are paying for what was agreed upon. By
                      conducting thorough invoice verification, we protect your
                      business from overpayment, incorrect charges, or
                      discrepancies in invoicing.
                    </span>
                  </h4>
                </div>

                <div class="two">
                  <h4>
                    <span>
                      <h3>
                        Implementing a vendor payment blocking process based on
                        2A/2B offers several key benefits for your business:
                      </h3>
                    </span>
                    <span>&#x2022; Enhanced Security</span>
                    <span>&#x2022; Mitigated Financial Risks</span>
                    <span>&#x2022; Improved Compliance</span>
                    <span>&#x2022; Streamlined Operations</span>
                  </h4>
                </div>
              </>
            )}

            {cardNumber === "SECOND" && (
              <>
                <div class="two">
                  <h4>
                    <b>Benefits of GST Sales and Purchase Integration:</b>
                    <h3>1. Time and Effort Savings:</h3>
                    <span>
                      By automating the sales and purchase data entry process,
                      GST integration eliminates the need for manual data entry
                      and reduces the risk of errors. This saves valuable time
                      and effort for your employees, allowing them to focus on
                      more productive tasks.
                    </span>
                    <h3>2. Real-time Reporting:</h3>
                    <span>
                      Integration enables real-time data synchronization between
                      your financial system and the GST portal. This ensures
                      that your sales and purchase information is always up to
                      date, providing you with accurate insights into your tax
                      liabilities and compliance status.
                    </span>
                    <h3>3. Improved Accuracy and Compliance:</h3>
                    <span>
                      With GST integration, the chances of errors and
                      discrepancies in your GST filings are significantly
                      reduced. The automation eliminates manual data entry
                      errors, ensuring accurate reporting and compliance with
                      GST regulations. This helps you avoid penalties and fines
                      associated with non-compliance.
                    </span>
                    <h3>4. Streamlined Workflow:</h3>
                    <span>
                      By integrating your sales and purchase processes with the
                      GST system, you can streamline your entire workflow. From
                      generating invoices to recording purchases, all relevant
                      data is seamlessly transferred between systems, reducing
                      duplication of effort and enhancing overall efficiency.
                    </span>
                    <h3>5. Enhanced Decision Making:</h3>
                    <span>
                      Accurate and timely information is crucial for effective
                      decision making. With GST sales and purchase integration,
                      you have access to real-time data on sales, purchases, and
                      tax liabilities. This empowers you to make informed
                      business decisions based on up-to-date financial
                      information.
                    </span>
                    <h3>How We Can Help:</h3>
                    <span>
                      At <b>Cloudare Technology</b>, we specialize in providing
                      comprehensive GST sales and purchase integration solutions
                      tailored to your business needs. Our team of experienced
                      professionals will work closely with you to understand
                      your requirements and design a customized integration
                      strategy.
                    </span>
                    <h3>We offer:</h3>
                    <span>&#x2022; Software Integration</span>
                    <span>&#x2022; Customization and Configuration</span>
                    <span>&#x2022; Training and Support</span>
                    <span>&#x2022; Compliance Monitoring</span>
                    <span>&#x2022; Ongoing Maintenance</span>
                    <br></br>
                    <span>
                      <b>
                        Transform Your Business with GST Sales and Purchase
                        Integration:
                      </b>{" "}
                      Don't let the complexities of GST transactions hold your
                      business back. With our GST sales and purchase integration
                      services, you can automate and optimize your processes,
                      save time, improve accuracy, and ensure compliance.
                      Contact us today to schedule a consultation and take your
                      business to new heights with streamlined GST integration.
                    </span>
                  </h4>
                </div>
              </>
            )}

            {cardNumber === "THIRD" && (
              <>
                <div class="two">
                  <h4>
                    <b>E-Invoicing/ EWB Generation</b>
                    <span>
                      <br></br>
                      Welcome to our website! We provide seamless integration
                      solutions for e-invoicing and e-way bill (EWB) generation,
                      streamlining your business processes and improving
                      efficiency. With our advanced technology and expertise, we
                      ensure a hassle-free experience for managing your invoices
                      and generating EWBs. Here's how our integration can
                      benefit your organization:
                    </span>
                    <br></br>
                    <span>&#x2022; Simplified Invoicing Process</span>
                    <span>&#x2022; Error-Free EWB Generation</span>
                    <span>&#x2022; Real-Time Data Sync</span>
                    <span>
                      &#x2022; Compliance with Regulatory Requirements
                    </span>
                    <span>&#x2022; Enhanced Efficiency and Cost Savings</span>
                    <span>&#x2022; Scalable and Customizable Solution</span>
                    <span>
                      &#x2022; Dedicated Support and Training
                      <br></br>
                      <br></br>
                      Experience the benefits of streamlined e-invoicing and EWB
                      generation by integrating our solution into your business
                      processes. Contact us today to learn more and schedule a
                      demo. Streamline your operations, improve compliance, and
                      drive efficiency with our advanced integration solution.
                    </span>
                  </h4>
                </div>
              </>
            )}

            {cardNumber === "FOURTH" && (
              <>
                <div class="two">
                  <h4>
                    <b>TDS Data Integration</b>
                    <span>
                      <br></br>
                      We are a leading provider of comprehensive data
                      integration solutions, specializing in helping businesses
                      streamline their data management processes. Our innovative
                      technologies and expertise enable organizations to
                      seamlessly connect and integrate data from diverse
                      sources, empowering them to make informed decisions, drive
                      operational efficiency, and achieve business success.
                    </span>
                    <h3>Our Services:</h3>
                    <span>&#x2022; Data Integration</span>
                    <span>&#x2022; Data Transformation</span>
                    <span></span>
                    <span>&#x2022; Data Governance</span>
                    <span>&#x2022; Data Warehousing</span>
                    <span>&#x2022; Real-time Data Integration</span>
                    <br />
                    <span>
                      <b>Why Choose TDS Data Integration?</b>
                      <br />
                      <br />
                      &#x2022; Expertise
                      <br />
                      &#x2022; Flexibility
                      <br />
                      &#x2022; Security and Compliance
                      <br />
                      &#x2022; Seamless Integration
                      <br />
                      <br />
                      Partner with TDS Data Integration to unlock the power of
                      your data and gain a competitive advantage in today's
                      data-driven world. Contact us today to learn more about
                      how our solutions can transform your data management
                      practices and drive your business forward.
                    </span>
                  </h4>
                </div>
              </>
            )}

            {cardNumber === "FIFTH" && (
              <>
                <div class="two">
                  <h4>
                    Welcome to ZATCA E-Invoicing!
                    <span>
                      <br />
                      ZATCA E-Invoicing is a cutting-edge platform that
                      revolutionizes the way businesses handle their invoicing
                      processes. Our robust electronic invoicing solution
                      streamlines the invoicing workflow, reduces manual errors,
                      and enhances overall efficiency. With ZATCA E-Invoicing,
                      you can enjoy seamless and secure electronic invoicing
                      that saves you time and resources.
                      <h3> Why Choose ZATCA E-Invoicing?</h3>
                      &#x2022; Streamlined Invoicing Process
                      <br />
                      &#x2022; Compliance with ZATCA Regulations
                      <br />
                      &#x2022; Enhanced Data Accuracy
                      <br />
                      &#x2022; Increased Efficiency
                      <br />
                      &#x2022; Secure and Reliable
                      <br />
                      &#x2022; Seamless Integration
                      <br />
                      &#x2022; Comprehensive Reporting
                      <br />
                      &#x2022; Dedicated Customer Support
                      <br />
                      <br />
                      <b>
                        Experience the Future of Invoicing with ZATCA
                        E-Invoicing!
                      </b>
                      <br />
                      <br />
                      Join the growing number of businesses that are embracing
                      the benefits of electronic invoicing. ZATCA E-Invoicing
                      offers a secure, compliant, and efficient solution to
                      simplify your invoicing processes. Say goodbye to manual
                      paperwork and embrace the future of invoicing. Get started
                      with ZATCA E-Invoicing today!
                    </span>
                  </h4>
                </div>
              </>
            )}
{cardNumber === "SIXTH" && (
              <>
                <div class="two">
                  <h4>
                    Welcome to MALAYSIA E-Invoicing!
                    <span>
                      <br />
                      Malaysia E-Invoicing is a state-of-the-art platform that transforms the way businesses manage their invoicing processes. Our powerful electronic invoicing solution optimizes the invoicing workflow, minimizes manual errors, and boosts overall efficiency. With Malaysia E-Invoicing, you can benefit from a seamless and secure electronic invoicing experience that saves both time and resources.
                      <h3> Why Choose Malaysia E-Invoicing?</h3>
                      &#x2022; Streamlined Invoicing Process
                      <br />
                      &#x2022; Compliance with Malaysian Tax Regulations
                      <br />
                      &#x2022; Enhanced Data Accuracy
                      <br />
                      &#x2022; Increased Efficiency
                      <br />
                      &#x2022; Secure and Reliable
                      <br />
                      &#x2022; Seamless Integration
                      <br />
                      &#x2022; Comprehensive Reporting
                      <br />
                      &#x2022; Dedicated Customer Support
                      <br />
                      <br />
                      <b>
                        Experience the Future of Invoicing with Malaysia
                        E-Invoicing!
                      </b>
                      <br />
                      <br />
                      Join the growing number of businesses adopting the advantages of electronic invoicing. Malaysia E-Invoicing provides a secure, compliant, and efficient solution to streamline your invoicing processes. Say goodbye to manual paperwork and step into the future of invoicing. Get started with Malaysia E-Invoicing today!
                    </span>
                  </h4>
                </div>
              </>
            )}

          </div>

          <div>
            {/* <CCloseButton white  />
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button> */}
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ProductCard;
