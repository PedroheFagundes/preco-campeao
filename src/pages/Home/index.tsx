import SearchBar from "../../components/partials/SearchBar";
import{ HomeArea } from './styled';
import products from "../../productsJSON";
import { useState } from "react";

const Page = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <HomeArea>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Pesquisar promoções..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
        }}/>
        <img src="/images/search.png" alt=""/>
      </div>
      <div className="productInfoShortArea">
        {products.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {

          let priceFormated = val.price.split(',');

          return (
            <div className="noSelect productsInfoShort" key={key}>
              <img src={`/images/products/${val.image}.png`} alt=""/>
              <div>
                <span>{val.name}</span>
                <span>{val.info}</span>
              </div>
              <span className="price"><span>R$</span><span>{priceFormated[0]}</span><span>,{priceFormated[1]}</span></span>
            </div>
          )
        })}
      </div>
    </HomeArea>
  );
}

export default Page;