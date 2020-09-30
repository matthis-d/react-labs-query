import axios from "axios";

export const RULES_LOADED = "RULES_LOADED";

// Action creator
export function rulesLoaded(data) {
  return {
    type: RULES_LOADED,
    payload: data,
  };
}

// This is a thunk
export function fetchRules() {
  return function (dispatch) {
    axios
      .get("https://m7p0j.sse.codesandbox.io/rest/rules")
      .then(({ data }) => {
        dispatch(rulesLoaded(data));
      });
  };
}
