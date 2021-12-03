import styled from "styled-components";

export const EditProductArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
  margin-top: 15px;

  h3 {
    margin: 5px;
  }
  button {
    width: 80px;
    padding: 5px 8px;
    margin-left: 10px;
    border-radius: 5px;
    font-weight: bold;
    background-color: #f2ea4d;
  }

  input {
    margin-left: 5px;
    height: 20px;
  }
  table {
    margin: 10px 0px;
  }
  th, td {
    width: 220px;
  }
  th {
    background-color: #ccc;
  }
  td{
    background-color: #eee;
    padding-left: 5px;
  }
  td:last-child {
    background-color: #fff;
    width: 50px;
  }
`;
