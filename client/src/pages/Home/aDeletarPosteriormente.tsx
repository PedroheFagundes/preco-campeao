import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { navBarTheme } from "../../components/Themes";
import { HomeArea } from "./styled";

const Page = () => {
  const [products, setProducts] = useState([]);
  // Variable used to make product filter comparing to productJSON
  const [searchTerm, setSearchTerm] = useState("");

  // Boolean to show and hide moreInfo panel
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Defines which product is open showing moreInfo, Product "0" means none of the products are open
  const [eventID, setEventID] = useState("0");

  // Prepare the array of arrays to be sorted
  function Comparator(a: any[], b: any[]) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  }
  // Variable to stock the market name conversion to market logo name
  let marketLogo: string;

  // Variable that sets which NavBar page is open and set the theme
  const [theme, setThemes] = useState(navBarTheme["homeActive"]);

  // Reads all products from productsJSON and filters it while user is typing
  const productFilter = products.filter((val: any) => {
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
        "https://preco-campeao.herokuapp.com/activeitems"
      );
      const jsonData = await response.json();

      setProducts(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const todayDate = new Date().setHours(0, 0, 0, 0);

  // All the logic behind showing products
  const productShow = productFilter.map((val: any, key) => {



    /*   
    
    DESNECESSÁRIO AGORACOM O BACK END
      
    // If there is not any sale of a product, it doesn't even show the white card that contains the product
        // This if statement can be upgraded
        if (
          new Date(val.price[0][2]).setHours(0, 0, 0, 0) < todayDate &&
          new Date(val.price[1][2]).setHours(0, 0, 0, 0) < todayDate &&
          new Date(val.price[2][2]).setHours(0, 0, 0, 0) < todayDate &&
          new Date(val.price[3][2]).setHours(0, 0, 0, 0) < todayDate &&
          new Date(val.price[4][2]).setHours(0, 0, 0, 0) < todayDate &&
          new Date(val.price[5][2]).setHours(0, 0, 0, 0) < todayDate &&
          new Date(val.price[6][2]).setHours(0, 0, 0, 0) < todayDate &&
          new Date(val.price[7][2]).setHours(0, 0, 0, 0) < todayDate &&
          new Date(val.price[8][2]).setHours(0, 0, 0, 0) < todayDate &&
          new Date(val.price[9][2]).setHours(0, 0, 0, 0) < todayDate
        ) {
          return null;
        } */

    console.log("here");


    /* 
    // Sort the val array ordered by cheapiest price
    let cheapPrice = val.price.sort(Comparator);
    // While the cheapiest price product has a expired date, removes it from the array
    while (new Date(cheapPrice[0][2]).setHours(0, 0, 0, 0) < todayDate) {
      cheapPrice.shift();
    }

    // Format the date to dd/mm
    let dateFormated = new Date(cheapPrice[0][2])
      .toLocaleDateString("pt-BR")
      .substring(0, 5);

    // Split the price in to integer and the decimal part
    let priceFormated = cheapPrice[0][0].toString().split(".");

    // Format the weekday to Brazil type
    let weekDay = new Date(cheapPrice[0][2])
      .toLocaleDateString("pt-BR", { weekday: "long" })
      .toUpperCase();

    // Format the weekday to a better fit type
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

    // Associate the market logo to the market name
    if (marketFormated === "Atacadão") {
      marketLogo = "atacadao";
    } else if (marketFormated === "Big Blue") {
      marketLogo = "bigblue";
    } else if (marketFormated === "Bramil") {
      marketLogo = "bramil";
    } else if (marketFormated === "Casa Friburgo") {
      marketLogo = "casafriburgo";
    } else if (marketFormated === "Cavalo Preto") {
      marketLogo = "cavalopreto";
    } else if (marketFormated === "Gama") {
      marketLogo = "gama";
    } else if (marketFormated === "Pepê & Gabriel") {
      marketLogo = "pepe&gabriel";
    } else if (marketFormated === "R&E Mercado") {
      marketLogo = "r&emercado";
    } else if (marketFormated === "Serra Azul") {
      marketLogo = "serraazul";
    } else if (marketFormated === "Tio Dongo") {
      marketLogo = "tiodongo";
    }

    // Shows down arrow if the product is 'closed' and hide it i the product is 'open
    const toggleDownArrow =
      parseInt(eventID) === val.id ? null : (
        <div className="down-arrow">
          <img src={"/images/navbar/down-arrow.png"} alt="" />
        </div>
      );

    // Shows the product 'closed'
    const productsClosed = (
      <div className="noSelect productsClosedInfo">
        <img src={`/images/products/${val.image}.png`} alt="" />
        <div>
          <span>{val.name}</span>
          <span>{val.info}</span>
        </div>
        <span className="price">
          <span>R$</span>
          <span>{priceFormated[0]}</span>
          <span>
            ,
            {priceFormated[1].length === 1
              ? priceFormated[1] + 0
              : priceFormated[1]}
          </span>
        </span>
      </div>
    );

    return (
      // Template contains all product cards
      <div
        className="template"
        id={`${val.id}`}
        key={key}
        // Open/close the product card
        onClick={(e) => {
          if (eventID === e.currentTarget.id) {
            setEventID("0");
          } else {
            setEventID(e.currentTarget.id);
          }
          setShowMoreInfo(!showMoreInfo);
        }}
      >
        <div className="template-inner">
          {productsClosed}
          {toggleDownArrow}
          {parseInt(eventID) === val.id ? (
            <div className="productsInfoLong">
              <hr />
              <div>
                <div className="market">
                  <img src={`/images/markets/${marketLogo}-logo.png`} alt="" />
                  <span className="box">{marketFormated}</span>
                </div>
                <div className="expireDate">
                  <span>promoção até</span>
                  <span>{weekDay}</span>
                  <span>{dateFormated}</span>
                </div>
              </div>
              <div className="down-arrow">
                <img src={"/images/navbar/up-arrow.png"} alt="" />
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
              } else if (cheapPrice[1] === "Bramil") {
                moreInfoMarketLogo = "bramil";
              } else if (cheapPrice[1] === "Casa Friburgo") {
                moreInfoMarketLogo = "casafriburgo";
              } else if (cheapPrice[1] === "Cavalo Preto") {
                moreInfoMarketLogo = "cavalopreto";
              } else if (cheapPrice[1] === "Gama") {
                moreInfoMarketLogo = "gama";
              } else if (cheapPrice[1] === "Pepê & Gabriel") {
                moreInfoMarketLogo = "pepe&gabriel";
              } else if (cheapPrice[1] === "R&E Mercado") {
                moreInfoMarketLogo = "r&emercado";
              } else if (cheapPrice[1] === "Serra Azul") {
                moreInfoMarketLogo = "serraazul";
              } else if (cheapPrice[1] === "Tio Dongo") {
                moreInfoMarketLogo = "tiodongo";
              }

              let priceFormated = cheapPrice[0].toString().split(".");

              return (
                <div className="moreInfo" key={key}>
                  {key === 0 ? null : new Date(cheapPrice[2]).getTime() >=
                    new Date().setHours(0, 0, 0, 0) ? (
                    <div>
                      <img
                        src={`/images/markets/${moreInfoMarketLogo}-logo.png`}
                        alt=""
                      />
                      <span className="moreInfoSpan1">{cheapPrice[1]}</span>
                      <div className="moreInfoSpan2">
                        <span>até dia</span>
                        <span>{moreInfoDate}</span>
                      </div>
                      <span className="moreInfoPrice moreInfoSpan3">
                        <span>R$</span>
                        <span>{priceFormated[0]}</span>
                        <span>
                          ,
                          {priceFormated[1].length === 1
                            ? priceFormated[1] + 0
                            : priceFormated[1]}
                        </span>
                      </span>
                    </div>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    ); */
  });

  return (
    <ThemeProvider theme={theme}>
      <HomeArea>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Pesquisar promoções..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <Link
            onClick={() => setThemes(navBarTheme["profileActive"])}
            to="/profile"
          >
            <img src="/images/share.png" loading="lazy" alt="" />
          </Link>
        </div>
        <div className="productShowArea">
          {productShow}
          <div className="endMessage">
            <img src="/images/logo.png" loading="lazy" alt="" />
            <span>
              MAIS PRODUTOS
              <br />
              EM BREVE
            </span>
          </div>
        </div>
      </HomeArea>
    </ThemeProvider>
  );
};

export default Page;
