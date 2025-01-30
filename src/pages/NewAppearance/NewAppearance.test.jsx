import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import NewAppearance from "./NewAppearance";

describe("NewAppearance Page", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("changes the head appearance when navigating through the carousel", async () => {
    render(
      <MemoryRouter>
        <NewAppearance />
      </MemoryRouter>
    );

    const headNextButton = screen.getAllByRole("button")[1];
    fireEvent.click(headNextButton);
    await new Promise((resolve) => setTimeout(resolve, 100));
    fireEvent.click(headNextButton);
    await new Promise((resolve) => setTimeout(resolve, 100));
    const savedAppearance = JSON.parse(localStorage.getItem("character_appearance"));
    expect(savedAppearance).toBeDefined();
    expect(savedAppearance.head).toBe("1.svg"); 
  });
});
