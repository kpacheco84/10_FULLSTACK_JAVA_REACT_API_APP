import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

// Client components import

import Courses from './component/Courses';
//import UserSignIn from './component/UserSignIn'
//import CourseDetail from './component/CourseDetail';
//import UserSignUp from './component/UserSignUp';
//import UserSignOut from './component/UserSignOut';
//import CreateCourse from './component/CreateCourse'
//import UpdateCourse from './component/UpdateCourse';
//import NotFound from './component/NotFound';
//import Forbidden from './component/Forbidden';
//import UnHandledError from './component/UnhandledError';

// function taken and modified from:
// https://reacttraining.com/react-router/web/example/auth-workflow
/*function PrivateRoute({
	component: Component,
	...rest
}) {
	return ( < Route { ...rest
		}
		render = {
			props => {
				if (localStorage.getItem('authenticated') === 'true') {
					return <Component { ...props
					}
					/>
				} else {
					localStorage.setItem('path', props.location.pathname);
					return <Redirect to = {
						"/signin"
					}
					/>}
			}
		}
		/>);
}
*/
class App extends Component {
	render() {
    return ( < Router > < Switch > 
      < Route path = '/' exact component = {Courses}/> 
      //< Route path = '/signin'render = {(props) => < UserSignIn props = {props}/>} / > 
      //< Route path = '/signup'component = {UserSignUp}/> 
      //< Route path = '/signout'component = {UserSignOut}/> 
      //< PrivateRoute path = '/courses/create'component = {CreateCourse}/> 
      //< Route path = '/courses/:id'exact component = {CourseDetail}/> 
      //< PrivateRoute path = '/courses/:id/update'component = {UpdateCourse}/> 
      //< Route path = '/notfound'component = {NotFound}/> 
      //< Route path = '/forbidden'component = {Forbidden}/> 
      //< Route path = '/error'component = {UnHandledError}/> 
      //< Route component = {	NotFound}/> </Switch> 
      </Router>);
		}
	}
	export default App;

