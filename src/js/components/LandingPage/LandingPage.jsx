import React from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { Redirect } from 'react-router';
import {
  getNearbyRestaurants,
  deleteRestaurants,
  getAllRestaurants
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
      redirectResultsFound: false,
      redirectNoResultsFound: false
    }

    this.onChange = (address) => this.setState({ address })
    this.handleGoButton = this.handleGoButton.bind(this);

  }

  componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getAllRestaurants());
  }

handleGoButton(event){
    event.preventDefault()
    const {dispatch} = this.props;
    dispatch(deleteRestaurants());
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          coords: latLng
        })
        //console.log('Success', latLng);

        var customerLat = this.state.coords.lat;
        var customerLng = this.state.coords.lng;
        this.props.allRestaurants.map((restaurant,i) =>{
              var restaurantLat = restaurant.lat;
              var restaurantLng = restaurant.lng;
              var miles = getDistance (customerLat,customerLng,restaurantLat,restaurantLng);

              if(miles < 4.0){
                dispatch(getNearbyRestaurants(restaurant))
              }
            }); 
            const { restaurantsNearby } = this.props;
            if (restaurantsNearby.length > 0) {
              this.setState({
                redirectResultsFound: true,
                redirectNoResultsFound: false
              })
            }   
            else {
              this.setState({
                redirectNoResultsFound: true,
                redirectResultsFound: false
              })
            }  
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
  if (this.state.redirectResultsFound) {
    return <Redirect push to='/search'/>;
  } else if (this.state.redirectNoResultsFound) {
    return <Redirect push to='/noResultsFound'/>;
  }
  return (
      <div>
        <NavBar />
        <div id='marketingHolder'>
          <h3 id='marketingText'> Nosh, eat food enthusiastically or greedily. </h3>
        </div>
        <main>
          <div id="inputGroup">            
              <PlacesAutocomplete id='locationSearch' classNames={cssClasses} inputProps={inputProps} googleLogo={false} />
              <span id='go' onClick={this.handleGoButton} style={{cursor: 'pointer'}}>Search for Food!</span>
          </div>
          <p id='goToRestaurantPage'>Are you a restaurant owner?<Link style={{'textDecoration': 'none'}} to='/restaurant' ><span style={{'color': 'skyblue'}}> Click here!</span></Link></p>
        </main>
      </div>
    )
  }
}
  
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
