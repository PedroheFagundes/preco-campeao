import React, { useState } from "react";

const InputProduct = () => {
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
      await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1>Lista de Produtos</h1>
      <form onSubmit={onSubmitForm}>
        <p>Nome do Produto</p>
        <input
          type="text"
          value={product_name}
          onChange={(e) => setProduct_name(e.target.value)}
        />
        <p>Informação do Produto</p>
        <input
          type="text"
          value={product_info}
          onChange={(e) => setProduct_info(e.target.value)}
        />
        <p>Categoria do Produto</p>
        <input
          type="text"
          value={product_category}
          onChange={(e) => setProduct_category(e.target.value)}
        />
        <p>Imagem do Produto</p>
        <input
          type="text"
          value={product_image}
          onChange={(e) => setProduct_image(e.target.value)}
        />
        <br />
        <button>Criar Produto</button>
      </form>
    </>
  );
};

export default InputProduct;
