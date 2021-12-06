import styled from "styled-components";

export const RegistrationArea = styled.div`
  height: calc(100% - var(--navBarHeight));
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  .choiceButtonsArea {
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin: 5px;
    }

    .productButtons {
      margin: 5px;
      span {
        font-weight: bold;
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
      .edit {
        background-color: #f2ea4d;
      }
      .delete {
        background-color: #db674a;
      }
    }
  }
`;
