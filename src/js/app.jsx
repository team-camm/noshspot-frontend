import React from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';
import LandingPage from './components/LandingPage/index';
import Confirmation from './components/Confirmation/Confirmation';
import AccountInfo from './components/AccountInfo/index'
import UserRegistration from './components/Registration/index';
import RestaurantLanding from './components/RestaurantLanding/RestaurantLanding';
import CustomerMenu from './components/CustomerMenu/index';
import RestaurantRegistration from './components/RestaurantRegistration/index';
import SearchResults from './components/SearchResults/SearchResults';


export default class App extends React.Component {
  constructor(){
    super();
  }

  render() {
      return(
        <Router>
          <div>
            <Route exact path='/' component={ LandingPage }/>
            <Route path='/confirmation' component={ Confirmation }/>
            <Route path='/account' component={ AccountInfo }/>
            <Route path='/registration' component={ UserRegistration }/>
            <Route path='/restaurant' component={ RestaurantLanding }/>
            <Route path='/restaurantmenu' component={CustomerMenu} /> 
            <Route path='/restaurant-registration' component={ RestaurantRegistration }/>
            <Route path='/search' component={ SearchResults } />

          </div>
        </Router>
      )
  }
}