import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, it, expect, beforeEach } from "vitest";
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
    screen.getByPlaceholderText("Race");
    screen.getByPlaceholderText("Class");
    screen.getByPlaceholderText("FACTIONS");
    screen.getByPlaceholderText("PERSONALITY TRAITS");
    screen.getByPlaceholderText("IDEALS");
    screen.getByPlaceholderText("FLAWS");
    screen.getByPlaceholderText("BONDS");
    screen.getByPlaceholderText("BACKSTORY");
  });
});
