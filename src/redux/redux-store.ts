import {createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import MainReducer from "./main-reducer"

let rootReducer = combineReducers ({
    main: MainReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType <RootReducerType>

const store = createStore (rootReducer, applyMiddleware (thunkMiddleware) )

export default store;