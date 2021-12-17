import {
  configure,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import App from "../../../App";

beforeAll(() => {
  configure({
    asyncUtilTimeout: 10000,
  });
});

beforeEach(() => {
  render(<App />);
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
