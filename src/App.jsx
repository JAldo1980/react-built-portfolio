import { useState } from "react";
import "./App.css";
import Header from "/components/Header.jsx";
import About from "/components/About.jsx";
import Work from "/components/Work.jsx";
import Footer from "/components/Footer.jsx";
import Contact from "/components/Contact.jsx";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
