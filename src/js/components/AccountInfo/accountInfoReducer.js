import { types } from './accountInfoActions';

const defaultState = {
    email: '',
    password: '',
    phone: '',
    address: '',
    id: ''
};

export default function accountInfoReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.UPDATE_ACCOUNT_INFO + '_FULLFILLED'): {            
            return { 
                ...state,
                email: payload.customer.email,
                password: payload.customer.password,
                phone: payload.customer.phone,
                address: payload.customer.address
            }
            break;
        }

        case (types.UPDATE_EMAIL): {
            return {
                ...state,
                email: payload.email
            }
            break;
        }

        case (types.UPDATE_PASSWORD): {
            return {
                ...state,
                password: payload.password
            }
            break;
        }

        case (types.UPDATE_PHONE): {
            return {
                ...state,
                phone: payload.phone
            }
            break;
        }

        case (types.UPDATE_ADDRESS): {
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