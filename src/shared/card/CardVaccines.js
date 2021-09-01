import React from 'react'
import { useSelector } from 'react-redux'
import { addCommas } from '../../helpers/addCommas';
import './cardcountry.css'

export const CardVaccines = () => {

    const state = useSelector(state => state.search);

    const {administered, people_vaccinated, people_partially_vaccinated, abbreviation} = state.dataVaccines;
    
    return (

        <div>
            <div className="card-country">
                <img
                    src={`https://www.countryflags.io/${abbreviation}/flat/64.png`}
                    alt="bandera"
                />
                <div>
                    <p className="card-data"><span>Administradas: </span> {addCommas(administered)}</p>
                    <p className="card-data"><span>Totalmente vacunados: </span> {addCommas(people_vaccinated)} </p>
                    <p className="card-data"><span>Parcialmente vacunados: </span> {addCommas(people_partially_vaccinated)} </p>
                </div>
            </div>
        </div>

    )
}
