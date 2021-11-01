import { useState } from "react";
import products from "../../productsJSON";
import { HomeArea } from './styled';

const Page = () => {

  // Variable used to make product filter comparing to productJSON
  const [searchTerm, setSearchTerm] = useState('');

  // Boolean to show and hide moreInfo panel
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Define qual produto está com moreInfo está aberto, inicia com o produto 1 aberto
  const [eventID, setEventID] = useState('1');

  //Temporary time test;
  let time = new Date('10-25-2021');

  let weekDay = time.toLocaleDateString("pt-BR", {weekday: 'long'}).toUpperCase();
  switch (weekDay) {
    case 'SEGUNDA-FEIRA':
      weekDay = 'SEGUNDA';
      break;
  
    default:
      break;
  }

  return (
    <HomeArea>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Pesquisar promoções..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
        }}/>
        <img src="/images/search.png" alt=""/>
      </div>
      <div className="productInfoShortArea">
        {products.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.category[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.category[1].toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.info.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {

          function Comparator(a: any[], b: any[]) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
          }
          let cheapPrice= val.price.sort(Comparator);
                  
          let priceFormated = cheapPrice[0][0].toString().split('.');
          let marketFormated = cheapPrice[0][1].toString();
          let marketLogo;
          if (marketFormated === 'Atacadão') {
            marketLogo = 'atacadao';
          } else
          if (marketFormated === 'Big Blue') {
            marketLogo = 'bigblue';
          } else
          if (marketFormated === 'Serra Azul') {
            marketLogo = 'serraazul';
          }
          
          return (
            <div
              className="template"
              id={`${val.id}`}
              key={key}
              onClick={(e) => {
                setEventID(e.currentTarget.id)
                setShowMoreInfo(!showMoreInfo)
                console.log(cheapPrice)
              }}
            >
              <div className="template-inner">
                <div className="noSelect productsInfoShort" >
                  <img src={`/images/products/${val.image}`} alt=""/>
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
                  {
                    parseInt(eventID) === val.id
                    ? <div className="productsInfoLong">
                        <hr />
                        <div>
                          <div className="market">
                            <img src={`/images/markets/${marketLogo}-logo.png`} alt=""/>
                            <span>{marketFormated}</span>
                          </div>
                          <div className="expireDate">
                            <span>promoção até</span>
                            <span>{weekDay}</span>
                            <span>{val.expireDate}</span>
                          </div>
                        </div>
                      </div>
                    : null
                  }
              </div>
              {
                parseInt(eventID) === val.id
                ? <div className="moreInfo">
                    <div>
                      <img src={"/images/markets/atacadao-logo.png"} alt=""/>
                      <span>Atacadão</span>
                      <span>30/10</span>
                      <span>R$2,19</span>
                    </div>
                    <div>
                      <img src={"/images/markets/serraazul-logo.png"} alt=""/>
                      <span>Serra Azul</span>
                      <span>30/10</span>
                      <span>R$2,39</span>
                    </div>
                  </div>
                : null
              }
            </div>
          )
        },
      )}
      
      </div>
    </HomeArea>
  );
}

export default Page;
