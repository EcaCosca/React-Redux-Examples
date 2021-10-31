// 1. Declare a variable under the name "initialState", that holds an object with a key for the state name and an initial value, in this case " {user: ''} ". This will be our initial container for our state, where all the information is going to be held up.
const initialState = {
    user: ''
}

// 2. Declare a function under the same name as the file. and in the values that you are going to pass to it, write the following "state = initialState, {type, payload}"
const user = (state = initialState, {type, payload}) => {
    // 3. Inside of the function we will have a switch statement where we will pass the value of the "type"
    switch (type) {
        case 'ADD_USER':
            return {
                user: payload
            }
        default:
            return state
    }
}

// 4. Create an action
export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user,
    }
}

export default user