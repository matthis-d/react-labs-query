import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Rule from "../Rule";

describe("Rule", () => {
  it("should hide description when title is clicked", () => {
    const rule = {
      title: "Write unit tests",
      description: "This prevents from bugs in production",
      tags: ["craftsmanship"],
      likes: 10,
      dislikes: 0,
    };

    render(<Rule rule={rule} />);

    expect(
      screen.getByText("This prevents from bugs in production"),
    ).toBeVisible();

    fireEvent.click(screen.getByText("Write unit tests"));

    expect(
      screen.queryByText("This prevents from bugs in production"),
    ).not.toBeInTheDocument();
  });
});
