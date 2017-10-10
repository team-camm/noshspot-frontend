import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
    return {
        restaurantsNearby: store.landingPage.restaurantsNearby
    };
}

export default connect(mapStoreToProps)(Search);