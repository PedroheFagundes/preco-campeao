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
      height: 50px;

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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;

    input {
      padding-left: 10px;
      height: 38px;
      width: 90%;
      margin: 15px 0px;
      border-radius: 9px;
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

    img {
      height 22px;
      float: right;
      margin-left: 77%;
      margin-top: -45px;
      position: relative;
      z-index: 2;
      opacity: 70%;
      transform: scaleX(-1);
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
        width 20%;
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
    margin-bottom: 10px;

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
      font-size: 30px;
    }

    span:last-child {
      vertical-align: top;
      margin-right: 10px;
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
`;
