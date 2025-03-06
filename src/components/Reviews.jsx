import React from 'react'
import "../styles/review.css"
import { PARTNERS } from '../constant'
const Reviews = ({id,rname,rtitle,content}) => {
  return (
 <div className="review-card">
  {/* <img className="card-img" src={PARTNERS[id]} alt=""/> */}
        <div className="rcard-body">
          <h3>{rname}</h3>
            <h5>{rtitle}</h5>
          <p className="rcard-text">{content}</p>
        </div>
      </div>
  
  )
}
export default Reviews