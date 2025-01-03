import React from 'react';

export function OnionType({id, src, alt, label}) {
	return (
		<div className="onion__type-item">
			<img src={src} alt={alt} id={id} itemProp="image"/>
			<h5 itemProp="name">{label}</h5>
		</div>
	)
}

export function OnionSort({src, alt, id, label, item, text, priceA, priceB}) {
	return (
		<li className="onion__sort-item">
			<figure className="onion__sort-wrap" data-category={label}>
				<img src={src} alt={alt} id={id} itemProp="image"/>
			</figure>

			<div className="onion__sort-info">
				<h5 itemProp="name">{item}</h5>
				<p><span className="onion-bold" itemProp="description">Описание: </span> {text}</p>
				<ul>
					<li className="onion-li"><p className="onion-price-line">Цена за 1 кг севка:</p><p className="onion-price" itemProp="price"> {priceA}</p></li>
					<li className="onion-comment"><p>(диаметр 14-24 мм)</p></li>
					<li className="onion-li"><p className="onion-price-line">Цена за 100 штук семян:  </p> <p className="onion-price" itemProp="price"> {priceB}</p></li>
				</ul>

			</div>
		</li>
	)
}