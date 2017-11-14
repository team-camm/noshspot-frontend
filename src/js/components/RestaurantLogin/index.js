import { connect } from 'react-redux';
import RestaurantLogin from './RestaurantLogin';

function mapStoreToProps(store) {
    return {
        email: store.restaurantLogin.email,
        password: store.restaurantLogin.password
    };
}

export default connect(mapStoreToProps)(RestaurantLogin);