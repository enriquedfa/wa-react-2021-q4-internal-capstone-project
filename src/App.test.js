import {
  render,
  screen,
  waitFor,
  fireEvent,
  within,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

describe("Homepage", () => {
  it("Banner Slide is fetching", async () => {
    const slider = await screen.findByText("GREAT VERSATILITY - DINING ROOM");
    expect(slider).toBeInTheDocument();
  });

  it("Categories are fetching", async () => {
    const categories = await screen.findByText("Categories");
    expect(categories).toBeInTheDocument();
  });

  it("Featured Products are fetched", async () => {
    const featured = await screen.findByText("Featured Products");
    expect(featured).toBeInTheDocument();
  });
});

describe("Product Page", () => {
  it("Product Page is loading", async () => {
    const btnViewAllProducts = await screen.findByText("View All Products");
    fireEvent.click(btnViewAllProducts);

    const allProducts = await screen.findByText("Products");
    expect(allProducts).toBeInTheDocument();
  });

  it("Categories are loading", async () => {
    const categories = await screen.findByText("Categories");
    expect(categories).toBeInTheDocument();
  });

  it("Bed & Bath category filter is working with 2 pages", async () => {
    const btnBedBathCategory = await screen.findByText("Bed & Bath");
    fireEvent.click(btnBedBathCategory);

    const item = await screen.findByText("Kleenera Silas");
    expect(item).toBeInTheDocument();

    const pagination = await screen.findByText("2");
    expect(pagination).toBeInTheDocument();
  });

  it("Pagination - Previous is disabled when user is on first page", async () => {
    const btnPrevious = await screen.findByText("<");
    expect(btnPrevious.closest("li")).toHaveClass("disabled");
  });

  it("Pagination - Next button is working", async () => {
    const btnNext = await screen.findByText(">");
    fireEvent.click(btnNext);
    const btnTwo = await screen.findByText("2");
    expect(btnTwo.closest("li")).toHaveClass("page-active");
  });

  it("Pagination - Previous button is working", async () => {
    const btnPrevious = await screen.findByText("<");
    fireEvent.click(btnPrevious);
    const btnOne = await screen.findByText("1");
    expect(btnOne.closest("li")).toHaveClass("page-active");
  });

  it("Pagination - Next button is disabled when user is on last page", async () => {
    const lastPage = await screen.findByText("8");
    fireEvent.click(lastPage);

    const btnNext = await screen.findByText(">");

    await waitFor(() => {
      expect(btnNext.closest("li")).toHaveClass("disabled");
    });
  });
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

describe("Search Results Page", () => {
  it("Search Results Page is loading", async () => {
    const searchInput = await screen.findByRole(/textbox/);
    userEvent.type(searchInput, "bed");
    const searchButton = await screen.findByRole(/button/, { name: "Search" });
    userEvent.click(searchButton);

    await waitFor(() => {
      const searchResults = screen.getByRole("heading", {
        name: "Search Results",
      });
      expect(searchResults).toBeInTheDocument();
    });
  });

  it("Search Results Page shows no results", async () => {
    const searchInput = await screen.findByRole(/textbox/);
    userEvent.type(searchInput, "qwertyuiop");
    const searchButton = await screen.findByRole(/button/, { name: "Search" });
    userEvent.click(searchButton);

    await waitFor(() => {
      const noResults = screen.getByText("No products found");
      expect(noResults).toBeInTheDocument();
    });
  });
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
