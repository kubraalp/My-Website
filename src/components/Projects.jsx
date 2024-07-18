import image1 from "../img/project1.png";
import image2 from "../img/project2.png";
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: "project1",
    image: image1,
    link: "https://github.com/kubraalp/fsweb-s7-challenge-pizza",
    backgroundColor: "bg-customBlue",
    technologies: ["html", "css", "javascript", "react", "axios"],
    darkBackgroundColor: "bg-project1Back",
  },

  {
    id: "project2",
    image: image2,
    link: "https://github.com/kubraalp/X-Mockup",
    backgroundColor: "bg-customGreen",
    technologies: ["html", "styled component", "javascript", "react", "axios"],
    darkBackgroundColor: "bg-project2Back",
  },
];

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="p-8 flex flex-col items-center dark:bg-darkBackGround2 dark:text-white ">
      <h2 className="text-3xl font-bold mb-8 text-center mt-12">{t("projects.title")}</h2>
      <div className="w-full max-w-5xl mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg h-[650px] ${project.backgroundColor} dark:bg-darkBackGround1`}
          >
            <div>
              <h3 className="font-playfair text-3xl font-semibold mb-6">
                {t(`projects.${project.id}.title`)}
              </h3>
              <p className="mb-8">{t(`projects.${project.id}.description`)}</p>
              <div className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-white text-black px-4 py-2 rounded-3xl shadow-md"
                  >
                    {t(tech)}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center w-full text-xl font-bold -mb-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  {t('projects.project1.viewOnGitHub')}
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 font-bold"
                >
                  {t('projects.project1.goToApp')}
                </a>
              </div>
            </div>
            <div
              className="h-full flex justify-center items-center overflow-visible -mt-20"
              style={{
                background:
                  'url("https://s3-alpha-sig.figma.com/img/600f/f411/f246155782db0594c00c688cdbf27f80?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VRonMx6Xiv5VYALsZHrXsU-AvNTvj1q5gBb4-j8NVfZTCHx7UgZhUL1th0V44h2GS3VwmAZbRp6~vQ-AquNGy2BcoObgRbzj-jvKgu36bcDLVxQIOnGqOdTWSkOiUZT4GzsLxK~yYzxhNa5QR1KGaFsSAzHPKq2QzD9yoN1p5m2-1Ck55AFZJ4dxnigSEudgi-Y9Uc799HVVuh~nhVdeNHcoYVcV06Sj6GEoZXxQnZy-OCjY1iuNwxRTy9mq83B7YBRXx-KWX8y0ySuJwri5V3yL-Ma-HlKy2-pe4SVJ~9YI~-FVToviwf15mqlR5d-QELujYMoffYzCwBzqjcNGuQ__") no-repeat center center',
                backgroundSize: "450px",
              }}
            >
              <img
                src={project.image}
                alt={t(`projects.${project.id}.title`)}
                className="w-458 h-263 -mt-8"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;