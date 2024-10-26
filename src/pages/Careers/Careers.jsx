import React from 'react'
import './careers.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Careers = () => {
  return (
    <>
    <Header/>

    <div className='container-fluid career-banner'>
      <span>Careers</span>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='career-card'>
            <p>Starting out? Newly experienced? Wherever you are in your career journey, Adyah tech is the right place to start, as we offer energizing, challenging global opportunities, working for top-tier clients in almost every industry. If you're new to the workforce, our experienced counsellors will guide you and support you in picking up the right career path by giving broad exposure to the latest technologies and provide a wide world of opportunity to launch your career in the right direction.</p>
            <p>Or may be you're an established professional, seeking fresh challenges? Then Adyah tech is right for you. We're growing quickly, expanding rapidly around the globe, resolving new problems for clients, and opening new frontiers to explore. We're always looking for how clients can create more innovative ways of doing business leverage advanced technologies and transform their operations in advance of any economic eventuality.</p>
            <p>The work code here is "client first," and we breathe it daily. Although, we do work hard, it's worth it. Because our clients truly appreciate what we do. They value the business-technology insights and capabilities we deliver to their organizations, and the success we help enable. The proof: They come back to us again and again, 90+% of the time, and have helped to make us the "fastest growing, top-tier IT services company in the world." Working with Adyah tech is not a job. It's a journey, an experience. There's so much to explore here - even about yourself - that every day is a new day. You want a challenging and enjoyable work environment. We want you to realize your potential. You want to be recognized for your work. We want you to fulfill your aspirations. Today, Adyah tech is building tomorrow's enterprise and guess who's making this possible? Our people - yesterday, today and tomorrow.</p>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default Careers