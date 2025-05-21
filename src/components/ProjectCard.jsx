import React from "react";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`p-4 sm:p-6 rounded-lg shadow-lg ${project.backgroundColor} dark:bg-darkBackGround1 flex flex-col h-full`}
    >
      <div className="mb-4">
        <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
          {t(`projects.${index}.title`)}
        </h3>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base">
          {t(`projects.${index}.description`)}
        </p>
        <div className="mb-4 sm:mb-6 flex flex-wrap gap-1 sm:gap-2">
          {project.technologies.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 rounded-3xl shadow-md text-xs sm:text-sm"
            >
              {t(tech)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full text-base sm:text-xl font-bold gap-2 sm:gap-0">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-customPink transition-colors text-sm sm:text-base"
          >
            {t(`projects.${index}.viewOnGitHub`)}
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-customPink transition-colors text-sm sm:text-base"
          >
            {t(`projects.${index}.goToApp`)}
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center items-center bg-white/5 rounded-lg p-3 sm:p-4 overflow-hidden">
        <img
          src={project.image}
          alt={t(`projects.${index}.title`)}
          className="w-full max-w-[300px] sm:max-w-[400px] h-auto object-contain rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
