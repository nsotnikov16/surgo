import './Header.scss'
import search from '../../images/search.svg';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';

const Header = () => {

    const [isOpenNav, setIsOpenNav] = useState(false)
    const [isSearch, setIsSearch] = useState(false)

    const closeNav = () => {
        setIsOpenNav(false)
    }

    const closeSearch = () => {
        setIsSearch(false)
    }

    useEffect(() => {
        document.addEventListener('click', ({ target }) => {
            if (!target.closest('.search') && !target.classList.contains('header__search')) setIsSearch(false)
            if (!target.closest('.nav') && !target.closest('.header__burger')) setIsOpenNav(false)
        })
    }, [])

    return (
        <>
            <Navigation closeNav={closeNav} setIsSearch={setIsSearch} isOpenNav={isOpenNav} />
            <Search closeSearch={closeSearch} isSearch={isSearch} />
            <header className="header">
                <div className="header__container">
                    <div onClick={() => setIsOpenNav(true)} className="header__burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="/" className="header__title">Поиск развлечений в Сургуте</a>
                    <img src={search} onClick={() => setIsSearch(true)} alt="search" className="header__search" />
                </div>
                <form className="search__form search__form_min">
                    <button className="search__submit"></button>
                    <input className="search__input" placeholder="Найти по названию"/>
                </form>
            </header>
        </>
    )
}

export default Header;