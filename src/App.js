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
          <Route path="/github-readme-generator-profile/" component={Content} exact />
          <Route path="/github-readme-generator-profile/about" component={About} exact />
        </Switch>
        {/* <Content/> */}
      </div>

      <Footer />
    </>
  );
}


export default App;
