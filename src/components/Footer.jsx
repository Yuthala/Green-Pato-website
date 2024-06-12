import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Mailto from 'react-mailto.js';
import QRcode from '../images/qrcode.png';
import tg from '../images/icons/tg.svg';
import logo from './../images/logo.png';


function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                        <h2>Контакты</h2>
                        <Link to='' target="_blank">
                            Telegram
                        </Link>
                        <Link to='https://vk.com/fermatikh' target="_blank">
				            ВКонтакте
			            </Link>
                        <Mailto to='sales@greenpato.ru'>
						    E-mail:<br />sales@greenpato.ru
					    </Mailto>
                </div>

                <div className="footer-link-items">
                    <h2>Культуры</h2>
                    <HashLink to='/garlic#garlic'>Озимый чеснок</HashLink>
                    <HashLink to='/onion#onion'>Лук шалот</HashLink>
                    <HashLink to='/onion#onion'>Лук репчатый</HashLink>
                </div>

                <div className="footer-link-items">
                    <h2>Заказ</h2>
                    <Link to='' target="_blank">
						<img src={tg} alt='TG-bot' className="tg-bot__img"/>
					</Link>
                    <Link to='https://vk.com/fermatikh' target="_blank">
				        <img src={QRcode} alt='VK_community' className="social__img"/>
			        </Link>
                </div>
            </div>
        </div>

        <section className="disclaimer">
            <div className="divider-hor"></div>
            <p>Данный сайт носит информационный характер.<br/> Материалы и цены,
				размещенные на сайте, не являются публичной офертой.</p><br/>
            <p>Green Pato не собирает, не хранит и не обрабатывает персональные данные посетителей сайта.</p>
        </section>


        <section className="social-media">
                    <Link to="/" className="social-logo">
                        <img src={logo} width={90} alt="logo"/> 
                    </Link>
                    <Link to="/" className="social-logo">
                        GREEN PATO
                    </Link>
                <small className="website-rights">Green Pato © 2023-2024</small>
        </section>
    </div>
  )
}

export default Footer