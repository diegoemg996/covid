import { types } from "../types/types";

const initialState = {
    dataCountry: {},
    dataVaccines: {},
    error: undefined,
    errorVaccines: undefined
}


export const searchReducer = (state= initialState, action) =>{
    switch (action.type) {
        case types.historicalSearch:
            return{
                ...state,
                dataCountry: action.payload.dataCountry,
                error: false
            }
        case types.error:
            return{
                ...state,
                dataCountry: {},
                error: true
            }
        case types.vaccinesSearch:{
            return{
                ...state,
                dataVaccines: action.payload.dataVaccines,
                errorVaccines: false
            }
        }
        case types.errorVaccines:{
            return{
                ...state,
                dataVaccines:{},
                errorVaccines: true
            }
        }

    
        default:
            return state;
    }
}