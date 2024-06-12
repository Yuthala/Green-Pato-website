import React from 'react';

export function OnionType({id, src, alt, label}) {
	return (
		<>
			<div className="onion__type-item">
				<img src={src} alt={alt} id={id}/>
				<h5>{label}</h5>
			</div>
		</>
	)
}

export function OnionSort({src, alt, id, label, item, text, priceA, priceB}) {
	return (
		<>
			<li className="onion__sort-item">
			   <figure className="onion__sort-wrap" data-category={label}>
				   <img src={src} alt={alt} id={id}/>
			   </figure>

			   <div className="onion__sort-info">
				   <h5>{item}</h5>
				   <p><span className="onion-bold">Описание:    </span> {text}</p>
				   <ul>
						<li className="onion-li"><p className="onion-price-line">Цена за 1 кг севка:</p><p className="onion-price"> {priceA}</p></li>
						<li className="onion-comment"><p>(диаметр 14-24 мм)</p></li>
						<li className="onion-li"><p className="onion-price-line">Цена за 100 штук семян:  </p> <p className="onion-price"> {priceB}</p></li>
				   </ul>

			   </div>
	   		</li>
		</>
	)
}