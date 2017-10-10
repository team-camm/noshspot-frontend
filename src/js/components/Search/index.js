import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
    return {
        restaurantsNearby: store.landingPage.restaurantsNearby,
        allRestaurants: store.landingPage.allRestaurants
    };
}

export default connect(mapStoreToProps)(Search);