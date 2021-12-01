import styled from "styled-components";

export const EditProductArea = styled.div`
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
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
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
`;
