import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Home from "../../features/Home/Home";
import "@testing-library/jest-dom";

const mockUseCharactersService = vi.fn();

vi.mock("../../services/charactersService", () => ({
  useCharactersService: () => mockUseCharactersService(),
}));

beforeEach(() => {
  mockUseCharactersService.mockReset();
});

describe("Home Component", () => {
  it("renders the loader when loading", () => {
    mockUseCharactersService.mockReturnValue({
      characters: [],
      isLoading: true,
      totalResults: 0,
      error: null,
    });

    render(<Home />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("shows 'Failed to fetch characters' when fetch failed", async () => {
    mockUseCharactersService.mockReturnValue({
      characters: [],
      isLoading: false,
      totalResults: 0,
      error: "Failed to fetch characters",
    });

    render(<Home />);

    const error = screen.getByText("Failed to fetch characters");
    expect(error).toBeInTheDocument();
  });

  it("renders user cards when users are available", () => {
    mockUseCharactersService.mockReturnValue({
      characters: [
        {
          id: 1,
          fullName: "John Snow",
          title: "King in the North",
          family: "Stark",
          imageUrl: "",
        },
        {
          id: 2,
          fullName: "Daenerys Targaryen",
          title: "Queen of Meereen",
          family: "Targaryen",
          imageUrl: "",
        },
      ],
      isLoading: false,
      totalResults: 2,
      error: null,
    });

    render(<Home />);

    const character1 = screen.getByText(/John Snow/i);
    const character2 = screen.getByText(/Daenerys Targaryen/i);

    expect(character1).toBeInTheDocument();
    expect(character2).toBeInTheDocument();

    const characterCards = screen.getAllByTestId("character-card");
    expect(characterCards).toHaveLength(2);
  });
});
