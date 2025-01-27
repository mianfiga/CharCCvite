import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, beforeEach, expect } from "vitest";
import NewStats from "./NewStats";
import stats from "../../helpers/stats";

describe("NewStats Page", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders stats with initial or saved values", () => {
    const initialStats = stats.reduce((acc, s) => {
      acc[s.name.toLowerCase()] = 15;
      return acc;
    }, {});
    localStorage.setItem("character_stats", JSON.stringify(initialStats));

    render(
      <MemoryRouter>
        <NewStats />
      </MemoryRouter>
    );
    stats.forEach((s) => {
      const statContainer = screen
        .getByText(s.name)
        .closest(".new_stat_container");
      const statValue = within(statContainer).getByText(
        initialStats[s.name.toLowerCase()]
      );
      expect(statValue);
    });
  });

  it("saves in localStorage", () => {
    const initialStats = stats.reduce((acc, s) => {
      acc[s.name.toLowerCase()] = 15;
      return acc;
    }, {});
    localStorage.setItem("character_stats", JSON.stringify(initialStats));

    render(
      <MemoryRouter>
        <NewStats />
      </MemoryRouter>
    );

    const firstStat = stats[0];
    const plusButton = screen.getAllByAltText("plus")[0];

    fireEvent.click(plusButton);

    screen.getByText("16");

    const nextButton = screen.getAllByAltText("next")[0];
    nextButton.click();

    const savedStats = JSON.parse(localStorage.getItem("character_stats"));
    expect(savedStats[firstStat.name.toLowerCase()]).toBe(16);

    stats.slice(1).forEach((s) => {
      expect(savedStats[s.name.toLowerCase()]).toBe(15);
    });
  });
});
