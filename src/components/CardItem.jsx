import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function CardItem({src, text, label, path}) {
  return (
    <>
        <li className="cards__item" itemscope itemprop="itemListElement" itemtype="http://schema.org/Product">
            <HashLink className="cards__item__link" to={path} itemprop="url">
                <figure className="cards__item__pic-wrap" data-category={label} itemprop="name">
                    <img src={src} alt="card" className="cards__item__img" itemprop="image"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text" itemprop="description">{text}</h5>
                </div>
            </HashLink>
        </li>
    </>
  )
}

export default CardItem