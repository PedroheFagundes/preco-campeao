import styled from "styled-components";

export const ProfileArea = styled.div`
  height: calc(100% - var(--navBarHeight));
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Contrail One", sans-serif;
  overflow: auto;

  .linkRedes a div {
    font-size: 15px;
    color: #fff;
  }
  .linkRedes {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .resp-sharing-button__link,
  .resp-sharing-button__icon {
    display: inline-block;
    margin: 4px 4px;
  }

  .resp-sharing-button__link {
    text-decoration: none;
    color: #fff;
  }

  .resp-sharing-button {
    border-radius: 5px;
    transition: 25ms ease-out;
    padding: 7px 9px;
    width: 100%;
  }

  .resp-sharing-button__icon svg {
    width: 1em;
    height: 1em;
    margin-right: 0.4em;
    vertical-align: top;
  }

  .resp-sharing-button--small svg {
    margin: 0;
    vertical-align: middle;
  }

  /* Solid icons get a fill */
  .resp-sharing-button__icon--solid,
  .resp-sharing-button__icon--solidcircle {
    fill: #fff;
    stroke: none;
  }

  .resp-sharing-button--twitter {
    background-color: #55acee;
  }

  .resp-sharing-button--twitter:hover {
    background-color: #2795e9;
  }

  .resp-sharing-button--facebook {
    background-color: #3b5998;
  }

  .resp-sharing-button--facebook:hover {
    background-color: #2d4373;
  }

  .resp-sharing-button--linkedin {
    background-color: #0077b5;
  }

  .resp-sharing-button--linkedin:hover {
    background-color: #046293;
  }

  .resp-sharing-button--email {
    background-color: #777;
  }

  .resp-sharing-button--email:hover {
    background-color: #5e5e5e;
  }

  .resp-sharing-button--whatsapp {
    background-color: #25d366;
  }

  .resp-sharing-button--whatsapp:hover {
    background-color: #1da851;
  }

  .resp-sharing-button--facebook {
    background-color: #3b5998;
    border-color: #3b5998;
  }

  .resp-sharing-button--facebook:hover,
  .resp-sharing-button--facebook:active {
    background-color: #2d4373;
    border-color: #2d4373;
  }

  .resp-sharing-button--twitter {
    background-color: #55acee;
    border-color: #55acee;
  }

  .resp-sharing-button--twitter:hover,
  .resp-sharing-button--twitter:active {
    background-color: #2795e9;
    border-color: #2795e9;
  }

  .resp-sharing-button--email {
    background-color: #777777;
    border-color: #777777;
  }

  .resp-sharing-button--email:hover,
  .resp-sharing-button--email:active {
    background-color: #5e5e5e;
    border-color: #5e5e5e;
  }

  .resp-sharing-button--linkedin {
    background-color: #0077b5;
    border-color: #0077b5;
  }

  .resp-sharing-button--linkedin:hover,
  .resp-sharing-button--linkedin:active {
    background-color: #046293;
    border-color: #046293;
  }

  .resp-sharing-button--whatsapp {
    background-color: #25d366;
    border-color: #25d366;
  }

  .resp-sharing-button--whatsapp:hover,
  .resp-sharing-button--whatsapp:active {
    background-color: #1da851;
    border-color: #1da851;
  }

  .resp-sharing-button--telegram {
    background-color: #54a9eb;
  }

  .resp-sharing-button--telegram:hover {
    background-color: #4b97d1;
  }

  div {
    border-radius: 9px;
    margin: 10px 0px;
  }

  .areaRedes {
    width: 90%;
    background-color: #fff;
    padding: 10px 10px;
    margin: 25px 0px;
    color: #0a4a4a;
    text-align: center;
    font-size: 20px;

    div {
      margin: 0;
      display: flex;
      justify-content: center;
      img {
        height: 35px;
      }
      a.instagram {
        margin-left: 5px;
        text-decoration: none;
        border-radius: 5px;
        font-size: 30px;
        padding: 1px 4px;
        color: #0a4a4a;
      }
    }
    hr {
      margin: 15px 0px;
      width: 90%;
    }
  }

  .areaContato {
    width: 80%;
    background-color: #fff;
    padding: 10px 10px;
    color: #0a4a4a;
    margin: 5px;
    text-align: center;
    font-size: 18px;

    div {
      margin: 0;
      img {
        height: 18px;
      }

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      a.instagram {
        margin-left: 5px;
        text-decoration: none;
        border-radius: 5px;
        font-size: 17px;
        padding: 1px 4px;
        color: #0a4a4a;
      }
    }
  }

  .feedbackForm {
    width: 100%;
    input {
      padding: 4px 4px;
      width: 75%;
      border-radius: 6px;
      margin: 0px 5px 10px 5px;
      &:focus{
        outline: none;
        box-shadow: inset 0px 4px 4px #aaa;
      }
    }
    button {
      background-color: #e95f24;
      border: none;
      padding: 6px;
      border-radius: 6px;
      font-weight: bold;
      color: #fff;
    }
  }

  .feedbackTitle {
    font-size: 23px;
    padding: 0px;
    margin-bottom: 5px;
  }

  .feedbackText {
    font-size: 17px;
    padding: 0px;
    margin: 10px; 
    color: #1d5c66;
  }
`;
