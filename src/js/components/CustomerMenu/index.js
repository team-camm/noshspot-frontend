import { connect } from 'react-redux';
import CustomerMenu from './CustomerMenu';

function mapStoreToProps(store) {
    return {
        restaurantInfo: store.menu.restaurant,
        allRestaurants: store.landingPage.allRestaurants
    };
}

export default connect(mapStoreToProps)(CustomerMenu);