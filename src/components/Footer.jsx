import React from "react";
import "../styles/footer.css";
// <<<<<<< HEAD
// <<<<<<< Updated upstream
// import cloudare from "../assests/cloudare-white.png";
// =======
import cloudare from "../assests/white_Logo1.png";
// >>>>>>> Stashed changes
// =======
// import cloudare from "../assests/white_Logo.png";
// >>>>>>> main
import startupChattisgarh from "../assests/images/chattisgarh_startup.png";
import linkedin from "../assests/svg/linkedin.svg";
import twitter from "../assests/svg/twitter.svg";
import instagram from "../assests/svg/instagram.svg";
import facebook from "../assests/svg/facebook.svg";
import startupIndia from "../assests/logo/startup_india.png";
import msme from "../assests/images/msme.png";
import startupOdisha from "../assests/logo/startup-odisha.png";
import oraclePartner from "../assests/images/oracle-partner-logo.png";
import zohoPartner from "../assests/images/zoho-partner-logo-2.png";
import email from "../assests/images/Vector-8.png";
// import phone from "../assests/images/Vector-7.png";
import { Link } from "react-router-dom";


export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer>
      <div className="footer">
        <div style={{ textAlign: "center" }}></div>
        <div className="footer-link">
          <div className="logo-holder">

            <a href="/">
              {/* <<<<<<< HEAD
<<<<<<< Updated upstream
              <img className=" logo" src={cloudare} width="170px" alt="Logo" />
======= */}
              {/* <img className=" logo" src={cloudare} width="250px" alt="Logo" /> */}
              {/* >>>>>>> main
            </a>
            <div className="social-logos" style={{ marginTop: "-21px",marginLeft:"35px" }}>
              <a
                href="https://www.linkedin.com/company/cloudare"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} className="social-logos" alt="adin_logo" />
              </a>
              <a
                href="https://x.com/CloudareGlobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  className="social-logos"
                  alt="twitter_logo"
                />
              </a>
              <a
                href="https://www.instagram.com/cloudaretechnologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  className="social-logos"
                  alt="instagram_logo"
                />
              </a>
              <a
                href="https://www.facebook.com/cloudaretech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  className="social-logos"
                  alt="facebook_logo"
                />
              </a>

              <a
                href="mailto:hello@cloudare.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={email}
                  className="social-logos"
                  style={{ width: "20px", height: "20px" }}
                  alt="email"
                />
              </a>
            </div>
======= */}
              <img className="img-logo" src={cloudare} width="250px" alt="Logo" />
            </a>
            <div className="social-logos-container">

              <Link
                to="https://www.linkedin.com/company/cloudare"
                target="_blank"
                rel="noopener noreferrer">
                <img src={linkedin} className="social-logos" alt="adin_logo" />
              </Link>

              <Link
                to="https://x.com/CloudareGlobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  className="social-logos"
                  alt="twitter_logo"
                />
              </Link>

              <Link
                to="https://www.instagram.com/cloudaretechnologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  className="social-logos"
                  alt="instagram_logo"
                />
              </Link>

              <Link
                to="https://www.facebook.com/cloudaretech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  className="social-logos"
                  alt="facebook_logo"
                />
              </Link>

              <Link
                to="mailto:hello@cloudare.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={email}
                  className="social-logos"
                  style={{ width: "20px", height: "20px" }}
                  alt="email"
                />
              </Link>
            </div>

            {/* <a href="/">
              <img className=" logo" src={cloudare} width="250px" alt="Logo" />
            </a>
            <div className="social-logos" style={{ marginTop: "-21px",marginLeft:"35px" }}>
              <a
                href="https://www.linkedin.com/company/cloudare"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} className="social-logos" alt="adin_logo" />
              </a>
              <a
                href="https://x.com/CloudareGlobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  className="social-logos"
                  alt="twitter_logo"
                />
              </a>
              <a
                href="https://www.instagram.com/cloudaretechnologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  className="social-logos"
                  alt="instagram_logo"
                />
              </a>
              <a
                href="https://www.facebook.com/cloudaretech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  className="social-logos"
                  alt="facebook_logo"
                />
              </a>

              <a
                href="mailto:hello@cloudare.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={email}
                  className="social-logos"
                  style={{ width: "20px", height: "20px" }}
                  alt="email"
                />
              </a>
            </div>*/}
            {/* >>>>>>> Stashed changes */}
          </div>
          <nav>
            <div className="flex-items">
              <h5 class="subheading">Quick Links</h5>
              <ul>
                <li>
                  <a href="/hire-talent">Hire Talent</a>
                </li>
                <li>
                  <a href="/payroll">HR Services</a>
                </li>
                <li>
                  <a href="/solutions">Solutions</a>
                </li>
                <li>
                  <a href="/apply">Apply for Jobs</a>
                </li>
              </ul>
            </div>
            <div className="flex-items" style={{ marginRight: "-50px" }}>
              <h5 class="subheading">Legal</h5>
              <ul>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/refund-policy">Refund Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/blacklist">Blacklisted Company</a>
                </li>
              </ul>
            </div>
            <div className="flex-items">
              <h5 class="subheading">Resources</h5>
              <ul>
                <li>
                  <a href="https://blogs.cloudare.in/">Blogs</a>
                </li>
                <li>
                  <a href="https://calendly.com/cloudare">Book a Slot</a>
                </li>
              </ul>
            </div>
            <div className="flex-items">
              <h5 class="subheading">Ratings</h5>
              <ul>
                <li>
                  <a href="https://www.ambitionbox.com/overview/cloudare-technologies-overview?utm_source=employer-dashboard&utm_campaign=cloudare-technologies&utm_medium=badges">
                    <img
                      style={{ height: "150px", width: "320px" }}
                      src="https://employer.ambitionbox.com/api/badge/917985?badge-type=ratings-detailed"
                      alt="logo"
                    />
                  </a>
                </li>
                {/* <li>
                  <img
                    style={{ marginRight: "10px" }}
                    src={email}
                    width="15px"
                    alt="Logo"
                  />
                  <a href="mailto:hello@cloudare.in">hello@cloudare.in</a>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <<<<<<< HEAD
<<<<<<< Updated upstream
      <div className="social-logos">
        <a
          href="https://www.linkedin.com/company/cloudare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="social-logos" alt="adin_logo" />
        </a>
        <a
          href="https://twitter.com/cloudaretech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} className="social-logos" alt="twitter_logo" />
        </a>
        <a
          href="https://www.instagram.com/cloudaretechnologies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} className="social-logos" alt="instagram_logo" />
        </a>
        <a
          href="https://www.facebook.com/cloudaretech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} className="social-logos" alt="facebook_logo" />
        </a>
======= */}
      {/* <div className="imp-logos" style={{ marginTop: "-45px" }}>
        <div className="row" style={{ marginTop: "30px", marginLeft: "35px" }}> */}

      <div className="imp-logos">
        <div className="row">

          <img
            className=" logo align-logo"
            src={oraclePartner}
            width="150px"
            alt="Logo"
          />
          <img
            className=" logo align-logo"
            src={zohoPartner}
            width="150px"
            alt="Logo"
          />


          <img
            className="logo align-logo"
            src={startupIndia}
            width="150px"
            alt="Logo"
          />
          <img
            className="logo align-logo"
            src={startupOdisha}
            width="150px"
            alt="Logo"
          />
          <img
            className="logo align-logo"
            src={startupChattisgarh}
            width="130px"
            alt="Logo"
          />
          <img
            className="logo align-logo"
            src={msme}
            width="120px"
            alt="Logo"
            style={{ marginBottom: "-10px" }}
          />
        </div>
      </div>

      {/* <<<<<<< HEAD
<<<<<<< Updated upstream
======= */}
      {/* <div className="bottom-bar">
        <p>© {currentYear} - Cloudare Technologies Private Limited</p>
        <p>
          || Cloudare Technologies Private Limited, Arya Gali, Ward No 8,
          Kantabanji, Bolangir, Orissa-767039 ||
        </p>

        <p>
          || Light And Direction- Coworking Space, Badshahpur Sohna Road Highway,
          D1 Block, Malibu Town, <br /> Sector 47, Gurugram, Haryana ||
        </p>
        <p>|| 10 Lagerfeld Dr, Brampton, Ontario CA ||</p>
        <p>
          India | United Kingdom | United States | United Arab Emirates | South
          Africa | Middle East
        </p>
      </div> */}

      {/* <div class="containerf">
        <div class="card-sectionf">
          <div class="cardf">
            <p>
              Cloudare Technologies Private Limited, Arya Gali, Ward No 8,
              Kantabanji, Bolangir, Orissa-767039
            </p>
          </div>
          <div class="cardf">
            <p>
              Light And Direction- Coworking Space, Badshahpur Sohna Road
              Highway, D1 Block, Malibu Town,Sector 47, Gurugram, Haryana
            </p>
          </div>
          <div class="cardf">
            <p>10 Lagerfeld Dr, Brampton, Ontario CA</p>
          </div>
        </div>
      </div> */}

      {/* <div class="address-container">
        <div class="address"> */}
      {/* <div class="address-icon">
                    <img src="location-icon.png" alt="Location"/>
                </div> */}
      {/* <p>
            Arya Gali, Kantabanji, <br /> Bolangir-767039, <br /> Odisha, India
          </p> */}

      {/* <p>
            7th Floor, Currency Tower, VIP Rd, <br />  Telibandha, Raipur, <br />  Chhattisgarh 492001, India
          </p> */}
      {/* <div class="address-details">
            
          </div> */}
      {/* </div>
        <div class="separator">|</div>
        <div class="address"> */}
      {/* <div class="address-icon">
                    <img src="location-icon.png" alt="Location"/>
                </div> */}
      {/* <p>
            2222 W.Grand River Ave Ste A, <br /> Okemos, MI, 48864, <br /> USA
          </p> */}
      {/* <div class="address-details">
            
          </div> */}
      {/* </div>
        <div class="separator">|</div>
        <div class="address"> */}
      {/* <div class="address-icon">
                    <img src="location-icon.png" alt="Location"/>
                </div> */}
      {/* <p>
            10 Lagerfeld Dr, <br /> Brampton, Ontario <br /> Canada
          </p> */}
      {/* <div class="address-details">
            
          </div> */}
      {/* </div> */}
      {/* <div class="separator">|</div>
        <div class="address"> */}
      {/* <div class="address-icon">
                    <img src="location-icon.png" alt="Location"/>
                </div> */}
      {/* <p>
            Badshahpur Sohna Road Highway D1 Block,
            <br /> Malibu Town,Sector 47, <br /> Gurugram, Haryana, India
          </p> */}

      {/* <div class="address-details">
            
          </div> */}
      {/* </div>
      </div> */}
      {/* >>>>>>> Stashed changes */}
      {/* <div className="bottom-bar">
      <p>© {currentYear} - Cloudare Technologies Private Limited</p>
======= */}
      {/* <div className="bottom-bar">
        <p>© {currentYear} - Cloudare Technologies Private Limited</p>
>>>>>>> main
        <p>
          || Cloudare Technologies Private Limited, Arya Gali, Ward No 8,
          Kantabanji, Bolangir, Orissa-767039 ||
        </p>

        <p>
          || Light And Direction- Coworking Space, Badshahpur Sohna Road Highway,
          D1 Block, Malibu Town, <br /> Sector 47, Gurugram, Haryana ||
        </p>
        <p>|| 10 Lagerfeld Dr, Brampton, Ontario CA ||</p>
        <p>
          India | United Kingdom | United States | United Arab Emirates | South
          Africa | Middle East
        </p>
      </div> */}

      {/* <div class="containerf">
        <div class="card-sectionf">
          <div class="cardf">
            <p>
              Cloudare Technologies Private Limited, Arya Gali, Ward No 8,
              Kantabanji, Bolangir, Orissa-767039
            </p>
          </div>
          <div class="cardf">
            <p>
              Light And Direction- Coworking Space, Badshahpur Sohna Road
              Highway, D1 Block, Malibu Town,Sector 47, Gurugram, Haryana
            </p>
          </div>
          <div class="cardf">
            <p>10 Lagerfeld Dr, Brampton, Ontario CA</p>
          </div>
        </div>
      </div> */}

      {/* Changes By - Parineeta Gedam Date - 25-02-25 */}

      <div class="address-container">
        <div class="address">
          <p>
            Arya Gali, Kantabanji, <br /> Bolangir-767039, <br /> Odisha, India
          </p>
        </div>

        <div class="separator">|</div>

        <div class="address">
          <p>
            7th Floor, Currency Tower, VIP Rd, <br />  Telibandha, Raipur, <br />  Chhattisgarh 492001, India
          </p>
        </div>

        <div class="separator">|</div>

        <div class="address">
          <p>
            2222 W.Grand River Ave Ste A, <br /> Okemos, MI, 48864, <br /> USA
          </p>
        </div>

        <div class="separator">|</div>

        <div class="address">
          <p>
            10 Lagerfeld Dr, <br /> Brampton, Ontario <br /> Canada
          </p>
        </div>
      </div>

      {/* End of the code */}

      <div className="bottom-bar">
        <p className="footerp">
          © {currentYear} - Cloudare Technologies Private Limited
        </p>

        {/* <p className="footerp">
          India | United Kingdom | United States | United Arab Emirates | South
          Africa | Middle East
        </p> */}
      </div>
    </footer>
  );
}
