import {
  configure,
  render,
  screen,
  waitFor,
  fireEvent,
  within,
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

describe("Shopping Cart Page", () => {
  it("Shopping Cart Page has an empty cart page", async () => {
    const cart = await screen.findByRole("link", { name: /Cart/ });
    fireEvent.click(cart);

    await waitFor(() => {
      const emptyCart = screen.getByText("Your cart is empty");
      expect(emptyCart).toBeInTheDocument();
    });
  });

  it("Shopping Cart Page is loading", async () => {
    const cart = await screen.findByRole("link", { name: /Cart/ });
    fireEvent.click(cart);

    await waitFor(() => {
      const shoppingCart = screen.getByRole("heading", {
        name: "Shopping Cart",
      });
      expect(shoppingCart).toBeInTheDocument();
    });
  });

  it("Shopping Cart Page has a checkout button", async () => {
    const checkoutButton = await screen.findByRole("button", {
      name: "Checkout",
    });
    expect(checkoutButton).toBeInTheDocument();
  });

  it("Shopping Cart Page has a clear cart button", async () => {
    const clearCartButton = await screen.findByRole("button", {
      name: "Clear Cart",
    });
    expect(clearCartButton).toBeInTheDocument();
  });

  it("Add stuff to cart and check the cart", async () => {
    const homeLink = await screen.findByRole("link", { name: /Home/ });
    fireEvent.click(homeLink);

    const addToCartButtons = await screen.findAllByRole("button", {
      name: "Add to Cart",
    });
    fireEvent.click(addToCartButtons[0]);
    fireEvent.click(addToCartButtons[0]);
    fireEvent.click(addToCartButtons[1]);

    const cart = await screen.findByRole("link", { name: /Cart/ });
    fireEvent.click(cart);

    await waitFor(() => {
      const cart = screen.getByRole("link", { name: /Cart/ });
      expect(cart).toBeInTheDocument();
      expect(cart).toHaveTextContent("Cart (3)");

      const product1 = screen.getByRole("heading", {
        name: "Fair Isle Snowflake Lumbar Cushion Cover",
      });
      expect(product1).toBeInTheDocument();
      const product1Image = screen.getByAltText(
        "Fair Isle Snowflake Lumbar Cushion Cover"
      );
      expect(product1Image).toBeInTheDocument();
      const product1Price = screen.getAllByTitle("Item Unit Price")[0];
      expect(product1Price).toBeInTheDocument();
      const product1Quantity = screen.getAllByLabelText(/Quantity/)[0];
      expect(product1Quantity).toBeInTheDocument();
      const product1Subtotal = screen.getAllByTitle("Item Subtotal")[0];
      expect(product1Subtotal).toBeInTheDocument();
      const product1Remove = screen.getAllByRole("button", {
        name: /Remove/,
      })[0];
      expect(product1Remove).toBeInTheDocument();

      const product2 = screen.getByRole("heading", { name: "Desk Lamp Ezra" });
      expect(product2).toBeInTheDocument();
      const product2Image = screen.getByAltText("Desk Lamp Ezra");
      expect(product2Image).toBeInTheDocument();
      const product2Price = screen.getAllByTitle("Item Unit Price")[1];
      expect(product2Price).toBeInTheDocument();
      expect(product2Price).toHaveTextContent(/147/);
      const product2Quantity = screen.getAllByLabelText(/Quantity/)[1];
      expect(product2Quantity).toBeInTheDocument();
      const product2Subtotal = screen.getAllByTitle("Item Subtotal")[1];
      expect(product2Subtotal).toBeInTheDocument();
      const product2Remove = screen.getAllByRole("button", {
        name: /Remove/,
      })[1];
      expect(product2Remove).toBeInTheDocument();

      const total = screen.getByTitle("Cart Total");
      expect(total).toBeInTheDocument();
      expect(total).toHaveTextContent(/227/);
    });

    const productsQuantity = await screen.findAllByLabelText(/Quantity/);
    userEvent.selectOptions(productsQuantity[1], "2");

    const total = await screen.findByTitle("Cart Total");
    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent(/374/);

    const options = within(productsQuantity[1]).getAllByRole("option");
    expect(options).toHaveLength(9);

    const removeButtons = await screen.findAllByRole("button", {
      name: /Remove/,
    });
    fireEvent.click(removeButtons[0]);

    await waitFor(() => {
      const total = screen.getByTitle("Cart Total");
      expect(total).toBeInTheDocument();
      expect(total).toHaveTextContent(/294/);
    });
  });
});
