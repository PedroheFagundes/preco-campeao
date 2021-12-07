import React, { useState } from "react";
import { EditItemModalArea } from "./styled";

const EditItemModal = ({ item }) => {
  const [modal, setModal] = useState(false);
  const [market_name, setMarket_name] = useState(item.market_name);
  const [product_name, setProduct_name] = useState(item.product_name);
  const [item_price, setItem_price] = useState(item.item_price);
  const [item_start_date, setItem_start_date] = useState(
    item.item_start_date
  ); const [item_expire_date, setItem_expire_date] = useState(
    item.item_expire_date
  );

  const closeModal = () => {
    setModal(false);
    setMarket_name(item.market_name);
    setProduct_name(item.product_name);
    setItem_price(item.item_price);
    setItem_start_date(item.item_start_date);
    setItem_expire_date(item.item_expire_date);
  };

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const body = {
        market_name,
        product_name,
        item_price,
        item_start_date,
        item_expire_date,
      };

      await fetch(
        `https://preco-campeao.herokuapp.com/itemsnovafriburgo/${item.item_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      setModal(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <EditItemModalArea>
      <button onClick={() => setModal(true)} id="myBtn">
        Editar
      </button>
      {modal === true ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
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
                <p>Preço do Item</p>
                <input
                  type="number"
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
                  value={new Date(item_start_date).toISOString().substring(0, 10)}
                  onChange={(e) => setItem_start_date(e.target.value)}
                />
              </div>
              <div className="inputField">
                <p>Fim da Promoção</p>
                <input
                  type="date"
                  value={new Date(item_expire_date).toISOString().substring(0, 10)}
                  onChange={(e) => setItem_expire_date(e.target.value)}
                />
              </div>
            </div>
            <div className="buttons">
              <button onClick={(e) => updateItem(e)} className="edit">
                Editar
              </button>
              <button onClick={closeModal} className="close">
                Fechar
              </button>
            </div>
          </div>
        </div>
      ) : null
      }
    </EditItemModalArea >
  );
};

export default EditItemModal;
