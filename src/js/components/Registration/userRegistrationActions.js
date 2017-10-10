import axios from 'axios';

export const types = {
    SAVE_REG_INFO: 'SAVE_REG_INFO',
    UPDATE_REG_PASSWORD: "UPDATE_REG_PASSWORD",
    UPDATE_REG_FULLNAME: 'UPDATE_REG_FULLNAME',
    UPDATE_REG_EMAIL: 'UPDATE_REG_EMAIL',
    UPDATE_REG_PHONE: 'UPDATE_REG_PHONE',
    UPDATE_REG_ADDRESS: 'UPDATE_REG_ADDRESS'
};

export function saveRegInfo(info) {
    return {
        type: types.SAVE_REG_INFO,
        payload: axios.post("http://localhost:3000/api/customer/new", info) 
            .then( customer => {
              // console.log(customer);
                return { 
                    customer
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
        type: types.UPDATE_REG_EMAIL,
        payload: { email }
    }
}

export function updatePassword(password) {
    return {
        type: types.UPDATE_REG_PASSWORD,
        payload: { password }
    }
}

export function updateFullName(fullName) {
    return {
        type: types.UPDATE_REG_FULLNAME,
        payload: { fullName }
    }
}

export function updatePhone(phone) {
    return {
        type: types.UPDATE_REG_PHONE,
        payload: { phone }
    }
}

export function updateAddress(address) {
    return {
        type: types.UPDATE_REG_ADDRESS,
        payload: { address }
    }
}