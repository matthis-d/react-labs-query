import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import RuleForm from "./RuleForm";
import RuleList from "./RuleList";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="container">
          <Route exact path="/" component={RuleList} />
          <Route path="/edit" component={RuleForm} />
        </div>
      </div>
    </div>
  );
}
