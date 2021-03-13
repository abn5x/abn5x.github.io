import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <div className="nav-container-top"></div>
            <nav className="nav-container">
                <ul>
                    <NavLink to="/portfolio" className="nav-button" activeClassName="nav-button--selected" >
                        <li>Portfolio</li>
                    </NavLink>
                    <NavLink to="/" className="nav-button" activeClassName="nav-button--selected" exact={true}>
                        <li>Sobre mi</li>
                    </NavLink>
                    <NavLink to="/contact" className="nav-button" activeClassName="nav-button--selected">
                        <li>Contacto</li>
                    </NavLink>
                </ul>
            </nav>
        </>
    )
}