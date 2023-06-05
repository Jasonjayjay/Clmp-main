import React from 'react'
import logo from "./logo.png";
import image1 from "./image1.png";
import fb from "./fb.png";
import insta from "./ig.png";
import twitter from "./twit.png";
import linkedin from "./lin.png";
import Footer1 from "./footer1.png";
import Footer2 from "./footer2.png";
import Footer3 from "./footer3.png";
import { Link } from 'react-scroll';
import './Section8.css'

const Section8 = () => {
  return (
    <div className='footer1'>
      <img src={image1} alt='Image-footer' className='img-footer' />
      <Link to="home-container" smooth={true} offset={-80} duration={1000}><img src={logo} alt='Logo-footer' className='img1-footer' /></Link>
      <div className='footer-details'>
        <div className='footer-item1'>
          <Link className='links' to="section3" smooth={true} offset={-70} duration={1000}>What is CLMP?</Link>
          <Link className='links' to="section4" smooth={true} offset={-80} duration={1000}>What We Can Do For You</Link>
          <Link className='links' to="section4" smooth={true} offset={-50} duration={1000}>Explore</Link>
          <Link className='links' to="section6" smooth={true} offset={-50} duration={1000}>Pricing</Link>
        </div>
        <div className='footer-item2'>
          <div className='contacts1'>
            <img src={Footer1} alt='F' className='Footer1'/><a className='blue'>123-456-789</a>
          </div>
          <div className='contacts2'>
            <img src={Footer2} alt='F' className='Footer1'/><p className='blue'>clms@cloudswyft.co</p>
          </div>
          <div className='contacts3'>
            <img src={Footer3} alt='F' className='Footer3'/><p className='blue'>Lorem Ipsum Nullam 123.</p>
          </div> 
          <div className='social'>
              <img src={fb} alt='Facebook' className='youtube' /> 
              <img src={insta} alt='Insta' className='insta' />
              <img src={twitter} alt='Twitter' className='twitter' /> 
              <img src={linkedin} alt='Linkedin' className='linkedin' />     
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Section8
