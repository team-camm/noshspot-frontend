import { types } from './landingPageActions';

const defaultState = {
    restaurantsNearby: [],
    allRestaurants: []
};

export default function landingPageReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.RESTAURANTS_NEARBY): {
            return {
                ...state,
                restaurantsNearby: [
                    ...state.restaurantsNearby,
                    payload.restaurant
                ]
            }
            break;
        }

        case (types.GET_ALL_RESTAURANTS + '_FULFILLED'): {
            return {
                ...state,
                allRestaurants: payload.result.data
            }
            break;
        }

        case (types.DELETE_RESTAURANTS): {
            return {
                ...state,
                restaurantsNearby: []
            }
            break;
        }

        default: {
            return state
        }
    }
}