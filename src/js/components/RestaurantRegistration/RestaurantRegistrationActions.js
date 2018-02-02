import axios from 'axios';

export const types = {
    ADD_RESTAURANT: 'ADD_RESTAURANT',
    RESTAURANT_EMAIL: 'RESTAURANT_EMAIL',
    RESTAURANT_PASSWORD: 'RESTAURANT_PASSWORD',
    RESTAURANT_PHONE: 'RESTAURANT_PHONE',
    RESTAURANT_ADDRESS: 'RESTAURANT_ADDRESS',
    RESTAURANT_NAME: 'RESTAURANT_NAME',
    RESTAURANT_HOURS: 'RESTAURANT_HOURS' ,
    RESTAURANT_DESCRIPTION: 'RESTAURANT_DESCRIPTION',
    RESTAURANT_WEBSITE: 'RESTAURANT_WEBSITE',
    RESTAURANT_YELP: 'RESTAURANT_YELP',
    RESTAURANT_FACEBOOK: 'RESTAURANT_FACEBOOK',
    RESTAURANT_BILLINGADDRESS: 'RESTAURANT_BILLINGADDRESS',
    RESTAURANT_ANNUALREVENUE: 'RESTAURANT_ANNUALREVENUE',
    RESTAURANT_TAGS: 'RESTAURANT_TAGS',
    RESTAURANT_IMG: 'RESTAURANT_IMG', 
};

export function addRestaurant(restaurantInfo) {
    return {
        type: types.ADD_RESTAURANT,
        payload: axios.post("http://noshspot-backend.herokuapp.com/api/restaurant/new", restaurantInfo) 
            .then( restaurant => {
                return { 
                    restaurant
                 }
            })
            .catch( err => console.log(err))
        }
}

export function restaurantEmail(email) {
    return {
        type: types.RESTAURANT_EMAIL,
        payload: { email }
    }
}

export function restaurantPassword(password) {
    return {
        type: types.RESTAURANT_PASSWORD,
        payload: { password }
    }
}

export function restaurantPhone(phone) {
    return {
        type: types.RESTAURANT_PHONE,
        payload: { phone }
    }
}

export function restaurantAddress(address) {
    return {
        type: types.RESTAURANT_ADDRESS,
        payload: { address }
    }
}

export function restaurantName(restaurantName) {
    return {
        type: types.RESTAURANT_NAME,
        payload: { restaurantName }
    }
}

export function restaurantHours(hours) {
    return {
        type: types.RESTAURANT_HOURS,
        payload: { hours }
    }
}

export function restaurantDescription(description) {
    return {
        type: types.RESTAURANT_DESCRIPTION,
        payload: { description }
    }
}

export function restaurantWebsite(website) {
    return {
        type: types.RESTAURANT_WEBSITE,
        payload: { website }
    }
}

export function restaurantYelp(yelp) {
    return {
        type: types.RESTAURANT_YELP,
        payload: { yelp }
    }
}

export function restaurantFacebook( facebook) {
    return {
        type: types.RESTAURANT_FACEBOOK,
        payload: { facebook }
    }
}

export function restaurantBillingAddress( billingAddress) {
    return {
        type: types.RESTAURANT_BILLINGADDRESS,
        payload: { billingAddress }
    }
}

export function restaurantAnnualRevenue( annualRevenue) {
    return {
        type: types.RESTAURANT_ANNUALREVENUE,
        payload: { annualRevenue }
    }
}

export function restaurantTags( tags ) {
    return {
        type: types.RESTAURANT_TAGS,
        payload: { tags }
    }
}

export function restaurantImg( img ) {
    return {
        type: types.RESTAURANT_IMG,
        payload: { img }
    }
}

