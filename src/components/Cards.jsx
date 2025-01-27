import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import cards from '../card';

function Cards() {

    const FirstUl = cards.slice(0, 2);
    const SecondUl = cards.slice(2, 5);

    const CardSectionOne = FirstUl.map(card => 
            <CardItem 
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
                key={card.id}
            />
        );
    
    const CardSectionTwo = SecondUl.map(card => 
            <CardItem 
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
                key={card.id}
            />
        );


  return (
    <section className="cards" id="cards">
        <h3 className="cards__header">Культуры</h3>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items" itemScope itemType="http://schema.org/ItemList">
                    {CardSectionOne}
                </ul>

                <ul className="cards__items" itemScope itemType="http://schema.org/ItemList">
                    {CardSectionTwo}
                </ul>
            </div>
        </div>
    </section>
  );
}

export default Cards