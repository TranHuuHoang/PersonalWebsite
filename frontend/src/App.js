import React, { Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App(props) {
  return (
    <main className="container">
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    </main>
  )
}

export default App;