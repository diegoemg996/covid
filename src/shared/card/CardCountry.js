import React from 'react'
import { useSelector } from 'react-redux'
import { addCommas } from '../../helpers/addCommas';
import './cardcountry.css'

export const CardCountry = () => {

    const state = useSelector(state => state.search);

    const {country, confirmed, deaths, abbreviation} = state.datosBusqueda;
    const {error} = state.error;

    console.log(state.error)

    return (

        <div className="card-country">
            <img
              src={`https://www.countryflags.io/${abbreviation}/flat/64.png`}
              alt="bandera"
            />
            <div>
                <p>País: {country}</p>
                <p>Casos confirmados: {addCommas(confirmed)} </p>
                <p>Muertes: {addCommas(deaths)} </p>
            </div>
        </div>
    )
}
