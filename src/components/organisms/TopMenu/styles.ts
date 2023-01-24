import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  padding: 1rem 4rem;
  width: 100%;

  background-color: #0f52ba;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;
    background: white;
    border-radius: 8px;

    font-size: 1.125rem;
    font-weight: 700;

    cursor: pointer;
  }

  button > span:first-child {
    margin-right: 1rem;
  }
`;

export const Logo = styled.div`
  color: white;

  span:first-child {
    font-size: 2.5rem;
    font-weight: 600;
    margin-right: 0.5rem;
  }
  span:last-child {
    font-size: 1.25rem;
    font-weight: 300;
  }
`;
