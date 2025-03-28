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
				<h3>Контакты</h3>
				<div className="contacts__wrapper">
					<div className="contacts-link">
						<h4>Телеграм-бот</h4>
						<p> узнать актуальные цены | оформить заказ</p>
						<p>получить счет на оплату | задать вопрос</p>

						<Link to="https://t.me/LukiChesnoki_bot" target="_blank" rel="noopener noreferrer">
							<img className="tg-bot__img" src={tg} alt="TG-bot"/>
						</Link>
					</div>

					<div className="contacts-mailto" itemScope itemType="https://schema.org/Organization">
						<h4>Электронная почта</h4>
							<Mailto className="mailto__wrapper" to="sales@greenpato.ru">
									<label for="email-img" role="link" itemProp="email">sales@greenpato.ru</label>
										<img className="contacts__img" id="email-img" src={email} alt="email"/>
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