import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Mailto from 'react-mailto.js';
import './Contacts.css';
import email from '../images/icons/email.svg';
import tg from '../images/icons/tg.svg';


function Contacts() {
	return (
		<div className="contacts-container" id="contacts">
			<h2 className="contacts__header">Контакты</h2>
			<div className='contacts__wrapper'>
				<div className="contacts-link">
					<p> узнать актуальные цены | оформить заказ</p>
					<p>получить счет на оплату | задать вопрос</p>
					<h4>всё это теперь доступно через Телеграм-бот</h4>
					<Link to='' target="_blank">
						<img src={tg} alt='TG-bot' className="tg-bot__img"/>
					</Link>
				</div>

				<div className="divider"></div>

				<div className="contacts-mailto">
					<p>или напишите нам по электронной почте</p>
						<Mailto to='sales@greenpato.ru' className="mailto__wrapper">
								<label>sales@greenpato.ru</label>
								<img className="contacts__img" src={email} alt='email'/>
						</Mailto>
				</div>
			</div>

		</div>
	)
}

export default Contacts