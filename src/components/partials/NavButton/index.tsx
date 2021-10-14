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
        <Link to= '/about'>
          Sobre
        </Link>
        </li>
        <li>
        <Link to= '/about'>
          Sobre
        </Link>
        </li>
        <li>
        <Link to= '/about'>
          Sobre
        </Link>
        </li>
        <li>
        <Link to= '/about'>
          Sobre
        </Link>
        </li>
      </ul>
    </NavButtonArea>
  );
}

export default NavButton;