import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Translate from "./components/Translate";
import MyApi from "./components/MyApi";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact>
          <Translate />
        </Route>
        <Route path="/myapi" exact>
          <MyApi />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default Router;
