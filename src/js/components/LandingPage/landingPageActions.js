export const types = {
    RESTAURANTS_NEARBY: 'RESTAURANTS_NEARBY',
    DELETE_RESTAURANTS: 'DELETE_RESTAURANTS'
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
