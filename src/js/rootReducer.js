import { combineReducers } from 'redux';
import landingPageReducer from './components/LandingPage/landingPageReducer';
import accountInfoReducer from './components/AccountInfo/accountInforeducer';
import userRegistrationReducer from './components/Registration/userRegistrationReducer';
import newRestaurantReducer from './components/RestaurantRegistration/RestaurantRegistrationReducer';


const rootReducer = combineReducers({
    landingPage: landingPageReducer,
    accountInfo: accountInfoReducer,
    registeredInfo: userRegistrationReducer,
    newRestaurant: newRestaurantReducer

})

export default rootReducer;