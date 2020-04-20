import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "../components/dashboard/DashBoard";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        {/* <Route path="/books" component={DashBoard} /> */}
        {/* <Route path="/recipe/:_key" component={ManageRecipes} /> */}
        {/* <Route path="/recipe" component={ManageRecipes} /> */}
        {/* <Route path="/recipeDetails/:_key" component={RecipeDetails} /> */}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
