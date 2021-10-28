import styled from "styled-components";

export const HomeArea = styled.div`
  height: calc(100% - var(--navBarHeight));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;

  .productInfoShortArea{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .template {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #00404a;
    border-radius: 7px;
    margin-bottom: 15px;
    box-shadow: 0px 2px 2px #333;

    * {
      pointer-events: none;
    }
  }

  .template-inner {
    width: 100%;
    background-color: #fff;
    border-radius: 7px;
    margin: 0;
  }

  .productsInfoShort {
    width: 100%;
    height: 70px;
    background-color: #fff;
    border-radius: 7px;
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
      }
    }

    span {
      height: 55px;
      font-family: 'Contrail One', sans-serif;
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
    
    img {
      border-radius: 7px;
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
    margin-bottom: 50px;

    input {
      padding-left: 10px;
      height: 38px;
      width: 90%;
      margin: 15px 0px;
      border-radius: 7px;
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
    width: 100%;
    color: #fff;
  }

  .productsInfoLong {
    width: 100%;
    color:#00404A;

    hr {
      width: 90%;
      border-top: 2px solid #00404A;
    }
  }
`;