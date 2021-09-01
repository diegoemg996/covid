import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLiveData} from '../../actions/Search';
import { CardCountry } from '../../shared/card/CardCountry';
import { Form } from '../../shared/form/Form'

export const LiveCases = () => {

    const dispatch = useDispatch();

    const [searchCountry, setSearchCountry] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getLiveData(searchCountry));
    }

    return (
        <div className="page-container">
            <div className="content-container">
                <p className="title">Casos en vivo</p>
                <form onSubmit={handleSubmit} className="form">
                    <i className="fas fa-search icon"></i>
                    <Form
                        setSearchCountry={setSearchCountry}
                    ></Form>

                    <input type="submit" className="button-submit" value="Buscar"></input>
                </form>

                <CardCountry>
                </CardCountry>
            </div> 
        </div>
    )
}
