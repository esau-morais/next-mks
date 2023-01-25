import { Provider } from "react-redux";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TopMenu } from "@/components";
import store from "@/store/store";

const user = userEvent.setup();

const renderSut = () =>
  render(
    <Provider store={store}>
      <TopMenu />
    </Provider>
  );

describe("TopMenu", () => {
  it("should display logo correctly", () => {
    renderSut();

    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });

  it("should open the side bar when the basket button is clicked", async () => {
    renderSut();

    const button = screen.getByRole("button");
    await user.click(button);

    expect(screen.getByText("x")).toBeInTheDocument();
  });
});
