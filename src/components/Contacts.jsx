import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Mailto from 'react-mailto.js';
import './Contacts.css';
import email from '../images/icons/email.svg';
import tg from '../images/icons/tg.svg';
import ContactForm from './ContactForm';


function Contacts() {
	return (
		<>
			<section className="contacts-container" id="contacts">
				<h2>Контакты</h2>
				<div className='contacts__wrapper'>
					<div className="contacts-link">
						<h4>Телеграм-бот</h4>
						<p> узнать актуальные цены | оформить заказ</p>
						<p>получить счет на оплату | задать вопрос</p>

						<Link to='https://t.me/LukiChesnoki_bot' target="_blank">
							<img src={tg} alt='TG-bot' className="tg-bot__img"/>
						</Link>
					</div>

					<div className="contacts-mailto">
						<h4>Электронная почта</h4>
							<Mailto to='sales@greenpato.ru' className="mailto__wrapper">
									<label>sales@greenpato.ru</label>
									<img className="contacts__img" src={email} alt='email'/>
							</Mailto>
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<ContactForm />
		</>

	)
}

export default Contacts