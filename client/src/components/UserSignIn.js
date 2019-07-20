import React, { Component } from 'react';
import { Link, withRouter,Redirect } from 'react-router-dom';
import { Consumer } from './UserContext';


class UserSignIn extends Component{

		state = {
			emailAddress: "",
			password: ""
		};
	// handle sign in data
	handleUserInput = e => {
		let input = e.target;
		this.setState({
			[input.name] : input.value
		});
	};
//handle sign in 
  handleSignIn = (e, signIn, emailAddress, password) => {
	  e.preventDefault();
		signIn(e, emailAddress, password);
		this.props.history.push("/courses");
	}

	render(){
		return(
		<Consumer>{ ({ signIn }) =>(
			<div className="bounds">
				<div className="grid-33 centered signin">
					<h1>Sign In</h1>
					<div>
						<form onSubmit={e => this.handleSignIn(e, signIn, this.state.emailAddress, this.state.password)} >
							<div>
								<input id="emailAddress"
									name="emailAddress"
									type="email"
									className=""
									placeholder="Email Address"
									defaultValue = ""
									onChange={this.handleUserInput}/>
							</div>
							<div>
								<input id="password"
									name="password"
									type="password"
									className=""
									placeholder="Password"
									defaultValue = ""
									onChange={this.handleUserInput} />
							</div>
							<div className="grid-100 pad-bottom">
								<button className="button" type="submit">Sign In</button>
								 <Link className="button button-secondary" to="/courses">Cancel</Link>
							</div>
						</form>
					</div>
					<p>&nbsp;</p>
					<p>Don't have a user account?
					  <Link to="/signup"> Click here </Link> to sign up!
					</p>
				</div>
			</div>
		)}</Consumer>
		 );
	}
}
export default withRouter(UserSignIn);