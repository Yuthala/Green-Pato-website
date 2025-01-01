import React from 'react';

export function GarlicType ({id, src, alt, label, priceA, priceB, sizeA, sizeB, measurement}) {
	return (
		<>
		 <li className="garlic__type-item" itemScope itemProp="itemListElement" itemType="http://schema.org/Product">
			<div className="garlic__type-img">
				<img src={src} alt={alt} id={id} itemProp="image"/>
				<h5 itemProp="name">{label}</h5>
			</div>

			<div className="garlic-price" itemScope itemProp="offers" itemType="http://schema.org/Offer">
				<h6>Цена за {measurement}</h6>
				<div className="garlic-cat-size">
					<p className="garlic-cat" itemProp="price">Категория А: &nbsp;&nbsp;{priceA}</p>
					<p className="garlic-size">{sizeA}</p>
				</div>
				<div className="garlic-cat-size">
					<p className="garlic-cat">Категория Б: &nbsp;&nbsp;{priceB}</p>
					<p  className="garlic-size" itemProp="price">{sizeB}</p>
				</div>
			</div>
		  </li>
		</>
	)
}

export function GarlicSort({id, src, alt, label, item, text1, text2}) {
	return (
		<>
			<li className="garlic__sort-item" itemScope itemType="http://schema.org/Product">
			   <figure className="garlic__sort-wrap" data-category={label} itemProp="name">
				   <img src={src} alt={alt} id={id} itemProp="image"/>
			   </figure>

			   <div className="garlic__sort-info">
				   <h5>{item}</h5>
				   <p><span className="garlic-bold">Особенности сорта:    </span> {text1}</p>
				   <p><span className="garlic-bold">Описание головки:    </span>{text2}</p>
			   </div>
	   		</li>
   		</>
	)
}