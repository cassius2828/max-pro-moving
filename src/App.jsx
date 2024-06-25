import { useState } from "react";
import Nav, { Nav2 } from "./components/Nav";
import Landing from "./components/Landing";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function App() {

  return (
    <>
      {/* <Nav /> */}
      <Nav2 />
      <Landing />
      <Quote />
      <ProjectDetails/>
      <Footer/>
    </>
  );
}

export default App;
