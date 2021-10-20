import styled from "styled-components";

export const ProductInfoShortArea = styled.div`

  width: 90%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 2px 2px #333;
  border-radius: 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  
  div{
    display: flex;
    flex-direction: column;

    span {

    }
  }

  span {
    font-family: 'Contrail One', sans-serif;
    color: #00404a;

    span:first-child,
    span:last-child {
      font-size: 25px;
    }

    span:last-child {
      position: relative;
      bottom: 10px;
    }

    span {
      font-size: 40px;
    }

    
  }

  img {
    border-radius: 7px;
    width: 50px;
  }
`;