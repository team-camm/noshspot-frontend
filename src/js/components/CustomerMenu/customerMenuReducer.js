import { types } from './customerMenuActions';

const defaultState = {
    restaurantInfo: ''
};

export default function customerMenuReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.GET_RESTAURANT_INFO): {
            return {
                ...state,
                restaurantInfo: payload.restaurant
            }
            break;
        }

        default: {
            return state
        }
    }
}