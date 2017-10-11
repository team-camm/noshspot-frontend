import axios from 'axios';
export const types = {
    RESTAURANTS_NEARBY: 'RESTAURANTS_NEARBY',
    DELETE_RESTAURANTS: 'DELETE_RESTAURANTS',
    GET_ALL_RESTAURANTS: 'GET_ALL RESTAURANTS'
};

export function getNearbyRestaurants (restaurant) {
    return {
        type: types.RESTAURANTS_NEARBY,
        payload: {restaurant}
    }
}

export function deleteRestaurants () {
    return {
        type: types.DELETE_RESTAURANTS,
        payload: {}
    }
}

export function getAllRestaurants() {
    return {
        type: types.GET_ALL_RESTAURANTS,
        payload: axios.get('http://localhost:3000/api/restaurant')
                    .then(result =>{
                        return { result }
                    })
                    .catch(error => {
                        console.log('Error fetching and parsing data',error);
                    })
    }
}
