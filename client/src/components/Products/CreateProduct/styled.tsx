import styled from "styled-components";

export const CreateProductArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 9px;
  padding: 15px;
  margin-top: 15px;

  h3 {
    margin: 5px;
  }
  button {
    width: 200px;
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
    flex-direction: column;
    align-items: center;
  }

  .upperBottomLine {
    display: flex;
    margin: 0;
    width: 850px;
  }

  .inputField {
    display: flex;
    background-color: #ddd;
    padding: 3px 5px;
    border-radius: 3px;
    justify-content: space-between;
    width: 50%;
    display: flex;
    margin: 5px 15px;
    font-weight: bold;
    align-items: center;

    input {
      margin-left: 5px;
      height: 20px;
    }

    p {
      margin: 0;
    }
  }
`;
