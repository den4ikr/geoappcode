import { API } from './../api/api';
import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { WeatherResponseType } from './../types/types';

const SET_DATA = "SET_DATA"

const initialState = {
    data: {} as WeatherResponseType,
}

type IniitalStateType = typeof initialState

const MainReducer = (state = initialState, action: ActionsTypes): IniitalStateType => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.data }
        default:
            return state;
    }
}

type PropertiesType <T> = T extends { [key: string]: infer U } ? U : never
type ActionsTypes = ReturnType <PropertiesType <typeof actions> >

export const actions = {
    setData: (data: WeatherResponseType): SetDataType => ( { type: SET_DATA, data } as const )
}
type SetDataType = {
    data: WeatherResponseType,
    type: typeof SET_DATA,
}

type ThunkType = ThunkAction <Promise <void>, AppStateType, unknown, ActionsTypes>

export const getWeather = (q: string): ThunkType => async (dispatch) => {
    const response = await API.getWeather (q)
    dispatch ( actions.setData (response.data) )
}

export const getWeatherByCoordinates = (lat: number, lon: number): ThunkType => async (dispatch) => {
    const response = await API.getWeatherByLatAndLon (lat, lon)
    dispatch ( actions.setData (response.data) )
}

export default MainReducer;