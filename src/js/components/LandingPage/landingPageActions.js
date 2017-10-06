export const types = {
    GET_ADDRESS: 'GET_ADDRESS'
};

export function getAddress (address) {
    return {
        type: types.GET_ADDRESS,
        payload: {address}
    }
}
