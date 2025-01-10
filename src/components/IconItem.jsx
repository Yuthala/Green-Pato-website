import React from 'react';

function IconItem({id, src, label, alt}) {
	return (
		<div className="icon__item">
			<img className="icon__item__img" src={src} alt={alt} id={id} />
			<h5 className="icon__item__label">{label}</h5>
		</div>
	)
  }
  
  export default IconItem