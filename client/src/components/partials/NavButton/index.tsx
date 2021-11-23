import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { navBarTheme } from "../../Themes";
import { NavButtonArea } from "./styled";

const NavButton = () => {
  const [theme, setThemes] = useState(navBarTheme["homeActive"]);

  return (
    <ThemeProvider theme={theme}>
      <NavButtonArea>
        <ul className="noSelect">
          <Link to="/">
            <li
              className="homeLi"
              onClick={() => setThemes(navBarTheme["homeActive"])}
            >
              <div className="buttonImages">
                <img className="homeImg" src="/images/navbar/home.png" alt="" />
                <img
                  className="homeImg arrow"
                  src="/images/navbar/right-arrow.png"
                  alt=""
                />
              </div>
              <span className="homeSpan">Início</span>
            </li>
          </Link>

          <li
            className="variationLi"
            onClick={() => setThemes(navBarTheme["variationActive"])}
          >
            <div className="buttonImages">
              <img
                className="variationImg arrow"
                src="/images/navbar/left-arrow.png"
                alt=""
              />
              <Link to="/variation">
                <img
                  className="variationImg"
                  src="/images/navbar/variation.png"
                  alt=""
                />
              </Link>
              <img
                className="variationImg arrow"
                src="/images/navbar/right-arrow.png"
                alt=""
              />
            </div>
            <span className="variationSpan">Variação</span>
          </li>
          <li
            className="dealsLi"
            onClick={() => setThemes(navBarTheme["dealsActive"])}
          >
            <div className="buttonImages">
              <img
                className="dealsImg arrow"
                src="/images/navbar/left-arrow.png"
                alt=""
              />
              <Link to="/deals">
                <img
                  className="dealsImg"
                  src="/images/navbar/deals.png"
                  alt=""
                />
              </Link>
              <img
                className="dealsImg arrow"
                src="/images/navbar/right-arrow.png"
                alt=""
              />
            </div>
            <span className="dealsSpan">Descontão</span>
          </li>
          <li
            className="simulationLi"
            onClick={() => setThemes(navBarTheme["simulationActive"])}
          >
            <div className="buttonImages">
              <img
                className="simulationImg arrow"
                src="/images/navbar/left-arrow.png"
                alt=""
              />
              <Link to="/simulation">
                <img
                  className="simulationImg"
                  src="/images/navbar/simulation.png"
                  alt=""
                />
              </Link>
              <img
                className="simulationImg arrow"
                src="/images/navbar/right-arrow.png"
                alt=""
              />
            </div>
            <span className="simulationSpan">Simulação</span>
          </li>
          <Link id="toProfile" to="/profile">
            <li
              className="profileLi"
              onClick={() => setThemes(navBarTheme["profileActive"])}
            >
              <div className="buttonImages">
                <img
                  className="profileImg arrow"
                  src="/images/navbar/left-arrow.png"
                  alt=""
                />
                <img
                  className="profileImg"
                  src="/images/navbar/profile.png"
                  alt=""
                />
              </div>
              <span className="profileSpan">Contato</span>
            </li>
          </Link>
        </ul>
      </NavButtonArea>
    </ThemeProvider>
  );
};

export default NavButton;
