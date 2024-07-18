import { useTranslation } from 'react-i18next';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiVisualstudiocode,
  SiFigma,
} from "react-icons/si";
const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JAVASCRIPT", icon: SiJavascript, color: "#F7DF1E" },
  { name: "REACT", icon: SiReact, color: "#61DAFB" },
  { name: "REDUX", icon: SiRedux, color: "#764ABC" },
  { name: "VS CODE", icon: SiVisualstudiocode, color: "#007ACC" },
  { name: "FIGMA", icon: SiFigma, color: "#F24E1E" },
];
const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="p-8 bg-white dark:bg-darkBackGround2">
      <h2 className="text-3xl font-bold mb-12 mt-12 text-center dark:text-white">
        {" "}
        {t('skills.title')}
      </h2>
      <div className="flex space-x-4 font-bold justify-center gap-12 mb-12 dark:text-white">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <skill.icon className="w-20 h-20" style={{ color: skill.color }} />
            <p className="mt-2">{t(skill.name)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
