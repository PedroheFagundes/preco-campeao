import{ ProductInfoShortArea } from './styled';
import { products } from '../../../productsJSON';

const ProductInfoShort = () => {

  let priceFormated = products[0].price.split(',');

  return(
    <ProductInfoShortArea className="noSelect">
      <img src="/images/leitemacuco.png" alt=""/>
      <div>
        <span>{products[0].name}</span>
        <span>{products[0].info}</span>
      </div>
      <span className="price"><span>R$</span><span>{priceFormated[0]}</span><span>,{priceFormated[1]}</span></span>


    </ProductInfoShortArea>
  );
}

export default ProductInfoShort;