import styled from "styled-components";
export const NavButtonArea = styled.div`

  img {
    margin-bottom: -5px;
  }

  .homeImg {
    opacity: ${({ theme }) => theme.homeOpacity}%;
    height: ${({ theme }) => theme.homeHeight}px;
    margin-left: ${({ theme }) => theme.homeLeftMargin}px;
  }

  .variationImg {
    opacity: ${({ theme }) => theme.variationOpacity}%;
    height: ${({ theme }) => theme.variationHeight}px;
  }

  .dealsImg {
    opacity: ${({ theme }) => theme.dealsOpacity}%;
    height: ${({ theme }) => theme.dealsHeight}px;
  }

  .simulationImg {
    opacity: ${({ theme }) => theme.simulationOpacity}%;
    height: ${({ theme }) => theme.simulationHeight}px;
  }

  .profileImg {
    opacity: ${({ theme }) => theme.profileOpacity}%;
    height: ${({ theme }) => theme.profileHeight}px;
    margin-right: ${({ theme }) => theme.profileRightMargin}px;
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

  .homeImg.arrow {
    display: ${({ theme }) => theme.homeDisplay};
  }

  .variationImg.arrow {
    display: ${({ theme }) => theme.variationDisplay};
  }

  .dealsImg.arrow {
    display: ${({ theme }) => theme.dealsDisplay};
  }

  .simulationImg.arrow {
    display: ${({ theme }) => theme.simulationDisplay};
  }

  .profileImg.arrow {
    display: ${({ theme }) => theme.profileDisplay};
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
    background-color: #3f4a5c;
    box-shadow: inset 0px 5px 5px #839bbf;
  }

  li {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #839bbf;
    border-left: 1px solid #1b2737;
    flex: 1;

    span {
      color: #fff;
      text-shadow: 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }

    .homeSpan {
      display: ${({ theme }) => theme.homeDisplay};
    }

    .variationSpan {
      display: ${({ theme }) => theme.variationDisplay};
    }

    .dealsSpan {
      display: ${({ theme }) => theme.dealsDisplay};
    }

    .simulationSpan {
      display: ${({ theme }) => theme.simulationDisplay};
    }

    .profileSpan {
      display: ${({ theme }) => theme.profileDisplay};
    }

    a {
      color: #000;
      font-size: 14px;
      text-decoration: none;
    }
  }

  .homeLi {
    justify-content: ${({ theme }) => theme.homeLiJustify};
  }

  .variationLi {
    justify-content: ${({ theme }) => theme.variationLiJustify};
    background-color: #51779b;
    box-shadow: inset 0px 5px 5px #839bbf;
  }

  .dealsLi {
    justify-content: ${({ theme }) => theme.dealsLiJustify};
  }

  .simulationLi {
    justify-content: ${({ theme }) => theme.simulationLiJustify};
  }

  .profileLi {
    justify-content: ${({ theme }) => theme.profileLiJustify};
  }

  li:first-child {
    border-left: none;
  }

  li:last-child {
    border-right: none;
  }
`;