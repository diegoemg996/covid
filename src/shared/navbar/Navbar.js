
import React, { useState } from 'react'
import {NavLink} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {

  const history = useHistory();

  const [responsive, setResponsive] = useState(false)

  const handleRouting = (ruta)=>{
    history.push(`/${ruta}`);
  }

  const handleNavbar = ()=>{
    setResponsive(!responsive)
  }

  
    return (
        <nav className={responsive ? "navbar-responsive" : "navbar"}>
          <button className="responsive-button" onClick={handleNavbar}>
            <i className="fas fa-bars fa-2x"></i>
          </button>
          <ul className={'lista'}>
            <li onClick={()=> handleRouting('')}>
              <NavLink exact className="navlink" to="/" activeClassName="selected">
                <p>Casos en vivo</p> 
              </NavLink>
            </li>
            <li onClick={()=> handleRouting('historical')}>
              <NavLink exact className="navlink" to="/historical" activeClassName="selected">
                <p>Casos Historicos</p>
              </NavLink>
            </li>
            <li onClick={()=> handleRouting('vaccines')}>
              <NavLink exact className="navlink" to="/vaccines" activeClassName="selected">
                <p>Vacunación</p>
              </NavLink>
            </li>
          </ul>
        </nav>
    )
}
