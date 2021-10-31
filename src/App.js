import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  incCounter,
  decCounter,
  resetCounter,
} from "./reducers/counter/counter";

import {
  addUser
} from './reducers/user/user'

import { addTodos, addTodo, removeTodo } from "./reducers/todos/todos";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const [user, setUser] = useState();
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      counter: state.counter.counter,
      todos: state.todos.todos,
      user: state.user.user,
    };
  });

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
    <div>
      <h1>{state.user}</h1>
      <input onChange={(e)=> {setUser(e.target.value)}}></input>
      <button onClick={addNewUser}>Change user name</button>

      {state.counter}
      <button onClick={inc}>Inc 10</button>
      <button onClick={dec}>Dec 10</button>
      <button onClick={reset}>Reset</button>

      {state.todos.map((element) => {
        return (
          <div>
            <p>{element.id}</p>
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
