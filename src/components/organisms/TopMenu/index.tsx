"use client";

import { useState } from "react";

import { ShoppingCartIcon } from "@/components";
import { useAppSelector } from "@/hooks/basket";
import { RootState } from "@/store/store";

import SideBar from "../SideBar";
import { Container, Logo } from "./styles";

const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { basket } = useAppSelector((state: RootState) => state.basket);

  return (
    <Container>
      <Logo>
        <span>MKS</span>
        <span>Sistemas</span>
      </Logo>

      <button type="button" onClick={() => setIsOpen(true)}>
        <span role="img" aria-label="shopping cart">
          <ShoppingCartIcon />
        </span>
        <span>{basket.length}</span>
      </button>

      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
};

export default TopMenu;
