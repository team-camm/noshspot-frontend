import { connect } from 'react-redux';
import LandingPage from './LandingPage';

function mapStoreToProps(store) {
    return {
        restaurantsNearby: store.landingPage.restaurantsNearby,
        allRestaurants: store.landingPage.allRestaurants
    };
}

export default connect(mapStoreToProps)(LandingPage);