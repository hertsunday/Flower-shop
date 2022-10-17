import CatalogImage from "./svg/CatalogImage.svg";

function Catalog(){
    return(
        <div className="header__catalog">
            <div className="catalog__svg">
                <img className="catalog__svg" src={CatalogImage} alt="catalog"/>
                <div className="catalog__svg catalog__svg--front">
                    <img src={CatalogImage} alt="catalog"/>
                </div>
            </div>
            <div className="catalog__name">каталог</div>
        </div>
    );
}
export default Catalog;