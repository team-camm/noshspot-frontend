import { combineReducers } from 'redux';
import landingPageReducer from './components/LandingPage/landingPageReducer';
import accountInfoReducer from './components/AccountInfo/accountInforeducer';
import userRegistrationReducer from './components/Registration/userRegistrationReducer';
import newRestaurantReducer from './components/RestaurantRegistration/RestaurantRegistrationReducer';
import customerMenuReducer from './components/CustomerMenu/customerMenuReducer';


const rootReducer = combineReducers({
    landingPage: landingPageReducer,
    accountInfo: accountInfoReducer,
    registeredInfo: userRegistrationReducer,
    newRestaurant: newRestaurantReducer,
    menu: customerMenuReducer
})

export default rootReducer;