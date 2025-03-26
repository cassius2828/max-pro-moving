import { Nav } from "./components/Nav";
import Landing from "./components/Landing";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import ProjectDetails, { ProjectDetailsv2 } from "./components/ProjectDetails";

function App() {
  return (
    <>
      <Nav />
      <Landing />

      <Quote />
      {/* <ProjectDetails /> */}
      <ProjectDetailsv2 />
      <Footer />
    </>
  );
}

export default App;
