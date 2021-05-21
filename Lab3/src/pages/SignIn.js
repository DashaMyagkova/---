import React from "react";
import '../style.css';

const SignIn = () => {
  return(
    <>
      <header>
        <div className="navbar">
          <h1 className="navbar-title">Sign In</h1>
        </div>
      </header> 
      <main>
        <section className="sign-section">
          <div>
            <h2 className="navbar-title">SIGN IN</h2>
            <hr className="underline"/>
          </div>
          <form className="form">
            <div className="form-item">
              <label for="email" className="input-label">Email</label>
              <input type="text" id="email" name="email" className="input"/>
            </div>
            <div className="form-item">
              <label for="password" className="input-label">Password</label>
              <input type="password" id="password" name="password" className="input"/>
            </div>
              <input type="submit" value="Submit" className="input submit"/>
          </form>
        </section>
      </main>
    </>
  )
};

export default SignIn;