import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "../../Themes";
import{ NavButtonArea } from './styled';




const NavButton = () => {

  const [theme, setThemes] = useState (themes['homeActive']);

  return(
    <ThemeProvider theme={theme}>
      <NavButtonArea>
        <ul className="noSelect">
          <li onClick={() => setThemes(themes['homeActive'])}>
          <Link to= '/'>
            <img className='homeImg' src="/images/home.png" alt="" />
          </Link>
          <span>Início</span>
          </li>
          <li onClick={() => setThemes(themes['pricesChangeActive'])}>
          <Link to= '/prices-change'>
          <img className='pricesChangeImg' src="/images/prices-change.png" alt=""/>
          </Link>
          </li>
          <li onClick={() => setThemes(themes['superDealsActive'])}>
          <Link to= '/super-deals'>
          <img className='superDealsImg' src="/images/super-deals.png" alt=""/>
          </Link>
          </li>
          <li onClick={() => setThemes(themes['simulationActive'])}>
          <Link to= '/simulation'>
          <img className='simulationImg' src="/images/simulation.png" alt=""/>
          </Link>
          </li>
          <li onClick={() => setThemes(themes['profileActive'])}>
          <Link to= '/profile'>
          <img className='profileImg' src="/images/profile.png" alt=""/>
          </Link>
          </li>
        </ul>
      </NavButtonArea>  
    </ThemeProvider>

  );
}

export default NavButton;
