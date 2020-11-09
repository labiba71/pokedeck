import React from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import Pokedex from "./Pokedex";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Pokedex {...props}/>}/>
        <Route
        exact 
        path="/:pokemonId"
        render={(props => <Pokemon {...props}/>)}
        />
      </Switch>
    </div>
  );
}

export default App;
