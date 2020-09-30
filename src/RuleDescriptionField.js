import { ErrorMessage, Field } from "formik";
import React from "react";

export default function RuleDescriptionField({ name }) {
  return (
    <div className="form-group">
      <label htmlFor="rule-desc">Description</label>
      <Field
        component="textarea"
        className="form-control"
        id="rule-desc"
        placeholder="Description"
        name={name}
      />
      <ErrorMessage name={name} />
    </div>
  );
}
