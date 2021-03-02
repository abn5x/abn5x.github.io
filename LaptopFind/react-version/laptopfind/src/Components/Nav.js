import React from 'react';
import SearchAnimation from './SearchAnimation';

export default function Nav() {


    return (
        <nav>
            <ul>
                <li className="logo"><h1>LaptopFind</h1></li>
                <li>Trending laptops</li>
                <li>Best in category</li>
            </ul>
            <SearchAnimation></SearchAnimation>
        </nav>
    )
}