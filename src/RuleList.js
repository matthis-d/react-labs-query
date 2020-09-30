import React from "react";
import axios from "axios";
import Rule from "./Rule";
import { useQuery } from "react-query";

export function useRules() {
  async function getRules() {
    const { data } = await axios.get(
      "https://m7p0j.sse.codesandbox.io/rest/rules",
    );
    return data;
  }

  const { data: rules, error, isLoading } = useQuery("rules", getRules);

  return { rules, error, isLoading };
}

function RuleList() {
  const { rules, error, isLoading } = useRules();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>An error occured, please try again</p>;
  }

  return (
    <div>
      {rules.map((rule) => (
        <Rule key={rule.id} rule={rule} />
      ))}
    </div>
  );
}

RuleList.defaultProps = {
  rules: [],
};

export default RuleList;
