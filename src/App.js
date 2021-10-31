import "./App.css";
// 1. Import useDispatch, useSelector from react-redux.
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// 2. Import the action we want to use from the reducer.
import {
  addUser
} from './reducers/user/user'

import {
  incCounter,
  decCounter,
  resetCounter,
} from "./reducers/counter/counter";

import { addTodos, addTodo, removeTodo } from "./reducers/todos/todos";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState();
  // 3. Create a useState hook where you will manage the value of the user inside of the component.
  const [user, setUser] = useState();

  // useDispatch: allows me to change the value of the state in the reducer.
  const dispatch = useDispatch();
  
  // useSelector: allows me to acces and read the value of the state inside of the reducer.
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      counter: state.counter.counter,
      todos: state.todos.todos,
      user: state.user.user,
    };
  });

  // 4. Create a function to use the dispach method to pass the new value to the action that will get all the way 
  const addNewUser = () => {
    dispatch(addUser(user))
  }

  const inc = () => {
    dispatch(incCounter(10));
  };
  const dec = () => {
    dispatch(decCounter(10));
  };
  const reset = () => {
    dispatch(resetCounter());
  };

  const addTodo = () => {
    const todo = {
    
    };

    dispatch(addTodo(todo));
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        dispatch(addTodos(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App App-header">
      <div className="user">
        {/* 6. You can also acces the state of the reducer using the "state.user we get form the useSelector method de declared previously. */}
        <h1>{state.user}</h1>
        {/* 5. In this case we use the value inside of the setUser hook to have the addNewUser function dispatch this information to the user reducer.*/}
        <input onChange={(e)=> {setUser(e.target.value)}}></input>
        <button onClick={addNewUser}>Change user name</button>
      </div>

      <div className="counter">
        <h2>{state.counter}</h2>
        <button onClick={inc}>Increase 10</button>
        <button onClick={dec}>Decrease 10</button>
        <button onClick={reset}>Reset</button>
      </div>

      {state.todos.map((element) => {
        return (
          <div className="todo">
            <p>
              Task # {element.id}
              <br/>
              {element.title.toUpperCase()}
            </p>
            <button
              onClick={() => {
                dispatch(removeTodo(element));
              }}
            >
              Remove Todo
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
