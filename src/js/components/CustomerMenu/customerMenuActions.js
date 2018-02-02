import axios from 'axios';

export const types = {
    GET_RESTAURANT_INFO: 'GET_RESTAURANT_INFO'
};

export function getRestaurantInfo (id) {
    return {
        type: types.GET_RESTAURANT_INFO,
        payload: axios.get('http://noshspot-backend.herokuapp.com/api/restaurant/' + id)
                    .then( restaurant => {
                        return { restaurant }
                    })
    }
}
