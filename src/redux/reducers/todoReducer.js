
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState={
    todos:[

    ]
}

// export const getInitialStateAsync = createAsyncThunk("todo/getInitialState",
//   (arg,thunkAPI)=>{
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//     .then(res=>{
//       console.log(res.data)
//     //   disptach(actions.setInitialState((res.data.slice(0,5))));
//       thunkAPI.dispatch(actions.setInitialState((res.data.slice(0,5))))
//     })
// });
export const getInitialStateAsync = createAsyncThunk("todo/getInitialState",
//   async(_,thunkAPI)=>{
//     //async calls
//     try{
      
//         const res= awaitaxios.get("https://jsonplaceholder.typicode.com/todos")
//           console.log(res.data);
//           thunkAPI.dispatch(actions.setInitialState((res.data.slice(0,5))));  
//     }
//     catch{
//         console.log(err);
//     }}
           ()=>{
              return axios.get("https://jsonplaceholder.typicode.com/todos");
            }
    
    );
    export const addTodosAsync = createAsyncThunk("todo/addTodo",async (payload)=>{
       
        const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
              method:"POST",
              headers:{
                     "content-type":"application/json"
                 },
         
                body:JSON.stringify({
                    title:payload,
                    completed:false
                  })
              }); 

              return response.json();
           }
    )

//Creating reducer using reducer toolkit
const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        // setInitialState:(state,action)=>{
        //     state.todos=[...action.payload]
        // },
        add:(state,action)=>{
            state.todos.push({
                title:action.payload,
                completed:false})},
        toggle:(state,action)=>{
            state.todos.map((todo,i)=>{
                if(i===action.payload){
                    todo.completed=!todo.completed;
                }
                return todo;
            })
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialStateAsync.fulfilled,(state,action)=>{
               console.log("getInitialState is fulfilled");
               console.log(action.payload);
               state.todos=[...action.payload.data.slice(0,5)]
        })
        .addCase(addTodosAsync.fulfilled,(state,action)=>{
            console.log("add todo is fulfilled");
            console.log(action.payload)
                  state.todos.push(action.payload)

        })
    }
});
export const todoReducer =todoSlice.reducer;
export const actions=todoSlice.actions;
export const todoSelector= (state)=>state.todoReducer.todos;



//Reducer usign redux
// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i === action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }