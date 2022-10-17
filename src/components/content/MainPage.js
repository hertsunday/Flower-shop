import RightArrow from "./svg/RightArrow.svg";
import LeftArrow from "./svg/LeftArrow.svg";
import {useRef, useState, useEffect} from "react";

const imageList = [1, 2, 3, 4, 5, 6, 7, 8];
const catalog = ['Цибулини квітів','Саджанці багаторічників','Саджанці плодових','Саджанці дерев','Саджанці хвойних рослин','Саджанці кущів','Саджанці троянд','Ґрунтопокривні рослини','Кімнатні рослини','Насіння','Садовий інвентар','Новорічні прикраси'];
const hotSaleTitle = ['Тюльпани','Нарциси','Мускарі','Троянди','Алліум','Лілейники','Півонії']


function MainPage(){
    const pictureHolder = useRef(null);
    const buttonLeftArrow = useRef(null);
    const buttonRightArrow = useRef(null);
    const [countImage, setCountImage] = useState(0)

    const handleClick = (direction) => {
        return () => {
            setCountImage(countImage + (direction === 'left' ? -1 : 1))
        }
    }

    useEffect(() => {
        const interval = setTimeout(() => {
            setCountImage((prevCounter) => {return prevCounter === 4 ? prevCounter - 4 : prevCounter + 1});
        }, 4000);

        pictureHolder.current.style.marginLeft = `-${countImage * 100}%`

        return () => clearInterval(interval);
    }, [countImage]);

    return (
        <div className="content__main-page">
            <div className="main-page__first-container main-page__margin">
                <ul className="first-container__catalog-categories--start">
                    {catalog.map(el => <li className="catalog-categories__item">{el}</li>)}
                </ul>
                <div className="first-container__ads">
                    {!(countImage === 0) && <button className="main-slider__control main-slider__control--prev" ref={buttonLeftArrow} onClick={handleClick('left')} disabled={countImage === 0}>
                        <img className="main-slider__control--svg" src={LeftArrow} alt="previous ad image"/>
                    </button>}
                    <div className="first-container__picture-holder" ref={pictureHolder}>
                        {imageList.filter(el => el < 6).map(el => <div className={`first-container__picture first-container__picture--${el}`}></div>)}
                    </div>
                    {(countImage !== 4) && <button className="main-slider__control main-slider__control--next" ref={buttonRightArrow} onClick={handleClick('right')} disabled={countImage === 4}>
                        <img className="main-slider__control--svg" src={RightArrow} alt="next ad image"/>
                    </button>}
                </div>
            </div>
            <div className="main-page__second-container main-page__margin">
                <span className='hot-sale__title'>ХІТИ ПРОДАЖУ</span>
                <div className='hot-sale__holder'>
                    {hotSaleTitle.map((el, index) => <div className={`hot-sale__item hot-sale__item--${index}`}>
                        <div className={`hot-sale__item-photo hot-sale__item-photo--${index}`}></div>
                        <div className='hot-sale__item-title'>{el}</div>
                    </div>)}
                </div>
            </div>
            <div className="main-page__third-container main-page__margin">
                <span className="guarantees__title">Гарантії надійності від КВІТОЧКИ</span>
                <div className="guarantees__holder"></div>
            </div>
        </div>
    );
}
export default MainPage;