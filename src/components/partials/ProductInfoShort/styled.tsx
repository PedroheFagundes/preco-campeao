import styled from "styled-components";

export const ProductInfoShortArea = styled.div`

  width: 90%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 2px 2px #333;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-bottom: 20px;
  
  div{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-itens: center;
    height: 43px;

    span {
      font-size: 25px;
      line-height: 100%;
    }

    span:last-child {
      font-size: 18px;
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
    width: 50px;
    margin: 0px 5px;
  }
`;