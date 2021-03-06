import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.scss";

// DATA
import retreat from "./data/retreat";
import classes from "./data/classes";
import onlinecourse from "./data/onlinecourse";
import dashboard from "./data/dashboard";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/Footer/Legal/PrivacyPolicy";
import LegalNotice from "./components/Footer/Legal/LegalNotice";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Retreat from "./components/pages/Retreat/Retreat";
import Classes from "./components/pages/Classes/Classes";
import CollectiveClasses from "./components/pages/Classes/CollectiveClasses/CollectiveClasses";
import PrivateClasses from "./components/pages/Classes/PrivateClasses/PrivateClasses";
import OnlineClasses from "./components/pages/Classes/OnlineClasses/OnlineClasses";
import Mantras from "./components/pages/Classes/OnlineClasses/Mantras/Mantras";
import Asanas from "./components/pages/Classes/OnlineClasses/Asanas/Asanas";
import Contact from "./components/pages/Contact/Contact";

import Login from "./components/pages/Admin/Login/Login";
import Dashboard from "./components/pages/Admin/Dashboard/Dashboard";
import UpdateCollectiveClasses from "./components/pages/Admin/UpdateCollectiveClasses/UpdateCollectiveClasses";
import UpdateRetreat from "./components/pages/Admin/UpdateRetreat/UpdateRetreat";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/a-propos" element={<About />}></Route>
          <Route path="/retraite" element={<Retreat data={retreat} />}></Route>
          <Route path="/cours" element={<Classes data={classes} />}></Route>
          <Route
            path="/cours-collectifs"
            element={<CollectiveClasses data={classes} />}
          ></Route>
          <Route
            path="/cours-particuliers"
            element={<PrivateClasses data={classes} />}
          ></Route>
          <Route
            path="/cours-en-ligne"
            element={<OnlineClasses data={classes} />}
          ></Route>
          <Route
            path="/cours-en-ligne/mantras"
            element={<Mantras data={onlinecourse} />}
          ></Route>
          <Route
            path="/cours-en-ligne/asanas"
            element={<Asanas data={onlinecourse} />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/mentions-legales" element={<LegalNotice />}></Route>
          <Route
            path="/politique-de-confidentialite"
            element={<PrivacyPolicy />}
          ></Route>
          <Route path="/admin" element={<Login />}></Route>
          <Route path="/admin/tableau-de-bord" element={<Dashboard data={dashboard} />}></Route>
          <Route
            path="/admin/cours-collectifs"
            element={<UpdateCollectiveClasses data={classes}/>}
          ></Route>
          <Route path="/admin/retraite" element={<UpdateRetreat />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
