import React from 'react';
import NavBar from '../NavBar/NavBar';
import {
  Link
} from 'react-router-dom';

export default class SearchResults extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        var testArr = [1,2,3,4,5,6,7,8,9,10];
      return (
        <div>
          <NavBar />
          <div className='row'></div>
          <div className='col-sm-6 offset-sm-3'>
            <div style={{ 'height': '68px'}}></div>
            <input className='form-control' type="text" placeholder='Search for a restaurant...'/>
          </div>
          <div className='row'></div>
            <div className='col-sm-8 offset-sm-2'>
                {testArr.map(restaurant => {
                    return (
                        <SearchResult info={restaurant}/>
                    )
                })}
            </div>
        </div>
      )
    }
  }

class SearchResult extends React.Component {
    render() {
        return (
            <div className='card col-md-4' style={{ display: 'inline-block',height: 0, paddingBottom: '25%', borderColor: 'rgb(128, 10, 10)'}}>
                <div className='card-body text-center mt-2'>
                    <div className='card-title'>Restaurant Name</div>
                    <div className='card-text'>Some info about the food: {this.props.info}</div>
                    <div className='card-text'><small>9AM - 9PM</small></div>
                </div>
            </div>
        )
    }
}