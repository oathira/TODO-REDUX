import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions, getInitialStateAsync, todoSelector } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";
import { useEffect } from "react";
// import axios from "axios";

function ToDoList() {

  const todos=useSelector(todoSelector);
  const disptach = useDispatch();
  // const todos= store.getState().todos;
  useEffect(() =>{
    disptach(getInitialStateAsync())
  //   async function fetchTodo() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos");//fetching todoitems from API
  //     const data= await response.json();
  //     disptach(actions.setInitialState((data.slice(0,5))));//used slice which will display only 5 todoitems from API
  //    }
  //   fetchTodo();
  //  },[]);
    // useEffect(()=>{
    //   axios.get("https://jsonplaceholder.typicode.com/todos")
    //   .then(res=>{
    //     console.log(res.data)
    //     disptach(actions.setInitialState((res.data.slice(0,5))));
    //   })
    },[]);
 
  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.title}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;