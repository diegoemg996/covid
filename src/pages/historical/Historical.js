import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHistoricalData} from '../../actions/Search';
import { upperCase } from '../../helpers/upperCase';
import { CardCountry } from '../../shared/card/CardCountry';
import { Form } from '../../shared/form/Form'
import { Error } from '../../shared/error/Error'

export const Historical = () => {

    const dispatch = useDispatch();

    const [searchCountry, setSearchCountry] = useState("");

    const state = useSelector(state => state.search);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        //Se capitaliza la primer letra de la busqueda
        let newSearch = upperCase(searchCountry);
        dispatch(getHistoricalData(newSearch));
    }

    return (
        <div className="page-container">
            <div className="content-container">
                <p className="title">Casos Historicos</p>
                <form onSubmit={handleSubmit} className="form">
                    <i className="fas fa-search icon"></i>
                    <Form
                        setSearchCountry={setSearchCountry}
                    ></Form>

                    <input type="submit" className="button-submit" value="Buscar"></input>
                </form>

                {
                    (state.error || state.error === undefined)  
                        ? 
                    <Error></Error> 
                        : 
                    <CardCountry></CardCountry>
                }


            </div> 
        </div>
    )
}
