import React from 'react';
import Logo from './Logo';
import Nav from './Nav';


export default function Header() {

    return (
        <header id="header__logo">
            <Logo />
            <Nav />
            <hr />
        </header>
    )

};