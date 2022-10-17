import LogoImage from "./svg/LogoImage.svg";

function Logo(){
    return(
        <div className="header__logo">
            <div className="header__logo-image">
                <img src={LogoImage} alt="logo"/>
            </div>
            <div className="header__logo-name">КВІТОЧКА</div>
        </div>
    );
}
export default Logo;