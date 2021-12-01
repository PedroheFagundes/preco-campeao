import React, { useState } from "react";
import InputProduct from "../../components/partials/InputProduct";
import ListProducts from "../../components/partials/ListProducts";
import { DataArea } from "./styled";

const Page = () => {
  const [password, setPassword] = useState("5x$vsRi&fL48_K9vnkT&f39G@93A1jdfs");
  // Colocar lógica aqui para mostrar só o que a pessoa vai fazer:
  // Criar produto, atualizar... dai só mostra o componente que ela quer
  return (
    <DataArea>
      {password === "5x$vsRi&fL48_K9vnkT&f39G@93A1jdfs" ? (
        <>
          <InputProduct />
          <ListProducts />
        </>
      ) : (
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
    </DataArea>
  );
};

export default Page;
