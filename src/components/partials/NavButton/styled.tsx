import styled from "styled-components";
export const NavButtonArea = styled.div`

  img {
    margin-bottom: -5px;
  }

  .homeImg {
    opacity: ${({ theme }) => theme.homeOpacity}%;
    height: ${({ theme }) => theme.homeHeight}px;
  }

  .pricesChangeImg {
    opacity: ${({ theme }) => theme.pricesChangeOpacity}%;
    height: ${({ theme }) => theme.pricesChangeHeight}px;
  }

  .superDealsImg {
    opacity: ${({ theme }) => theme.superDealsOpacity}%;
    height: ${({ theme }) => theme.superDealsHeight}px;
  }

  .simulationImg {
    opacity: ${({ theme }) => theme.simulationOpacity}%;
    height: ${({ theme }) => theme.simulationHeight}px;
  }

  .profileImg {
    opacity: ${({ theme }) => theme.profileOpacity}%;
    height: ${({ theme }) => theme.profileHeight}px;
  }
  
  a {
    text-decoration: none;
  }

  .buttonImages {
    display: flex;
    flex-direction: row;
    align-items: end;
  }

  .arrow {
    width: 8px;
    height: 8px;
    margin: 0px 10px;
    filter: invert(77%);
  }

  ul, li {
    height: var(--navBarHeight);
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    background-color: #60718c;
    box-shadow: inset 0px 5px 5px #839bbf;
  }

  li {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #839bbf;
    justify-content: flex-end;
    border-left: 1px solid #3d4859;
    flex: 1;

    span {
      color: #fff;
      text-shadow: 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }

    .homeSpan {
      display: ${({ theme }) => theme.homeSpanDisplay};
    }

    a {
      color: #000;
      font-size: 14px;
      text-decoration: none;
    }
  }

  li:first-child {
    border-left: none;
  }

  li:last-child {
    border-right: none;
  }
`;