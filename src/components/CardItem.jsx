import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function CardItem({src, text, label, path}) {
  return (
    <>
        <li className="cards__item" itemScope itemProp="itemListElement" itemType="http://schema.org/Product">
            <HashLink className="cards__item__link" to={path} itemProp="url">
                <figure className="cards__item__pic-wrap" data-category={label} itemProp="name">
                    <img src={src} alt="card" className="cards__item__img" itemProp="image"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text" itemProp="description">{text}</h5>
                </div>
            </HashLink>
        </li>
    </>
  )
}

export default CardItem