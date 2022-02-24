import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/pages/Home/Home";
import Classes from "./components/pages/Classes/Classes";
import CollectiveClasses from "./components/pages/Classes/CollectiveClasses/CollectiveClasses";
import PrivateClasses from "./components/pages/Classes/PrivateClasses/PrivateClasses";
import OnlineClasses from "./components/pages/Classes/OnlineClasses/OnlineClasses";
import Retreat from "./components/pages/Retreat/Retreat";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import PrivacyPolicy from "./components/Footer/Legal/PrivacyPolicy";
import LegalNotice from "./components/Footer/Legal/LegalNotice";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/a-propos" element={<About />}></Route>
          <Route path="/retraite" element={<Retreat />}></Route>
          <Route path="/cours" element={<Classes />}></Route>
          <Route
            path="/cours-collectifs"
            element={<CollectiveClasses />}
          ></Route>
          <Route
            path="/cours-particuliers"
            element={<PrivateClasses />}
          ></Route>
          <Route path="/cours-en-ligne" element={<OnlineClasses />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/mentions-legales" element={<LegalNotice />}></Route>
          <Route
            path="/politique-de-confidentialite"
            element={<PrivacyPolicy />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
