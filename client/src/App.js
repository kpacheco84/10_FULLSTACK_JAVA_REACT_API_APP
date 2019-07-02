import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import axios from 'axios';
// Client components


//const axios = require('axios');
export default class CoursesList extends React.Component {
  state = {
    isLoading: true,
    courses: []
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/courses`).then(res => {
      const courses = res.data;
      this.setState({
        courses
      });
    })
  }
  render() {
      return ( <ul> {
          this.state.courses.map(course => < li > {
            course.title
          } </li>)} </ul>)
        }
      }


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

//export default App;
