import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import Header from './Header'

export default class Courses extends React.Component {
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
        return ( 
          <div id="root">
            <div>
          <Header />
        <div class="bounds">
            
        { this.state.courses.map(course => 
            <div class="grid-33"><a class="course--module course--link" href="course-detail.html">
                <h4 class="course--label">Course</h4>
                <h3 class="course--title">{course.title}</h3>
              </a></div>
            
            )
            
        } 
        <div class="grid-33"><a class="course--module course--add--module" href="create-course.html">
            <h3 class="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 13 13" class="add">
                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
              </svg>New Course</h3></a></div>
          </div>
        </div>
      </div>
        )
      }
    }

       // export default Courses;
  
  