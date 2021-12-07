import { useEffect, useState } from "react";
import { DeleteItemArea } from "./styled";

const DeleteItem = () => {
  const [items, setItems] = useState([]);

  // Variable used to make item filter 
  const [searchTerm, setSearchTerm] = useState("");

  // Reads all items and filters it while user is typing
  const itemFilter = items.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.market_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    } else {
      return null;
    }
  });

  const formatSqlDate = (sqlDate) => {
    const date = new Date(sqlDate).toGMTString().substring(5, 16);
    const ptBrDate = new Date(date).toLocaleString("pt-BR").substring(0, 10);

    return ptBrDate;
  }

  const deleteItem = async (item_id) => {
    try {
      await fetch(
        `https://preco-campeao.herokuapp.com/itemsnovafriburgo/${item_id}`,
        {
          method: "DELETE",
        }
      );

      setItems(
        items.filter((item) => item.item_id !== item_id)
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const getItems = async () => {
    try {
      const response = await fetch(
        "https://preco-campeao.herokuapp.com/itemsnovafriburgo"
      );
      const jsonData = await response.json();

      setItems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <DeleteItemArea>
      <h3>Deletar Item</h3>
      <input
        type="text"
        placeholder="Pesquisar Item"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Mercado</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Início Promoção</th>
            <th>Fim Promoção</th>
          </tr>
        </thead>
        <tbody>
          {itemFilter.map((item) => (
            <tr key={item.item_id}>
              <td>{item.market_name}</td>
              <td>{item.product_name}</td>
              <td>{item.item_price}</td>
              <td>{formatSqlDate(item.item_start_date)}</td>
              <td>{formatSqlDate(item.item_expire_date)}</td>
              <td>
                <button onClick={() => deleteItem(item.item_id)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DeleteItemArea>
  );
};

export default DeleteItem;
