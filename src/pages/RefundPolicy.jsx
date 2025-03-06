import React from 'react'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import "../styles/policy.css"
const RefundPolicy = () => {
  return (
    <>
      <Navbar/>
    <section>
    
      <div className="term-container">
        <h1>Refund Policy</h1>
<article>    
<p>
  Our policy lasts 15 days. If 15 days have gone by since your purchase of goods or service, unfortunately we can’t offer you a refund or exchange.
</p>
<p>To be eligible for a return, in case of goods, your item must be unused and in the same condition that you received it. It must also be in the original packaging. In case of service, you need to make sure you have uninstalled all the applications and have your system validated by Cloudare Technologies.</p>
<p>
Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
</p>
<p>
Additional non-returnable items:</p>
<p>
<ul>
    <li>Downloadable software products</li>
    <li>Software Service</li>
    <li>Consulting Service</li>
</ul></p>
<p>To complete your return, we require a receipt or proof of purchase. Once it is approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
     </article>    </div>
      
    </section>  
    <Footer/>
    </>
  )
}
export default RefundPolicy

