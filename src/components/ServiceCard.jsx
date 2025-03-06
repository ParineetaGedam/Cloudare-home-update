import React from 'react'

const ServiceCard = ({service,desc,img}) => {
  return (
 
              <div className="service-box">
                <img className="icon" src={img}  alt="icon"/>
                <h3>{service}</h3>
                <p>{desc}</p>
              </div>
  )
}

export default ServiceCard