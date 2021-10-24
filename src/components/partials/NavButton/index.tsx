import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { navBarTheme } from "../../Themes";
import{ NavButtonArea } from './styled';




const NavButton = () => {

  const [theme, setThemes] = useState (navBarTheme['homeActive']);

  return(
    <ThemeProvider theme={theme}>
      <NavButtonArea>
        <ul className="noSelect">
          <li className="homeLi" onClick={() => setThemes(navBarTheme['homeActive'])}>
            <div className="buttonImages">
              <Link to= '/'>
                <img className='homeImg' src="/images/home.png" alt="" />
              </Link>
              <img className='homeImg arrow' src="/images/right-arrow.png" alt="" />
            </div>
            <span className='homeSpan'>Início</span>
          </li>
          <li className="variationLi" onClick={() => setThemes(navBarTheme['variationActive'])}>
            <div className="buttonImages">
              <img className='variationImg arrow' src="/images/left-arrow.png" alt="" />
              <Link to= '/variation'>
                <img className='variationImg' src="/images/variation.png" alt=""/>
              </Link>
              <img className='variationImg arrow' src="/images/right-arrow.png" alt="" />
            </div>
            <span className='variationSpan'>Variação</span>
          </li>
            <li className="dealsLi" onClick={() => setThemes(navBarTheme['dealsActive'])}>
            <div className="buttonImages">
              <img className='dealsImg arrow' src="/images/left-arrow.png" alt="" />
              <Link to= '/deals'>
                <img className='dealsImg' src="/images/deals.png" alt=""/>
              </Link>
              <img className='dealsImg arrow' src="/images/right-arrow.png" alt="" />
            </div>
            <span className='dealsSpan'>Descontão</span>
          </li>
            <li className="simulationLi" onClick={() => setThemes(navBarTheme['simulationActive'])}>
            <div className="buttonImages">
              <img className='simulationImg arrow' src="/images/left-arrow.png" alt="" />
              <Link to= '/simulation'>
                <img className='simulationImg' src="/images/simulation.png" alt=""/>
              </Link>
              <img className='simulationImg arrow' src="/images/right-arrow.png" alt="" />
            </div>
            <span className='simulationSpan'>Simulação</span>
          </li>
          <li className="profileLi" onClick={() => setThemes(navBarTheme['profileActive'])}>
            <div className="buttonImages">
              <img className='profileImg arrow' src="/images/left-arrow.png" alt="" />
              <Link to= '/profile'>
                <img className='profileImg' src="/images/profile.png" alt=""/>
              </Link>
            </div>
            <span className='profileSpan'>Perfil</span>
          </li>
        </ul>
      </NavButtonArea>  
    </ThemeProvider>

  );
}

export default NavButton;
