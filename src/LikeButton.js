import React from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryCache } from "react-query";
import Axios from "axios";

function useLike(ruleId, direction) {
  const cache = useQueryCache();
  const property = direction === "up" ? "likes" : "dislikes";

  const [mutate] = useMutation(
    async () => {
      await Axios.post(
        `https://m7p0j.sse.codesandbox.io/rest/rules/${ruleId}/${property}`,
      );
    },
    {
      onSettled: () => {
        cache.invalidateQueries("rules");
      },
    },
  );

  return {
    mutate,
  };
}

function LikeButton({ count, direction, ruleId }) {
  const { mutate } = useLike(ruleId, direction);

  return (
    <button
      className="btn btn-default"
      title={direction === "up" ? "+1" : "-1"}
      onClick={mutate}
    >
      {count} <i className={`glyphicon glyphicon-thumbs-${direction}`}></i>
    </button>
  );
}

LikeButton.propTypes = {
  direction: PropTypes.oneOf(["up", "down"]),
  count: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

LikeButton.defaultProps = {
  direction: "up",
  count: 0,
};

export default LikeButton;
