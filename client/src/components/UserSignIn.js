import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter,Link } from "react-router-dom";
//import Header from './Header';
import { Consumer } from './UserContext';


export default class UserSignIn extends React.Component {
    
    componentDidMount() {
        this.setState({
            emailAddress: "",
            password: ""
        });
    }

    handleUserInput = e => {
        let input = e.target;
        this.setState({
        [input.name] : input.value
            });
        };
        
    handleSignIn = (e, signIn, emailAddress, password) => {
        e.preventDefault();
        signIn(e, emailAddress, password);
        this.props.history.push("/courses");
        }

    render() {
        return ( <Consumer>{
            ({signIn}) => ( <div className = "bounds"> <div className = "grid-33 centered signin"> 
            <h1>Sign In</h1> <div> <form onSubmit = {
                e => this.handleSignIn(e, signIn, this.state.emailAddress, this.state.password)
                } > <div> <input id = "emailAddress"
                name = "emailAddress"
                type = "email"
                className = ""
                placeholder = "Email Address"
                defaultValue = ""
                onChange = {
                    this.handleUserInput}/> 
                </div> 
                <div> <input id = "password"
                name = "password"
                type = "password"
                className = ""
                placeholder = "Password"
                defaultValue = ""
                onChange = {
                    this.handleUserInput
                }
                /> </div> <div className = "grid-100 pad-bottom" > 
                <button className = "button"
                type = "submit"> Sign In </button> 
                <Link className = "button button-secondary" to = "/courses"> Cancel </Link> </div> </form> 
                </div> 
                <p> & nbsp; </p> 
                <p>Don't have a user account?<Link to = "/signup" > Click here </Link> to sign up! </p> </div> 
                </div>)
            } </Consumer>);
            }
            }



            
        /*<div id="root">
    <div>
    <Header />
        <div class="bounds">
          <h1 class="header--logo">Courses</h1>
          <nav><a class="signup" href="sign-up.html">Sign Up</a><a class="signin" href="sign-in.html">Sign In</a></nav>
        </div>
      </div>
      <div class="bounds">
        <div class="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <form>
              <div><input id="emailAddress" name="emailAddress" type="text" class="" placeholder="Email Address" value=""/></div>
              <div><input id="password" name="password" type="password" class="" placeholder="Password" value=""/></div>
              <div class="grid-100 pad-bottom"><button class="button" type="submit">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>Don't have a user account? <a href="sign-up.html">Click here</a> to sign up!</p>
        </div>
      </div>
    </div>
        )}};*/
 

       // export default Courses;
  
  