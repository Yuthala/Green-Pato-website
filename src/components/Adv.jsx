import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Adv.css';
import { Link } from 'react-router-dom';

function Adv() {
	return (
		<div className="adv-container">
			<p className="banner"><span className="bigger-text">только до 31 августа </span><br/>
			протравливание профессиональным препаратом <br/>
			в подарок к любому заказу</p>

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