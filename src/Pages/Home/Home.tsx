import React, { useState } from "react";
import "./Home.scss";

const Home: React.FC = () => {
    const [canvasVisible, setCanvasVisible] = useState(true);

    const toggleCanvas = () => {
        setCanvasVisible(prev => !prev);
    };

    return (
        <div className="home-content">
            <button
                className="enjoy-the-noise-btn"
                onClick={toggleCanvas}
                aria-label={canvasVisible ? "Hide canvas" : "Show canvas"}
            >
                {canvasVisible ? "Hide info" : "Show info"}
            </button>

            <div className={`${!canvasVisible ? "canvas-hidden" : "main-layout"}`}>
                <div className="hero-section">
                    <h1 className="ubuntu-bold">Santiago Spinetto Jung</h1>
                    <p className="ubuntu-regular-italic hero-subtitle">Web Developer → Pentester</p>
                    <p className="hero-description">
                    I spent years building web applications.<br />
                    Now I break them. My web Developer background lets me find vulnerabilities<br />
                    that scanners miss — because I understand the code behind the app.<br />
                    </p>
                </div>

                <div className="contact-section">
                    <h2 className="ubuntu-medium">$ ls contact/</h2>
                    <div className="contact-links">
                        <a href="mailto:sanjs965@gmail.com" className="contact-link">
                            <span className="contact-prompt">$</span>
                            <span>email: sanjs965@gmail.com</span>
                        </a>
                        <a href="https://linkedin.com/in/santiagosj" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span className="contact-prompt">$</span>
                            <span>linkedin: santiagosj</span>
                        </a>
                        <a href="https://github.com/santiagosj" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span className="contact-prompt">$</span>
                            <span>github: santiagosj</span>
                        </a>
                        <a href="https://twitter.com/santiagosj" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span className="contact-prompt">$</span>
                            <span>twitter: @santiagosj</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
