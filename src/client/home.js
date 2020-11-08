import { h, hydrate } from "preact";
import Router from "preact-router";
import Search from "Components/Search";
import PedalDetail from "Components/PedalDetail";
import Favorites from "Components/Favorites";

const content = <Router>
  <Search default path="/" />
  <PedalDetail path="/pedal/:id" />
  <Favorites path="/favorites" />
</Router>;

hydrate(content, document.getElementById("app"));
