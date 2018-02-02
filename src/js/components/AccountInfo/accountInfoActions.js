import axios from 'axios';

export const types = {
    UPDATE_ACCOUNT_INFO: 'UPDATE_ACCOUNT_INFO',
    UPDATE_PASSWORD: "UPDATE_PASSWORD",
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_PHONE: 'UPDATE_PHONE',
    UPDATE_ADDRESS: 'UPDATE_ADDRESS'
};

export function updateAccountInfo(info, id) {
    return {
        type: types.UPDATE_ACCOUNT_INFO,
        payload: axios.put("http://noshspot-backend.herokuapp.com/api/customer/" + '59d54bfc599f3936e4bf389f',info) 
            .then( customer => {
                return { 
                    customer,
                    id
                 }

                    // {
                    //     email: customer.email,
                    //     password: customer.password,
                    //     phone: customer.phone,
                    //     address: customer.address,
                    //     id: customer.id
                    // }
            })
            .catch( err => console.log(err))
        }
}

export function updateEmail(email) {
    return {
        type: types.UPDATE_EMAIL,
        payload: { email }
    }
}

export function updatePassword(password) {
    return {
        type: types.UPDATE_PASSWORD,
        payload: { password }
    }
}

export function updatePhone(phone) {
    return {
        type: types.UPDATE_PHONE,
        payload: { phone }
    }
}

export function updateAddress(address) {
    return {
        type: types.UPDATE_ADDRESS,
        payload: { address }
    }
}