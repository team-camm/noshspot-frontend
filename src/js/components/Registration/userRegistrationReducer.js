import { types } from './userRegistrationActions';

const defaultState = {
  temp: {
    email: '',
    password: '',
    fullName: '',
    phone: '',
    address: ''

  },
  current: {
    email: '',
    password: '',
    fullName: '',
    phone: '',
    address: '',
    id: ''
  }
};

export default function userRegistrationReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.SAVE_REG_INFO + '_FULFILLED'): {
          console.log(payload);            
            return { 
                ...state,
                current: {
                  ...state.current,
                  email: payload.customer.data.email,
                  password: payload.customer.data.password,
                  fullName: payload.customer.data.fullName,
                  phone: payload.customer.data.phone,
                  address: payload.customer.data.address,
                  id: payload.customer.data._id
                }
            }
            break;
        }

        case (types.UPDATE_REG_EMAIL): {
            return {
                ...state,
                temp: {
                  ...state.temp,
                  email: payload.email
                }
            }
            break;
        }

        case (types.UPDATE_REG_PASSWORD): {
            return {
                ...state,
                temp: {
                  ...state.temp,
                  password: payload.password
                }
              }
            break;
        }

        case (types.UPDATE_REG_FULLNAME): {
            return {
                ...state,
                temp: {
                  ...state.temp,
                  fullName: payload.fullName
                }
            }
            break;
        }

        case (types.UPDATE_REG_PHONE): {
            return {
                ...state,
                temp: {
                  ...state.temp,
                  phone: payload.phone
                }
            }
            break;
        }

        case (types.UPDATE_REG_ADDRESS): {
            return {
                ...state,
                temp: {
                  ...state.temp,
                  address: payload.address
                }
            }
            break;
        }

        default: {
            return state
        }
    }
}