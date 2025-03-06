import React from 'react'
import { TESTIMONIALS } from '../constant'
export const Testimonials = () => {
  return (
    <div className="testimonials">
        <h1>Why our Clients Love Us</h1>
        <p>Cloudare has companies and fast-scaling companies start-ups hire pre-vetted developers on-demand. Here’s what they have to say about us.</p>
    <div class="review">
        {TESTIMONIALS.map((review,i)=>{
        return(<div key={i} className="card">
            <div className="bg"></div>
                <div className="details">
            <p>{review.content}</p>
            <div className="profile"><img src="#" alt="profile"/><h3>{review.name}</h3></div></div>
        </div>)
        
    })}</div>
    </div>
  )
}
export default Testimonials