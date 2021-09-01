import React from 'react'
import { useSelector } from 'react-redux';
import './error.css'

export const ErrorVaccines = () => {

    const state = useSelector(state => state.search);

    return (
        <div className="error-message">

            {
                (state.errorVaccines === undefined)
                    ?
                null
                    :
                <p>
                    No se ha encontrado el país. El país debe de estar escrito en Inglés.
                </p>                
            }


        </div>
    )
}
