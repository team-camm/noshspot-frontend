import { combineReducers } from 'redux';
import landingPageReducer from './components/LandingPage/landingPageReducer';
import accountInfoReducer from './components/AccountInfo/accountInforeducer';

const rootReducer = combineReducers({
    landingPage: landingPageReducer,
    accountInfo: accountInfoReducer
})

export default rootReducer;