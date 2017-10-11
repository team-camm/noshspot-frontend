import { types } from './RestaurantMenuUpdateActions';

const defaultState = {
    newItem: '',
    newPrice: '',
    editedItem: '',
    editedPrice: ''
};

export default function newRestaurantReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.ADD_RESTAURANT + '_FULLFILLED'): {
            return {
                ...state,
                email: payload.restaurant.email,
            }
            break;
        }

        case (types.RESTAURANT_EMAIL): {
            return {
                ...state,
                email: payload.email
            }
            break;
        }



        default: {
            return state
        }
    }
}