import { configure, render, screen } from "@testing-library/react";

import App from "../../../App";

beforeAll(() => {
  configure({
    asyncUtilTimeout: 10000,
  });
});

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
