import React from "react";
import { ReactDOM } from "react";
import "./style/options.scss";
import "./style/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header";
import Skills from "./main";
import Portfolio from "./portfolio";
import Footer from "./footer";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutBig />} />
        <Route path="portfolio" element={<PortfolioBig />} />
        <Route path="contact" element={<ContactBig />} />
      </Routes>
      <Footer />
    </div>
  );
}

const Home = () => {
  return (
    <>
      <Header />
      <Skills />
      <Portfolio />
    </>
  );
};
const ContactBig = () => {
  return (
    <>
      <Header />
      <Contact />
    </>
  );
};
const PortfolioBig = () => {
  return (
    <>
      <Header />
      <Portfolio />
    </>
  );
};
const AboutBig = () => {
  return (
    <>
      <Header />
      <About />
    </>
  );
};
export default App;
