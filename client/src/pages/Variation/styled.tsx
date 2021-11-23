import styled from "styled-components";

export const VariationArea = styled.div`
  height: calc(100% - var(--navBarHeight));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
  }

  span {
    text-align: center;
    font-family: "Contrail One", sans-serif;
    margin-top: 30px;
    font-size: 50px;
    color: #860909;
    text-shadow: 2px 2px 0 #000;
  }
`;
