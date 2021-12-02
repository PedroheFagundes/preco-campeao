import { useEffect, useState } from "react";
import EditProductModal from "../EditProductModal";

const EditProduct = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://preco-campeao.herokuapp.com/products"
      );
      const jsonData = await response.json();

      setProducts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <>
      <h3>Lista de Produtos</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Info</th>
            <th>Categoria</th>
            <th>Imagem</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_name}</td>
              <td>{product.product_info}</td>
              <td>{product.product_category}</td>
              <td>{product.product_image}</td>
              <td>
                <EditProductModal product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EditProduct;
