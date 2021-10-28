import { useState } from "react";
import products from "../../productsJSON";
import { HomeArea } from './styled';

const Page = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [eventID, setEventID] = useState('1');

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

          const cheapPrice = Object.fromEntries(
            Object.entries(val.price1).sort(([,a],[,b]) => a-b)
          );
                  
          let priceFormated = Object.entries(cheapPrice)[0][1].toString(10).split('.');
          
          return (
            <div
              className="template"
              id={`${val.id}`}
              key={key}
              onClick={(e) => {
                setEventID(e.currentTarget.id)
                setShowMoreInfo(!showMoreInfo)
              }}
            >
              <div className="template-inner">
                <div className="noSelect productsInfoShort" >
                  <img src={`/images/products/${val.image}.png`} alt=""/>
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
                    ? <div className="productsInfoLong">fundo branco</div>
                    : null
                  }
              </div>
              {
                    parseInt(eventID) === val.id
                    ? <div className="moreInfo">teste</div>
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