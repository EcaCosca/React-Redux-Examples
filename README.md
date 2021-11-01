# Getting Started with Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, install the following packages:

### `npm install react react-redux`

## Guide

1. Set up enviorement
    1. Create a folder called 'reducers' in the 'src' folder
    Here is where we are going to store every reducer, action creator function and the initial state.
    2. Create a folder for your first reducer, in this example we will use the folder called user.
    3. Create a file in said folder with the name of the reducer, in this case it will be user.js
    4. Create a file called store.js in the reducers folder.
    It stores all the reducers information.

2. Create the first reducer. In this case let's go to "./src/reducers/user/user.js"
    1. Declare a variable under the name "initialState", that holds an object with a key for the state name and an initial value, in this case " {user: ''} ". This will be our initial container for our state, where all the information is going to be held up.
    2. Declare a function under the same name as the file. and in the values that you are going to pass to it, write the following "state = initialState, {type, payload}"
    This means when we sue "state" inside of the function it will mean whatever we have inside of the initialState variable, and whenever we invoque the "user" function we will have to pass two parameteres.
    type: The name of the action.
    payload: the value that we are going to apply to the state.
    3. Inside of the function we will have a switch statement where we will pass the value of the "type"
        1. On the default we will use return state so it doesnt make any changes.
        2. Each case will have a string that would correspond to the type of an action and in the return we would return the new state depending on the payload.
    4. Create an action, an action needs to have the following criteria.
        An action is a function that will have as a return a type with a string in it that describes the type of action.
        Commonly it is all in uppercase letters with a underscore instead of spaces.
        Needs to be a string, mandatory.
        And in this case a payload that has information about the new state.

3. Now let's go to the store.js file inside of the reducer folder.
    1. import createStore, combineReducers from redux
    createStore: it's a method that takes a reducer and creates the redux store with it.
    combineReducers: Combines multiple reducers in one.
    2. Import the reducer from its file location.
    3. Define a variable called "reducers", we will use to store all the reducer functions with the combineReducers method.
    4. Declare a variable called "store" and set it equal the method "createStore" and pass the reducers variable as a value as you invoque it.
    5. Export default store

4. Now let's go to index.js inside of out 'src' folder. Here we will use a built in component to make the state inside of the reducers available to all the children elements regardless of where they are located.
    1. Import Provider from react-redux
    2. Import store from its folder location.
    3. Use the Provider component ti wrap the App component and add the atrributte "store" the the oppenning tag and set it equal to the store value.

5. Go to the component where you want to acces the state inside of the reducer, in this example you can go to App.js inside of the src folder.
    1. Import useDispatch, useSelector from react-redux.
        useDispatch: allows me to change the value of the state in the reducer.
        useSelector: allows me to acces and read the value of the state inside of the reducer.
    2. Import the action we want to use from the reducer.
    3. Create a useState hook where you will manage the value of the user inside of the component.
    4. Create a function to use the dispach method to pass the new value to the action that will get all the way to the state inside of the reducer.
    5. In this case we use the value inside of the setUser hook to have the addNewUser function dispatch this information to the user reducer.
    6. You can also acces the state of the reducer using the "state.user we get form the useSelector method de declared previously.