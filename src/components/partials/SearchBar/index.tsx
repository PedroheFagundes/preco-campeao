import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { homeDisplayTheme } from '../../Themes';
import{ SearchBarArea } from './styled';


const SearchBar = () => {

  const [theme, setThemes] = useState (homeDisplayTheme['isActive']);

  return(
    <ThemeProvider theme={theme}>
      <SearchBarArea>
        <input type="text" onFocus={() => setThemes(homeDisplayTheme['isInactive'])} onBlur={() => setThemes(homeDisplayTheme['isActive'])} placeholder="Pesquisar promoções..."/>
        <img src="/images/search.png" alt=""/>
      </SearchBarArea>
    </ThemeProvider>
  );
}

export default SearchBar;