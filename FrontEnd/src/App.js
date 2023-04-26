import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation"
import PageAccueil from "./acceuil/pages/pageAccueil"
import Professeurs from './professeur/pages/Professeurs';
import Cours from "./cours/pages/Cours";
import LesCours from "./cours/lesCours/pages/LesCours"
import Footer from './shared/Footer';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <PageAccueil />
          </Route>
          <Route path="/cours" exact>
            <Cours />
          </Route>
          <Route path="/cours/:coursId" exact>
            <LesCours />
          </Route>
          <Route path="/professeurs" exact>
            <Professeurs />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </main>
    </Router>
    
  );
}

export default App;
