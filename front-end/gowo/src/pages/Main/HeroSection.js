import React from 'react'
import '../../App.css';
import { GoLoginBtn,ViewBtn } from '../button/Button'
import './HeroSection.css';


function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src="/videos/My.mp4" autoPlay loop muted playsInline />
            <h1>Go Out and Work Out</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <GoLoginBtn className = 'btns' buttonStyle = 'btn--MainPage1' 
                buttonSize = 'btn--large'>Start</GoLoginBtn>
                 <ViewBtn className = 'btns' buttonStyle = 'btn--MainPage2' 
                buttonSize = 'btn--large'> view <i className = 'far fa-play-circle'/></ViewBtn>
            </div>
               
        </div>
    )
}

export default HeroSection