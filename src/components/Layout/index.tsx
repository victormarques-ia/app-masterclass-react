import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import {
  Container,
  NavBar,
  NavBarContainer,
  NavBarItemsContainer,
} from "./styles";

import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const { removeToken } = useContext(AppContext);

  return (
    <>
      <NavBar>
        <NavBarContainer>
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>

          <NavBarItemsContainer>
            <Link to="/my-posts">Meus posts</Link>
            <Link to="/" onClick={removeToken}>
              Sair
            </Link>
          </NavBarItemsContainer>
        </NavBarContainer>
      </NavBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
