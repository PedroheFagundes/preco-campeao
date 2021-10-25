import{ SearchBarArea } from './styled';


const SearchBar = () => {

  return(
      <SearchBarArea>
        <input type="text"  placeholder="Pesquisar promoções..."/>
        <img src="/images/search.png" alt=""/>
      </SearchBarArea>
  );
}

export default SearchBar;