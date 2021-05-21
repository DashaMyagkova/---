import React from "react";
import axios from 'axios';

import '../style.css';

export default class InfoUser extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data[0];
        this.setState({ persons });
      })
  }

  render() {
    return (
      <>
        <header>
          <div className="navbar">
            <h1 className="navbar-title">User Info</h1>
          </div>
        </header> 
        <main>
          <section className="info-section">
            <div className="about-content">
              <div className="user-photo"></div>
              <div className="user-description">
                <h2 className="about-title">
                  {this.state.persons.name}
                </h2>
              </div>
            </div>
            <table className="user-table">
                  <thead className="table-head">
                    <tr>
                      <th className="column">UserName</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Website</th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    <tr>
                      <td>{this.state.persons.username}</td>
                      <td className="column">{this.state.persons.email}</td>
                      <td>{this.state.persons.phone}</td>
                      <td>{this.state.persons.website}</td>
                    </tr>
                  </tbody>
                </table>
          </section>
        </main>
      </>
    )
  }
};