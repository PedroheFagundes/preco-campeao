import React from "react";
import InputProduct from "../../components/partials/InputProduct";
import ListProducts from "../../components/partials/ListProducts";
import { DataArea } from "./styled";

const Page = () => {
  // Colocar lógica aqui para mostrar só o que a pessoa vai fazer:
  // Criar produto, atualizar... dai só mostra o componente que ela quer
  return (
    <DataArea>
      <InputProduct />
      <ListProducts />
    </DataArea>
  );
};

export default Page;
