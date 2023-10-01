import "../css/components/Header.css";
import logoImg from "../components/img/bolster.png"
import React, { useState } from 'react';
import SimpleContainer from "./Container";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <header className="header">
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    <div className="side-navbar-open"><span>&#9776;</span></div>
                </button>
                {isOpen &&
                    <div className="logo"><img src={logoImg} className="App-logo" alt="logo" /></div>
                }
                <div className="header-menu">
                    <div className="menu-option">
                        <nav className="nav">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    {!isOpen &&
                        <div className="login">
                            <div className="log-menu">
                                <span className="log-menu-item">login</span> /
                                <span className="log-menu-item">register</ span>
                            </div>
                        </div>
                    }
                    {isOpen &&
                        <div className="login-nav-open">
                            <div className="log-menu">
                                <span className="log-menu-item">login</span> /
                                <span className="log-menu-item">register</ span>
                            </div>
                        </div>
                    }

                </div>
            </header>
            <div className="main-body">
                <div className="left-nav">
                    {isOpen && (
                        <div className="navbar-sidebar-open">
                            <nav className="navbar">
                                <ul className="nav-menu">
                                    <li className="nav-menu-list">Home</li>
                                    <li className="nav-menu-list">About</li>
                                    <li className="nav-menu-list">Contact</li>
                                </ul>
                            </nav>
                        </div>
                    )}
                    {!isOpen && (
                        <div className="navbar-sidebar-close">
                            <nav className="navbar">
                            </nav>
                        </div>
                    )}
                </div>
                <div className="right-content">
                    <div className="Content-Style"> <SimpleContainer/></div>
                    
                </div>
            </div>
        </div>

    )
}

export const HeaderLoginButton = () => {
    return (
        <a href="/login" className="header-login-button">
            Login
        </a>
    );
};
