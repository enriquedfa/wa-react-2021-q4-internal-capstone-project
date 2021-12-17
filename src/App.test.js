import {
  configure,
  render,
  screen,
  waitFor,
  fireEvent,
  within,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import App from "./App";

beforeAll(() => {
  configure({
    asyncUtilTimeout: 5000,
  });
});

beforeEach(() => {
  render(<App />);
});

describe("App Test", () => {
  it("App Is Loading", async () => {
    const header = await screen.findByRole("link", { name: /Home/ });
    expect(header).toBeInTheDocument();

    const homepage = await screen.findByText("Featured Products");
    expect(homepage).toBeInTheDocument();

    const footer = await screen.findByText(
      /Ecommerce created during Wizeline’s Academy React Bootcamp/
    );
    expect(footer).toBeInTheDocument();
  });
});
