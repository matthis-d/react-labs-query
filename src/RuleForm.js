import Axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function useRule(ruleId) {
  const { data: rule, ...rest } = useQuery(
    ["rule", ruleId],
    async () => {
      const { data } = await Axios.get(
        `https://m7p0j.sse.codesandbox.io/rest/rules/${ruleId}`,
      );
      return data;
    },
    {
      enabled: ruleId,
    },
  );

  return { rule, ...rest };
}

export default function RuleForm({ match }) {
  const { rule } = useRule(match.params.id);

  console.log(rule);

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">New rule</h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label htmlFor="rule-title">Title</label>
            <input
              type="text"
              className="form-control"
              id="rule-title"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rule-desc">Description</label>
            <textarea
              className="form-control"
              id="rule-desc"
              placeholder="Description"
            />
          </div>
          <button type="submit" className="btn btn-primary pull-right">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
