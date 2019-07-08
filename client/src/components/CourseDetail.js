import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import Header from './Header'
import { Link } from 'react-router-dom';


export default class CourseDetail extends React.Component {

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
          return(
        <div id="root">
            <div>
          <Header />
        <div class="bounds">
            
        { this.state.courses.map(course => 
            <div class="bounds course--detail">
          <div class="grid-66">
            <div class="course--header">
              <h4 class="course--label">Course</h4>
              <h3 class="course--title">{course.title}</h3>
              <p>By Joe Smith</p>
            </div>
            <div class="course--description">
              <p>{course.description}</p>
             </div>
          </div>
          <div class="grid-25 grid-right">
            <div class="course--stats">
              <ul class="course--stats--list">
                <li class="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{course.estimatedTime}</h3>
                </li>
                <li class="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                    {course.materialsNeeded}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
     
    
            
            )
       //closing of map 
       }
        </div>
        </div>
      </div>
          
          
          
          )}} 