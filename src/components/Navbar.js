import React from "react"
export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <h1>MUSIC STREAMING</h1>
            </div>
            <div className="navbar-side-content-container">
                <div>
                    <button className="btn btn--secondary">Upload Now</button>
                </div>
                <div className="navbar-tags">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}