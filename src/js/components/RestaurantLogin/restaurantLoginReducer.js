import { types } from './restaurantLoginActions';

const defaultState = {
  email: '',
  password: ''
};

export default function restaurantLoginReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.UPDATE_REST_EMAIL): {
            return {
                ...state,
                email: payload.email
                }
            
            break;
        }

        case (types.UPDATE_REST_PASSWORD): {
            return {
                ...state,
                password: payload.password
                }
              
            break;
        }

        default: {
            return state
        }
    }
}