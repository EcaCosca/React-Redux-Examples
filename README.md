# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

1. Set up enviorement
    1. Create a folder called 'reducers' in the 'src' folder
    Here is where we are going to store every reducer, action creator function and the initial state.
    2. Create a folder for your first reducer, in this example we will use the folder called user.
    3. Create a file in said folder with the name of the reducer, in this case it will be user.js
    4. Create a file called store.js in the reducers folder.
    It stores all the reducers information.

2. Create the first reducer. In this case let's go to "./src/reducers/user/user.js"
    1. Declare a variable under the name "initialState", that holds an object with a key for the state name and an initial value, in this case "user: ''
    2. Declare a function under the same name as the file. and in the values that you are going to pass to it, write the following "state = initialState, {type, payload}"
    This will 