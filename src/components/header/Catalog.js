import CatalogImage from "./svg/CatalogImage.svg";
import CloseButton from "./svg/CloseButton.svg";

const arrSvg = [CatalogImage, CloseButton]

function Catalog({openCatalog, catalogOpened}){
    return(
        <div className="header__catalog" onClick={openCatalog}>
            <div className="catalog__svg">
                <img className="catalog__svg catalog__svg--back" src={arrSvg[Number(catalogOpened)]} alt="catalog"/>
                <div className="catalog__svg catalog__svg--front-block">
                    <img className="catalog__svg catalog__svg--front" src={arrSvg[Number(catalogOpened)]} alt="catalog"/>
                </div>
            </div>
            <div className="catalog__name">каталог</div>
        </div>
    );
}
export default Catalog;