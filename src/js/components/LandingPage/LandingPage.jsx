import React from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  Link
} from 'react-router-dom';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat :'',
      lng : '',
      restaurant: [],
      
    }
    this.geolocate = this.geolocate.bind(this);
    this.go = this.go.bind(this)
  }
  componentWillMount() {
        axios.get('http://localhost:3000/api/restaurant')
          .then(response =>{
             this.setState({restaurant:response.data});
          })
         .catch(error => {
           console.log('Error fetching and parsing data',error);
        });
       }

  geolocate() {
    self = this;
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
      autocomplete.addListener('place_changed', fillInAddress);
      function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
        var lat = place.geometry.location.lat();
        var lng = place.geometry.location.lng();
        
        self.setState({
            lat,
            lng
        });
      }
      
  }

go() {
    
    var searchresultsstr = "";
    var loopcounter = 0;
    var res = this.state.restaurant.length;
    var brohis = this.props.history;
    var cus_lat = this.state.lat;
    var cus_lng = this.state.lng;
    var geocoder = new google.maps.Geocoder();
    this.state.restaurant.map((item,i) =>{
        geocoder.geocode({
            'address': item.address
            }, function(results, status) { 
               var lat = results[0].geometry.location.lat();
               var lng = results[0].geometry.location.lng();
               var miles = getDistance (cus_lat,cus_lng,lat,lng);
               
               if(miles < 4.0){
                 searchresultsstr = searchresultsstr + "," + item._id;
                 //console.log(searchresultsstr);
               }
             //console.log(loopcounter, res-1);
             loopcounter = loopcounter + 1;

             if (loopcounter == res ) {
                  //console.log ("this is my nearby" , searchresultsstr)
                  brohis.push('/search?searchresults=' + searchresultsstr);
                
            }
               
        }); 
      });
  
     var rad = function(x) {
     return x * Math.PI / 180;
   };

function getDistance (cus_lat,cus_lng,lat,lng) {
    
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(lat - cus_lat);
  var dLong = rad(lng - cus_lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(cus_lat)) * Math.cos(rad(lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  d= d.toFixed(2);
  return d/1609; // returns the distance in meter
};

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
            <input placeholder="Enter Location..." type="text" id="locationSearch" onFocus={ this.geolocate } />
            <span id="go" onClick={this.go}>Go</span>
          </div>
        </main>
        
      </div>
    )
  }
}