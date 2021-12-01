import React, { useState } from "react";
import { EditProductArea } from "./styled";

const EditProduct = ({ product }) => {
  const [modal, setModal] = useState(false);
  const [product_name, setProduct_name] = useState(product.product_name);
  const [product_info, setProduct_info] = useState(product.product_info);
  const [product_category, setProduct_category] = useState(
    product.product_category
  );
  const [product_image, setProduct_image] = useState(product.product_image);

  const closeModal = () => {
    setModal(false);
    setProduct_name(product.product_name);
    setProduct_info(product.product_info);
    setProduct_category(product.product_category);
    setProduct_image(product.product_image);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const body = {
        product_name,
        product_info,
        product_category,
        product_image,
      };

      await fetch(
        `https://preco-campeao.herokuapp.com/products/${product.product_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/data";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <EditProductArea>
      <button onClick={() => setModal(true)} id="myBtn">
        Editar
      </button>
      {modal === true ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <h2>Editar Produtos</h2>
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
            <p>Categorias do Produto</p>
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
            <hr />
            <button onClick={(e) => updateProduct(e)} className="edit">
              Editar
            </button>
            <button onClick={closeModal} className="close">
              Fechar
            </button>
          </div>
        </div>
      ) : null}
    </EditProductArea>
  );
};

export default EditProduct;
