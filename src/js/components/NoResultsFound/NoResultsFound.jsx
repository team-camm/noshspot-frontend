import React from 'react';
import NavBar from '../NavBar/NavBar';
import { 
  Link
} from 'react-router-dom';

export default class NoResultsFound extends React.Component {

    render() {
  return (
      <div>
      <NavBar />
      <div style={{ 'height': '68px'}}></div>
            <div className='mt-3 row'>
              <div className='col-md-3'></div>
              <div className='col-md-6 card text-center pt-4 pb-4 mb-4 mt-4' style={{'borderColor': 'transparent'}}>
                  <h2 className='display-2 card-title'> Sorry! </h2>
                  <p className='h4 card-text'> No result found! </p>
              </div>
            </div>
            <div className='text-center'>
              <Link to='/'><button className='btn' style={{'backgroundColor': 'rgb(128, 10, 10)','color': 'white'}}>Home</button></Link>
            </div>
        </div>
      
  )
    }
}   