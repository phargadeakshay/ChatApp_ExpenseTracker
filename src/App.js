import React from "react";
import "./App.css";
import AboutUs from "./compo/AboutUs";
import ContactUs from "./compo/ContactUs";
import EmailUs from "./compo/EmailUs";
import Home from "./compo/Home";
import Navbar from "./compo/Navbar";
import ToList from "./NotePad/ToList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComA from "./UseContextDemo/ComA";
import FormValid from "./FormValidation/FormValid";
import Tracker from "./ExpenseTracker/Tracker";
import ChatApp from "./ExpenseTracker/ChatApp";

function App() {
  return (
    <div className="maimnbody">
      {/* <BrowserRouter>
        <Navbar className="nav" />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/contactus" element={<ContactUs />}></Route>
          <Route exact path="/emailus" element={<EmailUs />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <ToList /> */}
      {/* <ComA /> */}
      {/* <FormValid /> */}
      {/* <Tracker /> */}
      <ChatApp />
    </div>
  );
}

export default App;
