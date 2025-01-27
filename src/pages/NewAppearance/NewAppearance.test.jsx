import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import NewAppearance from "./NewAppearance";

describe("NewAppearance Page", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("changes the appearance selected", () => {
        render(
            <MemoryRouter>
                <NewAppearance />
            </MemoryRouter>
        );
        const headButton = screen.getAllByRole("button")[1];
        fireEvent.click(headButton);
        const nextButton = screen.getByAltText("next");
        fireEvent.click(nextButton);
        const savedFace = JSON.parse(localStorage.getItem("charachter_appearance"));
        console.log(savedFace);
    });
});