import { connect } from "react-redux";
import { fetchRules } from "./actions/rules.actions";
import RuleList from "./RuleList";

const mapStateToProps = (state) => {
  return {
    rules: state.rules,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRules: () => {
      dispatch(fetchRules());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleList);
