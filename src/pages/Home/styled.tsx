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

  .productsInfoShort {
    width: 90%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0px 2px 2px #333;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin-bottom: 15px;
    
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
`;