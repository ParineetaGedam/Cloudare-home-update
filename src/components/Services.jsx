import React from 'react'
import dot from "../assests/svg/dot.svg"

const Services = ({service,stitle,img}) => {
  return (
    <section className="services">
       <h1>{stitle}</h1>
{service.map((service,i)=>{
    return(
<div key={i} className="content">
        <div style={{marginTop:"-60px"}}>
            {/* <strong><h1>{service.title}</h1></strong> */}
            {service.content.map((data,j)=>{
            return(
             <div key={j} className="service__content">
              {img && (
                 <img className="list" src={dot} alt="list" />)}
                 <div className="service_info">
                     <h3><strong>{data.subtitle}</strong></h3>
                     <p>{data.content}</p>
                     </div>
                     </div>
                     )
                     })}
                 </div> <img src={service.src} className="cover" alt="logo"/>
                </div>  
                 )
                 } 

    )
    }
    </section>
  )
}

export default Services

    