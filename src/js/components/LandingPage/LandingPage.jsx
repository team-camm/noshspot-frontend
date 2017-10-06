import React from 'react';
import NavBar from '../NavBar/NavBar';
import {
  getAddress
} from './landingPageActions';
import {
  Link
} from 'react-router-dom';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.updateAddress = this.updateAddress.bind(this);
  }

  geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          autocomplete.setBounds(circle.getBounds());
        });
      }
  }

  updateAddress(event){
    const { dispatch } = this.props;
    const value = event.target.value;
    dispatch(getAddress(value));
  }
        
  render() {
    return (
      <div>
        <NavBar />
        <div id='marketingHolder'>
          <h3 id='marketingText'> Nosh, eat food enthusiastically or greedily. </h3>
        </div>
        <main>
          <div id="inputGroup">
            <input placeholder="Enter Location..." type="text" id="locationSearch" onBlur={ this.updateAddress }  />
            <span id="go">Go</span>
          </div>
          <p id='goToRestaurantPage'>Are you a restaurant owner?<Link style={{'textDecoration': 'none'}} to='/restaurant' ><span style={{'color': 'skyblue'}}> Click here!</span></Link></p>
        </main>
        
      </div>
    )
  }
}