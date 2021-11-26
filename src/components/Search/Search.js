import './Search.scss'

const Search = ({closeSearch, isSearch}) => {
    return (
        <div className={`search ${isSearch ? 'search_open' : ""}`}>
            <div className="search__container">
                <form className="search__form">
                    <button className="search__submit"></button>
                    <input className="search__input" placeholder="Поиск по названию"/>
                </form>
                <button onClick={closeSearch} className="search__close">&#10006;</button>
            </div>
        </div>
    )
}

export default Search;