export const types = {
    RESTAURANTS_NEARBY: 'RESTAURANTS_NEARBY'
};

export function getNearbyRestaurants (restaurant) {
    return {
        type: types.RESTAURANTS_NEARBY,
        payload: {restaurant}
    }
}
