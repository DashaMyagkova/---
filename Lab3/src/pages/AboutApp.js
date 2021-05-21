import React from "react";
import '../style.css';

const AboutApp = () => {
  return(
    <>
      <header>
        <div className="navbar">
          <h1 className="navbar-title">About App</h1>
        </div>
      </header> 
      <main>
        <section className="about-section">
          <div className="about-content">
            <div className="calculator-photo"></div>
            <div className="about-description">
              <h2 className="about-title">Calculator</h2>
              <p className="about-text">An application for calculating expressions. It will be implemented in two variations: engineering and simpler.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
};

export default AboutApp;