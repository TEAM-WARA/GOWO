import React from 'react'
import '../../App.css';
import { Button } from '../button/Button'
import './HeroSection.css';


function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Go Out and Work Out</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className = 'btns' buttonStyle = 'btn--outline' 
                buttonSize = 'btn--large'>Start</Button>
                 <Button className = 'btns' buttonStyle = 'btn--primary' 
                buttonSize = 'btn--large'> SIGN UP <i className = 'far fa-play-circle'/></Button>
            </div>
               
        </div>
    )
}

export default HeroSection