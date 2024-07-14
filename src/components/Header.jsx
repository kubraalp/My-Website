import ProfileImg from "../img/profile.jpg";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="p-6 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="mt-2">Hi👋,</p>
          <h2 className="text-3xl font-bold mt-2">
            I'm Kübra. I'm a front-end developer. I can craft solid and scalable
            frontend products. Let's meet!
          </h2>

          <div className="flex justify-center md:justify-start mt-4">
            <a
              href="https://www.linkedin.com/in/k%C3%BCbra-alp-41636913b/"
              target="_blank"
              className="text-black hover:text-pink-700 mr-4"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              target="_blank"
              href="https://github.com/kubraalp"
              className="hover:text-pink-700 mr-4"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <p className="mt-2 text-gray-600">
            Currently developing for UX & Web design. Please feel free to ask
            your question.
          </p>
          <p className="mt-2 text-gray-600">
            Invite me to join your team ➝{" "}
            <a target="_blank" href="mailto:kubra.alp.k@gmail.com" className="text-pink-500 hover:text-pink-700 mr-4">
              kubra.alp.k@gmail.com
            </a>
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={ProfileImg}
            alt="Kübra"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
