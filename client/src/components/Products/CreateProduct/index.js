import React, { useState } from "react";
import { CreateProductArea } from "./styled";

const InputProduct = () => {
  const [message, setMessage] = useState(false);
  const [product_name, setProduct_name] = useState("");
  const [product_info, setProduct_info] = useState("");
  const [product_category, setProduct_category] = useState("");
  const [product_image, setProduct_image] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        product_name,
        product_info,
        product_category,
        product_image,
      };
      await fetch("https://preco-campeao.herokuapp.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setMessage(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <CreateProductArea>
      <h3>Criar Produto</h3>
      <form onSubmit={onSubmitForm}>
        <div className="upperBottomLine">
          <div className="inputField">
            <p>Nome do Produto</p>
            <input
              type="text"
              value={product_name}
              onChange={(e) => setProduct_name(e.target.value)}
            />
          </div>
          <div className="inputField">
            <p>Informação do Produto</p>
            <input
              type="text"
              value={product_info}
              onChange={(e) => setProduct_info(e.target.value)}
            />
          </div>
        </div>
        <div className="upperBottomLine">
          <div className="inputField">
            <p>Categoria do Produto</p>
            <input
              type="text"
              value={product_category}
              onChange={(e) => setProduct_category(e.target.value)}
            />
          </div>
          <div className="inputField">
            <p>Imagem do Produto</p>
            <input
              type="text"
              value={product_image}
              onChange={(e) => setProduct_image(e.target.value)}
            />
          </div>
        </div>
        <br />
        <button className="create">Criar Produto</button>
        {message ?
          <span>Produto criado com sucesso!</span>
          : null}
      </form>
    </CreateProductArea>
  );
};

export default InputProduct;
