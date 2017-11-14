import React from 'react';
import NavBar from '../NavBar/NavBar';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import axios from 'axios';
import { 
  Redirect
} from 'react-router-dom';
import {
  logInUser,
  updateEmail,
  updatePassword
} from './restaurantLoginActions';

export default class restaurantLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
            redirectToMenu: false,
            
    }       

    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    const { dispatch } = this.props;
    const { email, password } = this.props;
    var logInInfo = {
      email, 
      password
    }
    axios.post('http://localhost:3000/api/restaurant/restaurantLogin', logInInfo)
      .then(user => {
        console.log(user);
        this.setState({
          redirectToMenu: true
        });
      })
    }

  email(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(updateEmail(value));
  }

  password(event) {
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(updatePassword(value));
  }

  render() {

        if (this.state.redirectToMenu) {
           return <Redirect push to={'/restaurantMenuEdit'} />
         }

    return (
      <div>
        <NavBar />
        <div style={{ 'height': '68px' }}></div>
        <div className='container'>
          <p />
          <h2> Restaurant Login </h2>
          <p />
          <div className='container' style={{ 'padding': '1em' }}>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Email</label>
              <div className="col-10">
                <input onChange={this.email}className="form-control" type="text" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="example-text-input" className="col-2 col-form-label">Password</label>
              <div className="col-10">
                <input onChange={this.password}className="form-control" type="password" id="" />
              </div>
            </div>
            <div className="text-center">
              <button onClick={this.logIn}type="button" className="btn text-white" style={{ cursor: 'pointer',"backgroundColor": "rgb(128, 10, 10)" }}><strong>Login</strong></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}