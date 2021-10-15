import React from "react";
import { Link } from "react-router-dom";
import{ NavButtonArea } from './styled';

const NavButton = () => {
  return(
    <NavButtonArea>
      <ul>
        <li>
        <Link to= '/'>
          Início
        </Link>
        </li>
        <li>
        <Link to= '/prices-change'>
          Mudança
        </Link>
        </li>
        <li>
        <Link to= '/super-deals'>
          Super
        </Link>
        </li>
        <li>
        <Link to= '/simulation'>
          Simulação
        </Link>
        </li>
        <li>
        <Link to= '/profile'>
          Perfil
        </Link>
        </li>
      </ul>
    </NavButtonArea>
  );
}

export default NavButton;