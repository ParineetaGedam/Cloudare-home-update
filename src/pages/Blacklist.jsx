import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/policy.css"
import {HEADER,BLACKLIST_COMPANIES} from "../constant"
const Blacklist = () => {
  return (
    <section>
      <Navbar/>
      <div className="term-container"><h1>The face of the business was in Shadow</h1>
<article>

    

        <p>It is very painful for any companies to blacklist other firms but the scenarios and circumstances can be very different for a startups hence it is mandatory to have this list. So here, we, Cloudare Technologies, wanted to have that list for our close clients and vendors so they can leverage this list for better and smooth business.</p>
    <div className="table container">
        {HEADER.map((item,i)=>{return(
            <div className="header"> <b>{item}</b></div>
        )})}
        {BLACKLIST_COMPANIES.map((item,i)=>{return(
            <>
            <div className="grid-item">{i+1}</div>
            <div className="grid-item">{item.name}</div>
            <div className="grid-item"><a href={item.website}>{item.website}</a></div>
            <div className="grid-item">{item.date}</div>
            <div className="grid-item">{item.reason}</div></>
        )})}
        
    </div>
    </article>
    </div>
    <Footer/>
   </section>
  )
}
export default Blacklist