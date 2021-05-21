import React from "react";
import '../style.css';
import axios from 'axios';

export default class Registration extends React.Component {
  state = {
    name: '',
    email: '',
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <>
      <header>
        <div className="navbar">
          <h1 className="navbar-title">Registration</h1>
        </div>
      </header> 
      <main>
        <section className="sign-section">
          <div>
            <h2 className="navbar-title">SIGN UP</h2>
            <hr className="underline"/>
          </div>
          <form className="form-registration" onSubmit={this.handleSubmit}>
            <div className="form-item">
              <label for="email" className="input-label">Name</label>
              <input type="text" id="email" name="email" className="input" onChange={this.handleChangeName}/>
            </div>
            <div className="form-item">
              <label className="input-label">Gender</label>
              <select className="select-item">
                <option value="1">Female</option>
                <option value="2">Male</option>
              </select>
            </div>
            <div className="form-item">
              <label for="date" className="input-label">Date of birth</label>
              <input type="date" id="date" name="date" className="select-item"/>
            </div>
            <div className="form-item">
              <label for="email" className="input-label">Email</label>
              <input type="text" id="email" name="email" className="input" onChange={this.handleChangeEmail}/>
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
  }
}