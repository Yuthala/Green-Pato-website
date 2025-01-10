import React from 'react';

function DeliveryItem({src, alt}) {
	return (
		<>
			<figure className="delivery__item">
				<img className="delivery__item__img" src={src} alt={alt} />
			</figure>
		</>
	)
}

export default DeliveryItem;

