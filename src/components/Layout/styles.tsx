import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100%;
  height: 60px;

  border-bottom: 1px solid ${(props) => props.theme.colors.divider};

  padding: 0 20px;
`;

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  max-width: ${(props) => `${props.theme.breakpoints.xl}px`};

  img {
    max-width: 60px;
  }
`;

const NavBarItemsContainer = styled.div`
  display: flex;
  gap: 20px;

  a:nth-child(2) {
    color: ${(props) => props.theme.colors.error};
  }
`;

const Container = styled.div`
  max-width: ${(props) => `${props.theme.breakpoints.xl}px`};
  margin: 0 auto;
  padding: 0 20px;
`;

export { Container, NavBar, NavBarContainer, NavBarItemsContainer };
