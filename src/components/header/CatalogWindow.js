import "./CatalogWindow.scss";
import "../content/MainPage.scss";
import "./LogIn.scss";
import {catalogLabelEnum, catalogOrderEnum, subCatalogEnum, subCatalogLabelEnum} from "../enum";
import * as menuConstants from "../menuConstants";
import {useState} from "react";

function CatalogWindow({openCatalog}){
    const [activeMenuItem, setActiveMenuItem] = useState("FLOWER_BULBS");

    return (
        <div className="catalog-window">
            <div className="fading fading-catalog" onClick={openCatalog}></div>
            <div className="catalog-window__open">
                <ul className="catalog-window__catalog">
                    {Object.values(menuConstants).sort((a, b) => catalogOrderEnum[a] - catalogOrderEnum[b])
                        .map(el => <li onMouseOver={() => {setActiveMenuItem(el)}} className="catalog-categories__item">
                        {catalogLabelEnum[el]}</li>)}
                </ul>
                <ul className="catalog-window__sub-catalog">
                    {subCatalogEnum[activeMenuItem].map(el => (
                        <li className="catalog-categories__item">{subCatalogLabelEnum[el]}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default CatalogWindow;