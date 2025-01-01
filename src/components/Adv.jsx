import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Adv.css';
import { Link } from 'react-router-dom';
import advImg from '../images/adv-img.jpg'


function Adv() {
	//событие клик по кнопке "Заказать" ym
	const ym = () => {window.ym(97604546,'reachGoal','OrderClick')};


	return (
		<section className="adv-wrapper">
			<p>Бронируйте посевной материал лука и чеснока по выгодным ценам</p>
			<p className="banner"><span className="bigger-text">Открыт предзаказ на 2025 год</span></p>
			<Link to="/order">
				<Button 
					className="btns"   
					buttonStyle="btn--outline"
					buttonSize="btn--large"
					onClick={ym}
				>
				ЗАКАЗАТЬ
				</Button>
			</Link>


			<div className="adv-image" itemScope itemType="http://schema.org/ImageObject">
          		<img src={advImg} alt="main image" itemProp="contentUrl"/>
        	</div>
		</section>
	)
}



export default Adv