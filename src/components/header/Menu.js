import "./Menu.scss";
import LogoImage from "./svg/LogoImage.svg";
import CloseLogIn from "./svg/CloseButton.svg";
import QuestionMark from "./svg/QuestionMark.svg";
import TelegramChat from "./svg/TelegramChat.svg";
import PlayMarket from "./svg/PlayMarket.svg";
import AppStore from "./svg/AppStore.svg";
import Facebook from "./svg/Facebook.svg";
import Twitter from "./svg/Twitter.svg";
import YouTube from "./svg/YouTube.svg";
import Instagram from "./svg/Instagram.svg";
import Viber from "./svg/Viber.svg";
import Telegram from "./svg/Telegram.svg";

import {useEffect, useState} from "react";

const initialClassname = "menu-holder__menu";
const withOpenedModifierClassname = "menu-holder__menu--opened";

const closeDelay = 500;

function Menu({openMenuButton}){
    const socials = [Facebook, Twitter, YouTube, Instagram, Viber, Telegram];
    const [menuClassname, setMenuClassname] = useState("menu-holder__menu")

    useEffect(() => {
        const timer = setTimeout(() => {
            setMenuClassname(`${initialClassname} ${withOpenedModifierClassname}`)
        });
        return () => {
            clearTimeout(timer);
        }
    }, []);

    function handleButton() {
        setMenuClassname(initialClassname);

        setTimeout(() => {
            openMenuButton();
        }, closeDelay)
    }

    return (
        <div className="menu-holder">
            <div className="fading" onClick={handleButton}></div>
            <div className={menuClassname}>
                <div className="menu-content__header">
                    <div className="menu-content__logo">
                        <div className="menu-content__logo-image">
                            <img src={LogoImage} alt="mini logo"/>
                        </div>
                        <div className="menu-content__logo-name">КВІТОЧКА</div>
                    </div>
                    <div className="menu__close-button" onClick={handleButton}>
                        <img className="menu__close-button--svg" src={CloseLogIn} alt="Close menu"/>
                    </div>
                </div>
                <div className="menu-content">
                    <div className="menu-content__item menu-content__item-top">
                        <img className="menu-content__item-svg" src={QuestionMark} alt="Question Mark"/>
                        <span className="menu-content__item-name">Довідковий центр</span>
                    </div>
                    <div className="menu-content__item">
                        <img className="menu-content__item-svg" src={TelegramChat} alt="Telegram icon"/>
                        <span className="menu-content__item-name">Чат з КВІТОЧКА</span>
                    </div>
                    <div className="menu-content__title-name">Інформація про компанію</div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Про нас</span>
                    </div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Вакансії</span>
                    </div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Контакти</span>
                    </div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Про нас</span>
                    </div>
                    <div className="menu-content__title-name">Допомога</div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Доставка та оплата</span>
                    </div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Кредит</span>
                    </div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Гарантія</span>
                    </div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Повернення товару</span>
                    </div>
                    <div className="menu-content__title-name">Сервіси</div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Бонусний рахунок</span>
                    </div>
                    <div className="menu-content__item">
                        <span className="menu-content__item-name">Подарункові сертифікати</span>
                    </div>
                    <div className="menu-content__title-name">Завантажуйте наш додаток</div>
                    <div className="menu-content__app">
                        <img className="menu-content__app-svg" src={PlayMarket} alt="Go to Play Market to download our app"/>
                        <img className="menu-content__app-svg" src={AppStore} alt="Go to App Store to download our app"/>
                    </div>
                    <div className="menu-content__title-name">Ми в соціальних мережах</div>
                    <div className="menu-content__app">
                        {socials.map(el => (
                            <img className="menu-content__socials-svg" src={el} alt="Go to our socials"/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;