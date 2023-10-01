import Userinfo from "./UserInfo";
import '../css/components/Navbar.css';
import React, { useState } from 'react';
export function Content() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
                {isOpen && (
                    <div className="navbar-sidebar-open">
                    <nav className="navbar">
s
                        <ul className="nav-menu">
                            <li className="nav-menu-list"><a href="/">Home</a></li>
                            <li className="nav-menu-list"><a href="/">About</a></li>
                            <li className="nav-menu-list"><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                    </div>
                )}
                {!isOpen && (
                    <div className="navbar-sidebar-close">
                    <nav className="navbar">
                        <button className="navbar-toggle" onClick={toggleNavbar}>
                            <div className="side-navbar-close"><span>&#9776;</span></div>
                        </button>
                    </nav>
                    </div>
                )}

            
            
        </div>
    );
}

export function BottomContent() {
    return (
        <div>
            <article>BottomContent</article>
            <hr />
        </div>
    )
}