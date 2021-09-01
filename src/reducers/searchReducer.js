import { types } from "../types/types";

const initialState = {
    datosBusqueda: {},
    error: false
}


export const searchReducer = (state= initialState, action) =>{
    switch (action.type) {
        case types.liveSearch:
            return{
                ...state,
                datosBusqueda: action.payload.datosBusqueda
            }
        case types.error:
            return{
                ...state,
                error: action.payload.error
            }
    
        default:
            return state;
    }
}