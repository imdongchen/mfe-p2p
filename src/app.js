import React, { useState } from "react";
import { Switch, Router, Route } from "react-router-dom";
import { Send } from "./send";
import { Amount } from "./amount";
import { Success } from "./success";
import { basePath } from "./config";

export default function App({ history }) {
  const [recipient, setRecipient] = useState("");

  const handleSendNext = (value) => {
    setRecipient(value);
  };
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path={`${basePath}/amount`} component={Amount} />
          <Route path={`${basePath}/success`} component={Success} />
          <Route path={basePath}>
            <Send onNext={handleSendNext} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
