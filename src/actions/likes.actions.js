import axios from "axios";

export const DO_LIKE = "DO_LIKE";
export const DO_DISLIKE = "DO_DISLIKE";

// Action creator to like a rule with a given id
export function doLike(rule) {
  return {
    type: DO_LIKE,
    payload: rule,
  };
}

// Action creator to dislike a rule with a given id
export function doDislike(rule) {
  return {
    type: DO_DISLIKE,
    payload: rule,
  };
}

// To send an asynchrone like: a thunk
export function sendLike(ruleId) {
  return function (dispatch) {
    axios
      .post(`https://m7p0j.sse.codesandbox.io/rest/rules/${ruleId}/likes`)
      .then(({ data }) => {
        dispatch(doLike(data));
      });
  };
}

export function sendDislike(ruleId) {
  return function (dispatch) {
    axios
      .post(`https://m7p0j.sse.codesandbox.io/rest/rules/${ruleId}/dislikes`)
      .then(({ data }) => {
        dispatch(doLike(data));
      });
  };
}
