import React from 'react';
import NavBar from '../NavBar/NavBar';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
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
        
  render() {
    return (
      <div>
        <NavBar />
        <div id='marketingHolder'>
          <h3 id='marketingText'> Nosh, eat food enthusiastically or greedily. </h3>
        </div>
        <main>
          <div id="inputGroup">
            <input placeholder="Enter Location..." type="text" id="locationSearch" onFocus={this.geolocate} />
            <span id="go">Go</span>
          </div>
        </main>
        
      </div>
    )
  }
}