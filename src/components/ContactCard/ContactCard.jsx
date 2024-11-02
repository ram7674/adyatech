import React from 'react'
import './contactcard.css'
import { Link } from 'react-router-dom'

const ContactCard = () => {
  return (
    <>
    <div className="home-contactbg">
        <div className="home-contact-page">
          <div className="home-contCard">
            <div>
              <h4 className="home-contTitle">Have an Idea in Mind?</h4>
              <p className="home-contdesc">We'll Help You Bring It to Life</p>
            </div>
            <Link to="/contact"><button className="home-contBtn">Get in touch</button></Link>
          </div>
        </div>

        <div className="home-contFooter"></div>
      </div>
    </>
  )
}

export default ContactCard