import React from 'react';

function DeliveryItem({src, alt, label}) {
	return (
		<>
			<figure className="delivery__item">
				<img src={src} alt={alt} className="delivery__item__img" />
				<p className="delivery__item__text">{label}</p>
			</figure>
		</>
	)
}

export default DeliveryItem;

