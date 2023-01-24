import styled, { css } from "styled-components";

export const Aside = styled.aside<{ open: boolean }>`
  right: 0;
  bottom: 0;

  div.product__total {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: auto;
    font-weight: 700;
    font-size: 1.75rem;
    color: white;
  }

  ${({ open }) =>
    open
      ? css`
          position: fixed;
          z-index: 5;
          padding: 1rem 2rem 8rem 2rem;

          width: 36%;
          height: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
          transition: display 0.4s ease-in-out;

          background: #0f52ba;
          box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

          > div:first-child,
          > div.product__basket {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          > div.product__basket {
            gap: 1.75rem;
            padding: 0.5rem;
            margin: 2rem 0;
            flex-direction: column;
            overflow: hidden auto;
          }

          > div:first-child > h2 {
            font-size: 27px;
            font-weight: 700;
            color: white;
          }

          > div:first-child > span {
            font-size: 1.75rem;

            width: 3rem;
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: black;
            color: white;
            border-radius: 50%;

            cursor: pointer;
          }

          button.product__checkout {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;

            background-color: black;
            color: white;

            font-size: 1.75rem;

            width: 100%;
            padding: 2rem 0;
            margin-top: 3rem;
            border-radius: 0px;
          }

          @media screen and (max-width: 680px) {
            width: 88%;
          }
        `
      : css`
          display: none;
        `});
`;

export const BasketItem = styled.div`
  position: relative;
  background: white;

  padding: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  span:first-child {
    font-weight: 400;
    font-size: 13px;
    color: #2c2c2c;
  }

  div.product__quantity {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    font-weight: 400;
  }
  div.product__quantity > button {
    font-size: 12px;
  }
  div.product__quantity > span {
    padding: 0 0.5rem;
    font-size: 8px;
    border-right: 0.2px solid #bfbfbf;
    border-left: 0.2px solid #bfbfbf;
  }

  span.product__amount {
    font-sie: 14px;
    font-weight: 700;
  }

  > span.product__remove {
    position: absolute;
    top: -5px;
    right: -5px;

    font-size: 14px;

    width: 1.125rem;
    height: 1.125rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: black;
    color: white;
    border-radius: 50%;

    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;

    div.product__info {
      width: 100%;
      margin-top: 1.125rem;
      justify-content: space-between;
    }

    span.product__amount {
      font-size: 15px;
      padding: 0.5rem 1rem;
      background: #373737;
      color: white;
      border-radius: 5px;
    }

    div.product__quantity > span {
      font-size: 1.25rem;
    }

    > span.product__remove {
      right: 0.5rem;
      top: 0.5rem;
      font-size: 2rem;
      background-color: transparent;
      color: black;
    }
  }
`;
