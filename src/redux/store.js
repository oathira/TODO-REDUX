// import { combineReducers } from "redux";
// import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer,} from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import loggerMiddleware from "./middlewares/loggerMiddleware";

// const result =combineReducers({
//     todoReducer,
//    noteReducer
// })

// export const store = redux.createStore(result);

export const store =configureStore({
    reducer:{
        todoReducer,
       noteReducer,
       notificationReducer},
    middleware:[loggerMiddleware]
})