import React, {useState} from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop"

import "./MainNavigation.css";

function MainNavigation(props) {

  const [tiroirOuvert, setTiroirOuvert] = useState(false);

  const ouvrirTiroir = () => {
    setTiroirOuvert(true);
  };

  const fermerTiroir = () => {
    setTiroirOuvert(false);
  };

  return (
    <React.Fragment>
      {tiroirOuvert && <Backdrop onClick={fermerTiroir} />}
        <SideDrawer show={tiroirOuvert} onClick={fermerTiroir}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={ouvrirTiroir}>
          <span />
          <span />
          <span />
        </button>
        
          <Link to="/"> 
          <img src="https://www.cmontmorency.qc.ca/wp-content/uploads/2018/03/Logomo_1400.png" 
                alt="Collège MontMorency">
            </img>
          </Link>
        
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
