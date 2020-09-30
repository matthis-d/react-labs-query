import React from "react";
import { ErrorMessage, Field } from "formik";

export default function RuleTitleField({ name }) {
  return (
    <div className="form-group">
      <label htmlFor={`rule-${name}`}>Title</label>
      <Field
        name={name}
        type="text"
        className="form-control"
        id={`rule-${name}`}
        placeholder="Title"
      />
      <ErrorMessage name={name} />
    </div>
  );
}
