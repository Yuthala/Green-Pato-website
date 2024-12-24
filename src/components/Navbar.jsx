import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button } from './Button';
import './Navbar.css';
import logo from './../images/logo.png'; 

function Navbar() {

    //состояние клик по гамбургеру
    const [click, setClick] = useState(false);
    //состояние отображения кнопки Sign Up в зависимости от размера экрана
    const [button, setButton] = useState(true);

    //функция клика по гамбургеру
    const handleClick = () => {
        setClick(!click);
    }
    //функция клика по крестику (закрыть меню гамбургер)
    const closeMobileMenu = () => setClick(false);

    //функция, показывающая кнопку Sign Up при ширине экрана 960px и выше, скрывает при ширине <960px
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    //чтобы кнопка Sign Up не появлялась при ширине экрана < 960px при обновлении страницы (отрисовывается 1 раз, т.к. передан пустой массив зависимостей)
    useEffect(() => {
        showButton();
    }, [])

    //showButton на событие resize    
    window.addEventListener('resize', showButton);

  return (
    <div className="wrapper-nav">
        <nav className="navbar">
            <div className="navbar-container" id="navbar">
                {/* при клике по логотипу mobile Menu также закрывается */}
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <div className="navbar-wrapper">
                        <img src={logo} width={90} alt="logo"/>
                        <h2>green&nbsp;pato</h2>
                    </div>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Главная
                        </Link>
                    </li>

                    <li className="nav-item">
                        <HashLink to="/garlic#garlic" className="nav-links" onClick={closeMobileMenu}>
                        Чеснок
                        </HashLink>
                    </li>

                    <li className="nav-item">
                        <HashLink to="/onion#onion" className="nav-links" onClick={closeMobileMenu}>
                            Лук
                        </HashLink>
                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/order/#order" className="nav-links-mobile" onClick={closeMobileMenu}>
                            ЗАКАЗАТЬ
                        </Link>
                    </li>
                </ul>
                {/* if button is true, return Button component */}
                {button && 
                <Link to="/order#order">
                    <Button buttonStyle="btn--outline">ЗАКАЗАТЬ</Button>
                </Link>
}
            </div>
        </nav>
    </div>
  )
}

export default Navbar;