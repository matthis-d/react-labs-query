import { DO_LIKE } from "../../actions/likes.actions";
import { RULES_LOADED } from "../../actions/rules.actions";
import { rulesReducer } from "../rules.reducer";

describe("rulesReducer", () => {
  it("should an empty array by default", () => {
    expect(rulesReducer(undefined, {})).toEqual([]);
  });

  it("should return rules provided in action when action type is RULES_LOADED", () => {
    const action = {
      type: RULES_LOADED,
      payload: [{ id: 1 }],
    };
    expect(rulesReducer([], action)).toEqual([{ id: 1 }]);
  });

  it("should increment likes count when doLike is emitted", () => {
    const rules = [
      { id: 1, likes: 1, dislikes: 1 },
      { id: 2, likes: 2, dislikes: 2 },
      { id: 3, likes: 3, dislikes: 3 },
    ];
    const action = {
      type: DO_LIKE,
      payload: 2,
    };

    const expectedRules = [
      { id: 1, likes: 1, dislikes: 1 },
      { id: 2, likes: 3, dislikes: 2 },
      { id: 3, likes: 3, dislikes: 3 },
    ];

    expect(rulesReducer(rules, action)).toEqual(expectedRules);
  });
});
