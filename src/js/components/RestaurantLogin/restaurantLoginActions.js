import axios from 'axios';

export const types = {
    LOGIN_REST_USER: 'LOGIN_REST_USER',
    UPDATE_REST_PASSWORD: "UPDATE_REST_PASSWORD",
    UPDATE_REST_EMAIL: 'UPDATE_REST_EMAIL'
    
};



export function logInUser(info) {
    return {
        type: types.LOGIN_REST_USER,
        payload: info
        }
}

export function updateEmail(email) {
    return {
        type: types.UPDATE_REST_EMAIL,
        payload: { email }
    }
}

export function updatePassword(password) {
    return {
        type: types.UPDATE_REST_PASSWORD,
        payload: { password }
    }
}