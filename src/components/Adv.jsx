import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Adv.css';
import { Link } from 'react-router-dom';

function Adv() {
	return (
		<div className="adv-container">
			<p className="banner"><span className="bigger-text">Предзаказ на 2025 год</span><br/>
			Открыто бронирование на посевной материал лука и чеснока по очень выгодным ценам.</p>

			<Link to="/order">
				<Button 
					className="btns"   
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
				ЗАКАЗАТЬ
				</Button>
			</Link>

		</div>
	)
}

export default Adv