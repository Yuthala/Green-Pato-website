import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './Social.css';
import QRcode from '../images/qrcode.png';

function Social() {
	return (
		<div className="social-container">
			<h4>Подпишись на наше сообщество VK</h4>
			<div className="social__wrapper">
				<ul className="social__list">
					<li>оформить предзаказ или заказать товары в наличии</li>
					<li>фотоотчеты</li>
					<li>анонсы акций и спецпредложений</li>
					<li>рекомендации по выращиванию</li>
					<li>любимые рецепты</li>
				</ul>
				
				<Link to='https://vk.com/fermatikh' target="_blank">
					<img src={QRcode} alt='VK_community' className="social__img"/>
				</Link>

			</div>
		</div>
	)
}

export default Social