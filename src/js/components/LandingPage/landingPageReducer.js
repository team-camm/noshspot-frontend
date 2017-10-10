import { types } from './landingPageActions';

const defaultState = {
    restaurantsNearby: []
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

        case (types.DELETE_RESTAURANTS): {
            return {
                restaurantsNearby: []
            }
            break;
        }

        default: {
            return state
        }
    }
}