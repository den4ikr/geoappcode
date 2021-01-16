import { type } from "os"
import {createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers ({

})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType <RootReducerType>

const store = createStore (rootReducer, applyMiddleware (thunkMiddleware) )