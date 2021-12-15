import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { navBarTheme } from "../../components/Themes";
import { HomeArea } from "./styled";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [eventID, setEventID] = useState("0");
  const [theme, setThemes] = useState(navBarTheme["homeActive"]);
  const [productsLoaded, setProductsLoaded] = useState(true);

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
    setProductsLoaded(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  let sameProduct: any = [];
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
        <img
          src={`/images/products/${val.product_image}.png`}
          onError={(e) => e.currentTarget.src = '/images/product.png'}
          alt="" />
        <div>
          <span>{val.product_name}</span>
          <span>{val.product_info}</span>
        </div>
        <span className="price">
          <span>R$</span>
          <span>{val.reais}</span>
          <span>,{val.cents}</span>
        </span>
      </div>
    );
    if (nextItem.product_id === currentItem.product_id) {
      sameProduct = [...sameProduct, currentItem];
    }
    if (
      previousItem.product_id === currentItem.product_id &&
      nextItem.product_id !== currentItem.product_id
    ) {
      sameProduct = [...sameProduct, currentItem];
    }
    return (
      <Fragment key={key}>
        {previousItem.product_id === currentItem.product_id &&
          nextItem.product_id !== currentItem.product_id ? (
          <Fragment key={key}>
            <div
              className="template"
              id={`${val.item_id}`}
              key={key}
              // Opens/closes the product card
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
                <div className="noSelect productsClosedInfo">
                  <img
                    src={`/images/products/${sameProduct[0].product_image}.png`}
                    onError={(e) => e.currentTarget.src = '/images/product.png'}
                    alt=""
                  />
                  <div>
                    <span>{sameProduct[0].product_name}</span>
                    <span>{sameProduct[0].product_info}</span>
                  </div>
                  <span className="price">
                    <span>R$</span>
                    <span>{sameProduct[0].reais}</span>
                    <span>,{sameProduct[0].cents}</span>
                  </span>
                </div>
                {toggleDownArrow}
                {parseInt(eventID) === val.item_id ? (
                  <div className="productsInfoLong">
                    <hr />
                    <div>
                      <div className="market">
                        <img
                          src={`/images/markets/${sameProduct[0].market_logo}.png`}
                          alt=""
                        />
                        <span className="box">
                          {sameProduct[0].market_name}
                        </span>
                      </div>
                      <div className="expireDate">
                        <span>promoção até</span>
                        <span>{sameProduct[0].day_name}</span>
                        <span>{sameProduct[0].formated_expire_date}</span>
                      </div>
                    </div>
                    <div className="down-arrow">
                      <img src={"/images/navbar/up-arrow.png"} alt="" />
                    </div>
                  </div>
                ) : null}
              </div>
              <Fragment key={key}>
                {parseInt(eventID) === val.item_id ? (
                  <Fragment key={key}>
                    {sameProduct.slice(1).map((val: any, key: number) => {
                      return (
                        <div className="moreInfo" key={key}>
                          <div>
                            <img
                              src={`/images/markets/${val.market_logo}.png`}
                              alt=""
                            />
                            <span className="moreInfoSpan1">
                              {val.market_name}
                            </span>
                            <div className="moreInfoSpan2">
                              <span>até dia</span>
                              <span>{val.formated_expire_date}</span>
                            </div>
                            <span className="moreInfoPrice moreInfoSpan3">
                              <span>R$</span>
                              <span>{val.reais}</span>
                              <span>,{val.cents}</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </Fragment>
                ) : null}
                {(sameProduct = [])}
              </Fragment>
            </div>
          </Fragment>
        ) : (
          <Fragment key={key}>
            {nextItem.product_id === currentItem.product_id ? null : (
              <div
                className="template"
                id={`${val.item_id}`}
                key={key}
                // Opens/closes the product card
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
                          <img
                            src={`/images/markets/${val.market_logo}.png`}
                            alt=""
                          />
                          <span className="box">{val.market_name}</span>
                        </div>
                        <div className="expireDate">
                          <span>promoção até</span>
                          <span>{val.day_name}</span>
                          <span>{val.formated_expire_date}</span>
                        </div>
                      </div>
                      <div className="down-arrow">
                        <img src={"/images/navbar/up-arrow.png"} alt="" />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </Fragment>
        )}
      </Fragment>
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
            <img src="/images/share.png" loading="lazy" alt="" />
          </Link>
        </div>
        <div className="productShowArea">
          {productShow}
          {productsLoaded
            ? <div className="endMessage">
              <img src="/images/loading-product.png" loading="lazy" alt="" />
              <span>
                CARREGANDO PRODUTOS
              </span>
            </div>
            :
            <div className="endMessage">
              <img src="/images/logo.png" loading="lazy" alt="" />
              <span>
                MAIS PRODUTOS
                <br />
                EM BREVE
              </span>
            </div>}
        </div>
      </HomeArea>
    </ThemeProvider>
  );
};

export default Page;
