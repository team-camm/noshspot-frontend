import { connect } from 'react-redux';
import RestaurantMenuEdit from './RestaurantMenuEdit';

function mapStoreToProps(store) {
    return {
        email: store.newRestaurant.email,
        password: store.newRestaurant.password,
        phone: store.newRestaurant.phone,
        address: store.newRestaurant.address,
        restaurantName: store.newRestaurant.restaurantName ,
        hours: store.newRestaurant.hours ,
        description: store.newRestaurant.description,
        website: store.newRestaurant.website ,
        yelp: store.newRestaurant.yelp,
        facebook: store.newRestaurant.facebook,
        billingAddress: store.newRestaurant.billingAddress ,
        annualRevenue: store.newRestaurant.annualRevenue ,
        tags: store.newRestaurant.tags,
        img: store.newRestaurant.img,
    };
}

export default connect(mapStoreToProps)(RestaurantMenuEdit);