import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
    return (
        <div className="home-content">
            <div className="main-layout">
                <div className="hero-section">
                    <h1 className="ubuntu-bold">Santiago Spinetto Jung</h1>
                    <p className="ubuntu-regular-italic hero-subtitle">DevSecOps Engineer</p>
                    <p className="hero-description">
                        Building secure, scalable, and automated infrastructure solutions. 
                        Passionate about integrating security throughout the development lifecycle 
                        and implementing robust DevSecOps practices.
                    </p>
                </div>

                <div className="contact-section">
                    <h2 className="ubuntu-medium">$ ls contact/</h2>
                    <div className="contact-links">
                        <a href="mailto:santiago.spinetto@example.com" className="contact-link">
                            <span className="contact-prompt">$</span>
                            <span>email: santiago.spinetto@example.com</span>
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
