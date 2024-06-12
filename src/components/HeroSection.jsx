import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import{ Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import videoCover from '../videos/Green_pato_cover.mp4';


function HeroSection() {

  return (
    <div className="hero-container">
        <video src={videoCover} autoPlay loop muted/>
        <h1>Питомник луковичных культур</h1>
        <p>Посевной материал собственного производства</p>
        
        <div className="hero-btns">
          <Link to="/#cards" className="btn-mobile">
            <Button 
                  className="btns"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
              >
              КАТАЛОГ
            </Button>
          </Link>


            {/* <Button 
                className="btns"   
                buttonStyle="btn--primary"
                buttonSize="btn--large"
            >
            ВИДЕО О ПИТОМНИКЕ <i className="far fa-play-circle" />
            </Button> */}
        </div>
    </div>
  )
}

export default HeroSection