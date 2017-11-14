import React from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { 
  Link,
  Redirect
} from 'react-router-dom';
export default class Search extends React.Component {
        constructor(props) {
        super(props);

        this.state = {
            redirectToMenu: false,
            id: ''
        }

        this.goToMenu = this.goToMenu.bind(this);
    }
   
    goToMenu(id) {
        this.setState({
            redirectToMenu: true,
            id
        })
    }

  render() {
    const { restaurantsNearby } = this.props;
    if (this.state.redirectToMenu) {
        return <Redirect push to={'/customerMenu/' + this.state.id} />
    }
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
                      <SearchResult key={restaurant._id} restaurant={restaurant} goToMenu={this.goToMenu}/>
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
        const id = this.props.restaurant._id;
        return (
            <div onClick={() => this.props.goToMenu(id)} className='card col-md-4' style={{ cursor: 'pointer', display: 'inline-block',height: 0, paddingBottom: '25%', borderColor: 'rgb(128, 10, 10)'}}>
                <div className='card-body text-center mt-2'>
                    <div className='card-title'><strong>{name}</strong></div>
                    <div className='card-text'>{desc}</div>
                    <div className='card-text'><small>{`Hours: ${hours}`}</small></div>
                </div>
            </div>
        )
    }
}

