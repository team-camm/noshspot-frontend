import { connect } from 'react-redux';
import LandingPage from './LandingPage';

function mapStoreToProps(store) {
    return {
        address: store.landingPage.address
    };
}

export default connect(mapStoreToProps)(LandingPage);