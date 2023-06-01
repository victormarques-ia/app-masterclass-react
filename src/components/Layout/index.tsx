"use client";

import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import {
  Container,
  NavBar,
  NavBarContainer,
  NavBarItemsContainer,
} from "./styles";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { clearSession } = useContext(AppContext);

  return (
    <>
      <NavBar>
        <NavBarContainer>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} priority />
          </Link>

          <NavBarItemsContainer>
            <Link href="/home/my-posts">Meus posts</Link>
            <Link href="/" onClick={clearSession}>
              Sair
            </Link>
          </NavBarItemsContainer>
        </NavBarContainer>
      </NavBar>
      <Container>{children}</Container>
    </>
  );
}
