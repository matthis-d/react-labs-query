import { rulesLoaded } from "../rules.actions";

describe("rulesLoaded action creator", () => {
  it("should return an object with a type RULES_LOADED", () => {
    expect(rulesLoaded()).toHaveProperty("type", "RULES_LOADED");
  });
});
