import React from 'react'
import "./Main.css"
import Navbar from './Navbar'
import Decore from "./Decore.png";
import Image1 from "./image1.png";
import { FiArrowRight } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className='home-container'>
       {/* Navbar */}
        <Navbar/>
         {/* Image for the banner */}
        <div className="home-bannerImage-container">
          <img src={Decore}  className='decor'/>
        </div>
         {/* Container for the main content */}
        <div className='main'> 
            <div className='content1'>
              <h1 className='header1'>Lorem ipsum dolor sit amet</h1>
              <p className='context1'>Lorem ipsum dolor sit amet consectetur. Nisl convallis arcu bibendum 
              morbi in bibendum velit nunc tellus. Eu lectus viverra ornare neque.
              </p>
                <div className='content1-btns'>
                    <button className='content1-explore'>Get Started<FiArrowRight />{" "}</button>
                    <button className="watch-video-button">
                    <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>
            <img src={Image1} alt="Image1" className='image1'/> 
              <div className='contentm'>
                <p className='context-m'>Lorem ipsum dolor sit amet consectetur. Nisl convallis arcu bibendum 
              morbi in bibendum velit nunc tellus. Eu lectus viverra ornare neque.
                </p>
                  <div className='contentm-btns'>
                        <button className='content1-explore'>Get Started<FiArrowRight />{" "}</button>
                        <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                        </button>
                  </div>
              </div>    
        </div>
    </div>
  )
}

export default Main
