import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getVaccinesData} from '../../actions/Search';
import { upperCase } from '../../helpers/upperCase';
import { Form } from '../../shared/form/Form'
import { Error } from '../../shared/error/Error'
import { CardVaccines } from '../../shared/card/CardVaccines';

export const Vaccines = () => {

    const dispatch = useDispatch();

    const [searchCountry, setSearchCountry] = useState("");

    const state = useSelector(state => state.search);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        //Se capitaliza la primer letra de la busqueda
        let newSearch = upperCase(searchCountry);
        dispatch(getVaccinesData(newSearch));
    }

    return (
        <div className="page-container">
            <div className="content-container">
                <p className="title">Vacunación al dia de hoy</p>
                <form onSubmit={handleSubmit} className="form">
                    <i className="fas fa-search icon"></i>
                    <Form
                        setSearchCountry={setSearchCountry}
                    ></Form>

                    <input type="submit" className="button-submit" value="Buscar"></input>
                </form>

                {
                    (state.errorVaccines || state.errorVaccines === undefined)  
                        ? 
                    <Error></Error> 
                        : 
                    <CardVaccines></CardVaccines>
                }


            </div> 
        </div>
    )
}
