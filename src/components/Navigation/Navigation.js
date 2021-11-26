import './Navigation.scss'

const Navigation = ({closeNav, isOpenNav, setIsSearch}) => {
    return (
        <nav className={`nav ${isOpenNav ? 'nav_open' : ""}`}>
            <button onClick={closeNav} className="nav__close">&#10006;</button>
            <div className="nav__container">
                <ul className="nav__links">
                    <li><a href="/" className="nav__link">Ночные клубы</a></li>
                    <li><a href="/" className="nav__link">Бары</a></li>
                    <li><a href="/" className="nav__link">Рестораны</a></li>
                    <li><a href="/" className="nav__link">Кафе</a></li>
                    
                </ul>
                <p className="nav__email">info@surgo.ru</p>
            </div>


        </nav>
    )
}

export default Navigation