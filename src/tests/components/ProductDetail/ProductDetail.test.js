import {
  configure,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../../../App";

beforeAll(() => {
  configure({
    asyncUtilTimeout: 10000,
  });
});

beforeEach(() => {
  render(<App />);
});

describe("Product Detail Page", () => {
  it("Product Detail Page is loading", async () => {
    const viewProduct = await screen.findAllByRole("button", { name: "View" });
    fireEvent.click(viewProduct[0]);

    await waitFor(async () => {
      const productDetail = screen.getByRole("heading", {
        name: "Fair Isle Snowflake Lumbar Cushion Cover",
      });
      expect(productDetail).toBeInTheDocument();

      const productPrice = screen.getByText("$40");
      expect(productPrice).toBeInTheDocument();

      const productSKU = screen.getByText("SKU: 1107982309");
      expect(productSKU).toBeInTheDocument();

      const productCategory = screen.getByText("decorate");
      expect(productCategory).toBeInTheDocument();

      const productTag1 = screen.getByText("Living Room");
      expect(productTag1).toBeInTheDocument();
      const productTag2 = screen.getByText("Christmas");
      expect(productTag2).toBeInTheDocument();
      const productTag3 = screen.getByText("Featured");
      expect(productTag3).toBeInTheDocument();

      const productDescription = screen.getByText(
        /Keeping a distinctive complex pattern without being complicated involves choosing a simple palette. /
      );
      expect(productDescription).toBeInTheDocument();
    });
  });

  it("Product Detail has a quantity selector", async () => {
    const quantitySelector = await screen.findByLabelText(/Quantity:/);
    expect(quantitySelector).toBeInTheDocument();

    const addToCart = await screen.findByRole("button", {
      name: "Add to Cart",
    });
    expect(addToCart).toBeInTheDocument();
  });

  it("Add items to cart", async () => {
    const quantitySelector = await screen.findByLabelText(/Quantity:/);
    userEvent.selectOptions(quantitySelector, "48");

    const addToCart = await screen.findByRole("button", {
      name: "Add to Cart",
    });
    fireEvent.click(addToCart);

    await waitFor(() => {
      const cart = screen.getByRole("link", { name: /Cart/ });
      expect(cart).toBeInTheDocument();
      expect(cart).toHaveTextContent("Cart (48)");

      expect(addToCart).toBeDisabled();
    });
  });
});
