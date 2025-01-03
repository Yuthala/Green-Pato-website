import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Mailto from 'react-mailto.js';
import email from '../../images/icons/email.svg';
import tg from '../../images/icons/tg.svg';
import QRcode from '../../images/qrcode.webp';


export default function Order() {
    return (
        <div className="order" id="order">
                <div className="order-header">
                    <h1>оформление заказа</h1>
                    <p className="license">*Image by freepik</p>
                </div>


                <section className="content">
                    <ul className="order-list">
                        <li>Узнать актуальные цены</li>
                        <li>Узнать о товарах в наличии</li>
                        <li>Оформить заказ</li>
                        <li>Сделать предзаказ</li>
                        <li>Задать вопрос</li>
                    </ul>

                    <div className="order__wrapper">
                        <div className="order__item">
                            <label>через Telegram bot</label>
                            <Link to='https://t.me/LukiChesnoki_bot' target="_blank" rel="noopener noreferrer">
                                <img src={tg} alt='TG-bot' className="tg-bot__img"/>
                            </Link>
                        </div>

                        <div className="order__item">
                            <label>в нашем сообществе VK</label>
                            <Link to='https://vk.com/fermatikh' target="_blank" rel="noopener noreferrer">
                                <img src={QRcode} alt='VK_community' className="social__img"/>
                            </Link>
                        </div>

                        <div className="order__item">
                            <label>напишите нам по<br/> электронной почте<br/>sales@greenpato.ru</label>
                            <Mailto to='sales@greenpato.ru' className="mailto__wrapper">
                                    <img className="contacts__img" src={email} alt='email'/>
                            </Mailto>
                        </div>
                    </div>
                </section>
        </div>

    );
}