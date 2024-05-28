import { configure, render, screen, waitFor } from "@testing-library/react";
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
