import React from 'react';
import { NavLink } from 'react-router-dom';




function Nav() {
    return (
        <header>
            <nav>
                <NavLink className="home-link" to="/"><h2>B.F.G. PRODUCTIONS</h2></NavLink>
                <ul>
                    <NavLink className="nav-link" activeClassName="selected" to="/about"><li>ABOUT</li></NavLink>
                    <NavLink className="nav-link" activeClassName="selected" to="/music"><li>MUSIC</li></NavLink>
                    <NavLink className="nav-link" activeClassName="selected" to="/events"><li>EVENTS</li></NavLink>
                    <NavLink className="nav-link" activeClassName="selected" to="/merch"><li>MERCH</li></NavLink>
                    <NavLink className="nav-link" activeClassName="selected" to="/contact"><li>CONTACT</li></NavLink>
                </ul>
                <ul className="social-links">
                    <li><a href="https://www.youtube.com/channel/UCiuF_mTwcQRTYUVBGYbNnRA" rel="noreferrer" target="_blank"><i className="fab fa-youtube"></i></a></li>
                    <li><a href="mailto:thebfgbandatl@gmail.com" rel="noreferrer" target="_blank"><i className="fas fa-envelope"></i></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;