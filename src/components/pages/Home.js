import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Adv from '../Adv';
import Advantages from '../Advantages';
import Social from '../Social';
import Contacts from '../Contacts';
import Delivery from '../Delivery';

function Home () {
    return (
        <>
            <HeroSection />
            <Adv />
            <Advantages />
            <Cards />
            <Delivery />
            <Social />
            <Contacts />
        </>
    )
}

export default Home;
