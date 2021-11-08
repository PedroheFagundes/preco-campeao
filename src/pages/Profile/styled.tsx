import styled from "styled-components";

export const ProfileArea = styled.div`
  height: calc(100% - var(--navBarHeight));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Contrail One", sans-serif;

  div {
    border-radius: 9px;
    margin: 10px 0px;
  }
  .areaPix {
    width: 90%;
    background-color: #e95f24;
    padding: 10px 10px;
    color: #fff;
    text-align: center;
    font-size: 22px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: #fff;
      padding: 10px 10px;
      color: #0a4a4a;

      img {
        width: 100px;
        margin-bottom: 10px;
      }

      a {
        text-decoration: none;
        background-color: #e95f24;
        border-radius: 5px;
        padding: 1px 4px;
        color: #fff;
      }

      hr {
        width: 90%;
      }
    }
  }

  .areaRedes {
    width: 90%;
    height: 180px;
    background-color: #fff;
    padding: 10px 10px;
    color: #0a4a4a;
    text-align: center;
    font-size: 22px;
  }

  .areaContato {
    width: 80%;
    height: 120px;
    background-color: #0a4a4a;
  }
`;
