import { useEffect, useState } from "react";
import EditItemModal from "../EditItemModal";
import { EditItemArea } from "./styled";

const EditProduct = () => {
  const [products, setProducts] = useState([]);
  // Variable used to make product filter comparing to productJSON
  const [searchTerm, setSearchTerm] = useState("");

  // Reads all products from productsJSON and filters it while user is typing
  const productFilter = products.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.product_category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.product_info.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    } else {
      return null;
    }
  });

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
    <EditItemArea>
      <h3>Editar Item</h3>
      <input
        type="text"
        placeholder="Pesquisar Produto"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Info</th>
            <th>Categoria</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          {productFilter.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_name}</td>
              <td>{product.product_info}</td>
              <td>{product.product_category}</td>
              <td>{product.product_image}</td>
              <td>
                <EditItemModal product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </EditItemArea>
  );
};

export default EditProduct;
