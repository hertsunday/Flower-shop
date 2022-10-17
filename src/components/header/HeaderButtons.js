import Orders from "./svg/Orders.svg";
import WishList from "./svg/WishList.svg";
import ShoppingCart from "./svg/ShoppingCart.svg";
import User from "./svg/User.svg";
import "./LogIn.scss";
import {useRef, useState} from "react";

function HeaderButtons({loggedIn, callLogInWindow}){
    let buttonsClass = "header__buttons";
    const logInWindow = useRef(null)

    if (!loggedIn) {
        buttonsClass = "header__buttons header__buttons-user"
    }

    return(
        <div className={buttonsClass}>{loggedIn ?
            <div className={buttonsClass}>
                {<div className="header__my-orders">
                    <div className="header__my-orders--border">
                        <img className="header__buttons--svg-list" src={Orders} alt="orders"/>
                    </div>
                </div>}
                {<div className="header__wish-list">
                    <img className="header__buttons--svg" src={WishList} alt="wish list"/>
                </div>}
                {<div className="header__shopping-cart">
                    <img className="header__buttons--svg" src={ShoppingCart} alt="shopping cart"/>
                </div>}
            </div>
            : <div className={buttonsClass}>
                {<div className="header__user-register" onClick={callLogInWindow}>
                    <img className="header__buttons--svg header__buttons--svg-user" src={User} alt="log in"/>
                </div>}
                {<div className="header__shopping-cart">
                    <img className="header__buttons--svg" src={ShoppingCart} alt="shopping cart"/>
                </div>}
            </div>
        }</div>
    );
}
export default HeaderButtons;