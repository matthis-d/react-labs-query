import React from "react";
import ReactDOM from "react-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Layout from "./Layout";

const queryCache = new QueryCache();

ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ReactQueryCacheProvider>,
  document.getElementById("root"),
);
