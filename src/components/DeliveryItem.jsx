import React from 'react';

function DeliveryItem({src, alt}) {
	return (
		<>
			<figure className="delivery__item">
				<img src={src} alt={alt} className="delivery__item__img" />
			</figure>
		</>
	)
}

export default DeliveryItem;

