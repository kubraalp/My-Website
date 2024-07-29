import React from "react";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <div className={`p-6 rounded-lg shadow-lg h-[650px] ${project.backgroundColor} dark:bg-darkBackGround1`}>
      <div>
        <h3 className="font-playfair text-3xl font-semibold mb-6">
          {t(`projects.${index}.title`)}
        </h3>
        <p className="mb-8">{t(`projects.${index}.description`)}</p>
        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <div key={techIndex} className="bg-white text-black px-4 py-2 rounded-3xl shadow-md">
              {t(tech)}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center w-full text-xl font-bold -mb-6">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2">
          {t(`projects.${index}.viewOnGitHub`)}
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 font-bold">
          {t(`projects.${index}.goToApp`)}
           
          </a>
        </div>
      </div>
      <div
        className="h-full flex justify-center items-center overflow-visible -mt-20"
        style={{
          background:
            'url("https://s3-alpha-sig.figma.com/img/600f/f411/f246155782db0594c00c688cdbf27f80?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EMILT03XD4vtjJwh05X0fE6y55pdQ5P7iQMhbrDVcZuSZSyIqu-~M87e4nEjqxq-nxSob30qHmynvqHczOPKoi81nmuMO2CvlNsEc-9Arh8d3m1KnWHip-ch5j~6rWsShVqjBooO~YSgDL5XQ6QtEmsfF46JzlwfFWikF~DVmUEcN~jQRET2N1nWzrdX1jxXtvMNVk9tPL0OSJRMXzvDKqx3snv1tNKmHNsoLzO2qY08luLwuJT8vE2ceJXT~lTEAtdiV5UkhVfrFhTaEuLxuh-pqDpdDmFykSsZWhe5ieuluUWLdKjYd36byL9ezOrcvSScxtkd41qoK~FWF8W13g__") no-repeat center center',
          backgroundSize: "450px",
        }}
      >
        <img src={project.image} alt={t(`projects.${index}.title`)} className="w-458 h-263 -mt-8" />
      </div>
    </div>
  );
};

export default ProjectCard;