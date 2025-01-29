import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import NewProficiencies from "./NewProficiencies";

describe("NewProficiencies page", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("saves selected proficiencies and languages to localStorage", () => {
    render(
      <MemoryRouter>
        <NewProficiencies />
      </MemoryRouter>
    );

    const proficienciesCheckboxes = screen.getAllByRole("checkbox").slice(0, 2); 
    fireEvent.click(proficienciesCheckboxes[0]); 
    fireEvent.click(proficienciesCheckboxes[1]); 

    const languagesCheckboxes = screen.getAllByRole("checkbox").slice(-2); 
    fireEvent.click(languagesCheckboxes[0]); 
    fireEvent.click(languagesCheckboxes[1]); 
    const nextButton = screen.getByRole("link", { name: /next/i });
    fireEvent.click(nextButton);

    const savedProficiencies = JSON.parse(
      localStorage.getItem("character_proficiencies")
    );
    const savedLanguages = JSON.parse(
      localStorage.getItem("character_languages")
    );

    expect(savedProficiencies[0]).toBe("Acrobatics");
    expect(savedProficiencies[1]).toBe("Medicine");
    expect(savedLanguages[0]).toBe("Orcish");

  });
});
