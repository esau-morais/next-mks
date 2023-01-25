import { render, screen } from "@testing-library/react";

import { Footer } from "@/components";

describe("Footer", () => {
  it("should render content correcly", () => {
    render(<Footer />);

    expect(screen.getByText("MKS sistemas © Todos os direitos reservados"));
  });
});
