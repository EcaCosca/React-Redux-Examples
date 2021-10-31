const initialState = {
    user: ''
}

const user = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_USER':
            return {
                user: payload
            }
        default:
            return state
    }
}

export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user,
    }
}

export default user