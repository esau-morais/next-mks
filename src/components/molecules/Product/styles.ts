import styled from "styled-components";

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.125rem 0.5rem 3rem;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  img {
    object-fit: contain;
  }

  div {
    font-weight: 400;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div > span:last-child {
    padding: 0.25rem 0.5rem;
    background-color: #373737;
    color: white;
    border-radius: 5px;
  }

  p {
    margin-top: 0.5rem;
    font-size: 10px;
    font-weight: 300;
  }

  button {
    padding: 0.5rem 0;

    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    border: none;
    outline: none;
    background: #0f52ba;
    color: white;
    border-radius: 0px 0px 8px 8px;

    text-transform: uppercase;
    font-weight: 600;

    cursor: pointer;
  }

  button > span:first-child {
    margin-right: 1rem;
  }
`;
