import styled from "styled-components";

export const CreateProductArea = styled.div`
  height: calc(100% - var(--navBarHeight));
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  background-color: #fff;
  padding: 15px;
  margin-top: 15px;

  h3 {
    margin: 5px;
  }
  button {
    padding: 5px 8px;
    margin-left: 10px;
    border-radius: 5px;
    font-weight: bold;
  }
  .create {
    background-color: #48bc40;
  }

  form {
    display: flex;
  }
`;
