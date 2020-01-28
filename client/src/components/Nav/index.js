  
import React from "react";

function Nav() {
    return (
        <nav style={{height: 150}} className="navbar navbar-expand-lg bg-dark">
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li>
                        <a href="/"><button type="button" className="btn btn-outline-light text-light btn-lg">Search Books</button></a>
                    </li>
                    <li>
                        <a href="/saved"><button type="button" className="btn btn-outline-light text-light btn-lg">Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;