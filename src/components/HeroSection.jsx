import React from 'react';
import '../App.css';
import './HeroSection.css';
// import{ Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
// import videoCover from '../videos/Green_pato_cover.mp4';


function HeroSection() {

  return (
    <section className="hero-container">
        {/* <video src={videoCover} autoPlay loop muted/> */}
        <h1>Питомник луковичных культур</h1>
        <h2>Посевной материал собственного производства</h2>

          <div className="hero-banner">
            <div className="blur rounded-card">
              <h3>Урожайность до <span>36%</span> выше <br />
              с премиальными семенами <br/><span className="logo-style">green pato</span></h3>
            </div>
          </div>

        <div className="hero-btns">
          <Link className="btn-mobile effect effect-5" to="/#cards" title="Каталог">
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
    </section>
  )
}

export default HeroSection