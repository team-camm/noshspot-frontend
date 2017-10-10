import React from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { 
  Link
} from 'react-router-dom';
export default class Search extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        restaurant: [],
    }
    this.search = this.search.bind(this);
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

    search(){
       
        console.log('result')
    }
   
  render() {
    const { restaurantsNearby } = this.props;
      return (
        <div>
          <NavBar />
          <div className='row'></div>
          <div className='col-sm-6 offset-sm-3'>
            <div style={{ 'height': '68px'}}></div>
            <input className='form-control mb-2' type="text" placeholder='Search for a restaurant...'/>
          </div>
          <div className='col-sm-8 offset-sm-2'>
              <div className='row'>
              {restaurantsNearby.map(restaurant => {
                  return (
                      <SearchResult key={restaurant._id} restaurant={restaurant}/>
                  )
              })}
              </div>
          </div>
        </div>
      )
    }
  }  


class SearchResult extends React.Component {
    render() {
        const name = this.props.restaurant.restaurantName;
        const desc = this.props.restaurant.restaurantDesc;
        const hours = this.props.restaurant.hours;
        return (
            <div className='card col-md-4' style={{ display: 'inline-block',height: 0, paddingBottom: '25%', borderColor: 'rgb(128, 10, 10)'}}>
                <div className='card-body text-center mt-2'>
                    <div className='card-title'>{name}</div>
                    {/* <div className='card-text'>{desc}</div> */}
                    <div className='card-text'><small>{hours}</small></div>
                </div>
            </div>
        )
    }
}

