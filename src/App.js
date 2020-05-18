import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
      <>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route>
            <Saved exact path={["/saved"]} />
          </Route>
        </Switch>
      </>
  );
}

export default App;
