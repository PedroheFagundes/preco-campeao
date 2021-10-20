import React from "react";
import ProductInfoShort from "../../components/partials/ProductInfoShort";
import SearchBar from "../../components/partials/SearchBar";
import{ HomeArea } from './styled';

const Page = () => {
  return (
    <HomeArea>
      <SearchBar />
      <ProductInfoShort />
    </HomeArea>
  );
}

export default Page;