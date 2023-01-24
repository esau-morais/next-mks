"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    outline: none;
    box-sizing: border-box;
  }

  body, html, #root {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: #F9F9F9;
  }
`;
