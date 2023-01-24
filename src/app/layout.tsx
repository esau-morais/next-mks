"use client";

import { Provider } from "react-redux";

import { Montserrat } from "@next/font/google";

import { Footer, TopMenu, Main } from "@/components";
import StyledComponentsRegistry from "@/lib/registry";
import store from "@/store/store";
import { GlobalStyle } from "@/styles/globals";
const MontserratFont = Montserrat({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={MontserratFont.className}>
      <head />
      <body>
        <Provider store={store}>
          <TopMenu />

          <GlobalStyle />
          <StyledComponentsRegistry>
            <Main>{children}</Main>
          </StyledComponentsRegistry>
        </Provider>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
