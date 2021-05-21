import React from "react";
import {useHistory} from 'react-router-dom';
import '../style.css';

const MainPage = () => {
  const history = useHistory();

  const handleRedirect = (url) => () => {
    if(url) {
      history.push(url);
    }
  }

  return(
    <>
      <header>
        <div className="navbar">
          <h1 className="navbar-title">Main Page</h1>
        </div>
      </header> 
      <main>
        <section className="router-section">
          <button onClick={handleRedirect('/registration')} className="router-link">Registration</button>
          <button onClick={handleRedirect('/signIn')} className="router-link">Sign In</button>
          <button onClick={handleRedirect('/info')} className="router-link">User Info</button>
          <button className="router-link" onClick={handleRedirect('/about')}>
            About App
          </button>
          <button onClick={handleRedirect('/calculator')} className="router-link">Calculator</button>
        </section>
      </main>
    </>
  )
};

export default MainPage;