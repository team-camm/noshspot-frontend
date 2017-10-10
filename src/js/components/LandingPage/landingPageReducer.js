import { types } from './landingPageActions';

const defaultState = {
    restaurantsNearby: []
};

export default function landingPageReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.RESTAURANTS_NEARBY): {
            console.log('payload',payload);
            return {
                ...state,
                restaurantsNearby: [
                    ...state.restaurantsNearby,
                    payload.restaurant
                ]
            }
            break;
        }

        default: {
            return state
        }
    }
}