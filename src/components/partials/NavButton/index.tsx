import React from "react";
import { Link } from "react-router-dom";
import{ NavButtonArea } from './styled';

const NavButton = () => {
  return(
    <NavButtonArea>
      <ul>
        <li>
        <Link to= '/'>
          <img src="/images/home.png" />
        </Link>
        </li>
        <li>
        <Link to= '/prices-change'>
        <img src="/images/prices-change.png" />
        </Link>
        </li>
        <li>
        <Link to= '/super-deals'>
        <img src="/images/super-deals.png" />
        </Link>
        </li>
        <li>
        <Link to= '/simulation'>
        <img src="/images/simulation.png" />
        </Link>
        </li>
        <li>
        <Link to= '/profile'>
        <img src="/images/profile.png" />
        </Link>
        </li>
      </ul>
    </NavButtonArea>
  );
}

export default NavButton;