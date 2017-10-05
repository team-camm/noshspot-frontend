import React from 'react';
import NavBar from '../NavBar/NavBar';

export default class RestaurantLanding extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <div style={{'height': '68px'}}></div>
        <div id='restaurantBackground'>
        </div>
        <h1>Hello</h1>
      </div>
    )
  }
}