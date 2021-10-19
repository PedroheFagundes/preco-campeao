import React from "react";
import { Link } from "react-router-dom";
import{ NavButtonArea } from './styled';

const NavButton = () => {
  return(
    <NavButtonArea>
      <ul className="noSelect">
        <li>
        <Link to= '/' className="homeLink">
          <img src="/images/home.png" alt=""/>
        </Link>
        </li>
        <li>
        <Link to= '/prices-change' className="pricesChangeLink">
        <img src="/images/prices-change.png" alt=""/>
        </Link>
        </li>
        <li>
        <Link to= '/super-deals' className="superDealsLink">
        <img src="/images/super-deals.png" alt=""/>
        </Link>
        </li>
        <li>
        <Link to= '/simulation' className="simulationLink">
        <img src="/images/simulation.png" alt=""/>
        </Link>
        </li>
        <li>
        <Link to= '/profile' className="profileLink">
        <img src="/images/profile.png" alt=""/>
        </Link>
        </li>
      </ul>
    </NavButtonArea>
  );
}

export default NavButton;