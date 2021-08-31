import React from 'react'
import { useForm } from '../../hooks/useForm';

export const Form = () => {

    const [values, handleInputChange] = useForm({
        busqueda: ''
    })

    const {busqueda} = values;


    return (
        <div>
            <input
                autoComplete="off"
                name="busqueda"
                value={busqueda}
                onChange={handleInputChange}
            ></input>
            <p>{busqueda}</p>
        </div>
    )
}
