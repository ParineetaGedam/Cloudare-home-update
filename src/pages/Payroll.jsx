import React from "react";
import "../styles/consulting.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import PayrollCard from "../components/PayrollCard";
import { PAYROLL_OPTION, PAYROLL_BANNERS } from "../constant";
import Cards from "../components/Cards";
import bg from "../assests/images/what-is-hr.webp";
import Partners from "../components/Partners";
import { CLIENTS } from "../constant";

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
          content="Our experienced team will handle all aspects of your payroll, from calculating wages and deductions to generating pay stubs and tax forms. We ensure that your employees are paid accurately and on time, every time."
          label="Contact Us"
          trigger={true}
          src="https://img.freepik.com/free-vector/accountant-office-manager-professional-bookkeeper-concept-tax-calculating-reporting-business-character-making-money-transfer-vector-illustration_613284-1042.jpg?t=st=1716812079~exp=1716815679~hmac=d98e8a6f7bb07c92f9a8cd7b1ed913f460ccc03a62656a8d7e8a4e00ef6a83e4&w=740"
          id={2}
        />
      </div>
      <section className="payroll-services">
        <h1 style={{marginBottom:"-20px"}}>Our Services </h1>
        <div className="card-container">
          {PAYROLL_OPTION.map((item, idx) => {
            return (
              <PayrollCard
                key={idx}
                payroll={item.payroll}
                desc={item.desc}
                img={item.src}
              />
            );
          })}
        </div>

        <Cards
          title="Benefits of Cloudare Payroll Services"
          section={PAYROLL_BANNERS}
          id={1}
        />
      </section>
      <Partners
        list={CLIENTS}
        title="Enterprises and startups choose Cloudare to scale their teams"
      />
      <Footer />
    </React.Fragment>
  );
}

export default Consultation;
