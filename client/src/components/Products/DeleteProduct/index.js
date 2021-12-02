import { useEffect, useState } from "react";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = async (product_id) => {
    try {
      await fetch(
        `https://preco-campeao.herokuapp.com/products/${product_id}`,
        {
          method: "DELETE",
        }
      );

      setProducts(
        products.filter((product) => product.product_id !== product_id)
      );
    } catch (err) {
      console.error(err.message);
    }
  };

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
  }, []);

  return (
    <>
      <h1>Lista de Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Info</th>
            <th>Categoria</th>
            <th>Imagem</th>
            <th> Deletar</th>
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
                <button onClick={() => deleteProduct(product.product_id)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DeleteProduct;
