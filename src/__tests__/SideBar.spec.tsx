import { Provider } from "react-redux";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SideBar from "@/components/organisms/SideBar";
import store, { addToBasket } from "@/store/store";
import { calculateTotalPrice } from "@/utils/store";

import { productData } from "./Product.spec";

const user = userEvent.setup();
const setIsOpen = jest.fn();

const renderSut = () =>
  render(
    <Provider store={store}>
      <SideBar isOpen={true} setIsOpen={setIsOpen} />
    </Provider>
  );

describe("SideBar", () => {
  it("should close aside when the x button is clicked", async () => {
    renderSut();

    await user.click(screen.getAllByText("x")[0]);

    expect(setIsOpen).toHaveBeenCalled();
    expect(setIsOpen).toHaveBeenCalledWith(false);
  });

  it("should calculate and show the total amount correctly", () => {
    store.dispatch(addToBasket(productData));

    renderSut();

    const total = calculateTotalPrice(store.getState().basket.basket);

    expect(screen.getByTestId("amount")).toHaveTextContent(`R$${total}`);
  });
});
