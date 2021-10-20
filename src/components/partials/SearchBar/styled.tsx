import styled from "styled-components";

export const SearchBarArea = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
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
      padding-left 5px;
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
`;