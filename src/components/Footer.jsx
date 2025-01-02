import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
//import AnchorLink from "react-anchor-link-smooth-scroll";
import Mailto from 'react-mailto.js';
import QRcode from '../images/qrcode.png';
import tg from '../images/icons/tg.svg';
// import logo from './../images/logo.png';


function Footer() {

    const useLayoutEffect = () => {
		// scroll to top
		window.scrollTo(0, 0)
	};
  return (
    <section className="footer-container" itemScope itemType="http://schema.org/WPFooter">

        <Link to="/#navbar" className="social-logo-up" onClick={useLayoutEffect}>
            green pato
        </Link>

        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                        <h4>Контакты</h4>
                        <Link to='https://t.me/LukiChesnoki_bot' target="_blank" rel="noopener noreferrer">
                            Telegram
                        </Link>
                        <Link to='https://vk.com/fermatikh' target="_blank" rel="noopener noreferrer">
				            ВКонтакте
			            </Link>
                        <Mailto to='sales@greenpato.ru'>
						    E-mail:<br /><span>sales@greenpato.ru</span>
					    </Mailto>
                </div>

                <div className="footer-link-items">
                    <h4>Культуры</h4>
                    <HashLink to='/garlic#garlic' rel="noopener noreferrer">Озимый чеснок</HashLink>
                    <HashLink to='/onion#onion' rel="noopener noreferrer">Шалот</HashLink>
                    <HashLink to='/onion#onion' rel="noopener noreferrer">Лук</HashLink>
                </div>

                <div className="footer-link-items">
                    <h4>Заказ</h4>
                    <Link to='https://t.me/LukiChesnoki_bot' target="_blank" rel="noopener noreferrer">
						<img src={tg} alt='TG-bot' className="tg-bot__img"/>
					</Link>
                    <Link to='https://vk.com/fermatikh' target="_blank" rel="noopener noreferrer">
				        <img src={QRcode} alt='VK_community' className="social__img"/>
			        </Link>
                </div>
            </div>
        </div>

        <section className="disclaimer">
            <div className="divider-hor"></div>

            <div className="footer-link-order">
                <h4>Заказ</h4>
                <Link to='https://t.me/LukiChesnoki_bot' target="_blank" rel="noopener noreferrer">
                    <img src={tg} alt='TG-bot' className="tg-bot__img"/>
                </Link>
                <Link to='https://vk.com/fermatikh' target="_blank" rel="noopener noreferrer">
                    <img src={QRcode} alt='VK_community' className="social__img"/>
                </Link>
            </div>

            <p>Данный сайт носит информационный характер.<br/> Материалы и цены,
				размещенные на сайте, не являются публичной офертой.</p>

            <HashLink to='/policy' rel="noopener noreferrer" className="policy-link" onClick={useLayoutEffect}>Политика конфиденциальности</HashLink>

            <div className="divider-hor"></div>
            <p>Юридическая информация: ИП Полоусов И. В. ОГРНИП 323710000050917</p>
        </section>


        <section className="social-media">
            {/* <Link to="/" className="social-logo">
                <img src={logo} width={90} alt="logo"/> 
            </Link> */}
            <Link to='/#navbar' className="social-logo" onClick={useLayoutEffect}>green pato</Link>
            {/* <AnchorLink href='#navbar' className="social-logo">green pato</AnchorLink > */}
            <div className="react">
                <p>Powered by</p>
                <i className="fa-brands fa-react"></i>
            </div>
            
            <div className="copyright">
                <small className="website-rights" itemProp="copyrightHolder">Green Pato © 2023-2025</small>
                <small className="website-rights">Webmaster: Yuthala@GitHub</small>
            </div>
        </section>
    </section>
  )
}

export default Footer