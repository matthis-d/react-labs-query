import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import LikeButton from "../LikeButton";

describe("LikeButton", () => {
  it("should display the initial value in a button", () => {
    render(<LikeButton initialCount={4} />);

    const button = screen.getByRole("button", { name: "+1" });
    expect(button).toBeVisible();

    const text = screen.getByText("4");
    expect(text).toBeVisible();
  });

  it("should increment value when button is clicked", () => {
    render(<LikeButton initialCount={4} />);

    const button = screen.getByRole("button", { name: "+1" });

    screen.debug();

    fireEvent.click(button);

    const text = screen.getByText("5");
    expect(text).toBeVisible();
  });
});
