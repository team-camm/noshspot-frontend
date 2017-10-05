import React from 'react';
import NavBar from '../NavBar/NavBar';
import {
  Link
 } from 'react-router-dom';

export default class Confirmation extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <NavBar />
            <div style={{ 'height': '68px'}}></div>
            <div className='mt-3 row'>
              <div className='col-md-3'></div>
              <div className='col-md-6 card text-center pt-4 pb-4 mb-4 mt-4' style={{'borderColor': 'transparent'}}>
                  <h2 className='display-2 card-title'> Thank You! </h2>
                  <p className='h4 card-text'> Your payment has been recieved successfully! </p>
                  <p className='card-text' style={{ 'fontSize': '20px' }}> Your food will arrive in approximately <strong>15 mins</strong></p>
              </div>
            </div>
            <div className='text-center'>
              <Link to='/'><button className='btn' style={{'backgroundColor': 'rgb(128, 10, 10)','color': 'white'}}>Home</button></Link>
            </div>
        </div>
      )
    }
}
