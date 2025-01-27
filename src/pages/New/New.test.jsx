import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, beforeEach, expect } from "vitest";
import New from "./New";

describe("New Character Form", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the form fields", () => {
    render(
      <MemoryRouter>
        <New />
      </MemoryRouter>
    );

    screen.getByPlaceholderText("NAME");
    screen.getByPlaceholderText("FACTIONS");
    screen.getByPlaceholderText("PERSONALITY TRAITS");
    screen.getByPlaceholderText("IDEALS");
    screen.getByPlaceholderText("FLAWS");
    screen.getByPlaceholderText("BONDS");
    screen.getByPlaceholderText("BACKSTORY");
  });

  it("proceeds to the next step when all fields are valid", () => {
    render(
      <MemoryRouter>
        <New />
      </MemoryRouter>
    );

    const nameInput = screen.getAllByPlaceholderText("NAME");
    fireEvent.change(nameInput[0], { target: { value: "Aragorn" } });

    const factionsInput = screen.getAllByPlaceholderText("FACTIONS");
    fireEvent.change(factionsInput[0], { target: { value: "The Fellowship" } });

    const personalityInput =
      screen.getAllByPlaceholderText("PERSONALITY TRAITS");
    fireEvent.change(personalityInput[0], {
      target: { value: "Brave and loyal" },
    });

    const idealsInput = screen.getAllByPlaceholderText("IDEALS");
    fireEvent.change(idealsInput[0], {
      target: { value: "Honor and Justice" },
    });

    const flawsInput = screen.getAllByPlaceholderText("FLAWS");
    fireEvent.change(flawsInput[0], {
      target: { value: "Doubt in his own destiny" },
    });

    const bondsInput = screen.getAllByPlaceholderText("BONDS");
    fireEvent.change(bondsInput[0], {
      target: { value: "Protect the people of Middle Earth" },
    });

    const backstoryInput = screen.getAllByPlaceholderText("BACKSTORY");
    fireEvent.change(backstoryInput[0], {
      target: { value: "A ranger who is destined to be king of Gondor." },
    });

    const nextButtons = screen.getAllByAltText("next");
    fireEvent.click(nextButtons[0]);

    const storedData = JSON.parse(localStorage.getItem("character_info"));
    expect(storedData).toEqual({
      name: "Aragorn",
      factions: "The Fellowship",
      personality: "Brave and loyal",
      ideals: "Honor and Justice",
      flaws: "Doubt in his own destiny",
      bonds: "Protect the people of Middle Earth",
      backstory: "A ranger who is destined to be king of Gondor.",
    });
  });
});
