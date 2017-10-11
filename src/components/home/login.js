import React, { Component } from 'react';
import './../../styles/login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }


  formSubmit(e) {
    e.preventDefault();
    e.target.reset();
    let options = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      username: this.props.appState.email,
      password: this.props.appState.password})
    };
    let request = new Request('https://shielded-brook-50392.herokuapp.com/api/login', options);
    fetch(request)
      .then( res => res.json())
      .then(json => {
        if(json.success === true ) {
          this.props.setAppState(() => {
            let newState = Object.assign({}, this.props.state);
            newState.jwt = json.token;
            newState.loggedIn = true;
            return newState;
          })
          this.props.history.push('/dashboard');
        }
      })
      .catch( err => {
        console.log(err);
      });
  }

  changeHandler(e) {
    const target = e.target;
    if(target.name === 'email-address') {
      this.props.setAppState({email: target.value})
    }
    else if(target.name === 'password') {
      this.props.setAppState({password: target.value})
    }
  }

  render() {

    return (
      <main className="container login-container pa4">
      <form onSubmit={this.formSubmit} className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input className="pa2 b--teal input-reset ba bg-transparent w-100" onChange={this.changeHandler} type="email" name="email-address"  id="email-address" />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input className="b pa2 b--teal input-reset ba bg-transparent w-100" onChange={this.changeHandler} type="password" name="password"  id="password" />
          </div>
        </fieldset>
        <div className="">
          <input className="b ph3 pv2 input-reset ba b--teal bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
        </div>
        <div className="lh-copy mt3">
          {/* <a href="#0" className="f6 link dim db">Forgot your password?</a> */}
        </div>
      </form>
    </main>
    
    )
  }
}

export default Login