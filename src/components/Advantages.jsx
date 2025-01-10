import React from 'react';
import IconItem from './IconItem';
import './Advantages.css';
import icons from '../icon';

function Icons() {

    // const FirstUl = cards.slice(0, 2);
    // const SecondUl = cards.slice(2, 5);

    const Icon = icons.map(icon => 
            <IconItem 
                src={icon.src}
                label={icon.label}
				alt={icon.alt}
                key={icon.id}
            />
        );

  return (
    <section className="icons">
        <h3>Наши преимущества</h3>
        <div className="icon__container">
            {Icon}
        </div>
    </section>
  );
}

export default Icons