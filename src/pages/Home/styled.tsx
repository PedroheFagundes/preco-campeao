import styled from "styled-components";

export const HomeArea = styled.div`

  height: calc(100% - var(--navBarHeight));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Contrail One', sans-serif;

  .productInfoShortArea{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }

  .template {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #00404a;
    border-radius: 9px;
    margin-bottom: 15px;
    box-shadow: 0px 2px 2px #333;
    color: #00404a;

    * {
      pointer-events: none;
    }
  }

  .template-inner {
    width: 100%;
    background-color: #fff;
    border-radius: 9px;
    margin: 0;
  }

  .productsInfoShort {
    width: 100%;
    height: 70px;
    background-color: #fff;
    border-radius: 9px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    
    div{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-itens: center;
      height: aut0;

      span {
        font-size: 28px;;
        line-height: 100%;
      }

      span:last-child {
        font-size: 20px;
        color: #1d5c66;
      }
    }
    
    img {
      border-radius: 9px;
      max-height: 60px;
      margin: 0px 5px;
    }
  }

  .searchBar {
    width: 90%;
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 15px 0px;

    img {
      background-color: #E95F24;
      height 38px;
      padding: 6px;
      border-radius: 8px;
    }
  }

    input {
      padding-left: 10px;
      height: 38px;
      width: 86%;
      border-radius: 8px;
      border: none;

      &:focus{
        outline: none;
        box-shadow: inset 0px 4px 4px #777;
      }

      &::placeholder {
        color: #11414f;
        font-size: 18px;
      }
    }
  }
  .moreInfo{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: #fff;

    div {
      display: flex;
      align-items: center;
      width: 95%;
      margin-top: 6px;
      margin-bottom: 4px; 
      font-size: 25px;
      color: #c4c4c4;

      img {
        border-radius: 20%;
        max-height: 40px;
        max-width: 40px;
      }


      .moreInfoSpan1 {
        width 55%;
        font-size: 22px;
        margin-left: 5px;
      }
      .moreInfoSpan2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width 20%;
        margin: 0;
        padding: 0;
        span:first-child {
          font-size: 9px;
          letter-spacing: 2px;
        }
      }
      .moreInfoSpan3 {
        width 30%;
        text-align: right;
      }
    }
  }

  .productsInfoLong {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color:#00404A;

    div {
      width: 90%;
      display: flex;
      justify-content: center;

      .market {
        width: 55%;
      }
      .expireDate {
        width: 45%;
      }
      div {
        display: flex;
        font-size: 28px;
        flex-direction: column;
        align-items: center;

        img {
          border-radius: 9px;
          max-height: 60px;
          max-width: 60px;
        }
      }
    }

    .expireDate span {
      line-height: 100%;
      font-size: 40px;
      color: #4ACE57;
    }
    
    .expireDate span:first-child {
      margin-bottom: 5px;
      font-size: 19px;
      color: #00404A;
    }

    hr {
      background-color: #00404A;
      height: 1px;
      border: 0;
      width: 90%;
      margin-bottom: 5px;
      margin-top 0px;
    }
  }

  .price {
    height: 55px;
    color: #00404a;

    span:first-child,
    span:last-child {
      font-size: 25px;
    }

    span:last-child {
      vertical-align: top;
      margin-right: 10px;
      font-size: 30px;
    }

    span {
      font-size: 55px;
    }
  }

  .moreInfoPrice {

    span:first-child,
    span:last-child {
      font-size: 20px;
    }

    span:last-child {
      vertical-align: top;
    }

    span {
      font-size: 30px;
    }
  }

  .endMessage {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width 300px;
    }
    span {
      text-align: center;
      font-size: 35px;
      color: #fff;
      margin-bottom: 5px;
      text-shadow: 1px 1px 2px black;
    }
  }

  .down-arrow {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    img {
      width: 20px;
      height: 6px;
      opacity: 30%;
    }
  }
`;
