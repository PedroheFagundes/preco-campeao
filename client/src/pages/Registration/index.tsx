import React, { useState } from "react";
import InputItem from "../../components/Items/CreateItem";
import DeleteItem from "../../components/Items/DeleteItem";
import EditItem from "../../components/Items/EditItem";
import InputProduct from "../../components/Products/CreateProduct";
import DeleteProduct from "../../components/Products/DeleteProduct";
import EditProduct from "../../components/Products/EditProduct";
import { RegistrationArea } from "./styled";

const Page = () => {
  const [choice, setChoice] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RegistrationArea>
      {password === "5x$vsRi&fL48_K9vnkT&f39G@93A1jdfs" ? (
        <>
          <div className="choiceButtonsArea">
            <h3>No que vai trabalhar hoje?</h3>
            <div className="productButtons">
              <span>Produto</span>
              <button
                className="create"
                onClick={() => setChoice("createProduct")}
              >
                Criar Produto
              </button>
              <button className="edit" onClick={() => setChoice("editProduct")}>
                Editar Produto
              </button>
              <button
                className="delete"
                onClick={() => setChoice("deleteProduct")}
              >
                Deletar Produto
              </button>
            </div>
            <div className="productButtons">
              <span>Item do Mercado</span>
              <button
                className="create"
                onClick={() => setChoice("createItem")}
              >
                Criar Item
              </button>
              <button className="edit" onClick={() => setChoice("editItem")}>
                Editar Item
              </button>
              <button
                className="delete"
                onClick={() => setChoice("deleteItem")}
              >
                Deletar Item
              </button>
            </div>
          </div>
          {(() => {
            switch (choice) {
              case "createProduct":
                return <InputProduct />;
              case "editProduct":
                return <EditProduct />;
              case "deleteProduct":
                return <DeleteProduct />;
                case "createItem":
                return <InputItem />;
              case "editItem":
                return <EditItem />;
              case "deleteItem":
                return <DeleteItem />;
              default:
                return null;
            }
          })()}
        </>
      ) : (
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
    </RegistrationArea>
  );
};

export default Page;
