import React, { Component } from 'react';
//import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import Header from './Header'
import { Link } from 'react-router-dom';


export default class CourseDetail extends React.Component {

  state = {
      isLoading: true,
      courses: [],
      username:""
    }
    componentDidMount() {
      axios.get("http://localhost:5000/api/courses/" + this.props.match.params.id).then(res => {
        const courses = res.data;
        this.setState({
          courses,
          username: courses.User.firstName + " " + courses.User.lastName
        });
      })
    }
    handleDelete  = (e) => {
      e.preventDefault();
      axios.delete("http://localhost:5000/api/courses/" + this.props.match.params.id
      //user authentication required
      /*,{
        auth: {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password")
        }
      }*/)
    .then(res => {
    this.props.history.push("/courses");
        console.log("Course deleted.");
        })
      }
    render() {

      const course = this.state.courses;
        return(
          
      <div id="root">
          <div>
        <Header />
      <div class="bounds">
      <div class="grid-100">
      <span>
      <Link class="button" to={ "/courses/"+course.id+"/update" }>Update Course</Link>
      <Link class="button" onClick={e => this.handleDelete(e) }>Delete Course</Link>
      </span>
      <Link class="button button-secondary" to={ "/" }>Return to List</Link>
      </div>
         
      { 
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
     }
      </div>
      </div>
    </div>
        
        
        
        )} 
      };