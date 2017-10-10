import { connect } from 'react-redux';
import LandingPage from './LandingPage';

function mapStoreToProps(store) {
    return {
        restaurantsNearby: store.landingPage.restaurantsNearby
    };
}

export default connect(mapStoreToProps)(LandingPage);