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
    background-color: #748a8e;
    box-shadow: inset 0px 5px 5px #9cbabf;
  }

  li {
    border-right: 0.5px solid #9cbabf;
    border-left: 0.5px solid #495759;
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