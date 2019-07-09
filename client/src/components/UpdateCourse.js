import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import Header from './Header'
import { Link } from 'react-router-dom';



export default class UpdateCourse extends React.Component {

    state = {
        isLoading: true,
        courses: []
      }
      componentDidMount() {
        axios.get("http://localhost:5000/api/courses/" + this.props.match.params.id).then(res => {
          const courses = res.data;
          this.setState({
            courses
          });
        })
      }// Receive Updated Course data input by User

		handleUpdateInput = (e) => {

			e.preventDefault();

			const input = e.target;

			this.setState({

				[input.name] : input.value

			});

		};



	// Submit updated course info

	handleUpdateCourse = (e, error, user, emailAddress, password) =>{

		e.preventDefault();



// Axios PUT request to post updated course info to API db

		axios({

			method: 'put',

			url: 'http://localhost:5000/api/courses/' + this.props.match.params.id,

			auth: {

				username: localStorage.getItem("username"),

				password: localStorage.getItem("password")

				},

				data:{

					id: this.state.id,
                    title: this.state.title,
                    description: this.state.description,
                    estimatedTime: this.state.estimatedTime,
                    materialsNeeded: this.state.materialsNeeded,
                    userId: this.state.userId
                    }
                })
                .then( res => {
            // Show course details after updating
            this.props.history.push("/courses/"+this.props.match.params.id);
            console.log("Course successfully updated");
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
        </span>
     </div>
        { 
          <div class="bounds course--detail">
          <h1>Update Course</h1>
         
          <form onSubmit={ e => this.handleUpdateCourse(e, /*user, userId, emailAddress, password,*/ course.title, course.description, course.materialsNeeded, course.estimatedTime)}>
          <div class="grid-66">
            <div class="course--header">
              <h4 class="course--label">Course</h4>
              <div><input id="title" name="title" type="text" class="input-title course--title--input" placeholder="Course title..."
                    value={course.title} onChange={this.handleUpdateInput}/></div>
              <p>By Joe Smith</p>
            </div>
            <div class="course--description">
            <div><textarea id="description" name="description" class="" placeholder="Course description..." value = {course.description} onChange={this.handleUpdateInput} >
            </textarea>
            </div>
             </div>
          </div>
          <div class="grid-25 grid-right">
            <div class="course--stats">
              <ul class="course--stats--list">
                <li class="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <div><input id="estimatedTime" name="estimatedTime" type="text" class="course--time--input"
                        placeholder="Hours" value={course.estimatedTime} onChange={this.handleUpdateInput}/></div>
                </li>
                <li class="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                  <div><textarea id="materialsNeeded" name="materialsNeeded" class="" placeholder="List materials..." value = {course.materialsNeeded} onChange={this.handleUpdateInput}> 
                  </textarea></div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          </form>
        </div>
       }
        </div>
        <div class="grid-100 pad-bottom">
        <button class="button" type="submit">Update Course</button>
        <Link class="button button-secondary" onclick="event.preventDefault()" to={ "/courses/"+course.id }>Cancel</Link>
        </div>
      
        </div>
      </div>
          
          
          
          )}} 