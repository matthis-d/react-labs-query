import Axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useQuery } from "react-query";
import * as Yup from "yup";
import RuleDescriptionField from "./RuleDescriptionField";
import RuleTitleField from "./RuleTitleField";

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

export default function RuleForm({ match, history }) {
  const ruleId = match.params.id;
  const { rule } = useRule(ruleId);

  const validationSchema = Yup.object({
    title: Yup.string().required("A title is required"),
    description: Yup.string()
      .min(10, "10 character min in description")
      .max(100, "100 characters max"),
  });

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">New rule</h3>
      </div>
      <div className="panel-body">
        <Formik
          initialValues={{
            title: rule?.title || "",
            description: rule?.description || "",
          }}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={async (ruleToSave) => {
            if (ruleId) {
              await Axios.put(
                `https://m7p0j.sse.codesandbox.io/rest/rules/${ruleId}`,
                ruleToSave,
              );
            } else {
              await Axios.post(
                `https://m7p0j.sse.codesandbox.io/rest/rules`,
                ruleToSave,
              );
            }
            history.push("/");
          }}
        >
          <Form>
            <RuleTitleField name="title" />
            <RuleDescriptionField name="description" />
            <button type="submit" className="btn btn-primary pull-right">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
