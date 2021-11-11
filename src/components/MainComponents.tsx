import styled from "styled-components";
// import bgPan from "../helpers/pageChangeHandler";

export const Template = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const PageTitle = styled.h1`
  font-size: 27px;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
  margin: 10px 0;
  background-color: #ffcaca;
  color: #000;
  border: 2px solid #ff0000;
  padding: 10px;
`;
