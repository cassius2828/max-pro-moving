import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Nav } from "./components/Nav";
import { ProjectDetailsv2 } from "./components/ProjectDetails";
import Quote from "./components/Quote";

function Main() {
  return (
    <main>
      <Nav />
      <Landing />
      <Quote />
      <ProjectDetailsv2 />
      <Footer />
    </main>
  );
}

export default Main;