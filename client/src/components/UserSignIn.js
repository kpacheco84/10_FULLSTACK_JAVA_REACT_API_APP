import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { Consumer } from './UserContext';
import axios from 'axios';

class UserSignIn extends Component{

		state = {
			emailAddress: "",
			password: "",
			errMsg:""
		};
	// handle sign in data
	handleUserInput = e => {
		let input = e.target;
		this.setState({
			[input.name] : input.value
		});
	};
//handle sign in 
  handleSignIn = (e, signIn, emailAddress, password,err) => {
	if(e){
		e.preventDefault();
	}
// Authenticate user by request to REST API's users endpoint
	axios.get("http://localhost:5000/api/users",
		{
			auth: {
				emailAddress: emailAddress,
				password: password
			}
		})
		.then(res => {
			if (res.status === 200) {
				const user = res.data;
				this.setState({
					user: user,
					userId: user.id,
					authenticated: true,
					password: user.password,
					username: user.emailAddress,
				});


// keep data locally using React's localStorage browser instance
				localStorage.setItem("id", user.id);
				localStorage.setItem("user", user);
				localStorage.setItem("username", emailAddress);
				localStorage.setItem("password", password);
				localStorage.setItem("authenticated", true)
		//catch error
			}}).catch(err => {
		
				if(err.response.status === 400){
					this.setState({
						errMsg: err.response.data.message 	
					})
				} else if (err.response.status === 401){
					this.setState({
						errMsg: err.response.data.message 
					})
				}	else {
					signIn(e, emailAddress, password,err);
		            this.props.history.push("/courses");
				}
		});
	
  }
		/*signIn(e, emailAddress, password,err);
		this.props.history.push("/courses");
		*/
	

	render(){
		const { errMsg } = this.state;
	
		return(
		<Consumer>{ ({ signIn }) =>(
			<div className="bounds">
				<div className="grid-33 centered signin">
					<h1>Sign In</h1>
					<div>
					{ errMsg ? (
							<div>
							<h2 className="validation--errors--label">Registration Error</h2>
							<div className="validation-errors">
							<ul>
								<li>{ errMsg }</li>
							</ul>
							</div>
							</div>
							) : ''}
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