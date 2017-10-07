import { types } from './RestaurantRegistrationActions';

const defaultState = {
    email: '',
    password: '',
    phone: '',
    address: '',
    restaurantName: '',
    hours: '',
    description: '',
    website: '',
    yelp: '',
    facebook: '',
    billingAddress: '',
    annualRevenue: '',
    tags: '',
    img: '',
};

export default function newRestaurantReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.ADD_RESTAURANT + '_FULLFILLED'): {
            return {
                ...state,
                email: payload.restaurant.email,
                password: payload.restaurant.password,
                phone: payload.restaurant.phone,
                address: payload.restaurant.address,
                restaurantName: payload.restaurant.restaurantName ,
                hours: payload.restaurant.hours ,
                description: payload.restaurant.description ,
                website: payload.restaurant.website ,
                yelp: payload.restaurant.yelp ,
                facebook: payload.restaurant.facebook ,
                billingAddress: payload.restaurant.billingAddress ,
                annualRevenue: payload.restaurant.annualRevenue ,
                tags: payload.restaurant.tags ,
                img: payload.restaurant.img 
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

        case (types.RESTAURANT_PASSWORD): {
            return {
                ...state,
                password: payload.password
            }
            break;
        }

        case (types.RESTAURANT_PHONE): {
            return {
                ...state,
                phone: payload.phone
            }
            break;
        }

        case (types.RESTAURANT_ADDRESS): {
            return {
                ...state,
                address: payload.address
            }
            break;
        }

        case (types.RESTAURANT_NAME): {
            return {
                ...state,
                restaurantName: payload.restaurantName
            }
            break;
        }

        case (types.RESTAURANT_HOURS): {
            return {
                ...state,
                hours: payload.hours
            }
            break;
        }

        case (types.RESTAURANT_DESCRIPTION): {
            return {
                ...state,
                description: payload.description
            }
            break;
        }

        case (types.RESTAURANT_WEBSITE): {
            return {
                ...state,
                website: payload.website
            }
            break;
        }

        case (types.RESTAURANT_YELP): {
            return {
                ...state,
                yelp: payload.yelp
            }
            break;
        }

        case (types.RESTAURANT_FACEBOOK): {
            return {
                ...state,
                facebook: payload.facebook
            }
            break;
        }

        case (types.RESTAURANT_BILLINGADDRESS): {
            return {
                ...state,
                billingAddress: payload.billingAddress
            }
            break;
        }

        case (types.RESTAURANT_ANNUALREVENUE): {
            return {
                ...state,
                annualRevenue: payload.annualRevenue
            }
            break;
        }

        case (types.RESTAURANT_TAGS): {
            return {
                ...state,
                tags: payload.tags
            }
            break;
        }

        case (types.RESTAURANT_IMG): {
            return {
                ...state,
                img: payload.img
            }
            break;
        }


        default: {
            return state
        }
    }
}