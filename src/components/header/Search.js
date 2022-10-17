function Search({loggedIn}){
    let searchClass = "header__search";

    if (!loggedIn){
        searchClass = "header__search header__search-user";
    }

    return(
        <div className={searchClass}>
            <input className="search__input" type="search" placeholder="Я шукаю..."/>
            <label className="search__button" htmlFor="">
                Знайти
                <input className="search__button--hidden" type="button"/>
            </label>
        </div>
    );
}
export default Search;