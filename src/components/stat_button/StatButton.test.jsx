import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StatButton from "./StatButton";

describe("StatButton component", () => {

    it("toggles between advantage and disadvantage modes correctly", () => {
        render(<StatButton statIcon="/icon.png" statValue={10} />);
      
        const plusButton = screen.getByAltText("plus");
        const minusButton = screen.getByAltText("minus");
      
        // Activates the advantage
        fireEvent.click(plusButton);
        expect(plusButton.src).toMatch(/selplus\.svg$/);
        expect(minusButton.src).toMatch(/minus\.svg$/);
      
        // Deactivates the advantage
        fireEvent.click(minusButton);
        expect(minusButton.src).toMatch(/selminus\.svg$/);
        expect(plusButton.src).toMatch(/plus\.svg$/);
      
        // Deactivates both
        fireEvent.click(minusButton);
        expect(minusButton.src).toMatch(/minus\.svg$/);
        expect(plusButton.src).toMatch(/plus\.svg$/);
      });
});
