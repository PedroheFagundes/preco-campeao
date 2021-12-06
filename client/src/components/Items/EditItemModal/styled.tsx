import styled from "styled-components";

export const EditItemModalArea = styled.div`
  /* The Modal (background) */
  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 3% auto;  15% from the top and centered */
    padding: 20px;
    border-radius: 5px;
    isplay: flex;
    flex-direction: column;
    width: 850px;
  }

  /* The Close Button */
  .close {
    margin: 15px;

    color: #fff;
    font-size: 18px;
    font-weight: bold;
    background-color: #3f4a5c;
  }

  /*Edit Button*/
  .edit {
    margin: 15px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    background-color: #72c96a;
  }

  .edit:hover,
  .edit:focus,
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .upperBottomLine {
    display: flex;
    margin: 0;
    width: 850px;
  }
  .upperBottomLine:first-child {
    margin-top: 10px;
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

  .buttons {
    width: 100%;
    display: flex;
    justify-content: end;
  }
`;
