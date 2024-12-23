import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Adv.css';
import { Link } from 'react-router-dom';


function Adv() {

	//событие клик по кнопке "Заказать" ym
	// const counterClick = () => {window.ym(97604546,'reachGoal','OrderClick')};

	return (
		<div className="adv-wrapper">
			<p>Бронируйте посевной материал лука и чеснока по выгодным ценам</p>
			<p className="banner"><span className="bigger-text">Открыт предзаказ на 2025 год</span></p>
			<Link to="/order">
				<Button 
					className="btns"   
					buttonStyle="btn--outline"
					buttonSize="btn--large"
					onClick={window.ym(97604546,'reachGoal','OrderClick')}
				>
				ЗАКАЗАТЬ
				</Button>
			</Link>
		</div>
	)
}

export default Adv