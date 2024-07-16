import image1 from "../img/project1.png";
import image2 from "../img/project2.png";
const projects = [
  {
    title: "Technological Dishes",
    description:
      "Interface was created using HTML, CSS, JavaScript, React. A website designed to bring food to software developers who are hungry in front of the computer was created for the 'Technological Foods' brand, with a Homepage, Order Form and Order Received page.",
    image: image1,
    link: "https://github.com/kubraalp/fsweb-s7-challenge-pizza",
    backgroundColor: "bg-customBlue",
  },

  {
    title: "X-Mockup",
    description:
      "Created X interface using HTML, Styled Component, JavaScript, React. The user logs in with their name and username. Performs the action of tweeting.",
    image: image2,
    link: "https://github.com/kubraalp/X-Mockup",
    backgroundColor: "bg-customGreen",
  },
];

const Projects = () => {
  return (
    <section className="p-8 flex flex-col items-center ">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="  w-full max-w-4xl  mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${project.backgroundColor}`}
          >
            <div className="">
              <h3 className="text-xl font-semibold mb-2 text-center">
                {project.title}
              </h3>

              <p className="mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-2 text-blue-500"
                >
                  {" "}
                  View on GitHub
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  className="mt-2 text-blue-500"
                >
                  {" "}
                  Go to app →
                </a>
              </div>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-64 h-40"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
