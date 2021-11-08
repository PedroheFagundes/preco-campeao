import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../productsJSON";
import { HomeArea } from "./styled";

const Page = () => {
  // Variable used to make product filter comparing to productJSON
  const [searchTerm, setSearchTerm] = useState("");

  // Boolean to show and hide moreInfo panel
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Define qual produto está com moreInfo está aberto, inicia com o produto 1 aberto
  const [eventID, setEventID] = useState("1");

  // Prepare the array of arrays to be sorted
  function Comparator(a: any[], b: any[]) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  }
  // Variable to stock the market name conversion to market logo name
  let marketLogo: string;

  return (
    <HomeArea>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Pesquisar promoções..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Link to="/profile">
          <img src="/images/share.png" alt="" />
        </Link>
      </div>
      <div className="productInfoShortArea">
        {products
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.category[0]
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              val.category[1]
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              val.info.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            if (
              val.price[0][3] === "Expirado" &&
              val.price[1][3] === "Expirado" &&
              val.price[2][3] === "Expirado"
            ) {
              return null;
            }

            let cheapPrice = val.price.sort(Comparator);
            while (cheapPrice[0][3] === "Expirado") {
              cheapPrice.shift();
            }

            let dateFormated = new Date(cheapPrice[0][2])
              .toLocaleDateString("pt-BR")
              .substring(0, 5);
            let priceFormated = cheapPrice[0][0].toString().split(".");
            let weekDay = new Date(cheapPrice[0][2])
              .toLocaleDateString("pt-BR", { weekday: "long" })
              .toUpperCase();
            switch (weekDay) {
              case "SEGUNDA-FEIRA":
                weekDay = "SEGUNDA";
                break;
              case "TERÇA-FEIRA":
                weekDay = "TERÇA";
                break;
              case "QUARTA-FEIRA":
                weekDay = "QUARTA";
                break;
              case "QUINTA-FEIRA":
                weekDay = "QUINTA";
                break;
              case "SEXTA-FEIRA":
                weekDay = "SEXTA";
                break;
              default:
                break;
            }

            let marketFormated = cheapPrice[0][1].toString();
            if (marketFormated === "Atacadão") {
              marketLogo = "atacadao";
            } else if (marketFormated === "Big Blue") {
              marketLogo = "bigblue";
            } else if (marketFormated === "Serra Azul") {
              marketLogo = "serraazul";
            } else if (marketFormated === "Pepê & Gabriel") {
              marketLogo = "pepe&gabriel";
            }

            return (
              <div
                className="template"
                id={`${val.id}`}
                key={key}
                onClick={(e) => {
                  setEventID(e.currentTarget.id);
                  setShowMoreInfo(!showMoreInfo);
                }}
              >
                <div className="template-inner">
                  <div className="noSelect productsInfoShort">
                    <img src={`/images/products/${val.image}`} alt="" />
                    <div>
                      <span>{val.name}</span>
                      <span>{val.info}</span>
                    </div>
                    <span className="price">
                      <span>R$</span>
                      <span>{priceFormated[0]}</span>
                      <span>,{priceFormated[1]}</span>
                    </span>
                  </div>
                  {parseInt(eventID) === val.id ? (
                    <div className="productsInfoLong">
                      <hr />
                      <div>
                        <div className="market">
                          <img
                            src={`/images/markets/${marketLogo}-logo.png`}
                            alt=""
                          />
                          <span className="box">{marketFormated}</span>
                        </div>
                        <div className="expireDate">
                          <span>promoção até</span>
                          <span>{weekDay}</span>
                          <span>{dateFormated}</span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                {parseInt(eventID) === val.id
                  ? cheapPrice.map((cheapPrice, key) => {
                      let moreInfoDate = new Date(cheapPrice[2])
                        .toLocaleDateString("pt-BR")
                        .substring(0, 5);

                      let moreInfoMarketLogo: string = "";

                      if (cheapPrice[1] === "Atacadão") {
                        moreInfoMarketLogo = "atacadao";
                      } else if (cheapPrice[1] === "Big Blue") {
                        moreInfoMarketLogo = "bigblue";
                      } else if (cheapPrice[1] === "Serra Azul") {
                        moreInfoMarketLogo = "serraazul";
                      } else if (cheapPrice[1] === "Pepê & Gabriel") {
                        moreInfoMarketLogo = "pepe&gabriel";
                      }

                      let priceFormated = cheapPrice[0].toString().split(".");

                      return (
                        <div className="moreInfo" key={key}>
                          {key === 0 ? null : new Date(
                              cheapPrice[2]
                            ).getTime() > new Date().getTime() ? (
                            <div>
                              <img
                                src={`/images/markets/${moreInfoMarketLogo}-logo.png`}
                                alt=""
                              />
                              <span className="moreInfoSpan1">
                                {cheapPrice[1]}
                              </span>
                              <span className="moreInfoSpan2">
                                {moreInfoDate}
                              </span>
                              <span className="moreInfoPrice moreInfoSpan3">
                                <span>R$</span>
                                <span>{priceFormated[0]}</span>
                                <span>,{priceFormated[1]}</span>
                              </span>
                            </div>
                          ) : null}
                        </div>
                      );
                    })
                  : null}
              </div>
            );
          })}
      </div>
    </HomeArea>
  );
};

export default Page;
