import React from 'react';
import "../styles/card.css"

const PayrollCard = ({payroll,desc,img}) => {
  return (
 
              <div className="card">
                <img className="card-image" src={img}  alt="icon"/>
                <div className="card-content">
                <h3 className="card-title">{payroll}</h3>
                <p className="card-description">{desc}</p>
                </div>
                
              </div>
  )
}

export default PayrollCard