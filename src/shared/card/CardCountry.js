import React from 'react'
import { useSelector } from 'react-redux'
import { addCommas } from '../../helpers/addCommas';
import './cardcountry.css'

export const CardCountry = () => {

    const state = useSelector(state => state.search);

    const {country, confirmed, deaths, abbreviation} = state.dataCountry;
    
    return (

        <div>
            <div className="card-country">
                <img
                    src={`https://www.countryflags.io/${abbreviation}/flat/64.png`}
                    alt="bandera"
                />
                <div>
                    <p className="card-data"><span>País: </span> {country}</p>
                    <p className="card-data"><span>Casos confirmados: </span> {addCommas(confirmed)} </p>
                    <p className="card-data"><span>Muertes: </span> {addCommas(deaths)} </p>
                </div>
            </div>
        </div>

    )
}
