import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

// Client components import

import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';

class App extends Component {
	render() {
    return ( < Router > < Switch > 
	  < Route path = '/' exact component = {Courses}/>
	  < Route path = '/courses/:id'exact component = {CourseDetail}/> 
	  <  Route path = '/courses/:id/update'exact component = {UpdateCourse}/>
	  < Route path = '/signin'render = {(props) => < UserSignIn props = {props}/>} / >   
	  </Switch> 
      </Router>);
		}
	}
	export default App;

