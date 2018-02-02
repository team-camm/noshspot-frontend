import axios from 'axios';

export const types = {

};

// export function addRestaurant(restaurantInfo) {
//     return {
//         type: types.ADD_RESTAURANT,
//         payload: axios.post("http://noshspot-backend.herokuapp.com/api/restaurant/new", restaurantInfo) 
//             .then( restaurant => {
//                 return { 
//                     restaurant
//                  }
//             })
//             .catch( err => console.log(err))
//         }
// }

export function restaurantEmail(email) {
    return {
        type: types.RESTAURANT_EMAIL,
        payload: { email }
    }
}

export function restaurantPassword(password) {
    return {
        type: types.RESTAURANT_PASSWORD,
        payload: { password }
    }
}

export function restaurantPhone(phone) {
    return {
        type: types.RESTAURANT_PHONE,
        payload: { phone }
    }
}

export function restaurantAddress(address) {
    return {
        type: types.RESTAURANT_ADDRESS,
        payload: { address }
    }
}