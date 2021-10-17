import styled from "styled-components";

export const NavButtonArea = styled.div`

  img {
    height 30px;
  }
  
  a {
    text-decoration: none;
  }

  ul, li {
    height: var(--navBarHeight);
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    background-color: #60718c;
    box-shadow: inset 0px 5px 5px #839bbf;
  }

  li {
    border-right: 1px solid #839bbf;
    border-left: 1px solid #3d4859;
    flex: 1;
    
    a {
      color: #000;
      font-size: 14px;
      text-decoration: none;
    }
  }

  li:first-child {
    border-left: none;
  }

  li:last-child {
    border-right: none;
  }
`;