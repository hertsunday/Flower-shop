const arr = [0, 1, 2]

function MenuButton(){
    return (
        <div className="header__menu-button">
            {arr.map(() => <div className="menu-button__lines"></div>)}
        </div>
    );
}
export default MenuButton;