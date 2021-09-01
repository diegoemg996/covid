import apiCovid from "../api/apiCovid"
import { types } from "../types/types"

export const getHistoricalData = (country)=>{

    //Se hace llamado a la api

    return(dispatch)=>{
        apiCovid.get(`/cases?country=${country}`)
            .then(res => {
                if(res.data.hasOwnProperty('All')){
                    //Se guarda el país
                    dispatch(searchCountry(res.data.All))

                }else{
                    //Si no se encuentra el país se asigna error en true
                    dispatch(setError())
                }
            })
    }
}

export const getVaccinesData = (country)=>{

    //Se hace llamado a la api
    console.log(country);

    return(dispatch)=>{
        apiCovid.get(`/vaccines?country=${country}`)
            .then(res => {
                if(res.data.hasOwnProperty('All')){
                    //Se guarda el país
                    dispatch(searchCountryVaccine(res.data.All))

                }else{
                    //Si no se encuentra el país se asigna error en true
                    dispatch(setErrorVaccines())
                }
            })
    }
}

export const searchCountry = (data) => {
    return{
        type: types.historicalSearch,
        payload: {
            datosBusqueda: data
        }
    }
}

export const searchCountryVaccine = (data) => {
    return{
        type: types.vaccinesSearch,
        payload: {
            dataVaccines: data
        }
    }
}

export const setError = () => {
    return{
        type: types.error,
        payload: {
            error: true
        }
    }
}

export const setErrorVaccines = () => {
    return{
        type: types.errorVaccines,
        payload: {
            errorVaccines: true
        }
    }
}