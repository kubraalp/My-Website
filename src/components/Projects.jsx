
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import image1 from "../img/project1.png";
import image2 from "../img/project2.png";

const projects = [
  {
    image: image1,
    link: "https://github.com/kubraalp/fsweb-s7-challenge-pizza",
    backgroundColor: "bg-customBlue",
    technologies: ["html", "css", "javascript", "react", "axios"],
  },
  {
    image: image2,
    link: "https://github.com/kubraalp/X-Mockup",
    backgroundColor: "bg-customGreen",
    technologies: ["html", "styledComponent", "javascript", "react", "axios"],
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="p-8 flex flex-col items-center dark:bg-darkBackGround2 dark:text-white">
      <h2 className="text-3xl font-bold mb-8 text-center mt-12">
        {t("projects.title")}
      </h2>
      <div className="w-full max-w-5xl mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;