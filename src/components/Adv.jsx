import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Adv.css';
import { Link } from 'react-router-dom';

function Adv() {
	return (
		<div className="adv-container">
			<p className="banner"><span className="bigger-text">только до 30 июня </span><br/>
			принимаем предзаказы на 2024 год <br/>
			по ценам 2023 года</p>

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