import "./Header.scss";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import Catalog from "./Catalog";
import Search from "./Search";
import HeaderButtons from "./HeaderButtons";
import {useState} from "react";
import LogIn from "./LogIn";
import {createPortal} from "react-dom";
import Registration from "./Registration";
import CatalogWindow from "./CatalogWindow";

function Header(){
    const [userLogIn, setUserLogIn] = useState(false);
    const [callForm, setCallForm] = useState(false);
    const [formSwitch, setFormSwitch] = useState(false);
    const [catalogOpened, setCatalogOpened] = useState(false)

    function callFormWindow() {
        setCallForm(!callForm)
    }

    function onFormSwitch() {
        setFormSwitch(!formSwitch);
    }

    function logIn() {
        setUserLogIn(!userLogIn)
    }

    function openCatalog() {
        setCatalogOpened(!catalogOpened)
    }

    return (
        <header className="header">
            <div className="header-center">
                <MenuButton/>
                <Logo/>
                <Catalog openCatalog={openCatalog} catalogOpened={catalogOpened}/>
                <Search loggedIn={userLogIn}/>
                <HeaderButtons loggedIn={userLogIn} callLogInWindow={callFormWindow}/>
                {callForm && createPortal(formSwitch ? <Registration formSwitch={onFormSwitch} callFormWindow={callFormWindow} logIn={logIn}/> : <LogIn formSwitch={onFormSwitch} callFormWindow={callFormWindow} logIn={logIn}/>, document.querySelector("#root"))}
                {catalogOpened && createPortal(<CatalogWindow openCatalog={openCatalog}/>, document.querySelector("#root"))}
            </div>
        </header>
    );
}
export default Header;