import { connect } from 'react-redux';
import CustomerMenu from './CustomerMenu';

function mapStoreToProps(store) {
    return {
        restaurantInfo: store.menu.restaurant
    };
}

export default connect(mapStoreToProps)(CustomerMenu);