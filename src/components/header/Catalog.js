import CatalogImage from "./svg/CatalogImage.svg";
import CloseCatalog from "./svg/CloseCatalog.svg";

const arrSvg = [CatalogImage, CloseCatalog]

function Catalog({openCatalog, catalogOpened}){
    return(
        <div className="header__catalog" onClick={openCatalog}>
            <div className="catalog__svg">
                <img className="catalog__svg" src={arrSvg[Number(catalogOpened)]} alt="catalog"/>
                <div className="catalog__svg catalog__svg--front">
                    <img src={arrSvg[Number(catalogOpened)]} alt="catalog"/>
                </div>
            </div>
            <div className="catalog__name">каталог</div>
        </div>
    );
}
export default Catalog;