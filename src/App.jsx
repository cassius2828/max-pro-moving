import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Nav } from "./components/Nav";
import { ProjectDetailsv2 } from "./components/ProjectDetails";
import Quote from "./components/Quote";

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
