import React from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Confirmation from './components/Confirmation/Confirmation';
import AccountInfo from './components/AccountInfo/AccountInfo'
import UserRegistration from './components/Registration/UserRegistration';
import RestaurantLanding from './components/RestaurantLanding/RestaurantLanding';
import RestaurantRegistration from './components/RestaurantRegistration/RestaurantRegistration';


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
            <Route path='/account-info' component={ AccountInfo }/>
            <Route path='/registration' component={ UserRegistration }/>
            <Route path='/restaurant' component={ RestaurantLanding }/>
            <Route path='/restaurant-registration' component={ RestaurantRegistration }/>

          </div>
        </Router>
      )
  }
}