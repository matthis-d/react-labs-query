import { connect } from "react-redux";
import { sendDislike, sendLike } from "./actions/likes.actions";
import LikeButton from "./LikeButton";

const mapStateToProps = (state, props) => {
  const rule = state.rules.find((r) => r.id === props.ruleId);

  if (props.direction === "up") {
    return {
      count: rule?.likes ?? 0,
    };
  }

  return {
    count: rule?.dislikes ?? 0,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      if (props.direction === "up") {
        dispatch(sendLike(props.ruleId));
      } else {
        dispatch(sendDislike(props.ruleId));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
