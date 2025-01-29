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
    fireEvent.change(nameInput[0], { target: { value: "antonio" } });

    const factionsInput = screen.getAllByPlaceholderText("FACTIONS");
    fireEvent.change(factionsInput[0], { target: { value: "bar de antonio" } });

    const personalityInput =
      screen.getAllByPlaceholderText("PERSONALITY TRAITS");
    fireEvent.change(personalityInput[0], {
      target: { value: "es antonio" },
    });

    const idealsInput = screen.getAllByPlaceholderText("IDEALS");
    fireEvent.change(idealsInput[0], {
      target: { value: "seguir siendo antonio" },
    });

    const flawsInput = screen.getAllByPlaceholderText("FLAWS");
    fireEvent.change(flawsInput[0], {
      target: { value: "racista hacia los gnomos" },
    });

    const bondsInput = screen.getAllByPlaceholderText("BONDS");
    fireEvent.change(bondsInput[0], {
      target: { value: "pce, antolin" },
    });

    const backstoryInput = screen.getAllByPlaceholderText("BACKSTORY");
    fireEvent.change(backstoryInput[0], {
      target: { value: "nacio y le llamaron antonio" },
    });

    const nextButtons = screen.getAllByAltText("next");
    fireEvent.click(nextButtons[0]);

    const storedData = JSON.parse(localStorage.getItem("character_info"));
    expect(storedData).toEqual({
      name: "antonio",
      factions: "bar de antonio",
      personality: "es antonio",
      ideals: "seguir siendo antonio",
      flaws: "racista hacia los gnomos",
      bonds: "pce, antolin",
      backstory: "nacio y le llamaron antonio",
    });
  });
});
