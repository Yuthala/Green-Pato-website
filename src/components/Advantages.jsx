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
    <div className="icons">
        <h2>Наши преимущества</h2>
        <div className="icon__container">
            {Icon}
        </div>
    </div>
  );
}

export default Icons