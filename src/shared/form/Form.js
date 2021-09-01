import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const Form = ({ setSearchCountry}) => {

    const [values, handleInputChange] = useForm({
        search: ''
    })

    const {search} = values;

    useEffect(() => {
        setSearchCountry(search)
    }, [search, setSearchCountry])


    return (
        <div>
            <input
                className="search-country"
                autoComplete="off"
                placeholder="Ingrese país a buscar (En inglés)"
                name="search"
                value={search}
                onChange={handleInputChange}
            ></input>
        </div>
    )
}
