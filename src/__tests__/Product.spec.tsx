import React from "react";
import { Provider } from "react-redux";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";

import { Product as ProductCard } from "@/components";
import { Product } from "@/lib/data";
import store, { addToBasket } from "@/store/store";

const user = userEvent.setup();

export const productData = {
  id: 1,
  name: "Product 1",
  brand: "Brand 1",
  price: 100,
  photo: "https://example.com/product1.jpg",
  description: "Product 1 description",
} as Product;

const renderSut = () =>
  render(
    <Provider store={store}>
      <ProductCard data={productData} />
    </Provider>
  );

let dispatch: jest.SpyInstance;

describe("Product", () => {
  beforeEach(() => {
    dispatch = jest.spyOn(store, "dispatch");
  });

  it("should call addToBasket on button click", async () => {
    renderSut();
    screen.debug();

    await user.click(screen.getByText(/comprar/i));
    expect(dispatch).toBeCalledWith(addToBasket(productData));
  });
});
