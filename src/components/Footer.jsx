import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Mailto from 'react-mailto.js';
import QRcode from '../images/qrcode.png';
import tg from '../images/icons/tg.svg';
// import logo from './../images/logo.png';


function Footer() {
  return (
    <div className="footer-container">

        <Link to="/" className="social-logo-up">
            green pato
        </Link>

        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                        <h4>Контакты</h4>
                        <Link to='https://t.me/LukiChesnoki_bot' target="_blank">
                            Telegram
                        </Link>
                        <Link to='https://vk.com/fermatikh' target="_blank">
				            ВКонтакте
			            </Link>
                        <Mailto to='sales@greenpato.ru'>
						    E-mail:<br /><span>sales@greenpato.ru</span>
					    </Mailto>
                </div>

                <div className="footer-link-items">
                    <h4>Культуры</h4>
                    <HashLink to='/garlic#garlic'>Озимый чеснок</HashLink>
                    <HashLink to='/onion#onion'>Шалот</HashLink>
                    <HashLink to='/onion#onion'>Лук</HashLink>
                </div>

                <div className="footer-link-items">
                    <h4>Заказ</h4>
                    <Link to='https://t.me/LukiChesnoki_bot' target="_blank">
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

            <div className="footer-link-order">
                <h4>Заказ</h4>
                <Link to='https://t.me/LukiChesnoki_bot' target="_blank">
                    <img src={tg} alt='TG-bot' className="tg-bot__img"/>
                </Link>
                <Link to='https://vk.com/fermatikh' target="_blank">
                    <img src={QRcode} alt='VK_community' className="social__img"/>
                </Link>
            </div>

            <p>Данный сайт носит информационный характер.<br/> Материалы и цены,
				размещенные на сайте, не являются публичной офертой.</p>
        </section>


        <section className="social-media">
            {/* <Link to="/" className="social-logo">
                <img src={logo} width={90} alt="logo"/> 
            </Link> */}
            <Link to="/" className="social-logo">
                green pato
            </Link>
            <div className="react">
                <p>Powered by</p>
                <i class="fa-brands fa-react"></i>
            </div>
            
            <div className="copyright">
                <small className="website-rights">Green Pato © 2023-2025</small>
                <small className="website-rights">Webmaster: Yuthala@GitHub</small>
            </div>
        </section>
    </div>
  )
}

export default Footer