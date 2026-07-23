import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

type Props = {};

const Navar: React.FC<Props> = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => setMenuOpen((v) => !v);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    className={`hamburger${menuOpen ? " open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </button>

                <div className={`menu${menuOpen ? " open" : ""}`}>
                    <Link to="/home" onClick={closeMenu} className="">
                        Home
                    </Link>
                    <Link to="/about" onClick={closeMenu} className="">
                        About
                    </Link>
                    <Link to="/projects" onClick={closeMenu} className="">
                        Projects
                    </Link>
                    <Link to="/posts" onClick={closeMenu} className="">
                        Posts
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navar;