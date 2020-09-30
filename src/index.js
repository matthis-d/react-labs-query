import React from "react";
import ReactDOM from "react-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import RuleList from "./RuleList";

import "bootstrap/dist/css/bootstrap.css";

const queryCache = new QueryCache();

ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <BrowserRouter>
      <RuleList />
    </BrowserRouter>
  </ReactQueryCacheProvider>,
  document.getElementById("root"),
);
