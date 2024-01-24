import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function nav(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-${props.navBg}`}>
            <Link className={`navbar-brand text-${props.textColor}`} to="/">CipherCraft</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll styling-specific-code">
                    <li className="nav-item">
                        <Link className={`nav-link text-${props.textColor}`} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link text-${props.textColor}`} to="/About" >About</Link>
                    </li>
                </ul>
                <div class="form-check form-check-inline">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="inlineCheckbox1" />
                    <label className={`form-check-label text-${props.textColor}`} htmlFor="inlineCheckbox1">Dark Mode</label>
                </div>
            </div>
        </nav>
    );
}