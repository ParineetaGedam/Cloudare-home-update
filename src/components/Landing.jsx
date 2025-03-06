import React from 'react'
import "../styles/landing.css"
import Button from './Button';

 const Landing = ({title,subtitle,content,href,label,other,src,trigger,id}) => {
    
  return (
    <section id="home" className="container">
                <div className="landing">
                <header className="header-text">
                    <h1>{title}</h1>
                    <h1>{subtitle}</h1>
                    <p>{content}
                    </p>
                    <div className="hire-btn">
                        <a href={href}>
                        <Button label={label} trigger={trigger} id={id}/></a>
                        {other &&(
                        <p>Looking for jobs instead?<a className="link" href="https://jobs.cloudare.in/jobs/Careers"><strong>Apply here</strong></a></p>
                        )}
                        </div>
                </header>
                <div className="landing_image">
                  <img className="landing-logo" src={src} />
                </div>
                </div>
            </section>
  )
}
export default Landing 