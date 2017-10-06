import { types } from './landingPageActions';

const defaultState = {
    address: ''
};

export default function landingPageReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.GET_ADDRESS): {
            return {
                ...state,
                address: payload.address
            }
            break;
        }

        default: {
            return state
        }
    }
}