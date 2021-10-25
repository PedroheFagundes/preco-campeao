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
`;