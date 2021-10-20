import{ ProductInfoShortArea } from './styled';

const ProductInfoShort = () => {
  return(
    <ProductInfoShortArea className="noSelect">
      <img src="/images/leitemacuco.png" alt=""/>
      <div>
        <span>Leite Macuco</span>
        <span>1 litro</span>
      </div>
      <span className="price"><span>R$</span><span>2</span><span>,99</span></span>


    </ProductInfoShortArea>
  );
}

export default ProductInfoShort;