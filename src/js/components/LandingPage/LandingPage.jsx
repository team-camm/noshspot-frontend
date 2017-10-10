import React from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { Redirect } from 'react-router';
import {
  getNearbyRestaurants
} from './landingPageActions';
import {
  Link
} from 'react-router-dom';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      address: '101 Broadway, San Diego, CA',
      coords: '',
      restaurant: [],
      redirect: false
    }

    this.onChange = (address) => this.setState({ address })
    this.handleGoButton = this.handleGoButton.bind(this);

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

handleGoButton(event){
    event.preventDefault()
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          coords: latLng,
          redirect: true
        })
        console.log('Success', latLng);

        const {dispatch} = this.props;
        var customerLat = this.state.coords.lat;
        var customerLng = this.state.coords.lng;
        this.state.restaurant.map((restaurant,i) =>{
              var restaurantLat = restaurant.lat;
              var restaurantLng = restaurant.lng;
              var miles = getDistance (customerLat,customerLng,restaurantLat,restaurantLng);

              if(miles < 4.0){
                dispatch(getNearbyRestaurants(restaurant))
              }         
            });       
        })
      .catch(error => console.error('Error', error))
  }
  
render() {
  const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
  const cssClasses = {
    input: 'locationSearch'
  }
  if (this.state.redirect) {
    return <Redirect push to='/search'/>;
  }
  return (
      <div>
        <NavBar />
        <div id='marketingHolder'>
          <h3 id='marketingText'> Nosh, eat food enthusiastically or greedily. </h3>
        </div>
        <main>
          <div id="inputGroup">            
              <PlacesAutocomplete id='locationSearch' classNames={cssClasses} inputProps={inputProps} />
              <span id='go' onClick={this.handleGoButton} style={{cursor: 'pointer'}}>Search for Food!</span>
          </div>
          <p id='goToRestaurantPage'>Are you a restaurant owner?<Link style={{'textDecoration': 'none'}} to='/restaurant' ><span style={{'color': 'skyblue'}}> Click here!</span></Link></p>
        </main>
        
      </div>
    )
  }
}

//     this.state = {
//       lat :'',
//       lng : '',
//       
//     }
//     
//   }
//   
//   geolocate() {
//     self = this;
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//           var geolocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };
//           var circle = new google.maps.Circle({
//             center: geolocation,
//             radius: position.coords.accuracy
//           });
//           autocomplete.setBounds(circle.getBounds());
//         });
//       }
//       autocomplete.addListener('place_changed', fillInAddress);
//       function fillInAddress() {
//         // Get the place details from the autocomplete object.
//         var place = autocomplete.getPlace();
//         var lat = place.geometry.location.lat();
//         var lng = place.geometry.location.lng();     
//         self.setState({
//             lat,
//             lng
//         });
//       }
      
//   }


  
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
