import { ImTextColor } from "react-icons/im";
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
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];
const Skills = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <div className="flex space-x-4 justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <skill.icon className="w-16 h-16" style={{ color: skill.color }} />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
