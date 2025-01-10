import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import{ Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
// import videoCover from '../videos/Green_pato_cover.mp4';


function HeroSection() {

  return (
    <section className="hero-container">
        {/* <video src={videoCover} autoPlay loop muted/> */}
        <h1>Питомник луковичных культур</h1>
        <h4>Посевной материал собственного производства</h4>
        
        <div className="hero-btns">
          <Link to="/#cards" className="btn-mobile effect effect-5" title="Каталог">
              КАТАЛОГ
          </Link>

            {/* <Button 
                className="btns"   
                buttonStyle="btn--primary"
                buttonSize="btn--large"
            >
            ВИДЕО О ПИТОМНИКЕ <i className="fa fa-play-circle" />
            </Button> */}
        </div>

        <div className="hero-banner-wrapper">
          <div className="hero-banner">
            <h4>увеличь <br/> урожайность <br/> на <span>36%</span></h4>
          </div>
        </div>
    </section>
  )
}

export default HeroSection