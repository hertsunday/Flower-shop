const arr = [0, 1, 2]

function MenuButton({openMenuButton}){
    return (
        <div className="header__menu-button" onClick={openMenuButton}>
            {arr.map(() => <div className="menu-button__lines"></div>)}
        </div>
    );
}
export default MenuButton;