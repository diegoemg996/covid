import apiCovid from "../api/apiCovid"
import { types } from "../types/types"

export const getLiveData = (country)=>{
    return(dispatch)=>{
        apiCovid.get(`/cases?country=${country}`)
            .then(res => {
                if(res.data.hasOwnProperty('All')){
                    dispatch(search(res.data.All))
                    dispatch(setError(false))
                }else{
                    dispatch(setError(true))
                }
            })
    }
}

export const search = (data) => {
    return{
        type: types.liveSearch,
        payload: {
            datosBusqueda: data
        }
    }
}

export const setError = (err) => {
    return{
        type: types.error,
        payload: {
            error: err
        }
    }
}