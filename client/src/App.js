import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

// Client components import

import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
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
	  < Route path = '/courses/:id'exact component = {CourseDetail}/> 
	 //< Route path = '/courses/:id'exact component = {CourseDetail}/>  
	  </Switch> 
      </Router>);
		}
	}
	export default App;

