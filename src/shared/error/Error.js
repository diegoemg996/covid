import React from 'react'
import { useSelector } from 'react-redux';
import './error.css'

export const Error = () => {

    const state = useSelector(state => state.search);

    return (
        <div className="error-message">

            {
                (state.error === undefined || state.errorVaccines === undefined)
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
