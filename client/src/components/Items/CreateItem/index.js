import React, { useEffect, useState } from "react";
import { CreateItemArea } from "./styled";

const InputProduct = () => {
  const [message, setMessage] = useState(true);
  const [products, setProducts] = useState([]);
  const [market_name, setMarket_name] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [item_price, setItem_price] = useState("");
  const [item_start_date, setItem_start_date] = useState("");
  const [item_expire_date, setItem_expire_date] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        market_name,
        product_name,
        item_price,
        item_start_date,
        item_expire_date,
      };
      await fetch("https://preco-campeao.herokuapp.com/itemsnovafriburgo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setMarket_name("");
      setProduct_name("");
      setItem_price("");
      setItem_start_date("");
      setItem_expire_date("");
      setTimeout(() => { setMessage(false) }, 2000);
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

  const allProductNames = products.map(name => name.product_name);

  return (
    <CreateItemArea>
      <h3>Criar Item</h3>
      <form onSubmit={onSubmitForm}>
        <div className="upperBottomLine">
          <div className="inputField">
            <p>Nome do Produto</p>
            <input
              type="text"
              value={product_name}
              maxLength="17"
              onChange={(e) => setProduct_name(e.target.value)}
            />
          </div>
          <div className="inputField">
            {
              allProductNames.includes(product_name)
                ? <span className="registered">Produto já cadastrado! :)</span>
                : <span className="notRegistered">Produto não cadastrado. É preciso cadastrar!</span>
            }
          </div>
        </div>
        <div className="upperBottomLine">
          <div className="inputField">
            <p>Nome do Mercado</p>
            <input
              type="text"
              value={market_name}
              onChange={(e) => setMarket_name(e.target.value)}
            />
          </div>
          <div className="inputField">
            <p>Preço do Produto</p>
            <input
              type="number"
              step="0.01"
              value={item_price}
              onChange={(e) => setItem_price(e.target.value)}
            />
          </div>
        </div>
        <div className="upperBottomLine">
          <div className="inputField">
            <p>Início da Promoção</p>
            <input
              type="date"
              value={item_start_date}
              onChange={(e) => setItem_start_date(e.target.value)}
            />
          </div>
          <div className="inputField">
            <p>Fim da Promoção</p>
            <input
              type="date"
              value={item_expire_date}
              onChange={(e) => setItem_expire_date(e.target.value)}
            />
          </div>
        </div>
        <br />
        <button className="create">Criar Item</button>
        {message ?
          <span>Item criado com sucesso!</span>
          : null}
      </form>
    </CreateItemArea>
  );
};

export default InputProduct;
