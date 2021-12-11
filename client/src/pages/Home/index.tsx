import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { navBarTheme } from "../../components/Themes";
import { HomeArea } from "./styled";

const Page = () => {
  const [products, setProducts] = useState([]);

  // Variable used to make product filter
  const [searchTerm, setSearchTerm] = useState("");

  // Boolean to show and hide moreInfo panel
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Defines which product is open showing moreInfo, Product "0" means none of the products are open
  const [eventID, setEventID] = useState("0");

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

  // All the logic behind showing products
  const productShow = productFilter.map((val: any, key: number, items: any) => {
    let previousItem = items[key - 1];
    const currentItem = items[key];
    let nextItem = items[key + 1];

    if (previousItem === undefined) {
      previousItem = {};
    }

    if (nextItem === undefined) {
      nextItem = { market_name: "" };
    }

    console.log(previousItem);
    console.log(currentItem);
    console.log(nextItem, "fim");

    let marketLogo: string = val.market_name
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/\s+/g, "")
      .toLowerCase();

    // Shows down arrow if the product is 'closed' and hide it i the product is 'open
    const toggleDownArrow =
      parseInt(eventID) === val.item_id ? null : (
        <div className="down-arrow">
          <img src={"/images/navbar/down-arrow.png"} alt="" />
        </div>
      );

    // Shows the product 'closed'
    const productsClosed = (
      <div className="noSelect productsClosedInfo">
        <img src={`/images/products/${val.product_image}.png`} alt="" />
        <div>
          <span>{val.product_name}</span>
          <span>{val.product_info}</span>
        </div>
        <span className="price">
          <span>R$</span>
          <span>{priceFormated[0]}</span>
          <span>,{priceFormated[1]}</span>
        </span>
      </div>
    );

    return (
      // Template contains all product cards
      <div
        className="template"
        id={`${val.item_id}`}
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
          {parseInt(eventID) === val.item_id ? (
            <div className="productsInfoLong">
              <hr />
              <div>
                <div className="market">
                  <img src={`/images/markets/${marketLogo}-logo.png`} alt="" />
                  <span className="box">{val.market_name}</span>
                </div>
                <div className="expireDate">
                  <span>promoção até</span>
                  <span>{weekExpireDay}</span>
                  <span>{expireDate}</span>
                </div>
              </div>
              <div className="down-arrow">
                <img src={"/images/navbar/up-arrow.png"} alt="" />
              </div>
            </div>
          ) : null}
        </div>
        {nextItem.product_id === currentItem.product_id ? (
          <div className="moreInfo" key={nextItem.key}>
            <div>
              <img src={`/images/markets/${nextItemMarketLogo}-logo.png`} alt="" />
              <span className="moreInfoSpan1">{nextItem.market_name}</span>
              <div className="moreInfoSpan2">
                <span>até dia</span>
                <span>{nextItemExpireDate}</span>
              </div>
              <span className="moreInfoPrice moreInfoSpan3">
                <span>R$</span>
                <span>{priceFormated[0]}</span>
                <span>,{priceFormated[1]}</span>
              </span>
            </div>
          </div>
        ) : null}
      </div>
    );
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
            <img src="/images/share.png" alt="" />
          </Link>
        </div>
        <div className="productShowArea">
          {productShow}
          <div className="endMessage">
            <img src="/images/logo.png" alt="" />
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
