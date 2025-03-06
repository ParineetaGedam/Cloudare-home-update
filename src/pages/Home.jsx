import React from "react";
import '../styles/home.css';
import Navbar from "../components/Navbar"

import Partners from "../components/Partners"
import Services from "../components/Services"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial";
import Landing from "../components/Landing"
import {SERVICES} from "../constant"
export default function Home() {

    return (
        <React.Fragment>
            <div className="layout">
            <Navbar/>
           <Landing title="Hire your engineering dream team"
           content="We help you source, vet, manage the world’s best software developers." 
           href="/hire-talent" label="Hire Developers" other={true}/>
  <Partners />
  <Services service={SERVICES} img={true}/>
  <Testimonial/>   
  <Footer/>
            </div>
          
        </React.Fragment>
    )
}
