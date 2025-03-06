import React from 'react'
import Navbar from "../components/Navbar"
import Footer from"../components/Footer"
import "../styles/policy.css"
import {PRIVACY} from "../constant"
const PrivacyPolicy = () => {
  return (
    
    <section>
      <Navbar/>
      <div className="term-container">
        <h1>Privacy Policy</h1>
        {PRIVACY.map((e,i)=>{
        return(
<article key={i}>
  <h3>{e.title}</h3>
  {e.content.map((i,idx)=>{
    return(
      <p key={i}>{i}</p>
    )
  })}
  </article>
        )})}
        </div>
        <Footer/>
    </section>
  )
}
export default PrivacyPolicy