import { combineReducers } from 'redux';
import landingPageReducer from './components/LandingPage/landingPageReducer';
import accountInfoReducer from './components/AccountInfo/accountInforeducer';
import newRestaurantReducer from './components/RestaurantRegistration/RestaurantRegistrationReducer';

const rootReducer = combineReducers({
    landingPage: landingPageReducer,
    accountInfo: accountInfoReducer,
    newRestaurant: newRestaurantReducer
})

export default rootReducer;