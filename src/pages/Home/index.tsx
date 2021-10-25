import ProductInfoShort from "../../components/partials/ProductInfoShort";
import SearchBar from "../../components/partials/SearchBar";
import{ HomeArea } from './styled';
import products from "../../productsJSON";

const Page = () => {
  return (
    <HomeArea>
      <SearchBar />
      <div className="productInfoShortArea">
        {products.map((val, key) => {

          let priceFormated = val.price.split(',');

          return (
            <div className="noSelect productsInfoShort">
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