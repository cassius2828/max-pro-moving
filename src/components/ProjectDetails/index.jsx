/* eslint-disable react/prop-types */
const ProjectDetails = () => {
  return (
    <section className="bg-[#0d0d0e] text-[#f2f2f2] py-10">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8 text-blue-500">
          Project Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuoteByProject>
            <ProjectCard />
            <ProjectCard />
          </QuoteByProject>
          <QuoteByItem>
            <ProjectCard />
            <ProjectCard />
          </QuoteByItem>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

export const ProjectCard = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4 text-blue-500">
        Quote/book BY PROJECT:
      </h2>
      <div>
        <h3 className="text-3xl font-semibold mb-2 text-blue-500">
          Residential:
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a href="#quote-form" className="hover:text-blue-500 text-2xl">
              Dorms
            </a>
          </li>
          <li>
            <a href="#quote-form" className="hover:text-blue-500 text-2xl">
              Houses
            </a>
          </li>
          <li>
            <a href="#quote-form" className="hover:text-blue-500 text-2xl">
              Apartments/Condos
            </a>
          </li>
          <li>
            <a href="#quote-form" className="hover:text-blue-500 text-2xl">
              and more!
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export const QuoteByProject = ({ children }) => {
  return (
    <div className="bg-[#1a1a1b] p-10 rounded-lg shadow-lg mx-auto">{children}</div>
  );
};

export const QuoteByItem = ({ children }) => {
  return (
    <div className="bg-[#1a1a1b] p-10 rounded-lg shadow-lg mx-auto">{children}</div>
  );
};
