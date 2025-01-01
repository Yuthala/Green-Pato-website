import React from 'react';

export function GarlicType ({id, src, alt, label, priceA, priceB, sizeA, sizeB, measurement}) {
	return (
		<>
		 <li className="garlic__type-item" itemscope itemprop="itemListElement" itemtype="http://schema.org/Product">
			<div className="garlic__type-img">
				<img src={src} alt={alt} id={id} itemprop="image"/>
				<h5 itemprop="name">{label}</h5>
			</div>

			<div className="garlic-price" itemscope itemprop="offers" itemtype="http://schema.org/Offer">
				<h6>Цена за {measurement}</h6>
				<div className="garlic-cat-size">
					<p className="garlic-cat" itemprop="price">Категория А: &nbsp;&nbsp;{priceA}</p>
					<p className="garlic-size">{sizeA}</p>
				</div>
				<div className="garlic-cat-size">
					<p className="garlic-cat">Категория Б: &nbsp;&nbsp;{priceB}</p>
					<p  className="garlic-size" itemprop="price">{sizeB}</p>
				</div>
			</div>
		  </li>
		</>
	)
}

export function GarlicSort({id, src, alt, label, item, text1, text2}) {
	return (
		<>
			<li className="garlic__sort-item" itemscope itemtype="http://schema.org/Product">
			   <figure className="garlic__sort-wrap" data-category={label} itemprop="name">
				   <img src={src} alt={alt} id={id} itemprop="image"/>
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