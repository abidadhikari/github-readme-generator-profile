import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import About from "./About";

function App() {
  return (
    <>
      <Header />
      <div className="contentContainer">
        <Switch>
          <Route path="/" component={Content} exact />
          <Route path="/about" component={About} exact />
            <Route component={Content}/>
        </Switch>
      </div>

      <Footer />
    </>
  );
}


export default App;
