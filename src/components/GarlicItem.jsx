import React from 'react';

export function GarlicType ({id, src, alt, label, priceA, priceB, sizeA, sizeB, measurement}) {
	return (
		<>
		 <div className="garlic__type-item">
			<div className="garlic__type-img">
				<img src={src} alt={alt} id={id}/>
				<h5>{label}</h5>
			</div>

			<div className="garlic-price">
				<h6>Цена за {measurement}</h6>
				<div className="garlic-cat-size">
					<p className="garlic-cat">Категория А: &nbsp;&nbsp;{priceA}</p>
					<p className="garlic-size">{sizeA}</p>
				</div>
				<div className="garlic-cat-size">
					<p className="garlic-cat">Категория Б: &nbsp;&nbsp;{priceB}</p>
					<p  className="garlic-size">{sizeB}</p>
				</div>
			</div>
		  </div>
		</>
	)
}

export function GarlicSort({id, src, alt, label, item, text1, text2}) {
	return (
		<>
			<li className="garlic__sort-item">
			   <figure className="garlic__sort-wrap" data-category={label}>
				   <img src={src} alt={alt} id={id}/>
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