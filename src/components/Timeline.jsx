import React from 'react'
import "../styles/timeline.css"
const Timeline = () => {
  return (
    <div class="tcontainer">
 
    <ul class="sessions">
      <li>
        <div class="time"><h5>Tell us the required skillset</h5></div>
        <p>Fill out a short form and we’ll schedule a call and understand your requirements.</p>
      </li>
      <li>
        <div class="time"><h5>We match you with the best talent</h5></div>
        <p>Get a list of pre-vetted candidates within 2 days.</p>
      </li>
      <li>
        <div class="time"><h5>Schedule interviews</h5></div>
        <p>Meet and select the resources that you like.</p>
      </li>
      <li>
        <div class="time"><h5>Start deployment</h5></div>
        <p>Start building with Clouare’s talent at no-risk 2 week trial period</p>
      </li>
      
    </ul>
  </div>

  )
}
export default Timeline;
