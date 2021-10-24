import ProductInfoShort from "../../components/partials/ProductInfoShort";
import SearchBar from "../../components/partials/SearchBar";
import{ HomeArea } from './styled';

const Page = () => {
  return (
    <HomeArea>
      <SearchBar />
      <div className="productInfoShortArea">
        <ProductInfoShort />
        <ProductInfoShort />
        <ProductInfoShort />
        <ProductInfoShort />
        <ProductInfoShort />
      </div>
    </HomeArea>
  );
}

export default Page;