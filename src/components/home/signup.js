import React, { Component } from 'react';
import './../../styles/signup.css';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }


  formSubmit(e) {
    e.preventDefault();
    if(this.props.appState.email === '') {
      return this.props.setAppState({emailErr: true});
    } else if(this.props.appState.password === '') {
      return this.props.setAppState({passwordErr: true});
    } else {
      this.props.setAppState({loading: true});      
      let options = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
        username: this.props.appState.email.trim().toLowerCase(),
        password: this.props.appState.password})
      };
      let request = new Request('https://shielded-brook-50392.herokuapp.com/api/signup', options);
      if(this.props.appState.password !== this.props.appState.verifyPassword) {
        return this.props.setAppState({matchError: true});
      } else {
      e.target.reset();      
      fetch(request)
        .then( res => res.json())
        .then(json => {
          console.log(json);
          this.props.setAppState(() => {
            let newState = Object.assign({}, this.props.appState);
            newState.jwt = json.token;
            newState.loggedIn = true;
            return newState;
          })
        })
        .catch( err => {
          console.log(err);
        });
      }
    }
  }

  changeHandler(e) {
    const target = e.target;
    if(target.name === 'email-address') {
      this.props.setAppState({email: target.value})
    }
    else if(target.name === 'password') {
      this.props.setAppState({password: target.value})
    } else if(target.name === 'verify-password') {
      this.props.setAppState({verifyPassword: target.value})
    }
  }

  render() {
    const state = this.props.appState;
    let errDisplay = state.matchError ? <span className="error">Passwords do not match</span> : null;
    let emailErr = state.emailErr ? <span className="error">Please enter an email address</span> : null
    let passwordErr = state.emailErr ? <span className="error">Please enter a password</span> : null
    
    return (
      <main className="container login-container pa4">
      <form onSubmit={this.formSubmit} className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            {emailErr}
            <input className="pa2 b--teal input-reset ba bg-transparent w-100" onChange={this.changeHandler} type="email" name="email-address"  id="email-address" />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            {passwordErr}
            <input className="b pa2 b--teal input-reset ba bg-transparent w-100" onChange={this.changeHandler} type="password" name="password"  id="password" />
            <label className="db mt3 fw6 lh-copy f6" htmlFor="verify-password">Verify Password</label>
            {errDisplay}
            <input className="b pa2 b--teal input-reset ba bg-transparent w-100" onChange={this.changeHandler} type="password" name="verify-password"  id="verify-password" />
          </div>
        </fieldset>
        <div className="">
          <input className="b ph3 pv2 input-reset ba b--teal bg-transparent grow pointer f6 dib" type="submit" value="Sign up" />
        </div>
        <div className="lh-copy mt3">
        </div>
      </form>
    </main>
    )
  }
}

export default SignUp;