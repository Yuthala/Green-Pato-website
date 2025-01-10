import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button } from './Button';
import './Navbar.css';
import logo from './../images/logo.webp'; 

function Navbar() {

    //состояние нажата ли кнопка Заказать
    const[isClicked, setIsClicked] = useState(false)

    //состояние клик по гамбургеру
    const [click, setClick] = useState(false);
    //состояние отображения кнопки Заказать в зависимости от размера экрана
    const [button, setButton] = useState(true);

    //функция клика по гамбургеру
    const handleClick = () => {
        setClick(!click);
    }

    const useLayoutEffect = () => {
        //функция клика по крестику (закрыть меню гамбургер)
		setClick(false);
		// scroll to top
		window.scrollTo(0, 0)
	};

    const removeHover = () => {
		// scroll to top
		window.scrollTo(0, 0)
        //return btn-primary
        setIsClicked(current => !current);
        setIsClicked(false);
	};

    //функция, показывающая кнопку Заказать при ширине экрана 960px и выше, скрывает при ширине <960px
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    //чтобы кнопка Заказать не появлялась при ширине экрана < 960px при обновлении страницы (отрисовывается 1 раз, т.к. передан пустой массив зависимостей)
    useEffect(() => {
        showButton();
    }, [])

    //showButton на событие resize    
    window.addEventListener('resize', showButton);

  return (
    <header className="wrapper-nav">
        <nav className="navbar" itemScope itemType="http://schema.org/SiteNavigationElement">
            <div className="navbar-container" id="navbar" itemScope itemType="http://schema.org/Organization">
                {/* при клике по логотипу mobile Menu также закрывается */}
                <Link className="navbar-logo" to="/"  onClick={useLayoutEffect} itemProp="url">
                    <div className="navbar-wrapper">
                        <img src={logo} width={90} alt="logo" itemProp="logo"/>
                        <h2>green&nbsp;pato</h2>
                    </div>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link className="nav-links" to="/" onClick={useLayoutEffect} itemProp="url">
                            Главная
                        </Link>
                    </li>

                    <li className="nav-item">
                        <HashLink className="nav-links" to="/garlic#garlic" onClick={useLayoutEffect} itemProp="url">
                        Чеснок
                        </HashLink>
                    </li>

                    <li className="nav-item">
                        <HashLink className="nav-links" to="/onion#onion"  onClick={useLayoutEffect} itemProp="url">
                            Лук и Шалот
                        </HashLink>
                    </li>

                    <li className="nav-item">
                        <Link 
                            className="nav-links-mobile" to="/order/#order" onClick={useLayoutEffect} itemProp="url">
                            заказать
                        </Link>
                    </li>
                </ul>
                {/* if button is true, return Button component */}
                {button && 
                <Link to="/order#order">
                    <Button className="btn" buttonStyle={isClicked ? "btn--primary" : "btn--outline"}  onClick={removeHover}>ЗАКАЗАТЬ</Button>
                </Link>
}
            </div>
        </nav>
    </header>
  )
}

export default Navbar;