import styled from "styled-components";

export const NavButtonArea = styled.div`
  
  a {
    text-decoration: none;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;

  }

  li {
    flex: 1;
    text-align: center;
    
    a {
      color: #000;
      font-size: 14px;
      text-decoration: none;

      &.button {
        background-color: #ff8100;
        border-radius: 4px;
        color: #fff;
        padding: 5px 10px;
      }
    }
  }
`;