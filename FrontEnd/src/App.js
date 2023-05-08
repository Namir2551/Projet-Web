import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import PageAccueil from "./acceuil/pages/pageAccueil";
import PageStagesEmployeurs from "./stagesEmployeurs/pages/pageStagesEmployeurs";
import PageStagesEtudiant from "./stagesEtudiants/pages/PageStagesEtudiants";
import ProfilsStagiaires from './profilsStagiaires/pages/PageProfilsStagiaires';
import Footer from './shared/Footer';
import Faq from './FAQ/pages/PageFAQ';
import AjouterStage from './stage/pages/ajouterStage';
import ListeStage from './stage/pages/listeStage';
import AjouterEtudiant from './etudiant/pages/ajouterEtudiant';
import ListeEtudiant from './etudiant/pages/listeEtudiant';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <PageAccueil />
          </Route>
          <Route path="/stagesEmployeurs" exact>
            <PageStagesEmployeurs />
          </Route>
          <Route path="/profilsStagiaires" exact>
            <ProfilsStagiaires />
          </Route>
          <Route path="/stagesEtudiant" exact>
            <PageStagesEtudiant />
          </Route>
          <Route path="/FAQ" exact>
            <Faq />
          </Route>
          <Route path="/ajoutStage" exact>
            <AjouterStage />
          </Route>
          <Route path="/listeStage" exact>
            <ListeStage />
          </Route>
          <Route path="/ajoutEtudiant" exact>
            <AjouterEtudiant />
          </Route>
          <Route path="/listeEtudiant" exact>
            <ListeEtudiant />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </main>
    </Router>
    
  );
}

export default App;
