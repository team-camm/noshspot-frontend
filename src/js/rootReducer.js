import { combineReducers } from 'redux';
import landingPageReducer from './components/LandingPage/landingPageReducer';
import accountInfoReducer from './components/AccountInfo/accountInforeducer';
import userRegistrationReducer from './components/Registration/userRegistrationReducer';

const rootReducer = combineReducers({
    landingPage: landingPageReducer,
    accountInfo: accountInfoReducer,
    registeredInfo: userRegistrationReducer
})

export default rootReducer;